import React from 'react'
import Home from './pages/home'
import FloatingLines from './component/layout/LightPillar'
import SplashCursor from './component/layout/SplashCursor'

const App = () => {
  return (
    <div>
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black"> 
  <FloatingLines 
    enabledWaves="bottom,middle"
    // Array - specify line count per wave; Number - same count for all waves
    lineCount={2}
    // Array - specify line distance per wave; Number - same distance for all waves
    lineDistance={31}
    bendRadius={20.5}
    bendStrength={-7.5}
    interactive={true}
    parallax={true}
  />
  </div>


     
<SplashCursor className="z-0" />

      
      <Home/>
      
    </div>
  )
}

export default App
