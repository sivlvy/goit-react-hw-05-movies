import css from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.header_container}>
				<nav className={css.navigation_list}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							`${css.header_link} ${isActive ? css.active : ''} `
						}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`${css.header_link} ${isActive ? css.active : ''} `
						}
						to="/movies"
					>
						Movies
					</NavLink>
				</nav>
			</div>
		</header>
	);
};
export default Header;
