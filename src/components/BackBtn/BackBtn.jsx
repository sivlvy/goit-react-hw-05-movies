import { Link, useLocation } from 'react-router-dom';

import css from './BackBtn.module.css';

const BackBtn = () => {
	const location = useLocation();
	const comeback = location.state.from ?? '/';
	return (
		<Link to={comeback} className={css.movie_goback_btn}>
			Go back
		</Link>
	);
};

export default BackBtn;
