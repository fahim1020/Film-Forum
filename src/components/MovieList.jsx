import React, { useEffect, useState } from "react";
import { fetchMovies, fetchSearchResults } from "../utils/api";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
      setLoading(true);
      const data = await fetchSearchResults(query);
      setMovies(data);
      setLoading(false);
    } else {
      // If query is empty, load popular movies
      const data = await fetchMovies();
      setMovies(data);
    }
  };

  return (
    <>
      <h1 className="text-red-500 text-center text-xl md:text-3xl mb-2 font-bold">
        {query ? `Results for "${query}"` : "Popular Movies"}
      </h1>

      <div className="flex justify-center mb-4">
        <form onSubmit={handleSearch} className="w-full max-w-md flex">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-l-md outline-none"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition"
          >
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="flex justify-center">
          <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
              <p className="text-center col-span-full">No movies found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
