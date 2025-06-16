import React, { useEffect, useState } from 'react'
import backArrow from '@assets/icons/arrow_back_ios_new.svg'
import addIconGreen from '@assets/icons/Group 1261153420.svg'
import addIconBlack from '@assets/icons/Group 1261153420 (1).svg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Api from '../../../Services/Api'

function VacancyAddingForm() {


    const [formData, setFormData] = useState({
        designation: '',
        location: '',
        experience: 'Fresher - 1 Year',
        jobType: 'Full time',
        qualification: 'Any',
        email: ''
    })

    const [responsibilities, setResponsibilities] = useState(['']);
    const [requirements, setRequirements] = useState(['']);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const navigate = useNavigate();

    const location = useLocation();
    const designationId = location.state?.designationId || null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleResponsibilityChange = (index, value) => {
        const updated = [...responsibilities];
        updated[index] = value;
        setResponsibilities(updated);
    };

    const addResponsibility = () => {
        setResponsibilities(prev => [...prev, '']);
    };

    const handleRequirementChange = (index, value) => {
        const updated = [...requirements];
        updated[index] = value;
        setRequirements(updated);
    }

    const addRequirement = () => {
        setRequirements(prev => [...prev, '']);
    }

    const handleSave = () => {
        console.log("Form Data:", formData);
        console.log("Responsibilities:", responsibilities);
        console.log("Requirements:", requirements);
        setLoading(true);
        Api.post(`api/designation/create`, {
            name: formData.designation,
            experience: formData.experience,
            status: 'ACTIVE',
            department: {
                "id": id
            },
            jobDetails: {
                "designation": formData.designation,
                'loaction': formData.location,
                'experience': formData.experience,
                'jobType': formData.jobType,
                'qualification': formData.qualification,
                'emailId': formData.email,
                'responsibilities': responsibilities,
                'requirements': requirements
            }
        })
            .then(response => {
                setLoading(false);
                if (response && response.status === 200) {
                    console.log('Saved successfully:', response);
                    navigate(-1);
                } else {
                    console.error("Error saving:", response);
                }
            })

    }

    const handleUpdate = () => {
        setLoading(true)
        Api.put(`api/designation/update/${designationId}`, {
            name: formData.designation,
            experience: formData.experience,
            status: 'ACTIVE',
            department: {
                "id": id
            },
            jobDetails: {
                "designation": formData.designation,
                'loaction': formData.location,
                'experience': formData.experience,
                'jobType': formData.jobType,
                'qualification': formData.qualification,
                'emailId': formData.email,
                'responsibilities': responsibilities,
                'requirements': requirements
            }
        })
            .then(response => {
                setLoading(false);
                if (response && response.status === 200) {
                    console.log('updated stats:', response);
                    navigate(-1);
                } else {
                    console.error("Error updating:", response);
                }
            })
    }

    useEffect(() => {
        console.log("Designation ID:", designationId);
        if (designationId) {
            Api.get(`api/designation/id/${designationId}`)
                .then(response => {
                    if (response && response.status === 200) {
                        console.log("Designation Data:", response.data.data);
                        // setDesignationData(response.data.data);
                        setFormData({
                            designation: response.data.data.name,
                            location: response.data.data.jobDetails.loaction,
                            experience: response.data.data.jobDetails.experience,
                            jobType: response.data.data.jobDetails.jobType,
                            qualification: response.data.data.jobDetails.qualification,
                            email: response.data.data.jobDetails.emailId
                        });
                        setResponsibilities(response.data.data.jobDetails.responsibilities || ['']);
                        setRequirements(response.data.data.jobDetails.requirements || ['']);
                    } else {
                        console.error("Error fetching designation details:", response);
                    }
                })
        }
    }, [designationId])

    return (
        <div>
            <div>
                <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={backArrow} className='w-4 h-4'></img>
                        <div className='text-[16px] text-[#858585] font-medium'>Back</div>
                    </div>
                </div>
                <div className='mt-6 w-[50%]'>
                    <div className='text-[14px] font-normal'>Enter Designation</div>
                    <input type='text' name='designation' value={formData.designation} onChange={handleChange} placeholder='Designation name' className='text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border border-[#606060] focus:outline-[#098476] placeholder:text-[#C5C5C5]'></input>
                </div>
                <div className='grid grid-cols-4 mt-8 gap-6'>
                    <div>
                        <div className='text-[14px] font-normal'>Location</div>
                        <input type='text' name='location' value={formData.location} onChange={handleChange} placeholder='Enter location' className='text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border border-[#606060] focus:outline-[#098476] placeholder:text-[#C5C5C5]'></input>
                    </div>
                    <div>
                        <div className='text-[14px] font-normal'>Experience</div>
                        <select name='experience' value={formData.experience} onChange={handleChange} placeholder='Experience' className='text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border border-[#606060] focus:outline-[#098476] placeholder:text-[#C5C5C5]'>
                            <option value='Fresher - 1 Year'>Fresher - 1 Year</option>
                            <option value='1-2 Year'>1-2 Year</option>
                            <option value='2-3 Year'>2-3 Years</option>
                            <option value='3-5 Years'>3-5 Years</option>
                            <option value='5-7 Years'>5-7 Years</option>
                            <option value='6-10 Years'>7-10 Years</option>
                        </select>
                    </div>
                    <div>
                        <div className='text-[14px] font-normal'>Job Type</div>
                        <select name='jobType' value={formData.jobType} onChange={handleChange} placeholder='Job type' className='text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border border-[#606060] focus:outline-[#098476] placeholder:text-[#C5C5C5]'>
                            <option value='Full time'>Full time</option>
                            <option value='Part-time'>Part-time</option>
                            <option value='Intern'>Intern</option>
                            <option value='Contract'>Contract</option>
                        </select>
                    </div>
                    <div>
                        <div className='text-[14px] font-normal'>Qualification</div>
                        <select name='qualification' value={formData.qualification} onChange={handleChange} placeholder='Qualification' className='text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border border-[#606060] focus:outline-[#098476] placeholder:text-[#C5C5C5]'>
                            <option value='Any'>Any</option>
                            <option value='Bachelor’s Degree'>Bachelor’s Degree</option>
                            <option value='Master’s Degree'>Master’s Degree</option>
                            <option value='Degree'>Degree</option>
                        </select>
                    </div>
                </div>

                <div className='mt-10 '>
                    <div className='flex justify-between items-center'>
                        <div className='text-[14px] font-semibold'>Responsibilities :</div>
                    </div>
                    {responsibilities.map((res, index) => (
                        <textarea
                            key={index}
                            value={res}
                            onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                            placeholder={`Responsibility ${index + 1}`}
                            className='text-[14px] font-normal mt-4 w-full h-[76px] px-4 py-3 rounded-lg border border-[#CCCCCC] focus:outline-[#098476] placeholder:text-[#C5C5C5]'
                        />
                    ))}
                    <div
                        onClick={addResponsibility}
                        className='flex items-center justify-center gap-2 py-4 rounded-lg bg-[#E7E7E7] text-[#000000] hover:text-[#0B776B] cursor-pointer mt-4'
                    >
                        <img src={addIconBlack} className='w-4 h-4'></img>
                        <div className='text-[14px] font-normal'>Add Responsibility</div>
                    </div>
                </div>

                <div className='mt-8 '>
                    <div className='flex justify-between items-center'>
                        <div className='text-[14px] font-semibold'>Requirements :</div>
                    </div>
                    {requirements.map((req, index) => (
                        <textarea
                            key={index}
                            value={req}
                            onChange={(e) => handleRequirementChange(index, e.target.value)}
                            placeholder={`Requirement ${index + 1}`}
                            className='text-[14px] font-normal mt-4 w-full h-[76px] px-4 py-3 rounded-lg border border-[#CCCCCC] focus:outline-[#098476] placeholder:text-[#C5C5C5]'
                        />
                    ))}
                    <div
                        onClick={addRequirement}
                        className='flex items-center justify-center gap-2 py-4 rounded-lg bg-[#E7E7E7]  text-[#000000] hover:text-[#0B776B] cursor-pointer mt-4'
                    >
                        <img src={addIconBlack} className='w-4 h-4'></img>
                        <div className='text-[14px] font-normal'>Add Requirement</div>
                    </div>
                </div>

                <div className='grid grid-cols-4 mt-8 gap-6'>
                    <div>
                        <div className='text-[14px] font-normal'>Contact mail ID</div>
                        <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Enter email ID' className='text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border border-[#606060] focus:outline-[#098476] placeholder:text-[#C5C5C5]'></input>
                    </div>
                </div>

                <div className='flex gap-2 mt-16 w-fit ml-auto mb-[116px]'>
                    <div className='text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer'>Cancel</div>
                    <div className='text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#04A391] hover:bg-[#097468] rounded-lg cursor-pointer' onClick={designationId ? handleUpdate : handleSave}>{designationId ? 'Update' : 'Save'}</div>
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
                    <div className="bg-white shadow-lg w-fit rounded-lg p-8">
                        Updating data. Please wait...
                    </div>
                </div>
            )}

        </div>
    )
}

export default VacancyAddingForm
