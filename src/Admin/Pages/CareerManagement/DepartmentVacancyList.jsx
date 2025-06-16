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
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

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

  const handleDeleteClick = (id) => {
    setDeleteModal(true)
    setDeleteId(id);
  }

  const confirmDelete = () => {
    Api.delete(`api/designation/delete/${deleteId}`)
      .then(response => {
        if (response && response.status === 200) {
          console.log("Designation deleted successfully:", response)
          setDeleteModal(false)
          setRefreshKey(prev => prev + 1);
        } else {
          console.error("Error deleting designation:", response);
        }
      })
  }

  const handleStatusChange = (designationId, newStatus) => {
    console.log("news status:", newStatus);
    Api.put(`api/designation/status/${designationId}?status=${newStatus}`)
    .then(response => {
      console.log('status update stats:', response);
    })
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
  }, [refreshKey])

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
        {designations.map((designation, index) => (
          <div className='flex items-center justify-between border border-[#A8A8A8] px-6 py-3 rounded-lg hover:border-[#04A391] text-[#2A2A2A] hover:text-[#04A391] hover:cursor-pointer mb-2' onClick={() => handleDesignationClick(designation.id)} key={index}>
            <div className='flex items-center justify-between w-[35%]'>
              <div className='text-[16px] font-normal'>{designation.name}</div>
              <div className='text-[16px] font-normal'>{designation.experience}</div>
            </div>
            <div className='flex items-center justify-center gap-6'>
              {/* <img src={editIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleEditClick(); }} /> */}
              <img src={deleteIcon} className='h-5 w-5' onClick={(e) => { e.stopPropagation(); handleDeleteClick(designation.id); }} />
              <select className='text-[12px] font-semibold text-[#FFFFFF]  bg-[#1B5A96] px-6 py-2 rounded-lg  focus:outline-none appearance-none'
               value={designation.status}
               onClick={(e) => { e.stopPropagation() }}
               onChange={(e)=>handleStatusChange(designation.id, e.target.value)}>
                <option value="ACTIVE" className='text-black bg-white'>Active</option>
                <option value="INACTIVE" className='text-black bg-white'>closed</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {deleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
          <div className="bg-white shadow-lg w-fit rounded-lg p-8">
            <div className='w-fit mx-auto'><img src={deleteBigIcon} className='w-16 h-16'></img></div>
            <div className='text-[20px] font-medium text-center mt-4'>Are you sure ?</div>
            <div className='text-[14px] font-normal text-[#888888] text-center mt-2'>Do you want to really delete this designation ?</div>
            <div className='flex gap-2 mt-10 w-fit mx-auto'>
              <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer' onClick={() => setDeleteModal(false)}>Cancel</div>
              <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#ED1C24] rounded-lg cursor-pointer' onClick={confirmDelete}>Delete</div>
            </div>

          </div>
        </div>
      )}


    </div>
  )
}

export default DepartmentVacancyList
