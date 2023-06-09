import React , { Suspense }from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "./i18n";
import { I18nextProvider } from 'react-i18next';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "./index.css";
import { Provider } from 'react-redux';
import store from './Redux Store/store';
import LoadingScreen from './component/loadingScreen/LoadingScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
		<Suspense fallback={<LoadingScreen></LoadingScreen>}>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
		</Suspense>
	
		</Provider>
	</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
