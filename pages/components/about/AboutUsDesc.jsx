import ourTeam from "@/data/ourTeam";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Left from "../common/Left";
import Right from "../common/Right";
import classes from "./styles/AboutUsDescr.module.css";
const AboutUsDesc = () => {
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.title}>
          <Typography variant="h6" fontWeight="700" color={"#153240"}>
            More About us
          </Typography>
          <Box className={classes.subtitle}>
            <Typography variant="h4">Our Circle is Small But..</Typography>
            <Typography variant="h4" color="rgba(21, 50, 64, 1)">
              We're a team of{" "}
              <span className={classes.boldtext}>Innovators</span> and{" "}
              <span className={classes.boldtext}>Problem Solvers.</span>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.item}>
          <Left data={ourTeam[0]} />
        </Box>
        <Box className={classes.item}>
          <Right data={ourTeam[1]} />
        </Box>
        <Box className={classes.item1}>
          <Left data={ourTeam[2]} />
        </Box>
      </Box>
    </div>
  );
};

export default AboutUsDesc;
