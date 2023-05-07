import { Slider, Typography, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Stack } from "@mui/system";
import EvStationIcon from '@mui/icons-material/EvStation';
function PriceQuote() {
  const [staticPageCount, setStaticPageCount] = useState(5);
  const [dynamicPageCount, setDynamicPageCount] = useState(10);
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(10);
  const [SliderComponent, setSliderComponent] = useState(null);
  const handleStaticPageCountChange = (event, newValue) => {
    setStaticPageCount(newValue);
  };
  const handleDynamicPageCountChange = (event, newValue) => {
    setDynamicPageCount(newValue);
  };
  useEffect(() => {
    const loadSlider = async () => {
      const { Slider } = await import("@mui/material/Slider");
      setSliderComponent(Slider);
    };
    loadSlider();
  }, []);
  const sliderStyle = {
    color: "#142F3D",
  };
  const boxStyle = {
    backgroundcolor: "#FFFFFF",
  };
  const calculatePrice = () => {
    if (staticPageCount >= 0 && dynamicPageCount >= 0) {
      const calculate = staticPageCount * 500 + dynamicPageCount * 1000;
      setPrice(calculate);
    }
  };
  const calculateTime = () => {
    if (staticPageCount >= 0 && dynamicPageCount >= 0) {
      const calculate = Math.ceil(staticPageCount / 3 + dynamicPageCount * 2);
      setTime(calculate);
    }
  };
  useEffect(() => {
    calculatePrice();
    calculateTime();
  }, [staticPageCount, dynamicPageCount]);
  return (
    <div style={{
      // padding:"50px 450px 50px 450px"
    }}>
    <div
      style={{
        backgroundColor: "#EFEFEF",
        padding: "10px",
        border: "2px solid black",
        borderRadius: "10px",
        width:"520px",
      }}
    >
      <div style={{ padding: "10px" }}>
        <Typography variant="h4" component="h2" pb={3}>
          Estimate Your Expenses....
        </Typography>

        <Typography
          variant="h5"
          style={{ display: "inline-block", padding: "5px" }}
        >
          Static Web Pages
          </Typography>
          <Typography variant="subtitle1" style={{ display: "inline-block" , justifyContent:""}}>
            <Tooltip
              title="This is some additional information"
              placement="right"
            >
              <span style={{ color: "grey" }}>
                <InfoIcon />
              </span>
            </Tooltip>
        </Typography>
        <Slider
          style={sliderStyle}
          value={staticPageCount}
          onChange={handleStaticPageCountChange}
          min={1}
          max={20}
          step={1}
          marks
          valueLabelDisplay="auto"
        />
        <Typography
          variant="h5"
          style={{ display: "inline-block", padding: "5px" }}
        >
          Dynamic Web Pages
          </Typography>
          <Typography variant="subtitle1" style={{ display: "inline-block" }}>
            <Tooltip
              title="This is some additional information"
              placement="right"
            >
              <span style={{ color: "grey" }}>
                <InfoIcon />
              </span>
            </Tooltip>
          
        </Typography>
        <Slider
          style={sliderStyle}
          value={dynamicPageCount}
          onChange={handleDynamicPageCountChange}
          min={1}
          max={20}
          step={1}
          marks
          valueLabelDisplay="auto"
        />
      </div>
      <div>
        <Stack direction="row" spacing={2} justifyContent="space-around">
          <Stack
            direction="column"
            spacing={2}
            width={300}
            border={2}
            borderRadius={2}
            justifyContent="center"
            alignItems="center"
            backgroundColor="#C4F0AB"
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            > <HourglassEmptyIcon/>
              <Typography variant="h5" >
                 Time
              </Typography>
              <Typography variant="caption"  color="grey">
                you have to wait
              </Typography>
            </Stack>
            <Typography variant="h6" >
              {time} Days
            </Typography>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            width={300}
            border={2}
            borderRadius={2}
            justifyContent="center"
            alignItems="center"
            backgroundColor="#C4F0AB"
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            > <EvStationIcon/>
              <Typography variant="h5" >
                Fuel
              </Typography>
              <Typography variant="caption"  color="grey">
                We want
              </Typography>
            </Stack>
            <Typography variant="h6" >
            ₹ {price}
            </Typography>
          </Stack>
        </Stack>
      </div>
    </div>
    </div>
  );
}

export default PriceQuote;
