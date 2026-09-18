function createOrder(items) {
  return {
    items,
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
    status: 'pending',
  };
}

function applyDiscount(order, percent) {
  const discounted = order.total * (1 - percent / 100);
  return { ...order, total: discounted };
}

function cancelOrder(order) {
  return { ...order, status: 'cancelled', total: 0 };
}

function calculateLoyaltyPoints(orderTotal) {
  const points = orderTotal * POINTS_PER_DOLLAR;
  return Math.round(points);   // round instead of truncate
}

module.exports = { createOrder, applyDiscount, cancelOrder, calculateLoyaltyPoints };
