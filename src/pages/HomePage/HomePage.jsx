import MovieList from 'components/MovieList/MovieList';
import Error from 'components/Error/Error';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import { getPopularMovies } from 'services/movies-api';
import STATUS from 'services/config';

const HomePage = () => {
	const [status, setStatus] = useState(STATUS.IDLE);
	// const { popularMovies, setPopularMovies } = useCustomContext();
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		popularMovies && setStatus(STATUS.RESOLVED);
	}, [popularMovies]);

	useEffect(() => {
		const fetchMovies = async () => {
			setStatus(STATUS.PENDING);

			try {
				const movies = await getPopularMovies();
				setPopularMovies(movies);
				setStatus(STATUS.RESOLVED);
			} catch (error) {
				Notify.failure('Failed to load list of popular movies...');
				setStatus(STATUS.REJECTED);
			}
		};
		if (!popularMovies.length) {
			fetchMovies();
		}
	}, [popularMovies.length, setPopularMovies]);

	return (
		<>
			{status === STATUS.RESOLVED && (
				<MovieList movies={popularMovies} page="home" />
			)}
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.REJECTED && (
				<Error message="Load failed trend movies" />
			)}
		</>
	);
};
export default HomePage;
