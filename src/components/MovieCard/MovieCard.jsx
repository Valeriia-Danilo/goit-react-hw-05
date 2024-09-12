import { Link, useLocation } from "react-router-dom";
import css from './MovieCard.module.css';


export default function MovieCard({ movie }) {
    const releaseYear = movie.release_date.split("-")[0];
    const location = useLocation();
    const placeholderImage = 'https://img.freepik.com/premium-vector/vector-film-strip-reel-movie-cinema-3d-filmstrip-tape-background_41737-585.jpg';

    return (
        <div className={css.cardContainer}>
            <div className={css.imageContainer}>
            <img
            className={css.image}  
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage} 
          alt={movie.original_title}
                />
            </div>
            <div className={css.infoContainer}>
             <Link to={`/movies/${movie.id}`} className={css.movieLink} state={location}>{movie.title}</Link>
                <div>{releaseYear}</div>
            </div>
        </div>
    )
      
}