import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";


import Language from "../Language/Language";
import TrackShipment from "../TrackShipment/TrackShipment";
import Logo from "../Logo/Logo";
const pages = ["Home", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// let theme = createTheme({
//   typography: {
//     fontFamily: ["Cairo", "sans-serif"].join(","),
//     fontSize: 16,
//     // fontWeightRegular: 400,
//     fontWeight: 700,
//     color: "red",
//   },
//   components: {
//     // Name of the component
//     MuiButton: {
//       styleOverrides: {
//         // Name of the slot
//         root: {
//           // Some CSS
//           fontWeight: "700",
//         },
//       },
//     },
//   },
// });

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const handleHover = () => {};

  return (
    // <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid #EEEEEE" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}}>
          <Logo></Logo>


            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              ml={5}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", mx: 5, color: "#002B5B" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 , display:"flex"}} >
              <TrackShipment></TrackShipment>
              <Language mdScreen={true}></Language>
              
                <Button
                  onClick={handleCloseNavMenu}
                  variant="outlined"
                  color="error"
                  sx={{
                    borderRadius: "20px",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#e30613",
                    },
                    display: { md: "inline-block", xs: "none" },
                  }}
                  className="signup"
                >
                  Sign Up
                </Button>
              

              
            </Box>
            {/* Humburger icon */}
            <Box sx={{  display: { xs: "flex", md: "none" }, textAlign:"center" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  textAlign:"center"
                }}
              >
                {pages.map((page) => (
                  
                    <MenuItem key={page} onClick={handleCloseNavMenu} sx={{display:"flex", justifyContent:"center"}}>
                      <Typography >{page}</Typography>
                    </MenuItem>
                  
                ))}
                <Button
                  onClick={handleCloseNavMenu}
                  variant="outlined"
                  color="error"
                  sx={{
                    borderRadius: "20px",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#e30613",
                    },
                  }}
                  className="signup"
                >
                  Sign Up
                </Button>
                <Language mdScreen={false}></Language>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    // </ThemeProvider>
  );
}
export default ResponsiveAppBar;
