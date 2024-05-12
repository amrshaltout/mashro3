import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MAIN from './Main/Main'
import Hero from './Hero/Hero'
import Nav from './Nav/Nav'





const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
       
        {children}
        {/* <Hero/>
        <HouseCard/>
        <MAIN/> */}

        <Footer />
       
    </>
  )
}

export default Layout