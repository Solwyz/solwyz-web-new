import React from 'react'
import listDotBlue from '../../../assets/icons/Ellipse 1200.svg'
import { useNavigate } from 'react-router-dom'

function JobApplications() {

  const navigate = useNavigate();

  const handleDepartmentClick = (id) => {
    navigate(`/admin/jobapplications/${id}`)
  }

  return (
    <div>
      <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
        <div>
          <div className='text-[20px] text-[#000000] font-semibold'>All Departments</div>
          <div className='text-[16px] text-[#858585] font-medium'>See all job categories</div>
        </div>
      </div>

      <div className='mt-6'>

        <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDepartmentClick('1')}>
          <div className='flex items-center justify-between w-[35%]'>
            <div className='text-[16px] font-normal'>Digital Marketing</div>
            <div className='text-[16px] font-normal text-[#767676]'>4 Vaccancy</div>
          </div>
          <div className='flex items-center justify-center gap-2 mr-6'>
            <img src={listDotBlue} className='w-2 h-2'></img>
            <div className='text-[16px] font-normal text-[#2A2A2A]'>18 Applications</div>
          </div>
        </div>

        <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDepartmentClick('2')}>
          <div className='flex items-center justify-between w-[35%]'>
            <div className='text-[16px] font-normal'>Digital Marketing</div>
            <div className='text-[16px] font-normal text-[#767676]'>4 Vaccancy</div>
          </div>
          <div className='flex items-center justify-center gap-2 mr-6'>
            <img src={listDotBlue} className='w-2 h-2'></img>
            <div className='text-[16px] font-normal text-[#2A2A2A]'>18 Applications</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default JobApplications
