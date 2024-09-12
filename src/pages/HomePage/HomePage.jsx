import { useState, useEffect } from 'react'
import { getTrandingMovies } from '../../services/movie-api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

export default function HomePage() {
    const [movies, setMovies] = useState([]);

useEffect(() => {
    async function fetchData() {
        const data = await getTrandingMovies();
        setMovies(data);
    }
    fetchData();
}, []);
    
    return (
        <>
        <h2 className={css.title}>Tranding today</h2>
      {movies.length > 0 && <MovieList movies={movies} />}
        </>
    
    )
}