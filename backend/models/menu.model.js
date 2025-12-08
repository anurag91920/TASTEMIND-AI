import { db } from "../config/db.js";

export const getAllMenu = async () => {
  const [rows] = await db.query("SELECT * FROM menu");
  return rows;
};

export const getMenuById = async (id) => {
  const [rows] = await db.query("SELECT * FROM menu WHERE id=?", [id]);
  return rows[0];
};

export const createMenuItem = async (name, category, price, description) => {
  const [result] = await db.query(
    "INSERT INTO menu (name, category, price, description) VALUES (?,?,?,?)",
    [name, category, price, description]
  );
  return result.insertId;
};
