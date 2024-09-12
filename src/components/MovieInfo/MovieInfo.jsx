import css from './MovieInfo.module.css';

export default function MovieInfo({ movie }) {
  const userScore = (movie.vote_average * 10).toFixed(2);
  const genres = movie.genres?.map(genre => genre.name).join(', ') ?? "";

    return (
        <div className={css.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className={css.image}
        />
        <div className={css.infoContainer}>
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.text}>User Score: {userScore}%</p>
          <p className={css.text}>Overview:</p>
          <p>{movie.overview}</p>
          <p className={css.text}>Genres:</p>
        <p>{genres}</p>
          
          </div>
      </div>
    )
}