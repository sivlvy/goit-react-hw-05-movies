import css from './MovieList.module.css';

import MovieItem from './MovieItem/MovieItem';

const MovieList = ({ movies, page }) => {
	const isMovies = Boolean(movies.length);

	const title =
		page === 'home'
			? 'This is popular movie list in the day:'
			: 'This is movie list according to your search:';

	return (
		<div className={css.container}>
			{isMovies && <h1 className={css.movite_title}>{title}</h1>}
			<ul className={css.movie_list}>
				{movies.map(({ title, id, poster_path }) => {
					return <MovieItem key={id} title={title} id={id} img={poster_path} />;
				})}
			</ul>
		</div>
	);
};

export default MovieList;
