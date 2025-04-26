import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./header.css";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar className="appBar" position="static">
      <Toolbar className="toolbar">
        <img
          src={require("../../page_assets/logo_oval.png")}
          alt="Logo"
          className="logo"
        />
        <Box className="nav_buttons">
          <IconButton
            className={`navButton ${isMobile ? "textOnlyButton" : ""}`}
            edge="start"
            color="inherit"
            aria-label="home"
            component={Link}
            to="/Home"
          >
            <span className="buttonText">home</span>
          </IconButton>
          <IconButton
            className={`navButton ${isMobile ? "textOnlyButton" : ""}`}
            edge="start"
            color="inherit"
            aria-label="events"
            component={Link}
            to="/Events"
          >
            <span className="buttonText">events</span>
          </IconButton>
          <IconButton
            className={`navButton ${isMobile ? "textOnlyButton" : ""}`}
            edge="start"
            color="inherit"
            aria-label="about-us"
            component={Link}
            to="/About-Us"
          >
            <span className="buttonText">about us</span>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
