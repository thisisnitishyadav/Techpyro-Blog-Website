import { addblog } from '@/app/redux/apiCalls';
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Block2 = () => {
 
 
 
   
  return (
    <>
   
    <Box>
     
      <Box sx={{margin:{xs:'20px',sm:'30px',md:'100px 200px 0px 200px'}}}>
        <Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>PRODUCT REVIEWS</Typography>
        <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'20px',sm:'30px',md:'40px'},fontFamily:'fantasy'}}>I AM AN EDITOR AND KAY BEAUTY'S NEW LINE OF LIPSTICKS MAKE FOR THE PERFECT GALETINE’S DAY PRESENT</Typography>
        
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography>by Rupesh Mandal</Typography>
            <Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>991 views</Typography>
        </Box>
      </Box>

     
      <Box sx={{display:{xs:'none',sm:'none',md:'flex'},justifyContent:'center',marginTop:'100px',padding:'20px'}}>
        <img src=''/>
      </Box>
    

      <Box sx={{display:'flex',justifyContent:'center',margin:{xs:'20px',sm:'30px',md:'0px 200px'}}}>
         <Typography></Typography>
      </Box>
       
    </Box>
 
    </>
  )
}

export default Block2
