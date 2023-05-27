"use client";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./Navbar.module.css";
function handleClick() {
  const router = useRouter();
  router.push("/Home");
}
const buttonStyle = {
  backgroundColor: "#C4F0AB",
  color: "#153240",
  borderRadius: "0.35rem",
  padding: "8px 15px",
  width: "100%",
};

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
        <Link href="/" className={classes.link}>
          <Box className={classes.logo}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src="/images/Logo/logo1.svg" height={44} width={44} />

              <Typography
                variant="h6"
                color="white"
                style={{ paddingLeft: "10px" }}
              >
                Fuel Up
              </Typography>
            </Box>
          </Box>
        </Link>
        {/* {mobileMenu && ( */}
        <Box className={classes.menu}>
          <Link
            href="/about"
            className={`${classes.link} ${
              currentPage === "about" ? classes.link_active : ""
            }`}
          >
            <Typography variant="button" color="white">
              About Us
            </Typography>
          </Link>
          <Link
            href="/services"
            className={`${classes.link} ${
              currentPage === "services" ? classes.link_active : ""
            }`}
          >
            <Typography variant="button" color="white">
              Services
            </Typography>
          </Link>
          {/* <Link
            href="/plans"
            className={`${classes.link} ${
              currentPage === "plans" ? classes.link_active : ""
            }`}
          >
            <Typography variant="button" color="white">
              Plans
            </Typography>
          </Link> */}
          <Link href="/contact" className={classes.link}>
            <Button style={buttonStyle}>Request a Quote</Button>
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
