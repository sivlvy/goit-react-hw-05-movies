import { Formik, Form, Field } from 'formik';
import { Notify } from 'notiflix';
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';
import css from './SearchBar.module.css';

const Searchbar = () => {
	const [value, setValue] = useState([]);

	const handleSubmit = ({ newValue }) => {
		if (!newValue) {
			return Notify.failure(
				'You have to write something here for a successful search'
			);
		}

		if (newValue === value) {
			Notify.info('You have to write new keyword...Try again!');
			return;
		}

		setValue(newValue);
	};

	return (
		<Formik initialValues={{ newValue: value }} onSubmit={handleSubmit}>
			<Form className={css.form}>
				<div className={css.input_wrap}>
					<Field
						className={css.input}
						name="newValue"
						type="text"
						placeholder="Search movies..."
					/>
					<button className={css.form_btn} type="submit">
						<BiSearchAlt className={css.search_svg} />
					</button>
				</div>
			</Form>
		</Formik>
	);
};

export default Searchbar;

// const SearchBar = () => {
// 	const [value, setValue] = useState();

// 	const handleSubmit = ({ newValue }) => {
// 		if (!newValue) {
// 			return Notify.failure(
// 				'You have to write something here for a successful search'
// 			);
// 		}

// 		if (newValue === value) {
// 			Notify.info('You have to write new keyword...Try again!');
// 			return;
// 		}
// 		setValue(newValue);
// 		console.log(newValue.typeOf());
// 	};

// 	return (
// 		<Formik initialValues={{ newValue: value }} onSubmit={handleSubmit}>
// 			<Form className={css.form}>
// 				<div className={css.input_wrap}>
// 					<Field
// 						className={css.input}
// 						name="newValue"
// 						type="text"
// 						placeholder="Search movies..."
// 					/>
// 					<button className={css.form_btn} type="submit">
// 						<BiSearchAlt className={css.search_svg} />
// 					</button>
// 				</div>
// 			</Form>
// 		</Formik>
// 	);
// };

// export default SearchBar;
