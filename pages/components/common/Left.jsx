import { Brush } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import classes from "./styles/Left.module.css";
const Left = ({ data }) => {
  return (
    <div className={classes.borderbox}>
      {data && (
        <Box className={classes.container}>
          <Box className={classes.box1}>
            <Box className={classes.box2}>
              <Box display="flex" flexDirection="row" height="100%">
                <Box className={classes.data}>
                  <Box className={classes.titlebox}>
                    <Box className={classes.brushBox}>
                      <Brush className={classes.brushIcon} />
                    </Box>
                    <Typography variant="h6" className={classes.title}>
                      &nbsp;{data.title}
                    </Typography>
                  </Box>
                  {data.name && (
                    <Box className={classes.descr}>
                      <Typography color="#07111F" style={{ width: "80%" }}>
                        {data.name}
                      </Typography>
                    </Box>
                  )}
                  <Box className={classes.descr}>
                    <Typography
                      style={{
                        paddingBottom: data.name ? "0px" : "60px",
                        width: "80%",
                      }}
                      variant="h7"
                      color="#07111F"
                    >
                      {data.data}
                    </Typography>
                  </Box>
                  {data.socials && (
                    <Box className={classes.descr}>
                      <Box className={classes.socialsBox}>
                        <Box className={classes.socialicons}>
                          <Link
                            href={data.socials[0]}
                            style={{ textDecoration: "none" }}
                          >
                            <CiLinkedin className={classes.social} />
                          </Link>
                        </Box>
                        <Box className={classes.socialicons}>
                          <Link
                            href={data.socials[1]}
                            style={{ textDecoration: "none" }}
                          >
                            <CiTwitter className={classes.social} />
                          </Link>
                        </Box>
                        <Box className={classes.socialicons}>
                          <Link
                            href={data.socials[2]}
                            style={{ textDecoration: "none" }}
                          >
                            <CiInstagram className={classes.social} />
                          </Link>
                        </Box>
                        <Box className={classes.socialicons}>
                          <Link
                            href={data.socials[0]}
                            style={{ textDecoration: "none" }}
                          >
                            <FaWhatsapp className={classes.social} />
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.boxes}>
            <div className={classes.imageBox}>
              <img className={classes.image} src={data.image} alt="My Image" />
            </div>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Left;
