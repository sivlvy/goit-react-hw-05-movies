import ReviewList from './ReviewsList';

import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getCurrentReviews } from 'services/movies-api';
import STATUS from '../../../../services/config';

const Reviews = () => {
	const [status, setStatus] = useState('');
	const [reviews, setReviews] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		setStatus(STATUS.PENDING);

		const fetchReviews = async () => {
			try {
				const reviews = await getCurrentReviews(movieId);
				setStatus(STATUS.RESOLVED);
				setReviews(reviews);
			} catch (error) {
				setStatus(STATUS.REJECTED);
				Notify.failure('Oops something went wrong! Try reloading the page');
			}
		};
		fetchReviews();
	}, [movieId]);

	return (
		<>
			{status === STATUS.RESOLVED && <ReviewList reviews={reviews} />}
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.REJECTED && (
				<Error message="Load failed reviews of movie" />
			)}
		</>
	);
};

export default Reviews;
