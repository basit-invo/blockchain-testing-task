import React from "react";
import { Button, Box } from "@mui/material";
import Classes from "../../Styles/Common/TransparentButton.module.scss";

const TransparentButton = ({ text, section }) => {
  return (
    <Box className={Classes.viewAll}>
      <div
        className={
          section === "ownership" ? `${Classes.bgWhite}` : `${Classes.bgGray}`
        }
      >
        <a href="https://medium.com/@yoiu/yoiu-a-gateway-to-the-future-of-blockchain-f06d636eefc6">
          <Button>{text} </Button>
        </a>
      </div>
    </Box>
  );
};

export default TransparentButton;
