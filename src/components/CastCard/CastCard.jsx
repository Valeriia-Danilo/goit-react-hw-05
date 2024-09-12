import css from './CastCard.module.css';

export default function CardCast({ cast }) {
    const placeholderImage = 'https://www.shutterstock.com/image-vector/avatar-photo-default-user-icon-600nw-2345549599.jpg';


return ( <ul className={css.container}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.card}>
          <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : placeholderImage} alt={actor.name} className={css.image}/>
              <p className={css.name }>{actor.name}</p>
        </li>
      ))}
    </ul>)
}