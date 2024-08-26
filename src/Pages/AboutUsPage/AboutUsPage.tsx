import React from "react";
import { Box, Typography } from "@mui/material";
import "./aboutUsPage.css";
import UsImg from "../../page_assets/UsImg.jpg";
import "@fontsource/rozha-one";

const AboutUsPage: React.FC = () => {
  return (
    <Box className="aboutUsContainer">
      {/* Hero Section */}
      <Box className="heroSection">
        <Typography
          variant="h4"
          fontFamily="rohza-one"
          className="heroTitle"
          gutterBottom
        >
          About Us
        </Typography>
        <Typography
          variant="h6"
          fontFamily="rohza-one"
          className="heroSubtitle"
        >
          Discover the Story Behind The Bookclub ETH
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box className="section missionSection">
        <Typography
          variant="h4"
          fontFamily="rohza-one"
          className="sectionTitle"
          gutterBottom
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          fontFamily="rohza-one"
          className="sectionContent"
        >
          At The Bookclub ETH, our mission is to create a welcoming community
          where literature lovers of all backgrounds can come together to share
          their passion for books. We believe in the transformative power of
          reading and aim to foster an environment where everyone can explore
          new ideas, engage in thoughtful discussion, and form meaningful
          connections.
        </Typography>
      </Box>

      {/* History Section */}
      <Box className="section historySection">
        <Typography
          variant="h4"
          fontFamily="rohza-one"
          className="sectionTitle"
          gutterBottom
        >
          Our History
        </Typography>
        <Typography
          variant="body1"
          fontFamily="rohza-one"
          className="sectionContent"
        >
          Founded in 2023, The Bookclub ETH started as a small group of
          university students who wanted to create a space to discuss literature
          outside of the classroom. What began as a casual meet-up has grown
          into a thriving community with regular events, book discussions, and
          author meet-and-greets. We’re proud of how far we’ve come and are
          excited to continue growing and welcoming new members to our club.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box className="section teamSection">
        <Typography
          variant="h4"
          fontFamily="rohza-one"
          className="sectionTitle"
          gutterBottom
        >
          Meet the Team
        </Typography>
        <Box className="teamImageContainer">
          <img src={UsImg} alt="Our Team" className="teamImage" />
          <Typography
            variant="body1"
            fontFamily="rohza-one"
            className="teamDescription"
          >
            Emilia Mende - Founder & President <br />
            Selin .... - Event Coordinator <br />
          </Typography>
        </Box>
      </Box>

      {/* Values Section */}
      <Box className="section valuesSection">
        <Typography
          variant="h4"
          fontFamily="rohza-one"
          className="sectionTitle"
          gutterBottom
        >
          Our Values
        </Typography>
        <Typography
          variant="body1"
          fontFamily="rohza-one"
          className="sectionContent"
        >
          We believe in inclusivity, respect, and the joy of learning. These
          values guide everything we do, from the books we choose to read to the
          way we interact with each other. We’re committed to creating a space
          where everyone feels valued and heard.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
