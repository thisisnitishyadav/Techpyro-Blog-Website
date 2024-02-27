import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Block1 = () => {
  return (
    <>
      <Box sx={{height:{xs:'auto',sm:'auto',md:'350px'},width:'100%',background:'#B29ED8',marginTop:'50px',display:{xs:'flex',sm:'none',md:'flex'},alignItems:'center',flexDirection:'column',justifyContent:'center',gap:'30px'}}>
        <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'30px',sm:'30px',md:'35px'},fontFamily:'fantasy',margin:'20px'}}>TRENDING NOW</Typography>
        <Box sx={{display:'flex',gap:'20px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>BLOGS</Button>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>WEBSITES</Button>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>APPS</Button>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>DASHBOARDS</Button>
        </Box>

        <Box sx={{display:'flex',gap:'20px',flexDirection:{xs:'column',sm:'column',md:'row'},marginBottom:'30px'}}>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>UI/UX DESIGNS</Button>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>GRAPHIC DESIGNS</Button>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>DIGITAL MARKETING</Button>
        <Button variant='contained' sx={{width:'250px',background:'white',color:'black',borderRadius:'0px',fontSize:'20px',"&:hover":{background:'black',color:'white'}}}>LOGO DESIGNS</Button>
        </Box>
      </Box>
    </>
  )
}

export default Block1
