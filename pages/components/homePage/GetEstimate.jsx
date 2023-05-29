import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import PriceQuote from "../common/PriceQuote";
import classes from "./styles/GetEstimate.module.css";
const buttonStyle = {
  backgroundColor: "#C4F0AB",
  color: "#153240",
  borderRadius: "0.35rem",
  padding: "8px 40px",
  // width: "50%",
};
const GetEstimate = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Box className={classes.contentContainer}>
          <Box className={classes.contentsubContainer}>
            <Typography className={classes.title}>
              Get our services at very affordable prices
            </Typography>

            <Typography className={classes.description}>
              At Fuel Up, we believe that high-quality services should be
              accessible to businesses of all sizes. We offer our exceptional
              services at highly competitive and affordable prices.
            </Typography>

            <div style={{ paddingTop: "20px" }}>
              <Link href="/plans">
                <button className={classes.buttonStyle}>Request a Quote</button>
              </Link>
            </div>
          </Box>
        </Box>

        <Box className={classes.quoteContainer}>
          <PriceQuote />
        </Box>
      </div>
    </div>
  );
};

export default GetEstimate;
/*
ensuring
              that you receive the utmost value for your investment. With our
              commitment to delivering excellence without compromising on cost,
              you can elevate your business without breaking the bank. Contact
              us today to discuss how we can tailor our services to meet your
              specific needs and budget.
              */
