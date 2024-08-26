import React from "react";
import { Box, Typography, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@fontsource/rozha-one";

const InstaPromotion: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <img
          src={require("../../page_assets/Thebookclub_Logo_round.png")}
          alt="Logo"
          style={{ height: "100px", marginRight: "20px" }}
        />
        <InstagramIcon
          sx={{ fontSize: 80, color: "#833AB4", marginLeft: "20px" }}
        />
      </Box>
      <Typography
        variant="h5"
        fontFamily="rozha-one"
        gutterBottom
        sx={{ mb: 2 }}
      >
        Follow Us on Instagram!
      </Typography>
      <Typography variant="body1" fontFamily="rozha-one" sx={{ mb: 2 }}>
        Stay updated with our latest events, behind-the-scenes content, and more
        by following us on Instagram.
      </Typography>
      <Button
        variant="text"
        component="a"
        href="https://www.instagram.com/..." // Replace with your actual Instagram link
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Out Our Instagram
      </Button>
    </Box>
  );
};

export default InstaPromotion;
