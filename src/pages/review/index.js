import Block2 from '@/app/Components/Block/Block2'
import Card6 from '@/app/Components/Card/Card6'
import { Data1 } from '@/app/Components/Constants/Data1'
import Crousel1 from '@/app/Components/Crousel/Crousel1'
import Footer from '@/app/Components/Footer/Footer'
import Navbar2 from '@/app/Components/Navbar/Navbar2'

import React from 'react'

const index = () => {
  return (
    <>
      <Navbar2/>
      <Block2 />
      <Card6 />
      <Crousel1 sliderData={Data1}/>
      <Footer />
    </>
  )
}

export default index
