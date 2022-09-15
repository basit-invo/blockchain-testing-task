import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Classes from "../../Styles/Common/Footer.module.scss";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";
import Git from "../../images/git.svg";

const Footer = () => {
  return (
    <Box className={Classes.footerButton}>
      <Container>
        <Box className={Classes.main}>
          <Typography>© 2020 Workflow, Inc. All rights reserved.</Typography>
          <Box className={Classes.socialIcons}>
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="Instagram" />
            <a href="https://twitter.com/yoiu_io">
              <img src={Twitter} alt="Twitter" />
            </a>
            <img src={Git} alt="Git" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
