import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "./moviesAPI";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movie } = useParams();

  useEffect(() => {
    const fetchCast = async (movie) => {
      try {
        const responceCast = await fetchMovieCast(movie);
        setCast(responceCast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast(movie);
  }, []);

  return (
    <div>
      {cast.map((el) => {
        return (
          <li key={el.id}>
            <h4>{el.name}</h4>
            <p>{el.character}</p>
          </li>
        );
      })}
    </div>
  );
}
