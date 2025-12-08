import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="card">
      <p><b>Menu ID:</b> {review.menu_id}</p>
      <p><b>Rating:</b> {review.rating}</p>
      <p>{review.review_text}</p>
      <p><b>Sentiment Score:</b> {review.sentiment_score}</p>
    </div>
  );
}
