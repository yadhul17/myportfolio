import React from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom';
import FloatingLines from '../components/FloatingLines.js';
import ReactRotatingText from "react-rotating-text";
import TextPressure from '../components/TextPressure.js';

import Content from '../components/content.jsx';


const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Navbar />

       <div class="absolute">
      <ReactRotatingText items={["Hello", "Welcome", "React Rocks!"]} />
    </div>

     
  <FloatingLines
    linesGradient={["#E945F5","#2F4BC0","#E945F5","#ffffff","#ff0000","#000000"]}
    animationSpeed={3}
    interactive
    bendRadius={5}
    bendStrength={-0.5}
    mouseDamping={0.05}
    parallax
    parallaxStrength={0.2}
  />
</div>



    <Content/>


    



   
    
    </>
  )
}

export default Home

