import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./MovieDetailsContent/AddContent/Cast/Cast'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Reviews = lazy(() =>
	import('./MovieDetailsContent/AddContent/Reviews/Reviews')
);
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
