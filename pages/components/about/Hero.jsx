import { Box, Typography } from '@mui/material';
import React from 'react';
import ButtnRequest from '../common/ButtnRequest';
import OnSubmitRedirect from '../common/OnSubmitRedirect';
import { makeStyles } from '@mui/styles';
import classes from './styles/Hero.module.css'
const title={
    color: "white",
    fontSize: "48px",
    fontWweight: "bold",
    textAlign: "center",
    paddingBottom: "40px",
}
const Hero = () => {
  return (
    <div className={classes.backg}>
      <Box className={classes.container} >
        <Box className={classes.titlebox}>
          <Typography style={title}>Designing for impact, coding for results.</Typography>
        </Box>
        <ButtnRequest />
        <Box className={classes.buttonContainer}>
          <OnSubmitRedirect color={"#051D29"} />
        </Box>
      </Box>
    </div>
  );
};

export default Hero;