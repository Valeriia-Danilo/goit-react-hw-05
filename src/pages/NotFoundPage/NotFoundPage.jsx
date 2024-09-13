import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <p>404</p>
            <p>NOT FOUND</p>
            <Link to="/" className={css.home}>Home</Link>

        </div>
    )
}