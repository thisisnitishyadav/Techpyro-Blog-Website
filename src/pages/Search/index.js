import { Close, Search } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Home = () => {

  // const [open, setOpen] = useState(true);
  

  // const handleClose = ()=>{
  //   console.log('ghj')
  //     setOpen(false);
  // }
  return (
    <>
      <Box sx={{display:'flex',gap:'10px',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
        <Box sx={{display:'flex',alignItems:'center'}}>
        <Search sx={{fontSize:'35px'}}/>
        <TextField variant='filled' label='what are you looking for?' sx={{width:'280px'}}></TextField>
        </Box>
        <Close sx={{fontSize:'40px'}}  />
      </Box>
    </>
  )
}

export default Home
