import React from 'react'
import { Box, display, Stack } from '@mui/system'
import { Button, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import OnSubmitRedirect from '../common/OnSubmitRedirect'
import Link from 'next/link'
const Hero = () => {
  // console.log(OurDomains)
  const buttonStyle={
    backgroundColor: '#C4F0AB',
      color: '#153240',
      borderRadius: '18px',
      padding: '8px 15px',
      width:'40%'
}
 const boxes ={
   padding:'10px 0px'
 }
 const styles = {
    boxes :{
    padding:'20px'
  }
 }
 const backg={
  backgroundImage: "url('/images/Homepage/HomepageHero.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  width:'100%',
  backgroundPosition:'center',
  minHeight: "900px",
  display:'flex',
  flexDirection:'column',  
}
 const imagesty={
  width:'35%',
 }
 const color = '#0C2937'
  return (
    <Stack sx={backg}>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'  maxWidth='80rem'
  margin='auto'>
        <Box display='flex' flexDirection='column' sx={{width:'60%',padding:'60px 0px'}}>
            <Box style={boxes}>
            <Typography variant='h3' sx={{color:'white'}}>Creating a seamless online experience for your brand</Typography>
            </Box>
            <Box style={boxes}>
            <Typography variant='h6' sx={{color:'white'}}>We are passionate about crafting exceptional digital experiences. We specialize in creating custom websites that are both visually stunning and highly functional, designed to provide the best possible user experience for our clients customers.</Typography>
            </Box>
            <Box style={boxes}>
            <Link href="/plans" >
            <Button style={buttonStyle}>Request a Quote</Button>
            </Link>
            </Box>
        </Box>
        <img src="/images/Homepage/homepagelegend.svg" alt="My Image" style={imagesty}/>        
        </Box>
        <Box padding='0px 75px 230px 75px'  maxWidth='100rem'
  margin='auto'>
        <OnSubmitRedirect color={color}/>
        </Box>
    </Stack>
  )
}

export default Hero