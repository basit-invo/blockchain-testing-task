import React from "react";
import { Button, Box } from "@mui/material";
import Classes from "../../Styles/Common/JoinButton.module.scss";

const JoinButton = () => {
  return (
    <Box className={Classes.joinButton}>
      <a href="https://jcb6ftgawwz.typeform.com/to/SeQzbLky">
        <Button className={`${Classes.join}`}>Join Now</Button>
      </a>
    </Box>
  );
};

export default JoinButton;
