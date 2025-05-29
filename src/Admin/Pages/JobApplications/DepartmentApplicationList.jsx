import React from 'react'
import listDotBlue from '../../../assets/icons/Ellipse 1200.svg'
import { useNavigate, useParams } from 'react-router-dom'

function DepartmentApplicationList() {

    const { id } = useParams();

    const navigate = useNavigate();

    const handleApplicationGroupClick = (groupId) => {
        navigate(`/admin/jobapplications/${id}/${groupId}`)
    }

    return (
        <div>
            <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
                <div className='text-[20px] text-[#000000] font-semibold'>Digital Marketing</div>
            </div>

            <div className='mt-6'>

                <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleApplicationGroupClick('1')}>
                    <div className='flex items-center justify-between w-[40%]'>
                        <div className='text-[16px] font-normal'>Digital Marketing Manager</div>
                        <div className='text-[16px] font-normal text-[#2A2A2A]'>3+ Years </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 mr-6'>
                        <img src={listDotBlue} className='w-2 h-2'></img>
                        <div className='text-[16px] font-normal text-[#2A2A2A]'>10 Applications</div>
                    </div>
                </div>

                <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleApplicationGroupClick('2')}>
                    <div className='flex items-center justify-between w-[40%]'>
                        <div className='text-[16px] font-normal'>SEO Specialist</div>
                        <div className='text-[16px] font-normal text-[#2A2A2A]'>3+ Years </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 mr-6'>
                        <img src={listDotBlue} className='w-2 h-2'></img>
                        <div className='text-[16px] font-normal text-[#2A2A2A]'>6 Applications</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DepartmentApplicationList
