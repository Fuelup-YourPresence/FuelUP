import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import ButtnRequest from "../common/ButtnRequest";
const backg = {
  backgroundImage: "url('/images/Services/Services1.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "800px",
};
const divs = {
  paddingTop: "80px",
  textAlign: "center",
};
const divwbtn = {
  paddingTop: "80px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const txtcolor = {
  color: "white",
};
const description = {
  width: "60%",
  paddingTop: "80px",
  textAlign: "center",
};
const Hero = () => {
  return (
    <div style={backg}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        maxWidth="80rem"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="70%"
        >
          <Box style={divs}>
            <Typography variant="h3" style={txtcolor}>
              Skyrocketing your Business with our Agency
            </Typography>
          </Box>
          <Box style={description}>
            <Typography variant="body1" style={txtcolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuntmassa. In fermentum et sollicitudin ac
              orci.
            </Typography>
          </Box>
          <Box>
            <Box style={divwbtn}>
              <ButtnRequest />
              <Typography variant="button" style={txtcolor}>
                Learn more about us
              </Typography>
            </Box>
            <Image
              src="/images/Services/heroserimg.svg"
              alt="My Image"
              width={500}
              height={500}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
