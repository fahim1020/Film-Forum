// ReviewPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../components/ReviewForm";

export const ReviewPage = () => {
  const { movieId } = useParams();

  return (
    <div className="review-page">
      <h2 className="text-2xl font-bold text-center mb-4">
        Reviews for Movie {movieId}
      </h2>
      <ReviewForm movieId={movieId} />
    </div>
  );
};
