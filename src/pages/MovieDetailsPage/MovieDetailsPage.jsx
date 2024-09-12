import { useParams, Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getMoviesById } from "../../services/movie-api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from './MovieDetailsPage.module.css';
import clsx from "clsx";
import Loader from "../../components/Loader/Loader";


export default function MovieDetailsPage() {

    const { movieId } = useParams();
  const location = useLocation();
  const backRef = useRef(location.state ?? "/movies");
    
    const [movie, setMovies] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {

    async function fetchData() {
          try {
          setLoading(true);
          const data = await getMoviesById(movieId);
     if (data.length === 0) {
          setError(true);
          setMovies([]);  
        } else {
          setMovies(data);
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

const NavLinkInfo = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

    return (
      <div>
        <div className={css.backContainer}>
          <Link to={backRef.current} className={css.back}>Back</Link>
        </div>
        {loading && <Loader />}
        {error && <div className={css.errorContainer}>There are no Details. Try again!</div>}
        <div className={css.container}>
            {movie && <MovieInfo movie={movie} />}
        <div className={css.infoContainer}>
            <p className={css.information}>Additional information</p>
            <ul className={css.linkContainer}>
        <li>
          <NavLink to="cast" className={NavLinkInfo}>Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={NavLinkInfo}>Reviews</NavLink>
        </li>
          </ul>
          </div>
          </div>
            <Outlet/>
    </div>
        
      
    
  );
}