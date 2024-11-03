import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "../utils/api";
import ReviewForm from "../components/ReviewForm";

export const Movie = ({ match }) => {
  const { id } = match.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <ReviewForm movieId={id} />
    </div>
  );
};


