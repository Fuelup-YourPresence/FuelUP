import ourDomains from "@/data/ourDomains";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Left from "../common/Left";
import Right from "../common/Right";
const Ourservices = () => {
  const box = {
    padding: "20px",
  };

  const heading = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const controlsLeft = useAnimation();
  const controlsLeft2 = useAnimation();
  const controlsRight = useAnimation();
  const [refLeft, inViewLeft] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [refLeft2, inViewLeft2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [refRight, inViewRight] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({ x: 0 });
    } else {
      controlsLeft.start({ x: -1000 });
    }
    if (inViewLeft2) {
      controlsLeft2.start({ x: 0 });
    } else {
      controlsLeft2.start({ x: -1000 });
    }
    if (inViewRight) {
      controlsRight.start({ x: 0 });
    } else {
      controlsRight.start({ x: 1000 });
    }
  }, [
    controlsLeft,
    inViewLeft,
    controlsRight,
    inViewRight,
    inViewLeft2,
    controlsLeft2,
  ]);

  return (
    <>
      <div
        style={{
          ...heading,
          flexDirection: "column",
          maxWidth: "80rem",
          margin: "auto",
        }}
      >
        <Box
          sx={(theme) => ({
            ...heading,
            padding: "40px 20px",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          })}
        >
          <Typography
            variant="h3"
            fontWeight="700"
            color="rgba(21, 50, 64, 1)"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "2rem",
                paddingBottom: "30px",
              },
            })}
          >
            We build websites that work as hard as you do.
          </Typography>
          <Typography variant="subtitle1" color="rgba(7, 17, 31, 1)">
            At our company, we provide a range of services that are tailored to
            meet the unique needs of our clients. Our team of experts
            specializes in creating custom websites which are highly functional
            and optimized for performance.
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            width: "80%",

            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
          <div ref={refLeft} style={box}>
            <motion.div
              initial={{ x: -1000 }}
              animate={controlsLeft}
              transition={{ duration: 1.0 }}
            >
              <Left data={ourDomains[0]} />
            </motion.div>
          </div>
          <div ref={refRight} style={box}>
            <motion.div
              initial={{ x: 1000 }}
              animate={controlsRight}
              transition={{ duration: 1.0 }}
            >
              <Right data={ourDomains[1]} />
            </motion.div>
          </div>
          <div ref={refLeft2} style={box}>
            <motion.div
              initial={{ x: -1000 }}
              animate={controlsLeft2}
              transition={{ duration: 1.0 }}
            >
              <Left data={ourDomains[2]} />
            </motion.div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Ourservices;
