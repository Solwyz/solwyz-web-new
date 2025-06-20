import React, { useEffect, useState } from 'react'
import listDotBlue from '@assets/icons/Ellipse 1200.svg'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Services/Api';

function JobApplications() {
  const [departments, setDepartments] = useState([]);

  const navigate = useNavigate();

  const handleDepartmentClick = (id, name) => {
    navigate(`/admin/jobapplications/${id}`, { state: { departmentName: name }})
  }

  useEffect(() => {
    Api.get('api/departments/all')
      .then(response => {
        if (response && response.status === 200) {
          console.log("Departments:", response.data.data);
          setDepartments(response.data.data)
        } else {
          console.error("Error fetching departments:", response);
        }
      })
  }, [])

  return (
    <div>
      <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
        <div>
          <div className='text-[20px] text-[#000000] font-semibold'>All Departments</div>
          <div className='text-[16px] text-[#858585] font-medium'>See all job categories</div>
        </div>
      </div>

      <div className='mt-6'>
        {departments.map((department, index) => (
          <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDepartmentClick(department.id, department.name)} key={index}>
            <div className='flex items-center justify-between w-[35%]'>
              <div className='text-[16px] font-normal'>{department.name}</div>
              <div className='text-[16px] font-normal text-[#767676]'>{department.vaccancy} Vaccancy</div>
            </div>
            <div className='flex items-center justify-center gap-2 mr-6'>
              {/* <img src={listDotBlue} className='w-2 h-2'></img> */}
              <div className='text-[16px] font-normal text-[#2A2A2A]'>{department.applicantCount} Applications</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default JobApplications
