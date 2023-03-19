import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{height:{xs:'450px',sm:'400px',md:'350px'},width:'100%',background:'purple',marginTop:{xs:'20px',sm:'30px',md:'50px'},display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',flexDirection:'column',justifyContent:'center',gap:'30px'}}>
           <Box sx={{height:{xs:'350px',sm:'300px',md:'200px'},width:{xs:'90%',sm:'90%',md:'50%'},background:'white',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
            <Box sx={{height:{xs:'100%',sm:'100p%',md:'200px'},width:{xs:'100p%',sm:'100%',md:'200px'},display:{xs:'flex',sm:'flex',md:'flex'},justifyContent:'center',alignItems:'center'}}>

               <img src='https://www.nykaa.com/beauty-blog/assets/bb-letterbox.png' style={{height:'100px',width:'100px'}}/>
            </Box>
               <Box sx={{padding:'20px',display:'flex',gap:{xs:'20px',sm:'30px',md:'40px'},flexDirection:'column'}}>
                  <Typography sx={{fontSize:'20px'}}>Get your daily dose of beauty inspo delivered to your inbox</Typography>
                  <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},gap:{xs:'30px',sm:'30px',md:'10px'}}}>
                    <TextField variant='standard' label='Enter your Email ID' sx={{width:{xs:'280px',sm:'300px',md:'300px'}}}></TextField>
                    <Button variant='contained' sx={{width:'150px',background:'#A70780',color:'white',borderRadius:'0px',"&:hover":{background:'black',color:'white'}}}>subscribe</Button>
                  </Box>
               </Box>
           </Box>
      </Box>
    </>
  )
}

export default Footer
