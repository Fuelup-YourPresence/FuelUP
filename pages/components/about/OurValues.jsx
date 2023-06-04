import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiBiceps } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
const OurValues = () => {
  const gradientBackground = {
    background:
      "linear-gradient(to right, #ffffff 0%, #ffffff 15%, #C4F0AB 15%, #C4F0AB 85%, #ffffff 85%, #ffffff 100%)",
    width: "100%",
    height: "400px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };
  const backg = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    // width:'480px',
    height: "250px",
    margin: "0 30px",
    borderRadius: "10px",
    paddingLeft: "15px",
  };
  const iconbackg = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="auto"
      maxWidth="100rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        width="90%"
        alignItems="center"
        justifyContent="center"
        paddingTop="50px"
      >
        <Box width="25%" textAlign="center">
          <Typography variant="h3" color="#153240">
            The Values We Live By
          </Typography>
        </Box>
        <Box
          width="50%"
          paddingTop="50px"
          paddingBottom="50px"
          textAlign="center"
        >
          <Typography variant="h6">
            Our team of experts specializes in creating custom websites which
            are highly functional and optimized for performance.
          </Typography>
        </Box>
        <div style={gradientBackground}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <Box
                style={{ ...backg, backgroundColor: "#153240", color: "white" }}
              >
                <Box style={{ ...iconbackg, backgroundColor: "#C4F0AB" }}>
                  <MdOutlineWork color={"#153240"} fontSize={"30px"} />
                </Box>
                <Typography variant="h6" fontWeight="500">
                  Daily Hard Work
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ padding: "12px 0px 12px 0px" }}
                  color="rgba(255, 255, 255, 0.8)"
                >
                  WE WORK HARD EVERYDAY
                </Typography>
                <Typography variant="subtitle2" sx={{ width: "85%" }}>
                  We keep our promises, provide upfront timelines and bring
                  predictability.
                </Typography>
              </Box>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Box
                style={{ ...backg, backgroundColor: "white", color: "#153240" }}
              >
                <Box style={{ ...iconbackg, backgroundColor: "#153240" }}>
                  <GiBiceps color={"#C4F0AB"} fontSize={"30px"} />
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="500"
                  color="rgba(21, 50, 64, 1)"
                >
                  Passion Before Money
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight="500"
                  sx={{ padding: "12px 0px 12px 0px" }}
                  color="rgba(21, 50, 64, 0.5)"
                >
                  OUR DECISIONS ARE DRIVEN
                </Typography>
                <Typography variant="subtitle2" sx={{ width: "85%" }}>
                  We keep our promises, provide upfront timelines and bring
                  predictability.
                </Typography>
              </Box>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Box
                style={{ ...backg, backgroundColor: "#153240", color: "white" }}
              >
                <Box style={{ ...iconbackg, backgroundColor: "#C4F0AB" }}>
                  <motion.div
                    className="rotatingElement"
                    whileHover={{ rotateZ: isHovered ? 90 : -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoIosPeople color={"#153240"} fontSize={"30px"} />
                  </motion.div>
                </Box>

                <Typography variant="h6" fontWeight="500">
                  Teamwork Drives Result
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ padding: "12px 0px 12px 0px" }}
                  color="rgba(255, 255, 255, 0.8)"
                >
                  THE TEAM COMES BEFORE
                </Typography>
                <Typography variant="subtitle2" sx={{ width: "85%" }}>
                  We keep our promises, provide upfront timelines and bring
                  predictability.
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default OurValues;
