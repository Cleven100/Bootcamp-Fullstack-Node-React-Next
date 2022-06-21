import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

const MainLayout = () => {
  return (
         <div>
             <Sidebar />
             <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                </div>

             </div>
        </div>
  )
}

export default MainLayout