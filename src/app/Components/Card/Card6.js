import { useTheme } from '@emotion/react'
import { KeyboardArrowRight } from '@mui/icons-material'
import { Button, Card, CardMedia, styled, Typography, useThemeProps } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'350px',
  height:'400px',
  // backgroundColor:'#F2F2F2',
  borderRadius:'0px',
  // boxShadow:'none',
 

  [theme.breakpoints.down('md')]: {
    width:'100vw',
    height:'450px',
    flexDirection:'column',
    // paddingTop:'50px',
    // gap:'50px',
    borderRadius:'10px',
  },
  [theme.breakpoints.down('sm')]: {
    width:'100%',
    height:'400px',
    flexDirection:'column',
    // paddingTop:'50px',
    borderRadius:'10px',
    // gap:'50px',
  },
 
}));
const Card6 = ({myData}) => {
    const theme = useTheme();
 
  return (
    <>
  <Box sx={{display:'flex',justifyContent:'center'}}>
    <Typography sx={{fontSize:'25px',fontWeight:'600',margin:'20px'}}>{myData.title}</Typography>
  </Box>



    <Box sx={{display:'flex',justifyContent:'center'}}>

 

      
      <CardBox >
      <Box sx={{height:{xs:'70%',sm:'80%',md:'60%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image={myData&&myData.sections&&myData.sections.length!==0?myData.sections[0].url.length!==0&&myData.sections[0].url[0].path:"/images/blog9.jpg"}
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'40%',sm:'40%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',textAlign:'center'}}>
       
       <Typography sx={{color:'black',marginTop:'10px',fontFamily:'revert'}}>Techpyro Product</Typography>
        
       
       
       </Box>
       <Box sx={{height:{xs:'20%',sm:'20%',md:'10%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',textAlign:'center'}}>
       <Button variant='contained' sx={{backgroundColor:'white',fontSize:'15px',color:'black',borderRadius:'0px',"&:hover":{backgroundColor:'black',color:'white'},width:'100%',border:'3px solid black'}}>SHOP</Button>
       </Box>
      
      </CardBox>

       </Box>
       

       <Box sx={{display:'flex',justifyContent:'center'}}>
        <Typography sx={{width:'700px',margin:'20px'}}></Typography>
       </Box>


      
    </>
  ) 
}

export default Card6
