import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import BackBtn from './BackBtn/BackBtn';
import MovieItem from './MovieList/MovieItem/MovieItem';

import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import Cast from './MovieDetailsContent/AddContent/Cast/Cast';
import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';
import Reviews from './MovieDetailsContent/AddContent/Reviews/Reviews';
import CastList from './MovieDetailsContent/AddContent/Cast/CastList';
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="movies" element={<MoviesPage />} />
				<Route path="movies/:movieId" element={<MovieDetails />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};
export default App;
