
import { orders } from "../data.js";

export function getOrder(orderId) {
  return orders.find(o => o.id == orderId) || null;
}