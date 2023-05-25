"use client";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./Navbar.module.css";
import { useRouter } from "next/router";
function handleClick() {
  const router = useRouter();
  router.push("/Home");
}

const useStyles = makeStyles((theme) => ({}));

const Navbar = () => {
  const [drawer, openDrawer] = useState(false);
  const [mobileMenu, openMobileMenu] = useState(true);
  const router = useRouter();
  const currentPage = router.asPath.split("/")[1];
  // console.log(currentPage)
  // console.log(currentpage);
  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth <= 768) {
  //       openMobileMenu(false);
  //     } else {
  //       openMobileMenu(true);
  //       openDrawer(false);
  //     }
  //   }
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <div className={classes.navbar}>
      <Box className={classes.navbarsub}>
        <Box className={classes.logo}>
          <Link href="/" className={classes.link}>
            <Typography variant="h5" color="white">
              Fuel Up
            </Typography>
          </Link>
        </Box>
        {/* {mobileMenu && ( */}
        <Box className={classes.menu}>
          <Link
            href="/about"
            className={`${classes.link} ${
              currentPage === "about" ? classes.link_active : ""
            }`}
          >
            <Typography variant="h6" color="white">
              About Us
            </Typography>
          </Link>
          <Link
            href="/services"
            className={`${classes.link} ${
              currentPage === "services" ? classes.link_active : ""
            }`}
          >
            <Typography variant="h6" color="white">
              Services
            </Typography>
          </Link>
          <Link
            href="/plans"
            className={`${classes.link} ${
              currentPage === "plans" ? classes.link_active : ""
            }`}
          >
            <Typography variant="h6" color="white">
              Plans
            </Typography>
          </Link>
          <Link href="/plans" className={classes.link}>
            <Button className={classes.button}>Request a quote</Button>
          </Link>
        </Box>
        {/* )} */}
        {/* {!mobileMenu && (
            <Button onClick={() => openDrawer(!drawer)}>
              <MenuIcon sx={{ color: '#C4F0AB' }} />
            </Button>
          )} */}
      </Box>

      {/* {drawer && (
        <Box sx={{ backgroundColor: '#07111F', padding: '20px' }}>
          <Link href="/About" className={classes.link}>
            <Typography variant="h6" color="white" fontDec>
              About Us
            </Typography>
          </Link>
          <Link href="/Services" className={classes.link}>
            <Typography variant="h6" color="white">
              Services
            </Typography>
          </Link>
          <Link href="/PriceQuote" className={classes.link}>
            <Typography variant="h6" color="white">
              Plans
            </Typography>
          </Link>
          <Button onClick={handleClick} style={buttonStyle}>Request a quote</Button>
        </Box>
      )} */}
    </div>
  );
};

export default Navbar;
