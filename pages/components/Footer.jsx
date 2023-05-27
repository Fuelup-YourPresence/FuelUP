import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import classes from "./Footer.module.css";
import OnSubmitRedirect from "./common/OnSubmitRedirect";
const useStyles = makeStyles((theme) => ({}));

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Box className={classes.footersub}>
        <Box
          sx={(theme) => ({
            // width: "80%",

            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
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
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          })}
        >
          <Box>
            <Box display="flex" flexDirection="row">
              <Image src="/images/Logo/logo1.svg" height={50} width={50} />
              <Typography variant="h5" className={classes.logo}>
                Fuel Up
              </Typography>
            </Box>
            <Typography className={classes.text}>
              We build website that work as hard as you do.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <Box
              className={classes.listItem}
              sx={{
                alignItems: "flex-start",
              }}
            >
              <Link href="/about" style={{ textDecoration: "none" }}>
                <Typography className={classes.text}>About Us</Typography>
              </Link>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <Typography className={classes.text}>Services</Typography>
              </Link>
              <Link href="/plans" style={{ textDecoration: "none" }}>
                <Typography className={classes.text}>Plans</Typography>
              </Link>
            </Box>
            <Box
              className={classes.listItem}
              sx={{
                alignItems: "flex-start",
              }}
            >
              <Link
                href="/terms-and-conditions"
                className={classes.link}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography className={classes.text}>
                  Terms & Conditions
                </Typography>
              </Link>
              <Link
                href="/privacy-policy"
                className={classes.link}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography className={classes.text}>Privacy Policy</Typography>
              </Link>

              <Typography className={classes.text}>Cookie Policy</Typography>
            </Box>
          </Box>
          <Box className={classes.listItem}>
            <Box className={classes.mail}>
              <Typography className={classes.textmail}>
                <GrMail style={{ fontSize: "2rem", paddingRight: "10px" }} />
                <span />
                Mail to us :-
              </Typography>
              <Typography
                component="a"
                href={`mailto:${"fuelup.yourpresence@gmail.com"}`}
                className={classes.text}
                style={{ textDecoration: "none" }}
              >
                fuelup.yourpresence@gmail.com
              </Typography>
            </Box>
            <Box className={classes.socialbox}>
              <Link href="/">
                <Box className={classes.socials}>
                  <CiLinkedin />
                </Box>
              </Link>
              <Link href="/">
                <Box className={classes.socials}>
                  <CiTwitter />
                </Box>
              </Link>
              <Link href="/">
                <Box className={classes.socials}>
                  <CiInstagram />
                </Box>
              </Link>
              <Link href="/">
                <Box className={classes.socials}>
                  <FaWhatsapp />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
