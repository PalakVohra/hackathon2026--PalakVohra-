
export function issueRefund(orderId) {
  // simulate refund
  return {
    success: true,
    orderId,
    processedAt: new Date().toISOString()
  };
}