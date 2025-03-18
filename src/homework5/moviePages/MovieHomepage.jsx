import { useEffect, useState } from "react";
import { getTrendingMovies } from "../moviesAPI";
import { Link } from "react-router-dom";
import MovieElement from "./MoviePage";

export default function MovieHomepage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const fetchedTrendingMovies = await getTrendingMovies();
        setTrendingMovies(fetchedTrendingMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h3>Trending Movies</h3>
      {trendingMovies.map(({ id, title, popularity, vote_average }) => {
        return (
          <li key={id}>
            <h4>{title}</h4>
            <p>popularity: {Math.round(popularity)}</p>
            <p>raiting: {Math.round(vote_average)}</p>
            <Link to={`movies/${id}`} element={<MovieElement/>}><button>See info</button></Link>
          </li>
        );
      })}
    </div>
  );
}
