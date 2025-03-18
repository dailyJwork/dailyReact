import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDNkMzdmZTRmN2Q4NGFhZDJlOGQ2MzU1MzBjZmE5MyIsIm5iZiI6MTc0MjE0OTc4NS4zNzUsInN1YiI6IjY3ZDcxODk5NTk2M2ViZmZkZTdjMDhkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B8hNO_MsX-7N6log1b_ZsqgoJ02uoDz7shFgSqTuxwA";

export const getMovies = async (query) => {
  const responce = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return responce.data;
};

export const getTrendingMovies = async () => {
  const responce = await axios.get("trending/movie/day?language=en-US");
  return responce.data.results;
};

export const getMovieById = async(movieId) => {
  const responce = await axios.get(`movie/${movieId}?language=en-US`);
  return responce.data;
}

export const fetchMovieCast = async(movieId) => {
  const responce = await axios.get(`/movie/${movieId}/credits`);
  return responce.data.cast;
}

export const fetchMovieReviews = async(movieId) => {
  const responce = await axios.get(`/movie/${movieId}/reviews`);
  return responce.data.results;
}