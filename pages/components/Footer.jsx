import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OnSubmitRedirect from "./common/OnSubmitRedirect";
import { CiLinkedin, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { makeStyles } from "@mui/styles";
import classes from "./Footer.module.css";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({}));

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Box className={classes.footersub}>
        <Box></Box>
        <Box width="80%">
          <OnSubmitRedirect color={"transparent"} />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          alignItems="space-between"
          justifyContent="space-evenly"
          paddingTop="80px"
          paddingBottom="30px"
        >
          <Box>
            <Typography variant="h5" className={classes.logo}>
              Fuel Up
            </Typography>
            <Typography className={classes.text}>
              We build website that work as hard as you do.
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <Typography className={classes.text}>About Us</Typography>
            <Typography className={classes.text}>Services</Typography>
            <Typography className={classes.text}>Plans</Typography>
          </Box>
          <Box className={classes.listItem}>
          <Link href="/terms-and-conditions" className={classes.link} style={{
              textDecoration: "none"
              
            }}>
            <Typography className={classes.text}>Terms & Conditions</Typography>
            </Link>
            <Link href="/privacy-policy" className={classes.link} style={{
              textDecoration: "none"

            }}>
              <Typography className={classes.text}>Privacy Policy</Typography>
            </Link>

            <Typography className={classes.text}>Cookie Policy</Typography>
          </Box>
          <Box className={classes.listItem}>
            <Typography className={classes.text}>Chat to us</Typography>
            <Typography className={classes.text}>email@gmail.com</Typography>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <CiLinkedin color="#C4F0AB" fontSize="20px" />
              <CiTwitter color="#C4F0AB" fontSize="20px" />
              <CiInstagram color="#C4F0AB" fontSize="20px" />
              <FaWhatsapp color="#C4F0AB" fontSize="20px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
