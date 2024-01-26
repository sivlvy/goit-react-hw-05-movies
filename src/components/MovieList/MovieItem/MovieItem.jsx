import css from './MovieItem.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieItem = ({ title, id, img }) => {
	const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

	const { pathname } = useLocation();

	return (
		<li className={css.movie_item}>
			<Link
				className={css.movie_link}
				to={`/movies/${id}`}
				state={{ from: pathname }}
			>
				<img
					className={css.movie_img}
					src={BASE_IMG + img}
					alt={title}
					loading="lazy"
				/>
				<p className={css.movie_title}>{title}</p>
			</Link>
		</li>
	);
};

export default MovieItem;
