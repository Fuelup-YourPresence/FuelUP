import modelData from "@/data/modelData";
import { Typography } from "@mui/material";
import Models from "./Models";
import classes from "./styles/WhyOurCompany.module.css";
const WhyOurCompany = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
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
        <div className={classes.modelsContainer}>
          {modelData.map((data, index) => (
            <div className={classes.model} key={index}>
              <Models data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyOurCompany;
