import { db } from "../config/db.js";

export const createOrder = async (user_id, menu_id, quantity) => {
  const [result] = await db.query(
    "INSERT INTO orders (user_id, menu_id, quantity) VALUES (?,?,?)",
    [user_id, menu_id, quantity]
  );
  return result.insertId;
};

export const getOrdersByUser = async (user_id) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE user_id=?", [user_id]);
  return rows;
};
