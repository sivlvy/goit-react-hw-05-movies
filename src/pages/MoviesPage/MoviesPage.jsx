import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getCurrentMovies } from 'services/movies-api';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import STATUS from 'services/config';

const MoviesPage = () => {
	const [status, setStatus] = useState([]);
	const [currentMovies, setCurrentMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [value, setValue] = useState([]);

	useEffect(() => {
		const queryValue = searchParams.get('query') ?? '';

		value ? setSearchParams({ query: value }) : setValue(queryValue);
	}, [searchParams, setValue, value, setSearchParams]);

	useEffect(() => {
		if (!value) {
			return;
		}

		const fetchMovies = async () => {
			const movies = await getCurrentMovies(value);
			setCurrentMovies(movies);
			setStatus(STATUS.PENDING);
			try {
				setStatus(STATUS.RESOLVED);
			} catch (error) {
				setStatus(STATUS.REJECTED);
				Notify.failure('Oops something went wrong! Try reloading the page');
			}
		};
		fetchMovies();
	}, [value]);

	return (
		<>
			{(status === STATUS.RESOLVED || status === STATUS.IDLE) && <SearchBar />}
			{status === STATUS.RESOLVED && (
				<MovieList movies={currentMovies} page="movie" />
			)}
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.REJECTED && (
				<Error message="Load failed your movies" />
			)}
		</>
	);
};

export default MoviesPage;
