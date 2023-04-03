import React from 'react';
import { useTranslation } from 'react-i18next'
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux';


let theme = createTheme({
	typography: {
	  fontFamily: ["Cairo", "sans-serif"].join(","),
	  fontSize: 16,
	  // fontWeightRegular: 400,
	  fontWeight: 700,
	  color: "red",
	},
	components: {
	  // Name of the component
	  MuiButton: {
		styleOverrides: {
		  // Name of the slot
		  root: {
			// Some CSS
			fontWeight: "700",
		  },
		},
	  },
	},
	
  });

function App() {
	
	const shipmentDetail = useSelector((state)=>state.shipmentDetail);

    const { t, i18n } = useTranslation();
    // document.body.dir = i18n.dir();
	return (
		<div className="App">
<ThemeProvider theme={theme}>
<div dir={i18n.dir()}>
	<Navbar></Navbar>
</div>
    {shipmentDetail && <Home></Home>}
</ThemeProvider>
		</div>
	);
}

export default App;
