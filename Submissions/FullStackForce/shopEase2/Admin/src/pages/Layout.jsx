import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className='flex '>
        <Sidebar />
        <div className='flex-1 md:ml-[25%] ml-0 p-6 '>
            <Outlet />

        </div>

        
      
    </div>
  )
}

export default Layout
