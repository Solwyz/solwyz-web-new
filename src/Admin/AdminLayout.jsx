import React, { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import AdminLogin from './AdminLogin/AdminLogin'

function AdminLayout() {


    const [token, setToken] = useState(localStorage.getItem('token'))


    return (
        <div>
        {token ?
        <div className='flex font-manrope'>
            <Sidebar />
            <div className='w-full'>
                <Header />
                <div className='p-6 ml-[283px]'>
                    <Outlet />
                </div>
            </div>
        </div> : <AdminLogin setToken={setToken} />
        }
        </div>
    )
}

export default AdminLayout
