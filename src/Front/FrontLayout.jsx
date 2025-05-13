import React from 'react'
import Header from './Sections/Header/Header'
import Footer from './Sections/Footer/Footer'
import { Outlet } from 'react-router-dom'

function FrontLayout() {
  return (
    <div className='bg-bgColor'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default FrontLayout
