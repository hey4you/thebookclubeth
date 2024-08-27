import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
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
          src={require("../../page_assets/Thebookclub_Logo_round.png")}
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
            {!isMobile && <HomeIcon className="buttonIcon" />}
            <span className="buttonText">Home</span>
          </IconButton>
          <IconButton
            className={`navButton ${isMobile ? "textOnlyButton" : ""}`}
            edge="start"
            color="inherit"
            aria-label="events"
            component={Link}
            to="/Events"
          >
            {!isMobile && <CalendarMonthOutlinedIcon className="buttonIcon" />}
            <span className="buttonText">Events</span>
          </IconButton>
          <IconButton
            className={`navButton ${isMobile ? "textOnlyButton" : ""}`}
            edge="start"
            color="inherit"
            aria-label="about-us"
            component={Link}
            to="/About-Us"
          >
            {!isMobile && <Diversity1Icon className="buttonIcon" />}
            <span className="buttonText">About Us</span>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
