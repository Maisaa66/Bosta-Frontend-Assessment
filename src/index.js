import React , { Suspense }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "../src/i18n";
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback="...loading">
			<App />
		</Suspense>
	</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
