import React, { useEffect, useState } from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { useRouter } from 'next/router';
// import axios from 'axios';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addblog } from '@/app/redux/apiCalls';




const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'350px',
  height:'350px',
  // backgroundColor:'#F2F2F2',
  borderRadius:'0px',
  boxShadow:'none',
  "&:hover":{
      boxShadow:"2px 2px 2px 2px rgba(145, 145, 145, 0.2)"
  },
  [theme.breakpoints.down('md')]: {
    width:'100vw',
    height:'450px',
    flexDirection:'row',
    // paddingTop:'50px',
    // gap:'50px',
    borderRadius:'10px',
  },
  [theme.breakpoints.down('sm')]: {
    width:'100%',
    height:'100px',
    flexDirection:'row',
    // paddingTop:'50px',
    borderRadius:'0px',
    // gap:'50px',
  },
 
}));
const Card2 = () => {
  // console.log(item)
    const theme = useTheme();
    

  const router = useRouter()
  

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/review`)
  }
 
  
  const blogs = useSelector((state) => state.blog.blogs);
  const [query,setQuery]=useState();
 const [limit, setLimit] = useState(6) ;
  
  // setBlog(blogs)
  const dispatch = useDispatch();
  useEffect(()=>{
    setLimit(6)
    addblog(query,limit, dispatch)
      
        console.log(blogs);
       
    },[])
 

  return (
    <>



     <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},justifyContent:'space-between',alignItems:'center',margin:{xs:'50px 0px 20px 0px',sm:'50px 0px 20px 0px',md:'100px 200px 0px 200px'}}}>
        <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'25px',sm:'30px',md:'40px'},fontFamily:'fantasy'}}>WEBSITES</Typography>
        <Typography sx={{display:'flex',alignItems:'center'}}>READ ALL WEBSITES<KeyboardArrowRight /></Typography>
    </Box>
    <Box sx={{height:'50px',borderTop:'0.5px solid black',borderBottom:'1px solid black',margin:'50px 200px',display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'30px'}}>
<Typography sx={{fontWeight:'400'}}>Websites Topics:</Typography>
<Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>RESTAURENT</Typography>
<Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>EDUCATION</Typography>
<Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>SHOP</Typography>
<Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>E-COMMERCE</Typography>
<Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>OTHERS</Typography>

    </Box>
 

<Box sx={{display:'flex',justifyContent:'center'}}>

 

      <Box sx={{margin:{xs:'20px 0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'30px', flexWrap:"wrap"}}>
        {blogs&&blogs.data&&blogs.data.data && blogs.data.data.map((item)=>(
      
          
          <CardBox onClick={handleClick}>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'70%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}>
      <CardMedia
        sx={{height:'100%'}}
          component="img"
          image={item.sections[0].url[0]}
          alt="green iguana"
        />
       
       
     </Box>
     <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column'}}}>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'100%',sm:'60%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'10px 0px 0px 10px',sm:'0px',md:'10px'}}}>
         
       <Typography sx={{color:'#FC27A4',marginTop:'10px'}}>{item.sections[0].type}</Typography>
        <Typography sx={{fontSize:{xs:'16px',sm:'20px',md:'20px'},fontWeight:'600',marginTop:{xs:'0px',sm:'0px',md:'10px'}}}>{item.title}</Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'30%',sm:'30%',md:'30%'},width:{xs:'10%',sm:'10%',md:'100%'},display:'flex',padding:{xs:'0px 10px 10px 10px',sm:'0px 10px',md:'10px 0 0 10px'},textAlign:'center'}}>
       
       <Button variant='contained' sx={{backgroundColor:'purple',fontSize:'15px',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'black'}}}>{item.category}</Button>
       </Box>
       </Box>
      
      </CardBox>
      
      ))
      }
      
   




     
       </Box>
       
    
       </Box>
   
       
       </>
       
  )
    }
export default Card2
