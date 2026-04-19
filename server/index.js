
import fs from "fs";
import { runAgent } from "./agent.js";

// Read tickets
const tickets = JSON.parse(
  fs.readFileSync(new URL("./tickets.json", import.meta.url))
);


// Process each ticket
const results = await Promise.all(
  tickets.map(ticket => runAgent(ticket))
);

// Save audit logs
fs.writeFileSync(
  new URL("./audit_log.json", import.meta.url),
  JSON.stringify(results, null, 2)
);

console.log("✅ All tickets processed!");
console.log(results);