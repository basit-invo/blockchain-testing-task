import React from "react";
import { Button, Box } from "@mui/material";
import Classes from "../../Styles/Common/JoinButton.module.scss";

const JoinButton = () => {
  return (
    <Box className={Classes.joinButton}>
      <Button className={`${Classes.join}`}>Join Now</Button>
    </Box>
  );
};

export default JoinButton;
