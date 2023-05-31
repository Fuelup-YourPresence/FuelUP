import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import OnSubmitRedirect from "../common/OnSubmitRedirect";
const Hero = () => {
  // console.log(OurDomains)
  const sentence = "Creating a seamless online experience for your ";
  const words = ["Brand", "Design", "Product"];
  const buttonStyle = {
    backgroundColor: "#C4F0AB",
    color: "#153240",
    borderRadius: "0.35rem",
    padding: "8px 30px",
    // width: "40%",
    "&:hover": {
      backgroundColor: "white",
    },
  };
  const boxes = {
    padding: "10px 0px",
    paddingLeft: "20px",
  };
  const styles = {
    boxes: {
      padding: "20px",
    },
  };
  const backg = {
    backgroundImage: "url('/images/Homepage/HomepageHero.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    backgroundPosition: "center",
    minHeight: "900px",
    display: "flex",
    flexDirection: "column",
  };
  const imagesty = {
    width: "40%",
  };
  const color = "#0C2937";
  return (
    <Stack sx={backg}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        maxWidth="80rem"
        margin="auto"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        })}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={(theme) => ({
            width: "60%",
            padding: "60px 0px",
            gap: "1rem",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              padding: "50px 10px",
              textAlign: "center",
            },
          })}
        >
          <Box style={boxes}>
            <Typography
              variant="h1"
              sx={(theme) => ({
                color: "white",
                fontSize: "3rem",
                fontWeight: 500,
                [theme.breakpoints.down("md")]: {
                  fontSize: "2rem",
                },
              })}
            >
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Creating a seamless online experience for your "
                    )
                    .typeString("Brand")

                    .pauseFor(1500)
                    .deleteChars(5)
                    .typeString("Product")

                    .pauseFor(1500)
                    .deleteChars(7)
                    .typeString("Design");
                  typewriter
                    .callFunction(() => {
                      // Hide the cursor after typing "Design"
                      const cursorElement = document.querySelector(
                        ".Typewriter__cursor"
                      );
                      if (cursorElement) {
                        cursorElement.style.display = "none";
                      }
                    })
                    .start();
                }}
              />
            </Typography>
          </Box>
          <Box style={boxes}>
            <Typography variant="body1" sx={{ color: "white" }}>
              We are passionate about crafting exceptional digital experiences.
              We specialize in creating custom websites that are both visually
              stunning and highly functional, designed to provide the best
              possible user experience for our clients customers.
            </Typography>
          </Box>
          <Box style={boxes}>
            <Link href="/contact">
              <Button style={buttonStyle}>Request a Quote</Button>
            </Link>
          </Box>
        </Box>
        <motion.img
          src="/images/Homepage/homepagelegend.svg"
          alt="Moving Image"
          initial={{ y: 0 }}
          animate={{
            y: [0, 30, 0], // Values for y position: start, middle, end
          }}
          transition={{
            repeat: Infinity, // Loops the animation indefinitely
            duration: 3, // Duration of each animation cycle
            ease: "easeInOut", // Easing function for smoother animation
          }}
        />
      </Box>
      <Box padding="10px 10px 150px 10px" width="80%" margin="auto">
        <OnSubmitRedirect color={color} />
      </Box>
    </Stack>
  );
};

export default Hero;
{
  /* <img
          src="/images/Homepage/homepagelegend.svg"
          alt="My Image"
          style={imagesty}
        /> */
}
