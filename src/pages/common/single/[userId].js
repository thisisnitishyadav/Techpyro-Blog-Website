import Block2 from '@/app/Components/Block/Block2'
import Card6 from '@/app/Components/Card/Card6'
import { Data1 } from '@/app/Components/Constants/Data1'
import Crousel1 from '@/app/Components/Crousel/Crousel1'
import Footer from '@/app/Components/Footer/Footer'
import Navbar2 from '@/app/Components/Navbar/Navbar2'
import axios from 'axios'

import React, { useEffect, useState } from 'react'

const Home = () => {

const[myData , setMyData]=useState([]);

  useEffect(()=>{
    let id =window.location.pathname.slice(-24);
    axios
    .get(`https://api.techpyro.com/api/userapp/blog/get/${id}`)
    .then((res) =>{
        console.log(res)
         setMyData(res.data.data)
    }
    );
 console.log(window.location.pathname.slice(-24));

  },[]);
  return (
    <>
      <Navbar2/>
      <Block2 myData={myData}/>
      <Card6 myData={myData} />
      <Crousel1 sliderData={Data1}/>
      <Footer />
    </>
  )
}

export default Home
