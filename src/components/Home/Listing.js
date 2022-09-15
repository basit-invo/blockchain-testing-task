import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import Classes from "../../Styles/Home/Listing.module.scss";
import Nft from "../../images/nft.svg";
import Realm from "../../images/realm.svg";
import Vr from "../../images/vr.svg";

const Banner = () => {
  const cardData = [
    {
      image: Nft,
      shortName: "Mobile NFT Game",
      fullName: "PLAY 2 EARN with Gamestar World",
    },
    {
      image: Realm,
      shortName: "Create your own Realm!",
      fullName: "Web 3.0 Gaming-E-Sports 2048",
    },
    {
      image: Vr,
      shortName: "SaaS Full VR Experience",
      fullName: "IMMERSIIVE METAVERSE-  NFT Boutique",
    },
  ];

  return (
    <>
      <Box className={Classes.listingSection}>
        <Container>
          <Typography variant="h2">Our Listings</Typography>
          <Grid container spacing={2}>
            {cardData.map((card) => (
              <Grid item xs={12} md={4}>
                <Box className={Classes.card}>
                  <img src={card.image} alt="Nft" />
                  <Box className={Classes.description}>
                    <Typography className={Classes.shortName}>
                      {card.shortName}
                    </Typography>
                    <Typography className={Classes.fullName}>
                      {card.fullName}
                    </Typography>
                    <Box className={Classes.descList}>
                      <Typography className={Classes.name}>
                        ACME-IDO Listing
                      </Typography>
                      <Typography className={Classes.value}></Typography>
                    </Box>
                    <Box className={Classes.descList}>
                      <Typography className={Classes.name}>
                        UST Target
                      </Typography>
                      <Typography className={Classes.value}>TBA</Typography>
                    </Box>
                    <Box className={Classes.descList}>
                      <Typography className={Classes.name}>Price</Typography>
                      <Typography className={Classes.value}>TBA</Typography>
                    </Box>
                    <Box className={Classes.descList}>
                      <Typography className={Classes.name}>
                        Project starts
                      </Typography>
                      <Typography className={Classes.value}>TBA</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box className={Classes.viewAll}>
            <div>
              <Button>View All </Button>
            </div>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
