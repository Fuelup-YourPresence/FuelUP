"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

function handleClick() {
  const router = useRouter();
  router.push("/Home");
}

const Navbar = () => {
  const [drawer, openDrawer] = useState(false);
  const [mobileMenu, openMobileMenu] = useState(false);
  const router = useRouter();
  const currentPage = router.asPath.split("/")[1];
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        openMobileMenu(true);
      } else {
        openMobileMenu(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {!mobileMenu && (
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
              <button className={classes.buttonstyle}>Request a Quote</button>
            </Link>
          </Box>
        )}
        {mobileMenu && (
          <Button onClick={() => openDrawer((prev) => !prev)}>
            <MenuIcon sx={{ color: "white" }} />
          </Button>
        )}
      </Box>

      {drawer && (
        <Box
          sx={{
            backgroundColor: "#07111F",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Link href="/about" className={classes.link}>
            <Typography variant="h6" className={classes.text}>
              About Us
            </Typography>
          </Link>
          <Link href="/services" className={classes.link}>
            <Typography variant="h6" className={classes.text}>
              Services
            </Typography>
          </Link>
          {/* <Link href="/PriceQuote" className={classes.link}>
            <Typography variant="h6" color="white">
              Plans
            </Typography>
          </Link> */}
          <Link
            href="/contact"
            style={{
              width: "100%",
            }}
          >
            <Button style={classes.buttonStyle}>Request a Quote</Button>
          </Link>
        </Box>
      )}
    </div>
  );
};

export default Navbar;
