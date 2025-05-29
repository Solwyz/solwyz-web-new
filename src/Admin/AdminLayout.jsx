import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
    return (
        <div className='flex font-manrope'>
            <Sidebar />
            <div className='w-full'>
                <Header />
                <div className='p-6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
