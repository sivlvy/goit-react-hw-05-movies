import STATUS from 'services/config';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import CastList from './CastList';
import { getCurrentCast } from 'services/movies-api';

const Cast = () => {
	const [status, setStatus] = useState('');
	const [cast, setCast] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		setStatus(STATUS.PENDING);

		const fetchCast = async () => {
			const response = await getCurrentCast(movieId);
			console.log(response);
			try {
				setStatus(STATUS.RESOLVED);
				setCast(response.cast);
			} catch (error) {
				setStatus(STATUS.REJECTED);
				Notify.failure('Oops something went wrong! Try reloading the page');
			}
		};
		fetchCast();
	}, [movieId]);

	return (
		<>
			{status === STATUS.RESOLVED && <CastList cast={cast} />}
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.REJECTED && (
				<Error message="Load failed details of movie" />
			)}
		</>
	);
};

export default Cast;
