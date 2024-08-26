import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Box } from "@mui/material";
import "@fontsource/rozha-one";
import { Link } from "react-router-dom";
import InstaPromotion from "../../Components/InstaPromotion/InstaPromotion";
import "./mainPage.css";

const MainPage = () => {
  return (
    <>
      <Box className="root">
        {/* Image Section */}
        <Box className="imageSection">
          <img
            src={require("../../page_assets/WelcomeGroup.jpg")}
            alt="Books"
            className="welcomeImage"
          />
        </Box>

        {/* Text Section */}
        <Box className="textSection">
          <Box className="welcomeBox">
            <Typography
              className="titleText"
              fontFamily="rozha-one"
              variant="h4"
              gutterBottom
            >
              THEBOOKCLUB ETH
            </Typography>
            <Typography
              variant="h6"
              fontFamily="rozha-one"
              className="titleSubtitle"
              gutterBottom
            >
              Welcome to the first book club at ETH! You might be thinking,
              "Book club... what could that be?" Well, we're not your typical
              book club. Our goal is to create a community and a platform where
              students can meet fellow readers. No qualifications are needed to
              consider yourself a reader! Anyone is welcome, maybe you read 500
              pages a day (...is that possible as a student though?) or the last
              time you read was when you were 14 years old. As long as you have
              a passion for reading, we would love to have you!
            </Typography>
            <Button
              variant="contained"
              className="exploreButton"
              component={Link}
              to="/events"
              size="large"
            >
              Explore Upcoming Events
            </Button>
          </Box>
        </Box>
      </Box>
      <InstaPromotion />
    </>
  );
};

export default MainPage;
