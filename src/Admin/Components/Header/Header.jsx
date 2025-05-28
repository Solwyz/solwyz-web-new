import React from 'react'
import Notificaton from "../../../assets/AdminHeader/Notification.svg"
import Profile from "../../../assets/AdminHeader/Profile.svg"

function Header() {
  return (
    <div className='bg-[#FFFFFF] shadow-lg py-[20px] px-9 h-[72px]'>
      <div className='flex justify-end items-center'>
        <div><img className='h-8 w-8' src={Notificaton} alt="" /></div>
        <div className='flex items-center '><img className='h-6 w-6 ml-10 mr-2' src={Profile} alt="" />Hi Admin....!</div>
      </div>
    </div>
  )
}

export default Header
