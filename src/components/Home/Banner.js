import React from "react";
import Logo from "../../images/logo.png";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import Classes from "../../Styles/Home/Banner.module.scss";
import Back from "../../images/bannerBg.png";
import BannerImg from "../../images/banner.png";
import JoinButton from "../Common/JoinButton";

const Banner = () => {
  return (
    <>
      <Box
        className={Classes.bannerSection}
        style={{ background: `url(${Back})`, backgroundSize: "cover" }}
      >
        <Container>
          <Box className={Classes.header}>
            <img src={Logo} alt="logo" />
            <Button className={`${Classes.connect}`} color="inherit">
              Connect
            </Button>
          </Box>
          <Grid className={Classes.main} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography className={Classes.heading} variant="h2">
                A gateway to the future of blockchain
              </Typography>
              <Typography className={Classes.subHeading} variant="h3">
                Fueled by SCRT & NFTs
              </Typography>
              <Typography className={Classes.description}>
                The platform where early adopters can find hidden gems
              </Typography>
              <JoinButton />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                className={Classes.bannerRight}
                src={BannerImg}
                alt="Banner Img"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
