import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import backArrow from '../../../assets/icons/arrow_back_ios_new.svg'
import editIcon from '../../../assets/icons/edit.svg'
import deleteIcon from '../../../assets/icons/delete (4).svg'
import deleteBigIcon from '../../../assets/Featured icon.svg'
import downArrow from '../../../assets/icons/arrow_back_ios_new (1).svg'
import Api from '../../../Services/Api'

function DepartmentVacancyList() {
  const [designations, setDesignations] = useState([]);

  const { id } = useParams();

  const location = useLocation();
  const departmentName = location.state?.departmentName || {};

  const navigate = useNavigate();

  const handleCreateClick = (id) => {
    navigate(`/admin/addvacancy/${id}`)
  }

  const handleDesignationClick = (designationId) => {
    console.log("Designation ID:", designationId);
    navigate(`/admin/addvacancy/${id}`, { state: { designationId } });
  }

  useEffect(() => {
    Api.get(`api/designation/${id}`)
      .then(response => {
        if (response && response.status === 200) {
          console.log("Designations:", response.data.data);
          setDesignations(response.data.data)
        }
        else {
          console.error("Error fetching department details:", response);
        }
      })
  }, [])

  return (
    <div>

      <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
        <div>
          <div className='text-[20px] text-[#000000] font-semibold'>{departmentName}</div>
          <div className='flex items-center gap-1 mt-2'>
            <img src={backArrow} className='w-4 h-4'></img>
            <div className='text-[16px] text-[#858585] font-medium'>Back</div>
          </div>

        </div>
        <div className='text-[16px] font-semibold text-[#FFFFFF] bg-[#04A391] hover:bg-[#097468] w-fit h-fit px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => handleCreateClick(id)}>
          Create
        </div>
      </div>

      <div className='mt-6'>
      {designations.map((designation, index)=>(
        <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-3 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={()=>handleDesignationClick(designation.id)} key={index}>
          <div className='flex items-center justify-between w-[35%]'>
            <div className='text-[16px] font-normal'>{designation.name}</div>
            <div className='text-[16px] font-normal'>{designation.experience}</div>
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
       ))}
      </div>


    </div>
  )
}

export default DepartmentVacancyList
