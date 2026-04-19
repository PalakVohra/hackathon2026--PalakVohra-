
export function reply(ticket, message, logs, confidence) {
  logs.push("Final Decision: RESOLVED");

  return {
    ticket_id: ticket.ticket_id,
    status: "RESOLVED",
    message,
    logs,
    confidence
  };
}