import { db } from "../config/db.js";

export const placeOrder = async (req, res) => {
  const { menu_id, quantity } = req.body;
  const user_id = req.user.id;

  await db.query(
    "INSERT INTO orders (user_id, menu_id, quantity) VALUES (?,?,?)",
    [user_id, menu_id, quantity]
  );

  res.json({ message: "Order placed" });
};

export const getOrders = async (req, res) => {
  const user_id = req.user.id;
  const [rows] = await db.query("SELECT * FROM orders WHERE user_id=?", [user_id]);
  res.json(rows);
};
