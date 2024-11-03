import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api";
import ReviewForm from "./ReviewForm";
import { Loading } from "./Loading";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    loadMovieDetails();
  }, [movieId]);

  if (!movie) return <Loading />;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <ReviewForm movieId={movieId} />
    </div>
  );
};
