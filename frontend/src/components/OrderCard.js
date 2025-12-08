import React from "react";

export default function OrderCard({ order }) {
  return (
    <div className="card">
      <p><b>Menu ID:</b> {order.menu_id}</p>
      <p><b>Quantity:</b> {order.quantity}</p>
      <p><b>Time:</b> {order.order_time}</p>
    </div>
  );
}
