
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TypesOffering from './TypesOffering'
import offering from '@/data/offering'
const OurServices = () => {
    const divs={
        paddingTop:'20px',
        paddingBottom:'20px',
        color:'#153240',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }
    const divs_child = {
        width:'45%',
    }
    const topdiv={
        paddingTop:'90px',
        paddingBottom:'20px',
        textAlign:'left',
        color:'#153240',
        display:'flex',
        width:'100%'
    }
    const offeringdiv={
        display:'flex',
        flexDirection:'row',
        paddingTop:'50px',
        color:'#153240',
        paddingBottom:'40px'
        // width:'90%'
    }
    const wrapdiv={
        display:'flex',
        flexDirection:'column',
        paddingTop:'50px',
        color:'#153240',
        margin:"auto",
        maxWidth:"100rem"
    }
  return (
    <div>
        <Box>
           <Box display="flex"  flexDirection="column" padding="40px" alignItems="center" maxWidth="80rem" margin="auto">
            <Box style={wrapdiv}>
            <Box style={topdiv}>
                <Typography variant="subtitle2">Our Services</Typography>
            </Box>
            <Box style={divs}>
                <Box style={divs_child}>
                <Typography variant="h4">Full Service Website Development Agency</Typography>
                </Box>
                <Box style={divs_child}>
                 <Typography variant='subtitle2'>Vestibulum ac diam sit amet quam vehicula elementum t neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
            <Box style={offeringdiv}> 
                {offering.map((data,id)=>(
                    <Box key={id}>
                   <TypesOffering data={data}/>
                   </Box>
                )
                )}
            </Box>
            </Box>
            </Box>
           </Box>
        </Box>
        </div>
  )
}

export default OurServices