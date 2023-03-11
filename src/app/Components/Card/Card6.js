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
const Card6 = () => {
    const theme = useTheme();
 
  return (
    <>
  <Box sx={{display:'flex',justifyContent:'center'}}>
    <Typography sx={{fontSize:'25px',fontWeight:'600',margin:'20px'}}>My Honest Thoughts</Typography>
  </Box>



    <Box sx={{display:'flex',justifyContent:'center'}}>

 

      
      <CardBox >
      <Box sx={{height:{xs:'70%',sm:'80%',md:'80%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/Images/blog7.gif"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'40%',sm:'40%',md:'10%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',textAlign:'center'}}>
       
       <Typography sx={{color:'black',marginTop:'10px',fontFamily:'revert'}}>Kay Beauty Matte Liquid Lipstick</Typography>
        
       
       
       </Box>
       <Box sx={{height:{xs:'20%',sm:'20%',md:'10%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',textAlign:'center'}}>
       <Button variant='contained' sx={{backgroundColor:'white',fontSize:'15px',color:'black',borderRadius:'0px',"&:hover":{backgroundColor:'black',color:'white'},width:'100%',border:'3px solid black'}}>SHOP</Button>
       </Box>
      
      </CardBox>

       </Box>
       

       <Box sx={{display:'flex',justifyContent:'center'}}>
        <Typography sx={{width:'700px',margin:'20px'}}>A luxuriant pop of matte that hugs the lips imbued with ‘Kare For You’ ingredients like grapeseed and red raspberry, giving it an adequate dose of hydration— this line of liquid lipstick is the perfect healthy relationship for your lips. I had the immense pleasure of experiencing a one-stroke application with a formidable formula (in the shade Friendship)  which stayed intact all day long, despite devouring an assortment of snacks and beverages, on a day out. People who know me up close and personal, bear witness to the fact that I need my joe to power through a given day. However, my love for a nice brew in no way outweighs my biggest pet peeve— lipstick stains on my mug, which is why I was delighted to find none whilst wearing this incredible product. Now I may be sailing solo, but for all the ladies waltzing away the evening with their SOs on the 14th, you ought to grab these lipsticks as they are kiss-proof (wink, wink), smudge-proof and transfer-proof! So, say goodbye to touch-ups. The range of 12 hues is striking, inclusive and has an amazing pay-off. The formulation sits in a beautiful tube with a flexi-applicator which allows for a great handle over the product— it shapes, swirls and contours seamlessly, as if at your beck and call! Moreover, wearing the lip colour gave me an instant boost of confidence, helped channel assertiveness and assimilate my courage of conviction, an energy that I wish to manifest for my girl gang as well! All and all, this a great new addition to the Kay Beauty line and no matter how you wish to celebrate this year, make sure you leave a mark with these stellar colours.</Typography>
       </Box>


      
    </>
  ) 
}

export default Card6
