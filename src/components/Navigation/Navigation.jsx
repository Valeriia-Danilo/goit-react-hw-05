import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from "clsx";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
    return (
        <header >
            <ul className={css.container}>
                <li>
                    <NavLink to="/" className={getNavLinkClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={getNavLinkClass}>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}