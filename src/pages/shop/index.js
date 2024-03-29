
import Navbar3 from '@/app/Components/Navbar/Navbar3'

import { addblog } from '@/app/redux/apiCalls'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Card9 from '@/app/Components/Card/Card9'

const Home = () => {
  const [query,setQuery]=useState();
  const [blog, setBlog] = useState(null)
  const blogs = useSelector((state) => state.blog?.blogs);
  const [limit, setLimit] = useState(9)
  // setBlog(blogs)
  const dispatch = useDispatch() 
  useEffect(()=>{
      setBlog(blogs)
    
   addblog(query,limit, dispatch)
  }, [ query,limit,dispatch])

  const router = useRouter()


  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/home`)
  };
  return (
    <>
     <Navbar3 />
      <Box sx={{marginLeft:'200px',display:'flex',flexDirection:'column',gap:'60px',marginTop:'100px'}}>
        <Box sx={{display:'flex',cursor:'pointer'}}>
          <Typography sx={{fontSize:'16px',fontWeight:'600'}} onClick={handleClick}>HOME / </Typography>
          <Typography sx={{fontSize:'16px',fontWeight:'600'}}>WEBSITES / </Typography>
          <Typography sx={{fontSize:'16px',fontWeight:'600',color:'rgba(0,0,0,0.3)'}}>SHOP</Typography>
        </Box>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'25px',sm:'30px',md:'40px'},fontFamily:'fantasy'}}>SHOP</Typography>
      </Box>
      <Card9 setBlog = {setBlog} blog={ blog} setQuery={setQuery} query={query}/>
    </>
  )
}

export default Home
