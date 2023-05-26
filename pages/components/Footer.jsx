import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OnSubmitRedirect from "./common/OnSubmitRedirect";
import { CiLinkedin, CiTwitter, CiInstagram } from "react-icons/ci";
import {GrMail} from "react-icons/gr"
import { FaWhatsapp } from "react-icons/fa";
import { makeStyles } from "@mui/styles";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
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
          <Box  display="flex"
          flexDirection="row">
          <Image src='/images/Logo/logo1.svg' height={50} width={50}/>
            <Typography variant="h5" className={classes.logo}>
              Fuel Up
            </Typography>
            </Box>
            <Typography className={classes.text}>
              We build website that work as hard as you do.
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <Link href='/about' style={{textDecoration:'none'}}><Typography className={classes.text} >About Us</Typography></Link>
            <Link href='/services' style={{textDecoration:'none'}}><Typography className={classes.text}>Services</Typography></Link>
            <Link href='/plans' style={{textDecoration:'none'}}><Typography className={classes.text}>Plans</Typography></Link>
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
            <Typography className={classes.text}><GrMail style={{fontSize:'30px',paddingRight:'10px'}}/><span/>Mail to us :-</Typography>
            <Typography component="a" href={`mailto:${'fuelup.yourpresence@gmail.com'}`} className={classes.text} style={{textDecoration:'none'}}>
      Fuelup.yourpresence@gmail.com
    </Typography>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Link href='/'><CiLinkedin color="#C4F0AB" fontSize="20px" /></Link>
              <Link href='/'><CiTwitter color="#C4F0AB" fontSize="20px" /></Link>
              <Link href='/'><CiInstagram color="#C4F0AB" fontSize="20px" /></Link>
              <Link href='/'><FaWhatsapp color="#C4F0AB" fontSize="20px" /></Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
