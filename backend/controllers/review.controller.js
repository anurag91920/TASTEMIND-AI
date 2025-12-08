import { db } from "../config/db.js";
import { sentimentScore } from "../ml/sentiment.js";

export const addReview = async (req, res) => {
  const { menu_id, review_text, rating } = req.body;
  const user_id = req.user.id;

  const score = await sentimentScore(review_text);

  await db.query(
    "INSERT INTO reviews (user_id, menu_id, review_text, rating, sentiment_score) VALUES (?,?,?,?,?)",
    [user_id, menu_id, review_text, rating, score]
  );

  res.json({ message: "Review added", score });
};
