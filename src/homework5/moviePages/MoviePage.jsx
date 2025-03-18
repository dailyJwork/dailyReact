import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getMovieById } from "../moviesAPI";

export default function MovieElement() {
  const [foundMovie, setFoundMovie] = useState(null);
  const { movie } = useParams();

  useEffect(() => {
    const fetchedMovie = async (movie) => {
      try {
        const responceMovie = await getMovieById(movie);
        setFoundMovie(responceMovie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedMovie(movie);
  }, []);

  return (
    <>
      <h2>{foundMovie && foundMovie.original_title}</h2>
        <p>Popularity: {foundMovie && Math.round(foundMovie.popularity)}</p>
        <p>Budget: {foundMovie && foundMovie.budget}$</p>
        <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
        <Outlet/>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
} 
