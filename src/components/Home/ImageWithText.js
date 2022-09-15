import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import Classes from "../../Styles/Home/ImageWithText.module.scss";
import TransparentButton from "../Common/TransparentButton";

const ImageWithText = ({ data }) => {
  return (
    <Box className={Classes.ImageWithTextSection}>
      <Box
        className={
          data.section === "ownership"
            ? `${Classes.bgWhite}`
            : `${Classes.bgGray}`
        }
      >
        <Container>
          <Grid
            className={data.section === "ownership" && `${Classes.rowReverse}`}
            container
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <img src={data.image} alt={data.section} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={Classes.heading}>
                {data.heading}
              </Typography>
              <Typography className={Classes.description}>
                {data.description}
              </Typography>
              <TransparentButton
                text={data.buttonText}
                section={data.section}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ImageWithText;
