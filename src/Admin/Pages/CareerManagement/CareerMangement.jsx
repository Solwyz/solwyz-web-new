import React, { useState } from 'react'
import editIcon from '../../../assets/icons/edit.svg'
import deleteIcon from '../../../assets/icons/delete (4).svg'
import deleteBigIcon from '../../../assets/Featured icon.svg'
import { useNavigate } from 'react-router-dom';

function CareerMangement() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const navigate = useNavigate();

    const handleDepartmentClick = (id) => {
        navigate(`/admin/career/${id}`)
    }

    const handleDeleteClick = () => {
        setDeleteModal(true);
    }

    const handleEditClick = () => {
        setEditModal(true);
    }

    return (
        <div>

            <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
                <div>
                    <div className='text-[20px] text-[#000000] font-semibold'>All Departments</div>
                    <div className='text-[16px] text-[#858585] font-medium'>See all job categories</div>
                </div>
                <div className='text-[16px] font-semibold text-[#FFFFFF] bg-[#04A391] w-fit h-fit px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => setIsModalOpen(true)}>
                    Create
                </div>
            </div>

            <div className='mt-6'>
                <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDepartmentClick('1')}>
                    <div className='text-[16px] font-normal'>Digital Marketing</div>
                    <div className='flex gap-8'>
                        <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(); }}/>
                        <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(); }} />
                    </div>
                </div>
                <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDepartmentClick('2')}>
                    <div className='text-[16px] font-normal'>Design</div>
                    <div className='flex gap-8'>
                        <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(); }}/>
                        <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(); }} />
                    </div>
                </div>
                <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDepartmentClick('3')}>
                    <div className='text-[16px] font-normal'>Human Resource</div>
                    <div className='flex gap-8'>
                        <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(); }}/>
                        <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(); }} />
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
                    <div className="bg-white shadow-lg w-[491px] rounded-lg">
                        <div className='text-[16px] font-semibold text-[#3F3F3F] px-8 py-4 border-b border-[#E2E2E2]'>Add Department name</div>
                        <div className='p-8 text-[14px] font-semibold'>
                            <div className='text-[14px] font-normal'>Enter department name</div>
                            <input type='text' name='departmentName' placeholder='Enter name' className='border border-[#CCCCCC] placeholder:text-[14px] placeholder:font-normal focus:outline-none px-[16px] py-[14px] rounded-lg w-full mt-2'></input>
                            <div className='flex gap-2 mt-10 w-fit ml-auto'>
                                <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => setIsModalOpen(false)}>Cancel</div>
                                <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#04A391] rounded-lg'>Create</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {deleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
                    <div className="bg-white shadow-lg w-fit rounded-lg p-8">
                            <div className='w-fit mx-auto'><img src={deleteBigIcon} className='w-16 h-16'></img></div>
                            <div className='text-[20px] font-medium text-center mt-4'>Are you sure ?</div>
                            <div className='text-[14px] font-normal text-[#888888] text-center mt-2'>Do you want to really delete these records ?</div>
                            <div className='flex gap-2 mt-10 w-fit mx-auto'>
                                <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => setDeleteModal(false)}>Cancel</div>
                                <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#ED1C24] rounded-lg'>Delete</div>
                            </div>
                        
                    </div>
                </div>
            )}

            {editModal && (
                <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
                    <div className="bg-white shadow-lg w-[491px] rounded-lg">
                        <div className='text-[16px] font-semibold text-[#3F3F3F] px-8 py-4 border-b border-[#E2E2E2]'>Edit Department name</div>
                        <div className='p-8 text-[14px] font-semibold'>
                            <div className='text-[14px] font-normal'>Enter department name</div>
                            <input type='text' name='departmentName' placeholder='Enter name' className='border border-[#CCCCCC] placeholder:text-[14px] placeholder:font-normal focus:outline-none px-[16px] py-[14px] rounded-lg w-full mt-2'></input>
                            <div className='flex gap-2 mt-10 w-fit ml-auto'>
                                <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => setEditModal(false)}>Cancel</div>
                                <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#04A391] rounded-lg'>Save</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CareerMangement
