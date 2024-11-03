import React, { useEffect, useState } from "react";
import { fetchMovies } from "../utils/api";

export const Carousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
  }, []);

  if (!movies.length) return <p>Loading...</p>;

  return (
    <div className="carousel w-full h-screen">
      {movies.slice(0, 5).map((movie, index) => (
        <div
          key={movie.id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-screen flex items-center justify-center"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="relative z-10 bg-black bg-opacity-60 p-6 rounded-lg text-white text-center w-1/2 mx-auto">
            <h3 className="text-2xl font-bold">{movie.title}</h3>
            <p className="text-md my-2">Rating: {movie.vote_average}</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a
              href={`#slide${index === 0 ? movies.length : index}`}
              className="btn btn-circle bg-white text-black"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > movies.length ? 1 : index + 2}`}
              className="btn btn-circle bg-white text-black"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
