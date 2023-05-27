import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { FiCode } from "react-icons/fi";
import { GiWireframeGlobe } from "react-icons/gi";
import { HiSignal } from "react-icons/hi2";
import { TbChecklist } from "react-icons/tb";
import classes from "./styles/Models.module.css";
const useStyles = makeStyles((theme) => ({}));
const Models = ({ data }) => {
  const Icon = ({ color }) => {
    if (data.id == 1) {
      return <TbChecklist color={color} />;
    } else if (data.id == 2) {
      return <GiWireframeGlobe color={color} />;
    } else if (data.id == 3) {
      return <FiCode color={color} />;
    } else if (data.id == 4) {
      return <HiSignal color={color} />;
    }
  };
  return (
    <div className={classes.root}>
      {data && (
        <Box display="flex" flexDirection="column">
          <Box className={classes.iconContainer}>
            <Icon color="#C4F0AB" className={classes.icon} />
          </Box>
          <Box className={classes.container}>
            <Box className={classes.infoContainer}>
              <Box className={classes.infoRow}>
                <Typography variant="h3" className={classes.number}>
                  {data.id}
                </Typography>
                <Typography variant="h6" className={classes.title}>
                  {data.stepname}
                </Typography>
              </Box>
              <Box className={classes.infodescr}>
                <Typography className={classes.process}>
                  {data.process}
                </Typography>
              </Box>
              <Box className={classes.imagebox}>
                <img
                  src={data.image}
                  alt="My Image"
                  className={classes.image}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Models;
