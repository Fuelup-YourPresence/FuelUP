import { Box } from "@mui/system";
import { Element } from "react-scroll";
import WorkflowLeft from "./WorkflowLeft";
import WorkflowRight from "./WorkflowRight";
const Workflow = ({ data, color }) => {
  // console.log(data.background);
  const background = data && {
    backgroundImage: `url(${data.background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  const textcolor = {
    color: color,
  };
  return (
    <div style={background}>
      <Element name={data ? data.title : ""}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="80rem"
          margin="auto"
          justifyContent="center"
          alignItems="center"
        >
          <WorkflowLeft data={data} color={color} />
          <WorkflowRight data={data} color={color} />
        </Box>
      </Element>
    </div>
  );
};

export default Workflow;
