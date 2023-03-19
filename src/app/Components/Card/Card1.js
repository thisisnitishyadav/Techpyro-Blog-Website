import React, { useEffect, useState } from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { useRouter } from 'next/router';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addblog } from '@/app/redux/apiCalls';

import Skeleton from '@mui/material/Skeleton';

const CardBox = styled(Card)(({theme})=>({
  display:'flex',
flexDirection:'column',
width:'350px',
height:'350px',
// backgroundColor:'#F2F2F2',
borderRadius:'0px',
// boxShadow:'none',

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
const Card1 = () => {
  let [query,setQuery]=useState();
  const [skeltonStatus,setSkeltonStatus] = useState(true);
  let arr = [1,2,3,4,5,6];
  
  const router = useRouter()
  const blogs = useSelector((state) => state.blog.blogs);
 const [limit, setLimit] = useState(6) 
  
 
  // console.log(item)
    const theme = useTheme();
    


  const handleClick = (e,id) => {
    e.preventDefault()
    router.push(`/common/single/${id}`)
  }

  const fetchData = async () =>{
    setSkeltonStatus(true);
   let res = await addblog(query,limit, dispatch);
   setSkeltonStatus(false);
  }

  const dispatch = useDispatch()
  useEffect( ()=>{
   
    fetchData();
    
           
    },[])
 

  return (
    <>
    
 
{skeltonStatus?
  <Box sx={{display:'flex',justifyContent:'center'}}>

 

<Box sx={{margin:{xs:'20px 0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'30px', flexWrap:"wrap"}}>
  {arr.map((item)=>(

    
    <CardBox key={item.id} onClick={(e)=> handleClick(e,item.id)}>
<Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'70%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}>
<Skeleton variant="rectangular" sx={{height:'200px',width:'350px'}} />
 
 
</Box>
<Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column'}}}>
 <Box sx={{height:{xs:'100%',sm:'100%',md:'80%'},width:{xs:'100%',sm:'60%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'10px 0px 0px 10px',sm:'0px',md:'10px'}}}>
   
 
 <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
 </Box>
 <Box sx={{height:{xs:'30%',sm:'30%',md:'35%'},width:{xs:'10%',sm:'10%',md:'100%'},display:'flex',padding:{xs:'0px 10px 10px 10px',sm:'0px 10px',md:'10px 0 0 10px'},textAlign:'center'}}>
 
 <Skeleton variant="rectangular" sx={{height:'50px',width:'100px'}} />
 </Box>
 </Box>

</CardBox>

))
}







 </Box>
 

 </Box>
 
:
<Box sx={{display:'flex',justifyContent:'center'}}>

 

      <Box sx={{margin:{xs:'20px 0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'30px', flexWrap:"wrap"}}>
        {blogs&&blogs.data&&blogs.data.data && blogs.data.data.map((item)=>(
      
          
          <CardBox key={item.id} onClick={(e)=> handleClick(e,item.id)}>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'70%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}>
      <CardMedia
        sx={{height:'100%'}}
          component="img"
          image={item&&item.sections.length!==0?item.sections[0].url.length!==0&&item.sections[0].url[0].path:"/images/blog9.jpg"}
          alt="green iguana"
        />
       
       
     </Box>
     <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column'}}}>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'80%'},width:{xs:'100%',sm:'60%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'10px 0px 0px 10px',sm:'0px',md:'10px'}}}>
         
       
        <Typography sx={{fontSize:{xs:'16px',sm:'20px',md:'20px'},fontWeight:'600',marginTop:{xs:'0px',sm:'0px',md:'10px'}}}>{item.title}</Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'30%',sm:'30%',md:'35%'},width:{xs:'10%',sm:'10%',md:'100%'},display:'flex',padding:{xs:'0px 10px 10px 10px',sm:'0px 10px',md:'10px 0 0 10px'},textAlign:'center'}}>
       
       <Button variant='contained' sx={{backgroundColor:'purple',fontSize:'15px',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'black'}}}>{item.category}</Button>
       </Box>
       </Box>
      
      </CardBox>
      
      ))
      }
      
   




     
       </Box>
       
    
       </Box>
       


    }


       
    
     
       
       </>
       
  )
    }
export default Card1
