import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { scroller } from "react-scroll";

const TypesOffering = ({ data }) => {
  const text = {
    textAlign: "left",
  };
  const toptext = {
    color: "#C4F0AB",
  };
  const atag = {
    color: "#0093FF",
    textDecoration: "none",
  };
  const heading = {
    paddingBottom: "15px",
  };
  const scrollToSection = (value) => {
    scroller.scrollTo(value, {
      smooth: true,
      duration: 500,
      offset: -50,
    });
  };

  return (
    <div>
      {data && (
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography variant="h3" style={toptext}>
              {data.id}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="left"
            padding="5px 5px 5px 20px"
          >
            <Box style={heading}>
              <Typography variant="h5">{data.title}</Typography>
            </Box>
            <Box>
              <Typography>{data.description}</Typography>
            </Box>
            <Box
              sx={{ color: "green", fontWeight: "700", cursor: "pointer" }}
              onClick={() => scrollToSection(data.title)}
            >
              Know more
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default TypesOffering;
