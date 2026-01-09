import React from "react";

export default function OrderCard({ order }) {
  return (
    <div className="card">
      <p><b>Order ID:</b> {order.id}</p>
      <p><b>Item:</b> {order.item_name}</p>
      <p><b>Quantity:</b> {order.quantity}</p>
      <p><b>Price:</b> ₹{order.price}</p>
      <p><b>Status:</b> {order.status}</p>
      <p><b>Time:</b> {new Date(order.created_at).toLocaleString()}</p>
    </div>
  );
}
