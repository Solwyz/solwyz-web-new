import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
      <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout
