import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
const Quotes = () => {
  const [state, setState] = useState({
    UIUXDesign: true,
    WebsiteDevelopment: false,
    WebsiteDevelopmentandDesign: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { UIUXDesign, WebsiteDevelopment, WebsiteDevelopmentandDesign } = state;
    const backg={
        backgroundImage: "url('/images/Quote/quote.png')",
        backgroundRepeat: "no-repeat",
        width: "90%",
        backgroundSize:'cover',
        height: "600px",
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'20px',
        margin:'50px',
        // margin:'20px'
      }
    const backgm={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'white',
        width:'65%',
        height:'95%',
    }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',flexDirection:'column', margin:"auto",maxWidth:"100rem"}}>
        <Typography variant='h3' sx={{color:'black',marginTop:'40px'}}>Requesting for a Quote</Typography>
        <div style={backg}>
        <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%' width="30%">
            <Box paddingTop="20px" height="50%" display="flex" justifyContent='space-evenly' flexDirection='column'>
            <Box><Typography variant="h6" sx={{color:'white'}}>Fill up the form and our team will get back to you within 24 Hrs</Typography></Box>
            <Box display='flex' flexDirection='row'>
            <Box backgroundColor='#C4F0AB' height='30px' width= '30px' marginRight="7px" borderRadius='20%' display='flex' alignItems='center' justifyContent='center'><AiOutlineMessage color='#153240' fontSize='1.25rem'/></Box>
            <Box>
                <Typography variant='h6' sx={{color:'white'}}>&nbsp;Chat to us</Typography>
                <Typography sx={{color:'white'}}>Our Friendly team is here to help</Typography>
                <Typography sx={{color:'white'}}>Kartikeygupta201@gmail.com</Typography>
            </Box>
            </Box>
            <Box display='flex' flexDirection='row'>
            <Box backgroundColor='#C4F0AB' height='30px' width= '30px' marginRight="7px" borderRadius='20%' display='flex' alignItems='center' justifyContent='center'><IoMdCall fontSize='1.25rem'/></Box>
            <Box display='flex' flexDirection='column'>
                <Typography variant="h6" sx={{color:'white'}}>Call to us</Typography>
                <Typography sx={{color:'white'}}>Mon - Fri from 10am to 6pm IST</Typography>
                <Typography sx={{color:'white'}}>Kartikeygupta201@gmail.com</Typography>
            </Box>
            </Box>
            </Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-evenly' paddingBottom='20px' width="50%">
                  <CiLinkedin color="#C4F0AB" fontSize='20px' sx={{paddingRight:"10px"}} />
                  <CiTwitter color="#C4F0AB" fontSize='20px' paddingLeft="10px"/>
                  <CiInstagram color="#C4F0AB" fontSize='20px' paddingLeft="10px" />
                  <FaWhatsapp color="#C4F0AB" fontSize='20px' paddingLeft="10px"/>
            </Box>
           </Box>
           <Box style={{backgroundColor:'white' ,width:'65%' ,height:'95%',borderRadius:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            
             <Box style={{color:'black',width:'80%',display:'flex',flexDirection:'column',justifyContent:'space-between',height:'90%'}}>
              <Typography variant='h4' style={{width:'70%'}}>Got ideas? Weve got the skills. Lets team up.</Typography>
              <Typography variant='subtitle1'>Tell us more about yourself and what youve got in mind?</Typography>
              <Box style={{width:'100%'}}>
              <TextField id="standard-basic" label="Name" variant="standard" style={{width:'100%'}} />
              </Box>
              <Box style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <TextField id="standard-basic" label="Email" variant="standard" style={{width:'48%'}}/>
              <TextField id="standard-basic" label="Phone" variant="standard" style={{width:'48%'}}/>
              </Box>
              <Typography variant='subtitle1'>Tell us a bit about the project</Typography>
              <TextField id="standard-basic" variant="standard" style={{width:'100%'}}/>
              <Typography variant = 'h6'>How can we help</Typography>
              <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={UIUXDesign} onChange={handleChange} name="UIUXDesign" sx={{ 
              '& .MuiSvgIcon-root': { color: '#C4F0AB' },
              '& .Mui-checked': { color: '#153240' }
            }} />}
            label="UI/UX Design"
          />
          <FormControlLabel
            control={<Checkbox checked={WebsiteDevelopment} onChange={handleChange} name="WebsiteDevelopment" sx={{ 
              '& .MuiSvgIcon-root': { color: '#C4F0AB' },
              '& .Mui-checked': { color: '#153240' }
            }} />}
            label="Website Development"
          />
          <FormControlLabel
            control={<Checkbox checked={WebsiteDevelopmentandDesign} onChange={handleChange} name="WebsiteDevelopmentandDesign" sx={{ 
              '& .MuiSvgIcon-root': { color: '#C4F0AB' },
              '& .Mui-checked': { color: '#153240 !important'  }
            }} />}
            label="Website Development and Design"
          />
        </FormGroup>
              <Button width="80%" sx={{backgroundColor:"black",color:"#C4F0AB"}}>Request a Quote</Button>
              </Box>

           </Box>
        </div>
    </div>
  )
}

export default Quotes