import MovieCard from "../MovieCard/MovieCard";
import css from './MovieList.module.css'


export default function MovieList({ movies }) {
    return (
        <ul className={css.container}>
            {movies.map((movie) => (
                <li key={movie.id} className={css.card}>
                    <MovieCard movie={movie} />
                </li>
            ))}
        </ul>
    );
}