import EvStationIcon from "@mui/icons-material/EvStation";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Slider, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
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
    <div>
      <Box
        sx={(theme) => ({
          backgroundColor: "#EFEFEF",
          padding: "10px",
          border: "2px solid black",
          borderRadius: "10px",
          width: "520px",

          [theme.breakpoints.down("md")]: {
            width: "90vw",
          },
        })}
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
          <Typography
            variant="subtitle1"
            style={{ display: "inline-block", justifyContent: "" }}
          >
            <Tooltip
              title="Static Webpages do not come with user interaction functionality"
              placement="right"
            >
              <span style={{ color: "#153240" }}>
                <InfoIcon />
              </span>
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Volume"
            style={sliderStyle}
            value={staticPageCount}
            onChange={handleStaticPageCountChange}
            min={1}
            max={20}
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
              title="Dynamic Webpages come with user interaction functionality"
              placement="right"
            >
              <span style={{ color: "#153240" }}>
                <InfoIcon />
              </span>
            </Tooltip>
          </Typography>
          <Slider
            aria-label="Volume"
            style={sliderStyle}
            value={dynamicPageCount}
            onChange={handleDynamicPageCountChange}
            min={1}
            max={20}
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
              >
                {" "}
                <HourglassEmptyIcon />
                <Typography variant="h5">Time</Typography>
                <Typography variant="caption" color="grey">
                  you have to wait
                </Typography>
              </Stack>
              <Typography variant="h6">{time} Days</Typography>
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
              >
                {" "}
                <EvStationIcon />
                <Typography variant="h5">Fuel</Typography>
                <Typography variant="caption" color="grey">
                  We want
                </Typography>
                <Tooltip
                  title="This Cost is does not includes Domain name and Hosting cost"
                  placement="right"
                >
                  <span style={{ color: "#153240" }}>
                    <InfoIcon />
                  </span>
                </Tooltip>
              </Stack>
              <Typography variant="h6">₹ {price}</Typography>
            </Stack>
          </Stack>
        </div>
      </Box>
    </div>
  );
}

export default PriceQuote;
