import React from 'react'
import Header from '../components/Header'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

const Event = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex flex-1'>
            <Player />
            <Sidebar />
        </main>
        
    </div>
    
  )
}

export default Event