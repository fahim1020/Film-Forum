import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg mb-2"
      />
      <h3 className="text-center text-black mb-2 font-bold">{movie.title}</h3>
    </Link>
    <div className="flex items-center gap-1 mt-2">
      <span className="text-yellow-500 text-lg">⭐</span>
      <p className="text-gray-600 font-medium text-lg bg-yellow-100 px-2 py-1 rounded-lg">
        {movie.vote_average.toFixed(1)}
      </p>
    </div>
    <Link
      to={`/movie/${movie.id}/reviews`}
      className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      Review
    </Link>
  </div>
);
