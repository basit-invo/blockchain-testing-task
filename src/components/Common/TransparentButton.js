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
        <Button>{text} </Button>
      </div>
    </Box>
  );
};

export default TransparentButton;
