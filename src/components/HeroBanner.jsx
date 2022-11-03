import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assests/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      position="relative"
      p="20px"
      sx={{
        mt: { lg: "220px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb="23px"
        mt="30px"
      >
        Work Hard, Sleep <br /> Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Let's see what you working today!
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        HardWork
      </Typography>
      <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
