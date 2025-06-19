import React, { useEffect, useState } from 'react';
import editIcon from '@assets/icons/edit.svg';
import editIconHover from '@assets/icons/editHover.svg';
import deleteIcon from '@assets/icons/delete (4).svg';
import deleteIconHover from '@assets/icons/DeleteHover.svg';
import deleteBigIcon from '@assets/Featured icon.svg';
import { useNavigate } from 'react-router-dom';
import Api from '../../../Services/Api';

function CareerMangement() {
    const [departments, setDepartments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [departmentName, setDepartmentName] = useState('');
    const [departmentId, setDepartmentId] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    // ✅ NEW: State to track which item is hovered
    const [hoveredEditId, setHoveredEditId] = useState(null);
    const [hoveredDeleteId, setHoveredDeleteId] = useState(null);

    const navigate = useNavigate();

    const handleDepartmentClick = (id, name) => {
        navigate(`/admin/career/${id}`, { state: { departmentName: name } });
    };

    const handleDeleteClick = (id) => {
        setDeleteModal(true);
        setDepartmentId(id);
    };

    const confirmDelete = () => {
        Api.delete(`api/departments/delete/${departmentId}`).then((response) => {
            if (response && response.status === 200) {
                setDeleteModal(false);
                setRefreshKey((prev) => prev + 1);
            }
        });
    };

    const handleEditClick = (department) => {
        setEditModal(true);
        setDepartmentName(department.name);
        setDepartmentId(department.id);
    };

    const handleSaveClick = () => {
        Api.put(`api/departments/${departmentId}`, {
            name: departmentName
        }).then((response) => {
            if (response && response.status === 200) {
                setEditModal(false);
                setDepartmentName('');
                setRefreshKey((prev) => prev + 1);
            }
        });
    };

    const handleCancelClick = () => {
        setDepartmentName('');
        setIsModalOpen(false);
    };

    const handleCreateClick = () => {
        Api.post('api/departments/create', {
            name: departmentName
        }).then((response) => {
            if (response && response.status === 200) {
                setDepartmentName('');
                setIsModalOpen(false);
                setRefreshKey((prev) => prev + 1);
            }
        });
    };

    useEffect(() => {
        Api.get('api/departments/all').then((response) => {
            if (response && response.status === 200) {
                setDepartments(response.data.data);
            }
        });
    }, [refreshKey]);

    return (
        <div>
            <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
                <div>
                    <div className='text-[20px] text-[#000000] font-semibold'>All Departments</div>
                    <div className='text-[16px] text-[#858585] font-medium'>See all job categories</div>
                </div>
                <div
                    className='text-[16px] font-semibold text-white duration-300 bg-[#04A391] hover:bg-[#097468] w-fit px-[32px] py-[10px] rounded-lg cursor-pointer'
                    onClick={() => setIsModalOpen(true)}
                >
                    Create
                </div>
            </div>

            <div className='mt-6'>
                {departments.map((department) => (
                    <div
                        key={department.id}
                        className='flex group items-center justify-between border border-[#A8A8A8] px-6 py-4 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:shadow-lg cursor-pointer mb-2'
                        onClick={() => handleDepartmentClick(department.id, department.name)}
                    >
                        <div className='text-[16px] font-normal group-hover:font-semibold'>
                            {department.name}
                        </div>
                        <div className='flex gap-8'>
                            {/* EDIT ICON + LABEL */}
                            <div className="relative flex flex-col items-center">
                                {hoveredEditId === department.id && (
                                    <div className="absolute -top-6 text-xs bg-black text-white px-2 py-1 rounded-md whitespace-nowrap z-10">
                                        Edit
                                    </div>
                                )}
                                <img
                                    src={hoveredEditId === department.id ? editIconHover : editIcon}
                                    className='h-5 w-5'
                                    onMouseEnter={() => setHoveredEditId(department.id)}
                                    onMouseLeave={() => setHoveredEditId(null)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEditClick(department);
                                    }}
                                    alt="Edit"
                                />
                            </div>

                            {/* DELETE ICON + LABEL */}
                            <div className="relative flex flex-col items-center">
                                {hoveredDeleteId === department.id && (
                                    <div className="absolute -top-6 text-xs bg-black text-white px-2 py-1 rounded-md whitespace-nowrap z-10">
                                        Delete
                                    </div>
                                )}
                                <img
                                    src={hoveredDeleteId === department.id ? deleteIconHover : deleteIcon}
                                    className='h-5 w-5'
                                    onMouseEnter={() => setHoveredDeleteId(department.id)}
                                    onMouseLeave={() => setHoveredDeleteId(null)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteClick(department.id);
                                    }}
                                    alt="Delete"
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
                    <div className="bg-white shadow-lg w-[491px] rounded-lg">
                        <div className='text-[16px] font-semibold text-[#3F3F3F] px-8 py-4 border-b border-[#E2E2E2]'>
                            Add Department name
                        </div>
                        <div className='p-8 text-[14px] font-semibold'>
                            <div className='text-[14px] font-normal'>Enter department name</div>
                            <input
                                type='text'
                                name='departmentName'
                                value={departmentName}
                                placeholder='Enter name'
                                className='border border-[#CCCCCC] placeholder:text-[14px] focus:outline-none px-[16px] py-[14px] rounded-lg w-full mt-2'
                                onChange={(e) => setDepartmentName(e.target.value)}
                            />
                            <div className='flex gap-2 mt-10 w-fit ml-auto'>
                                <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer hover:text-[#04A391] hover:border-[#04A391]' onClick={handleCancelClick}>Cancel</div>
                                <div className='text-[16px] font-medium text-white px-[32px] py-[10px] bg-[#04A391] hover:bg-[#097468] rounded-lg cursor-pointer' onClick={handleCreateClick}>Create</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {deleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
                    <div className="bg-white shadow-lg w-fit rounded-lg p-8">
                        <div className='w-fit mx-auto'><img src={deleteBigIcon} className='w-16 h-16' alt="Delete" /></div>
                        <div className='text-[20px] font-medium text-center mt-4'>Are you sure ?</div>
                        <div className='text-[14px] font-normal text-[#888888] text-center mt-2'>Do you want to really delete these records ?</div>
                        <div className='flex gap-2 mt-10 w-fit mx-auto'>
                            <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer hover:text-[#04A391] hover:border-[#04A391]' onClick={() => setDeleteModal(false)}>Cancel</div>
                            <div className='text-[16px] font-medium text-white px-[32px] py-[10px] bg-[#ED1C24] rounded-lg cursor-pointer hover:bg-[#AF2228]' onClick={confirmDelete}>Delete</div>
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
                            <input
                                type='text'
                                name='departmentName'
                                value={departmentName}
                                placeholder='Enter name'
                                className='border border-[#CCCCCC] placeholder:text-[14px] focus:outline-none px-[16px] py-[14px] rounded-lg w-full mt-2'
                                onChange={(e) => setDepartmentName(e.target.value)}
                            />
                            <div className='flex gap-2 mt-10 w-fit ml-auto'>
                                <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer hover:text-[#04A391] hover:border-[#04A391]' onClick={() => setEditModal(false)}>Cancel</div>
                                <div className='text-[16px] font-medium text-white px-[32px] py-[10px] bg-[#04A391] hover:bg-[#097468] rounded-lg cursor-pointer' onClick={handleSaveClick}>Save</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CareerMangement;
