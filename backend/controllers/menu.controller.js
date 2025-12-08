import { db } from "../config/db.js";

export const getMenu = async (req, res) => {
  const [menu] = await db.query("SELECT * FROM menu");
  res.json(menu);
};

export const addMenuItem = async (req, res) => {
  const { name, category, price, description } = req.body;
  await db.query(
    "INSERT INTO menu (name, category, price, description) VALUES (?,?,?,?)",
    [name, category, price, description]
  );
  res.json({ message: "Menu item added" });
};
