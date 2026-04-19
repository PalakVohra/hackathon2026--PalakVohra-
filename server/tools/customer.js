
import { customers } from "../data.js";

export function getCustomer(userId) {
  return customers.find(c => c.id == userId) || null;
}