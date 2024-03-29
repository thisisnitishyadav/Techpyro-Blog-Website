import React, { useEffect, useState } from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, Pagination} from '@mui/material';
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

const Card11= () => {
  const theme = useTheme();
  // const [click, setClick] = useState(0)
 const blogs = useSelector((state) => state.blog.blogs);
 const [limit, setLimit] = useState(9);
 const [page,setPage]= useState(1); 
const [query,setQuery]=useState({"$and":[{"category":{"$regex":"app","$options":"i"}},{"subCategory":{"$regex":"restaurent","$options":"i"}}]});
 
const [skeltonStatus,setSkeltonStatus] = useState(true);
let arr = [1,2,3,4,5,6,7,8,9];

  // console.log(page)


  const router = useRouter()
  

  const handleClick = (e,id) => {
    e.preventDefault()
    router.push(`/common/single/${id}`)
  }
  
  const handlePage=(e, value)=>{
    e.preventDefault();
    console.log(value)
    setPage(value);
  }

const fetchData = async() => {
  setSkeltonStatus(true);
  let res = await  addblog(query,limit, dispatch,page);
  setSkeltonStatus(false);
}
 
  const dispatch = useDispatch()
  useEffect(()=>{
   fetchData();
    
  },[page])
 


  return (
    <>
    
 
{skeltonStatus?

<Box sx={{display:'flex',justifyContent:'center'}}>

 

<Box sx={{margin:{xs:'20px 0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'30px', flexWrap:"wrap"}}>
  {arr.map((item)=>(

    
<CardBox  key={item.id} onClick={(e)=> handleClick(e,item.id)}>
<Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'70%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}>
<Skeleton variant="rectangular" sx={{height:'200px',width:'350px'}} />
 
 
</Box>
<Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column'}}}>
 <Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'100%',sm:'60%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'10px 0px 0px 10px',sm:'0px',md:'10px'}}}>
   
 <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
 
 
 </Box>
 <Box sx={{height:{xs:'30%',sm:'30%',md:'30%'},width:{xs:'10%',sm:'10%',md:'100%'},display:'flex',padding:{xs:'0px 10px 10px 10px',sm:'0px 10px',md:'10px 0 0 10px'},textAlign:'center'}}>
 
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
      
          
      <CardBox  key={item.id} onClick={(e)=> handleClick(e,item.id)}>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'70%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}>
      <CardMedia
        sx={{height:'100%'}}
          component="img"
          image={item&&item.sections.length!==0?item.sections[0].url.length!==0&&item.sections[0].url[0].path:"/images/blog8.webp"}
          alt="green iguana"
        />
       
       
     </Box>
     <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column'}}}>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'60%'},width:{xs:'100%',sm:'60%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'10px 0px 0px 10px',sm:'0px',md:'10px'}}}>
         
       <Typography sx={{color:'#FC27A4',marginTop:'10px'}}>{item&&item.sections.length!==0&&item.sections[0].type&&item.sections[0].type}</Typography>
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
}



       <Box sx={{width:'100%',display:'flex',justifyContent:'center',height:'100px',alignItems:'center'}}>
      <Pagination count={5}  color={'primary'} size={'large'} onChange={handlePage}/>
       </Box>
   
       </>
       
  )
    }
export default Card11
