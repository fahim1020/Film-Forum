import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

export const ReviewForm = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  // Load reviews from local storage
  useEffect(() => {
    const storedReviews =
      JSON.parse(localStorage.getItem(`reviews-${movieId}`)) || [];
    setReviews(storedReviews);
  }, [movieId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      const newReviews = [...reviews, reviewText];
      setReviews(newReviews);
      setReviewText("");

      // Save the updated reviews
      localStorage.setItem(`reviews-${movieId}`, JSON.stringify(newReviews));
    }
  };

  return (
    <div className="review-section bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Write a Review
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-400 transition"
          rows="4"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out"
        >
          <FaPaperPlane />
          <span>Submit Review</span>
        </button>
      </form>
      <div className="reviews mt-6 space-y-3">
        <h4 className="text-xl font-medium text-gray-700">Recent Reviews</h4>
        {reviews.length === 0 ? (
          <p className="text-gray-500">
            No reviews yet. Be the first to share your thoughts!
          </p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 rounded-lg border border-gray-200 shadow-sm"
            >
              <p className="text-gray-800">{review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
