import React, { useState } from 'react'
import {
    
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
    List,
    ListItem,
    
    Typography,
  } from "@mui/material";
import { ArrowDropDown, Close, ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/system';



export default function MenuButtons({setOpen}) {


  const handleClose = ()=>{
    
      setOpen(false);
  };
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'space-between',padding:'20px',alignItems:'center'}}>
      <Typography sx={{fontSize:'30px',fontWeight:'600'}}>Techpyro</Typography>
      <Close  onClick={handleClose}/>
    </Box>
    <List component="nav"  sx={{width:'320px',marginTop:'0px',padding:'20px',gap:'10px',display:'flex',flexDirection:'column'}}>
     

     
      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary 
        expandIcon={<ExpandMore />}
        >
          <Typography sx={{fontSize:'18px'}}>Websites </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>
      

       
      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography sx={{fontSize:'18px'}}>App </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>
     

      
      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography sx={{fontSize:'18px'}}>Dashboard </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>
     

      
      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography sx={{fontSize:'18px'}}>UI/UX Design </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>
       
       
      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography sx={{fontSize:'18px'}}>Digital Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>
      
    
      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography sx={{fontSize:'18px'}}>Graphic Design</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography sx={{fontSize:'18px'}}>Logo Design</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography sx={{fontSize:'18px'}}>Content Writing</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography>Restaurent</Typography>
          <Divider/>
          <Typography>Shop</Typography>
          <Divider/>
          <Typography>Education</Typography>
          <Divider/>
          <Typography>E-Commerce</Typography>
          <Divider/>
          <Typography>Others</Typography>
          <Divider/>
        </AccordionDetails>
      </Accordion>
      <Divider/>


      <ListItem button sx={{display:'flex',justifyContent:'space-between'}}>
      <Typography sx={{color:'black',fontSize:'18px',"&:hover":{color:'red'}}}>Shop@Techpyro</Typography>
      
      </ListItem>
      
    </List>
    </>
  )
}
