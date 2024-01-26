import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import BackBtn from './BackBtn/BackBtn';
import MovieItem from './MovieList/MovieItem/MovieItem';

import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';
const App = () => {
	return (
		<div className="container">
			<Header />
			<Routes>
				<Route path ="/" element={<HomePage />} />
				<Route path ='/movies' element={<MoviesPage/>} />
				<Route path ='/movies/:moveId' element={<MovieDetails/>} />
			</Routes>
		</div>
	);
};
export default App;
