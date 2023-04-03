import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import Navbar from './component/Navbar/Navbar';


// Contains the value and text for the options
const languages = [
	{ value: '', text: "Options" },
	{ value: 'en', text: "English" },
	{ value: 'ar', text: "Arabic" }
]

function App() {

	// It is a hook imported from 'react-i18next'
  const { t, i18n } = useTranslation();

	const [lang, setLang] = useState(i18n.language);

	// This function put query that helps to
	// change the language
	const handleChange = e => {
		setLang(e.target.value);
		let loc = "http://localhost:3000/";
		window.location.replace(loc + "?lng=" + e.target.value);
	}

	return (
		<div className="App">

    <Navbar></Navbar>
		</div>
	);
}

export default App;
