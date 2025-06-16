import React, { useEffect, useState } from 'react'
import editIcon from '@assets/icons/edit.svg'
import deleteIcon from '@assets/icons/delete (4).svg'
import deleteBigIcon from '@assets/Featured icon.svg'
import { useNavigate } from 'react-router-dom';
import Api from '../../../Services/Api';
import axios from 'axios';


function CareerMangement() {

    const [departments, setDepartments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [departmentName, setDepartmentName] = useState('');
    const [departmentId, setDepartmentId] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const navigate = useNavigate();

    const handleDepartmentClick = (id, name) => {
        navigate(`/admin/career/${id}`, { state: { departmentName: name } });
    }

    const handleDeleteClick = (id) => {
        setDeleteModal(true);
        setDepartmentId(id);
    }

    const confirmDelete = () => {
        Api.delete(`api/departments/delete/${departmentId}`)
        .then(response => {
            if(response && response.status === 200) {
                console.log("Department deleted successfully:", response);
                setDeleteModal(false);
                setRefreshKey(prev => prev + 1);
            } else {
                console.error("Error deleting department:", response);
            }
        })
    }

    const handleEditClick = (department) => {
        setEditModal(true);
        setDepartmentName(department.name);
        setDepartmentId(department.id);
    }

    const handleSaveClick = () => {
        Api.put(`api/departments/${departmentId}`, {
            name: departmentName
        })
        .then(response => {
            if(response && response.status === 200) {
                console.log("Department updated successfully:", response);
               setDepartmentName('');
               setEditModal(false);
               setRefreshKey(prev => prev + 1);
            } else {
                console.error("Error updating department:", response);
            }
        })
    }

    const handleCancelClick = () => {
        setDepartmentName('');
        setIsModalOpen(false);
    }

    const handleCreateClick =()=> {
        Api.post('api/departments/create', {
            name: departmentName
        })
        .then(response => {
            if(response && response.status === 200) {
                console.log("Department created successfully:", response);
                setDepartmentName('');
                setIsModalOpen(false);
                setRefreshKey(prev => prev + 1);
            } else {
                console.error("Error creating department:", response);
            }
        })
        // console.log("Department name:", document.querySelector('input[name="departmentName"]').value);
        
    }

    // useEffect(() => {
    //     axios.get('http://192.168.29.214:8080/Solwyzwebsite/api/departments/all')
    //     .then(response => {
    //         console.log("Designations:", response);
    //     })
    //     .catch(error => {
    //     console.error("Error fetching blog data:", error);
    //   });
    // },[])

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
    }, [refreshKey])

    return (
        <div>

            <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
                <div>
                    <div className='text-[20px] text-[#000000] font-semibold'>All Departments</div>
                    <div className='text-[16px] text-[#858585] font-medium'>See all job categories</div>
                </div>
                <div className='text-[16px] font-semibold text-[#FFFFFF] bg-[#04A391] hover:bg-[#097468] w-fit h-fit px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => setIsModalOpen(true)}>
                    Create
                </div>
            </div>

            <div className='mt-6'>
                {departments.map((department, index) => (
                    <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDepartmentClick(department.id, department.name)}>
                        <div className='text-[16px] font-normal'>{department.name}</div>
                        <div className='flex gap-8'>
                            <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(department); }} />
                            <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(department.id); }} />
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
                    <div className="bg-white shadow-lg w-[491px] rounded-lg">
                        <div className='text-[16px] font-semibold text-[#3F3F3F] px-8 py-4 border-b border-[#E2E2E2]'>Add Department name</div>
                        <div className='p-8 text-[14px] font-semibold'>
                            <div className='text-[14px] font-normal'>Enter department name</div>
                            <input type='text' name='departmentName' value={departmentName} placeholder='Enter name' className='border border-[#CCCCCC] placeholder:text-[14px] placeholder:font-normal focus:outline-none px-[16px] py-[14px] rounded-lg w-full mt-2' onChange={(e)=>setDepartmentName(e.target.value)}></input>
                            <div className='flex gap-2 mt-10 w-fit ml-auto'>
                                <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={handleCancelClick}>Cancel</div>
                                <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#04A391] rounded-lg cursor-pointer' onClick={handleCreateClick}>Create</div>
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
                            <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#ED1C24] rounded-lg cursor-pointer' onClick={confirmDelete}>Delete</div>
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
                            <input type='text' name='departmentName' value={departmentName} placeholder='Enter name' className='border border-[#CCCCCC] placeholder:text-[14px] placeholder:font-normal focus:outline-none px-[16px] py-[14px] rounded-lg w-full mt-2' onChange={(e)=>setDepartmentName(e.target.value)}></input>
                            <div className='flex gap-2 mt-10 w-fit ml-auto'>
                                <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => setEditModal(false)}>Cancel</div>
                                <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#04A391] rounded-lg cursor-pointer' onClick={handleSaveClick}>Save</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CareerMangement
