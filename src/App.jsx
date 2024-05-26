import React from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
const App = () => {
  return (
    <div className='h-screen bg-black'>
    <div className='h-[90%] flex'>
    <Sidebar/>
    <Display/>
    </div>
    
    <Player/>
    <audio preload='auto'></audio>
    
      
    </div>
  )
}

export default App
