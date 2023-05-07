import React from 'react'
import ourDomains from '../../../data/ourDomains'
import Left from '../common/Left'
import Right from '../common/Right'
import { Box, Typography } from '@mui/material'
const Ourservices=()=>{
  const box={
    padding:'20px',
    
  }
  const box1 = {
     width:'80%',
  }
  const heading={
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

  }
  // console.log(OurDomains);
  return(
    <>
    <div style={{...heading,flexDirection:'column',maxWidth:'80rem',margin:'auto'}}>
    <div style={{...heading,paddingTop:'40px'}}>
    <Typography width='48%' variant='h3' fontWeight='700' color="rgba(21, 50, 64, 1)">We build websites that work as hard as you do.</Typography>
      <Typography width='48%'variant='h6' color="rgba(7, 17, 31, 1)">At our company, we provide a range of services that are tailored to meet the unique needs of our clients. Our team of experts specializes in creating custom websites which are highly functional and optimized for performance.</Typography>
    </div>
    <Box style={box1}>
    <div style={box}>
    <Left data={ourDomains[0]}/>
    </div>
    <div style={box}>
    <Right data={ourDomains[1]}/>
    </div>
    <div style={box}>
    <Left data={ourDomains[2]}/>
    </div>
    </Box>
    </div>
    </>

  )
}
export default Ourservices
