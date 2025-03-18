import MovieLayout from "./MovieLayout";
import { Route, Routes } from "react-router-dom";
import MovieHomepage from "./moviePages/MovieHomepage";
import MoviesPage from "./moviePages/MoviesPage";
import MovieElement from "./moviePages/MoviePage";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";

export const MoviesTaskApp = () => {
  return (
    <div>
      <h2>Task movies start</h2>
      <Routes>
        <Route path="/" element={<MovieLayout />}>
          <Route index element={<MovieHomepage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movie" element={<MovieElement />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
