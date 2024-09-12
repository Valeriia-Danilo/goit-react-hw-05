import { getMoviesReviews } from "../../services/movie-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";
import Loader from '../Loader/Loader';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
    const { movieId } = useParams();
    
const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const responseReviews = await getMoviesReviews(movieId);

      if (responseReviews.length === 0) {
        setError(true); 
        
        } else {
        setReviews(responseReviews);
        setError(false); 
        }
      }
      
      catch { setError(true); }

      finally {
      setLoading(false);
      }
      
    }

    fetchData();
  }, [movieId]);
    
  return (
      <>
      <Reviews reviews={reviews} />
      {loading && <Loader />}
      {error && <div className={css.errorContainer}>There are no reviews!</div>}
       </> 
    )
        
    }
