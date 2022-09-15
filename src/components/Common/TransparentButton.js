import React from "react";
import { Button, Box } from "@mui/material";
import Classes from "../../Styles/Common/TransparentButton.module.scss";

const TransparentButton = ({ text }) => {
  return (
    <Box className={Classes.viewAll}>
      <div>
        <Button>{text} </Button>
      </div>
    </Box>
  );
};

export default TransparentButton;
