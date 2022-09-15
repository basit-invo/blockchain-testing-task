import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import Classes from "../../Styles/Home/Startup.module.scss";
import Back from "../../images/startupBack.png";
import JoinButton from "../Common/JoinButton";

const Startup = () => {
  return (
    <>
      <Box
        className={Classes.startupSection}
        style={{
          background: `url(${Back})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Container>
          <Typography className={Classes.heading}>
            Are you a startup?
          </Typography>
          <Typography className={Classes.description}>
            You are a startup looking for a passionate community that wants to
            reach the next level? Get startes on YOIU!
          </Typography>
          <JoinButton />
        </Container>
      </Box>
    </>
  );
};

export default Startup;
