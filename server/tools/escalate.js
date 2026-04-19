
export function escalate(ticket, logs, confidence) {
  const summary = `
Escalation Summary:
- Ticket: ${ticket.message}
- Reason: Unable to resolve automatically
- Confidence: ${confidence}
- Steps Taken:
${logs.map(l => "  → " + l).join("\n")}
  `;

  return {
    ticket_id: ticket.ticket_id,
    status: "ESCALATED",
    message: summary,
    logs,
    confidence
  };
}