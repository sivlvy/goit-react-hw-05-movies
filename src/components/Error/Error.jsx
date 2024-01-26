import BackBtn from 'components/BackBtn/BackBtn';
import css from './Error.module.css';
const Error = ({ message }) => {
	return (
		<>
			<BackBtn />
			<h2 className={css.header_error}>
				Opps something went wrong! Try reloading the page
			</h2>
			<p className={css.description_error}>{message}</p>
		</>
	);
};

export default Error;
