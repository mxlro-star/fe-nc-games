import ReviewCard from "./ReviewCard";

import api from "../api";
import { useState, useEffect } from "react";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getReviews.then(({ data: { reviews } }) => {
      setReviews(reviews);
    });
  });
  return (
    <div>
      <span>Query</span>
      <div className="review-list">
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </div>
    </div>
  );
}
