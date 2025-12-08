import { db } from "../config/db.js";

export const createReview = async (user_id, menu_id, review_text, rating, sentiment_score) => {
  const [result] = await db.query(
    "INSERT INTO reviews (user_id, menu_id, review_text, rating, sentiment_score) VALUES (?,?,?,?,?)",
    [user_id, menu_id, review_text, rating, sentiment_score]
  );
  return result.insertId;
};

export const getReviewsByMenu = async (menu_id) => {
  const [rows] = await db.query("SELECT * FROM reviews WHERE menu_id=?", [menu_id]);
  return rows;
};
