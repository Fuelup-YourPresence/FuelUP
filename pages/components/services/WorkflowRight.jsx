import { Box, Typography } from "@mui/material";
import { GiArchiveResearch, GiWireframeGlobe } from "react-icons/gi";
import { MdOutlinePermIdentity } from "react-icons/md";
import { SiProtodotio } from "react-icons/si";

const WorkflowRight = ({ data, color }) => {
  const colors = color === "#D9D9D9" ? "#C4F0AB" : "#153240";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data && (
        <Box display="flex" flexDirection="row" width="80%" padding="60px 0px">
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" paddingTop="20px">
              <Typography variant="h7" color={color} fontWeight={600}>
                Our Workflow
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" paddingTop="20px">
              <Typography variant="h5" color={color} fontWeight={700}>
                We Love What we Do
              </Typography>
            </Box>
            <Box paddingTop="20px">
              <Typography variant="h3" color={color}>
                {data.workflowtitle}
              </Typography>
            </Box>
            <Box width="90%">
              <Typography variant="subtitle2" color={color}>
                {data.workflowsub}
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="80%"
            >
              <Box width="45%" paddingTop="20px">
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box
                    backgroundColor="#C4F0AB"
                    width="30px"
                    height="30px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                  >
                    <GiArchiveResearch
                      color={color === "#D9D9D9" ? "#153240" : color}
                    />
                  </Box>
                  <Typography color={color} fontWeight={700}>
                    &nbsp;{data.workflowkeypoints[0].workflowkeytitle}
                  </Typography>
                </Box>
                <Typography color={color}>
                  {data.workflowkeypoints[0].workflowkeytitledata}
                </Typography>
              </Box>
              <Box width="45%" paddingTop="20px">
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box
                    backgroundColor="#C4F0AB"
                    width="30px"
                    height="30px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                  >
                    <MdOutlinePermIdentity
                      color={color === "#D9D9D9" ? "#153240" : color}
                    />
                  </Box>
                  <Typography color={color} fontWeight={700}>
                    &nbsp;{data.workflowkeypoints[1].workflowkeytitle}
                  </Typography>
                </Box>
                <Typography color={color}>
                  {data.workflowkeypoints[1].workflowkeytitledata}
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="80%"
            >
              <Box width="45%" paddingTop="20px">
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box
                    backgroundColor="#C4F0AB"
                    width="30px"
                    height="30px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                  >
                    <GiWireframeGlobe
                      color={color === "#D9D9D9" ? "#153240" : color}
                    />
                  </Box>
                  <Typography color={color} fontWeight={700}>
                    &nbsp;{data.workflowkeypoints[2].workflowkeytitle}
                  </Typography>
                </Box>
                <Typography color={color}>
                  {data.workflowkeypoints[2].workflowkeytitledata}
                </Typography>
              </Box>
              <Box width="45%" paddingTop="20px">
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box
                    backgroundColor="#C4F0AB"
                    width="30px"
                    height="30px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                  >
                    <SiProtodotio
                      color={color === "#D9D9D9" ? "#153240" : color}
                    />
                  </Box>
                  <Typography color={color} fontWeight={700}>
                    &nbsp;{data.workflowkeypoints[3].workflowkeytitle}
                  </Typography>
                </Box>
                <Typography color={color}>
                  {data.workflowkeypoints[3].workflowkeytitledata}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <img src={data.workflowurl} alt="My Image" width="100%" />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default WorkflowRight;
