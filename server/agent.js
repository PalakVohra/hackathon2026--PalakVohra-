import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });

import { getOrder } from "./tools/order.js";
import { issueRefund } from "./tools/refund.js";
import { getCustomer } from "./tools/customer.js";
import { escalate } from "./tools/escalate.js";
import { reply } from "./tools/reply.js";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function detectIntentAI(message, logs) {
  logs.push("Calling OpenAI for intent detection...");

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You are an AI support agent.
Classify the intent into one of:
refund, status, cancel, issue, unknown.

Respond ONLY with one word.
`
      },
      {
        role: "user",
        content: message
      }
    ]
  });

  const intent = response.choices[0].message.content.trim().toLowerCase();

  logs.push(`AI detected intent: ${intent}`);

  return intent;
}
export async function runAgent(ticket) {
  let logs = [];
  let confidence = 0.5;

  logs.push("Start processing");

  

  // Extract order ID
  const match = ticket.message.match(/\d+/);
  const orderId = match ? parseInt(match[0]) : null;
  logs.push(`Extracted order id: ${orderId}`);

  


let intent;

// FAST LOCAL LOGIC (primary)
const msg = ticket.message.toLowerCase();

if (msg.includes("refund")) intent = "refund";
else if (msg.includes("order")) intent = "status";
else if (msg.includes("cancel")) intent = "cancel";
else intent = "unknown";

logs.push(`Local intent: ${intent}`);

// AI runs in background (does NOT block response)
detectIntentAI(ticket.message, logs)
  .then(aiIntent => {
    logs.push(`AI suggestion: ${aiIntent}`);
  })
  .catch(() => {
    logs.push("AI failed (background)");
  });

  // Tool: getOrder
 const order = await safeCall(getOrder, orderId, logs, "getOrder");

  if (!order) {
    logs.push("Order not found → escalate");
    return escalate(ticket, logs, 0.3);
  }

  logs.push(`Order found: ${order.id}`);

  const customer = getCustomer(order.userId);

  if (!customer) {
    logs.push("Customer not found → escalate");
    return escalate(ticket, logs, 0.4);
  }

  logs.push(`Customer found: ${customer.name}`);

  // Decision making
  if (intent === "cancel") {
  logs.push("Processing cancellation request");

  return reply(ticket, `Order ${order.id} has been cancelled`, logs, 0.85);
}

if (intent === "issue") {
  logs.push("Detected product issue → escalate");

  return escalate(ticket, logs, 0.6);
}

  if (intent === "refund") {
    logs.push("Checking refund eligibility");

    if (!order.refundable) {
      logs.push("Not eligible → escalate");
      return escalate(ticket, logs, 0.5);
    }

    const refund = issueRefund(order.id);
    logs.push(`Refund success at ${refund.processedAt}`);

    confidence = 0.9;

    return reply(
      ticket,
      `Refund processed for order ${order.id}`,
      logs,
      confidence
    );
  }

  if (intent === "status") {
    logs.push("Returning order status");

    confidence = 0.85;

    return reply(
      ticket,
      `Order ${order.id} is ${order.status}`,
      logs,
      confidence
    );
  }

  logs.push("Unknown intent → escalate");
  return escalate(ticket, logs, 0.4);


  async function safeCall(fn, arg, logs, name) {
  try {
    logs.push(`Calling ${name}`);
    return await fn(arg);
  } catch (e) {
    logs.push(`${name} failed → retrying`);
    try {
      return await fn(arg);
    } catch {
      logs.push(`${name} failed twice → fallback`);
      return null;
    }
  }
}
}