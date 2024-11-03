import axios from "axios";

const API_KEY = "f3b0adbdc8f359b020d2da1651f834b1";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
};

export const fetchSearchResults = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query,
    },
  });
  return response.data.results;
};
