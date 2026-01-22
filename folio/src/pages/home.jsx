import React from 'react'
import Project from '../sections/project'
import Skills from '../sections/skill'
import Hero from '../sections/hero'
import About from '../sections/about'
import Navbar from '../component/layout/navbar'
import Contact from '../sections/contact'
import Footer from '../component/layout/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Hero/>
         <About/>
        <Project/>

         <Skills/>
       
        <Contact/>
        <Footer/>
       
      
    </div>
  )
}

export default Home
