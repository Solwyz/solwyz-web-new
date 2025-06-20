import React, { useEffect, useState } from 'react'
import listDotBlue from '@assets/icons/Ellipse 1200.svg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import backArrow from '@assets/icons/arrow_back_ios_new.svg'
import Api from '../../../Services/Api';

function DepartmentApplicationList() {

    const [designations, setDesignations] = useState([]);

    const { id } = useParams();

    const location = useLocation();
    const departmentName = location.state?.departmentName || {};

    const navigate = useNavigate();

    const handleApplicationGroupClick = (designationId, name) => {
        navigate(`/admin/jobapplications/${id}/${designationId}`, { state: { designationName: name } })
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
                    <div className='flex items-center gap-1 mt-2 cursor-pointer' onClick={() => navigate(-1)}>
                        <img src={backArrow} className='w-4 h-4'></img>
                        <div className='text-[16px] text-[#858585] font-medium hover:text-black duration-300'>Back</div>
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                {designations.map((designation, index) => (
                    <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleApplicationGroupClick(designation.id, designation.name)} key={index}>
                        <div className='flex items-center justify-between w-[40%]'>
                            <div className='text-[16px] font-normal'>{designation.name}</div>
                            <div className='text-[16px] font-normal text-[#2A2A2A]'>{designation.experience}</div>
                        </div>
                        <div className='flex items-center justify-center gap-2 mr-6'>
                            {/* <img src={listDotBlue} className='w-2 h-2'></img> */}
                            <div className='text-[16px] font-normal text-[#2A2A2A]'>{designation.applicantCount} Applications</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DepartmentApplicationList
