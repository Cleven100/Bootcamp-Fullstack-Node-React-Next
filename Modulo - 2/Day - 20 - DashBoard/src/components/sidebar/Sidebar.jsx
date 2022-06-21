import React, { useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'


function Sidebar() {
   
  const [activeIndex, setActiveIndex] = useState(0)

  return (

    <div className='sidebar'>
      <div className="sidebar__log">
        <img src={images.logo} alt="" />
        <div className="sidebar-close">
          <i className='bx bx-x'></i>
        </div>
      </div>
         <div className="sidebar__menu">
           {
              sidebarNav.map((nav, index) => (
                <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
                  <div className="sidebar__menu__item__icon">
                    {nav.icon}
                  </div>
                  <div className="sidebar__menu__item__txt">
                    {nav.text}
                  </div>

                </Link>
              ))
           }
           <div className="sidebar__menu__item">
             <div className="sidebar__menu__item__icon">
               <i className='bx bx-log-out'></i>
             </div>
             <div className="sidebar__menu__item__txt">
               Logout
             </div>
           </div>
         </div>
      </div>
  )
}

export default Sidebar