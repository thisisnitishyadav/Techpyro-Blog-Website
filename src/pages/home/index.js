import React from 'react'
import Navbar from '@/app/Components/Navbar/Navbar';
import Card1 from '@/app/Components/Card/Card1';
import Card2 from '@/app/Components/Card/Card2';
import Card3 from '@/app/Components/Card/Card3';
import Card4 from '@/app/Components/Card/Card4';
import Block1 from '@/app/Components/Block/Block1';
import Card5 from '@/app/Components/Card/Card5';
import Footer from '@/app/Components/Footer/Footer';
// import {  useSelector } from 'react-redux';
// import { addblog } from '@/app/redux/apiCalls';
const Home = () => {
 


  return (
    <>
      <Navbar/>
      <Card1/>
      <Card2 />
      <Card3 />
      <Card4  />
      <Block1/>
      <Card5/>
      <Footer/>
    </>
  )
}

export default Home
