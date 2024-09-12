import css from './Reviews.module.css';

export default function Reviews({ reviews }) {
return ( <ul className={css.container}>
      {reviews.map((review) => (
        <li key={review.id} className={css.cardReview}>
              <h3 className={css.title}>Authors name: {review.author_details.username}</h3>
              <p>{review.content}</p>
        </li>
      ))}
    </ul>)
}