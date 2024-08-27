import React from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import "@fontsource/rozha-one";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#ffbf0a",
        py: 4,
        borderTopLeftRadius: "10%",
        borderTopRightRadius: "10%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              fontFamily="rozha-one"
              sx={{ color: "white", mb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              Email:{" "}
              <Link href="mailto:info@thebookclubeth.com" color="inherit">
                info@thebookclubeth.com
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              Phone:{" "}
              <Link href="tel:+1234567890" color="inherit">
                +123 456 7890
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              fontFamily="rozha-one"
              sx={{ color: "white", mb: 2 }}
            >
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                Facebook
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                Twitter
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                Instagram
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              fontFamily="rozha-one"
              sx={{ color: "white", mb: 2 }}
            >
              Legal
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              &copy; {new Date().getFullYear()} The Bookclub ETH. All rights
              reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
