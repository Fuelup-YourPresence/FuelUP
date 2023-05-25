import { Box, Button } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';
import Image from 'next/image';
import ButtnRequest from '../common/ButtnRequest';
import {GiArchiveResearch} from 'react-icons/gi'
import {MdOutlinePermIdentity} from 'react-icons/md'
import {GiWireframeGlobe} from 'react-icons/gi'
import {SiProtodotio} from 'react-icons/si'
import Link from 'next/link';
const WorkflowLeft = ({data,color}) => {
    const colors = (color==="#D9D9D9")?"#C4F0AB":"#153240";
  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
    {data&&
    <Box display="flex" flexDirection="row"  padding="60px 0px" width="80%">
       <Box display="flex">
       <img src={data.titleurl} alt="My Image" width="100%"/>
       </Box>
       <Box display="flex" flexDirection="column" marginLeft="100px" justifyContent='center'>
        <Box display="flex" flexDirection="row">
          <Typography variant="h4"  color='rgba(123, 153, 106, 0.5)'>{data.id}</Typography>
          <Typography alignItems="center" display="flex" marginLeft="20px" variant="h6"color={color} fontWeight={700}>{data.title}</Typography>
        </Box>
        <Box padding="15px 0px 15px 0px">
            <Typography variant="h5"color={color}>{data.titleheadline}</Typography>
        </Box>
        <Box padding="15px 0px 15px 0px">
            <Typography variant="subtitle2"color={color}>{data.titlesubheadline}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent='space-between' >
        <Box display="flex" flexDirection="column"  >
                <Box display="flex" flexDirection="row" alignItems="center" paddingTop="10px">
                <Box backgroundColor='#C4F0AB' width='30px' height='30px' display='flex' justifyContent='center' alignItems='center' borderRadius='8px'>
                <GiArchiveResearch color={(color==='#D9D9D9')?'#153240':color}/>
                </Box>
                <Typography color={color} fontWeight={700}>&nbsp;{data.keypoints[0]}</Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" paddingTop="20px">
                <Box backgroundColor='#C4F0AB' width='30px' height='30px' display='flex' justifyContent='center' alignItems='center' borderRadius='8px'>
                <MdOutlinePermIdentity color={(color==='#D9D9D9')?'#153240':color}/>
                </Box>
                <Typography color={color} fontWeight={700}>&nbsp;{data.keypoints[1]}</Typography>
                </Box>
        </Box>
        <Box display="flex" flexDirection="column" paddingTop="10px">
        <Box display="flex" flexDirection="row" alignItems="center">
        <Box backgroundColor='#C4F0AB' width='30px' height='30px' display='flex' justifyContent='center' alignItems='center' borderRadius='8px'>
                <GiWireframeGlobe color={(color==='#D9D9D9')?'#153240':color}/>
                </Box>
                <Typography color={color} fontWeight={700}>&nbsp;{data.keypoints[2]}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" paddingTop="20px">
            <Box backgroundColor='#C4F0AB' width='30px' height='30px' display='flex' justifyContent='center' alignItems='center' borderRadius='8px'>
          <SiProtodotio color={(color==='#D9D9D9')?'#153240':color}/>
          </Box>
                <Typography color={color} fontWeight={700}>&nbsp;{data.keypoints[3]}</Typography>
            </Box>
        </Box>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="flex-start" paddingTop="20px">
        <Link href="/plans" >
            <Button style={{backgroundColor:colors,color:(colors=='#C4F0AB')?'#153240':'white',width:'100%',borderRadius:'5px',padding:'8px',fontWeight:'bold'}}>Request a quote</Button>
            </Link>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Typography marginLeft='40px' color={color}>Chat with us</Typography>
            </Box>
        </Box>
       </Box>
    </Box>
}
</div>
  )
}

export default WorkflowLeft