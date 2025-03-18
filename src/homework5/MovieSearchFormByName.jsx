import { getMovies } from "./moviesAPI";
import { useState } from "react";

export default function MovieSearchFormByName() {
  const [startMovies, setStartMovies] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = event.target.queryMovie.value;
    const responce = await getMovies(value);
    setStartMovies(responce.results);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="queryMovie" />
        <button type="submit">Submit</button>
        {startMovies.map(({ id, title, release_date, popularity }) => {
          return (
            <li key={id}>
              <h2>Title: {title}</h2>
              <p>Relise data: {release_date}</p>
              <p>Rating: {Math.round(popularity)}</p>
            </li>
          );
        })}
      </form>
    </div>
  );
}
