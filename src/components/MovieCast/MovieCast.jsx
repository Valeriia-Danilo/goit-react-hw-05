import { getMoviesCast } from "../../services/movie-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardCast from "../CastCard/CastCard";
import Loader from "../Loader/Loader";
import css from './MovieCast.module.css';

export default function MovieCast() {
    const { movieId } = useParams();
    
const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const responseCast = await getMoviesCast(movieId);
        if (responseCast.length === 0) {
          setError(true);
        }
        else {
          setCast(responseCast);
          setError(false);
        }
      
      }
      catch {
        setError(true);
      }
      finally {
        setLoading(false);
      }
        
    }

    fetchData();
  }, [movieId]);
    
  return (
    <>
    { loading && <Loader />}
      <CardCast cast={cast} />
      {error && <div className={css.errorContainer}>Failed to load cast list</div>}
    </>
    )
        
    }
