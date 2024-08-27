import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import InstaPromotion from "../../Components/InstaPromotion/InstaPromotion";
import "./mainPage.css";

const MainPage = () => {
  return (
    <>
      <Box className="mainContainer">
        {/* Image Section */}
        <Box className="imageContainer">
          <img
            src={require("../../page_assets/WelcomeGroup.jpg")}
            alt="Books"
            className="welcomeImage"
          />
        </Box>

        {/* Text Section */}
        <Box className="textContainer">
          <Typography className="titleText" variant="h4" gutterBottom>
            THEBOOKCLUB ETH
          </Typography>
          <Typography variant="body1" className="titleSubtitle" gutterBottom>
            Welcome to the first book club at ETH! You might be thinking, "Book
            club... what could that be?" Well, we're not your typical book club.
            Our goal is to create a community and a platform where students can
            meet fellow readers. No qualifications are needed to consider
            yourself a reader! Anyone is welcome, whether you read 500 pages a
            day or the last time you read was when you were 14 years old. As
            long as you have a passion for reading, we would love to have you!
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
      <InstaPromotion />
    </>
  );
};

export default MainPage;
