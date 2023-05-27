import { Box, Typography } from "@mui/material";
import ourDomains from "../../../data/ourDomains";
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
  // console.log(OurDomains);
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
          <Typography variant="body1" color="rgba(7, 17, 31, 1)">
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
          <div style={box}>
            <Left data={ourDomains[0]} />
          </div>
          <div style={box}>
            <Right data={ourDomains[1]} />
          </div>
          <div style={box}>
            <Left data={ourDomains[2]} />
          </div>
        </Box>
      </div>
    </>
  );
};
export default Ourservices;
