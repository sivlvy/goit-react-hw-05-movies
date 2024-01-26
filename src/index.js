import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import './services/movies-api';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename="/goit-react-hw-05-movies">
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
