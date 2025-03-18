import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "./moviesAPI";

export default function MovieCast() {
  const [reviews, setReviews] = useState([]);
  const { movie } = useParams();

  useEffect(() => {
    const fetchReview = async (movie) => {
      try {
        const responceCast = await fetchMovieReviews(movie);
        setReviews(responceCast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview(movie);
  }, []);

  return (
    <div>
      (
        {reviews.length > 0 ? reviews.map((el) => {
            <>Yes
            <p>{el.content}</p>
            </> 
        }) : <>No results</>}
      )
    </div>
  );
}