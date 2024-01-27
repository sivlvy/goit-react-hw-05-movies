import css from './Reviews.module.css';
import { nanoid } from 'nanoid';

const ReviewsList = ({ reviews }) => {
	const ReviewList = ({ reviews }) => {
		return (
			<>
				<h2 className={css.review_title}>Review:</h2>
				{reviews.length ? (
					<ul className={css.review_list}>
						{reviews.map(({ author, content }) => {
							const id = nanoid();

							return (
								<li key={id} className={css.review_item}>
									<h2 className={css.review_name}>Author: {author}</h2>
									<p className={css.review_content}>
										<b>Content:</b> {content}
									</p>
								</li>
							);
						})}
					</ul>
				) : (
					<h2>Reviews information will be available soon</h2>
				)}
			</>
		);
	};
};

export default ReviewsList;
