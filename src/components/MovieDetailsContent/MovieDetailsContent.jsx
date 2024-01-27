import BackBtn from 'components/BackBtn/BackBtn';
import CardContent from './CardContent/CardContent';
import AddContent from './AddContent/AddContent';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MovieDetailsContent = ({ details }) => {
	const { title, poster_path, vote_average, overview, genres } = details;
	const userRate = (vote_average * 10).toFixed(1);
	const image = 'https://image.tmdb.org/t/p/w500' + poster_path;

	return (
		<Suspense fallback={<Loader />}>
			<BackBtn />
			<CardContent movieData={{ title, userRate, overview, genres, image }} />
			<AddContent />
		</Suspense>
	);
};

export default MovieDetailsContent;
