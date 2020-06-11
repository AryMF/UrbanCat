import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import test from './contexts/fetchInfo.js';

ReactDOM.render(
	
	<React.StrictMode>
		<App />
		test();
	</React.StrictMode>,
	document.getElementById('root')
);