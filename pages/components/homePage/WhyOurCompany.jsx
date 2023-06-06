import modelData from "@/data/modelData";
import { Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Models from "./Models";
import classes from "./styles/WhyOurCompany.module.css";
const WhyOurCompany = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > containerTop) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className={classes.root}>
      <div className={classes.container} ref={containerRef}>
        <div className={classes.title}>
          <Typography color="#153240" variant="h4" fontWeight="700">
            Why Our Company
          </Typography>
        </div>
        <div className={classes.subTitle}>
          <Typography color="#153240" variant="h4">
            We follow Modern Iterative Process to publish your website LIVE
          </Typography>
        </div>
        <motion.div
          className={classes.modelsContainer}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {modelData.map((data, index) => (
            <motion.div className={classes.model} key={index} variants={item}>
              <Models data={data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyOurCompany;
