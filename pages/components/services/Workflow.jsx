import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react'
import ButtnRequest from '../common/ButtnRequest';
import {GiArchiveResearch} from 'react-icons/gi'
import {MdOutlinePermIdentity} from 'react-icons/md'
import {GiWireframeGlobe} from 'react-icons/gi'
import {SiProtodotio} from 'react-icons/si'
import WorkflowLeft from './WorkflowLeft';
import WorkflowRight from './WorkflowRight';
const Workflow = ({data,color}) => {
    // console.log(data.background);
    const background=data&&{
            backgroundImage: `url(${data.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:'cover',
            width: "100%",
    }
    const textcolor={
        color:color,
    }
  return (
     <div style={background}>
         <Box display="flex" flexDirection="column" maxWidth="80rem" margin="auto" justifyContent='center' alignItems="center">
                <WorkflowLeft data={data} color={color}/>
                <WorkflowRight data={data} color={color}/>
            </Box>
    </div>
  )
}

export default Workflow