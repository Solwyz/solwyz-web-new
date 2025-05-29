import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import backArrow from '../../../assets/icons/arrow_back_ios_new.svg'
import editIcon from '../../../assets/icons/edit.svg'
import deleteIcon from '../../../assets/icons/delete (4).svg'
import deleteBigIcon from '../../../assets/Featured icon.svg'
import downArrow from '../../../assets/icons/arrow_back_ios_new (1).svg'

function DepartmentVacancyList() {

  const { id } = useParams();

  const navigate = useNavigate();

  const handleCreateClick = (id) => {
    navigate(`/admin/addvacancy/${id}`)
  }

  useEffect(() => {
    console.log("Department ID:", id);
  }, [])

  return (
    <div>

      <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
        <div>
          <div className='text-[20px] text-[#000000] font-semibold'>Digital Marketing</div>
          <div className='flex items-center gap-1 mt-2'>
            <img src={backArrow} className='w-4 h-4'></img>
            <div className='text-[16px] text-[#858585] font-medium'>Back</div>
          </div>

        </div>
        <div className='text-[16px] font-semibold text-[#FFFFFF] bg-[#04A391] w-fit h-fit px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={()=>handleCreateClick(id)}>
          Create
        </div>
      </div>

      <div className='mt-6'>
        <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-3 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2'>
          <div className='flex items-center justify-between w-[35%]'>
            <div className='text-[16px] font-normal'>Marketing Manager</div>
            <div className='text-[16px] font-normal'>5+ Years </div>
          </div>

          <div className='flex items-center justify-center gap-6'>
            <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(); }} />
            <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(); }} />
            <select className='text-[12px] font-semibold text-[#FFFFFF]  bg-[#1B5A96] px-6 py-2 rounded-lg  focus:outline-none appearance-none'>
              <option value="active" className='text-black bg-white'>Active</option>
              <option value="closed" className='text-black bg-white'>closed</option>
            </select>

          </div>
        </div>
        <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2'>
          <div className='flex items-center justify-between w-[35%]'>
            <div className='text-[16px] font-normal'>SEO Specialist</div>
            <div className='text-[16px] font-normal'>3+ Years </div>
          </div>
          <div className='flex gap-8'>
            <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(); }} />
            <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(); }} />
            <select className='text-[12px] font-semibold text-[#FFFFFF]  bg-[#1B5A96] px-6 py-2 rounded-lg  focus:outline-none appearance-none'>
              <option value="active" className='text-black bg-white'>Active</option>
              <option value="closed" className='text-black bg-white'>closed</option>
            </select>
          </div>
        </div>
        <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2'>
          <div className='flex items-center justify-between w-[35%]'>
            <div className='text-[16px] font-normal'>SEO Specialist Junior</div>
            <div className='text-[16px] font-normal'>1-2 Years </div>
          </div>
          <div className='flex gap-8'>
            <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(); }} />
            <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(); }} />
            <select className='text-[12px] font-semibold text-[#FFFFFF]  bg-[#1B5A96] px-6 py-2 rounded-lg  focus:outline-none appearance-none'>
              <option value="active" className='text-black bg-white'>Active</option>
              <option value="closed" className='text-black bg-white'>closed</option>
            </select>
          </div>
        </div>
      </div>


    </div>
  )
}

export default DepartmentVacancyList
