import React, { useEffect, useState } from 'react'
import backArrow from '@assets/icons/arrow_back_ios_new.svg'
import addIconBlack from '@assets/icons/Group 1261153420 (1).svg'
import addIconBlackHover from '@assets/icons/AddHover.svg'
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
  });

  const [responsibilities, setResponsibilities] = useState(['']);
  const [requirements, setRequirements] = useState(['']);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAddBtnHovered, setIsAddBtnHovered] = useState(false);
  const [isAddBtnHovered2, setIsAddBtnHovered2] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const designationId = location.state?.designationId || null;

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear error on change
  };

  const handleResponsibilityChange = (index, value) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
    setErrors((prev) => ({ ...prev, responsibilities: '' }));
  };

  const handleRequirementChange = (index, value) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
    setErrors((prev) => ({ ...prev, requirements: '' }));
  };

  const addResponsibility = () => setResponsibilities((prev) => [...prev, '']);
  const addRequirement = () => setRequirements((prev) => [...prev, '']);

  // ✅ Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.jobType.trim()) newErrors.jobType = 'Job Type is required';
    if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';

    const hasEmptyResponsibilities = responsibilities.some((r) => !r.trim());
    if (hasEmptyResponsibilities) newErrors.responsibilities = 'All responsibility fields are required';

    const hasEmptyRequirements = requirements.some((r) => !r.trim());
    if (hasEmptyRequirements) newErrors.requirements = 'All requirement fields are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Save or Update handlers
  const handleSaveOrUpdate = () => {
    if (!validate()) return; // stop if invalid

    setLoading(true);

    const payload = {
      name: formData.designation,
      experience: formData.experience,
      status: 'ACTIVE',
      department: { id },
      jobDetails: {
        designation: formData.designation,
        loaction: formData.location,
        experience: formData.experience,
        jobType: formData.jobType,
        qualification: formData.qualification,
        emailId: formData.email,
        responsibilities,
        requirements,
      },
    };

    const apiCall = designationId
      ? Api.put(`api/designation/update/${designationId}`, payload)
      : Api.post(`api/designation/create`, payload);

    apiCall
      .then((response) => {
        setLoading(false);
        if (response && response.status === 200) {
          navigate(-1);
        } else {
          console.error('Error saving or updating:', response);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('API Error:', error);
      });
  };

  // ✅ Fetch data for edit
  useEffect(() => {
    if (designationId) {
      Api.get(`api/designation/id/${designationId}`).then((response) => {
        if (response && response.status === 200) {
          const d = response.data.data;
          setFormData({
            designation: d.name,
            location: d.jobDetails.loaction,
            experience: d.jobDetails.experience,
            jobType: d.jobDetails.jobType,
            qualification: d.jobDetails.qualification,
            email: d.jobDetails.emailId,
          });
          setResponsibilities(d.jobDetails.responsibilities || ['']);
          setRequirements(d.jobDetails.requirements || ['']);
        }
      });
    }
  }, [designationId]);

  return (
    <div>
      <div className="flex items-center justify-between border-b border-[#C1DBD8] pb-6">
        <div
          className="flex items-center gap-1 mt-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={backArrow} className="w-4 h-4" alt="back" />
          <div className="text-[16px] text-[#858585] hover:text-black duration-300">
            Back
          </div>
        </div>
      </div>

      {/* Designation */}
      <div className="mt-6 w-[50%]">
        <div className="text-[14px] font-normal">Enter Designation</div>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Designation name"
          className={`text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border ${
            errors.designation ? 'border-red-500' : 'border-[#606060]'
          } focus:outline-[#098476] placeholder:text-[#C5C5C5]`}
        />
        {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
      </div>

      {/* Other Inputs */}
      <div className="grid grid-cols-4 mt-8 gap-6">
        {/* Location */}
        <div>
          <div className="text-[14px] font-normal">Location</div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className={`text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border ${
              errors.location ? 'border-red-500' : 'border-[#606060]'
            } focus:outline-[#098476] placeholder:text-[#C5C5C5]`}
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        </div>

        {/* Experience */}
        <div>
          <div className="text-[14px] font-normal">Experience</div>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border ${
              errors.experience ? 'border-red-500' : 'border-[#606060]'
            } focus:outline-[#098476]`}
          >
            <option value="Fresher - 1 Year">Fresher - 1 Year</option>
            <option value="1-2 Year">1-2 Year</option>
            <option value="2-3 Year">2-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5-7 Years">5-7 Years</option>
            <option value="7-10 Years">7-10 Years</option>
          </select>
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
        </div>

        {/* Job Type */}
        <div>
          <div className="text-[14px] font-normal">Job Type</div>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className={`text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border ${
              errors.jobType ? 'border-red-500' : 'border-[#606060]'
            } focus:outline-[#098476]`}
          >
            <option value="Full time">Full time</option>
            <option value="Part-time">Part-time</option>
            <option value="Intern">Intern</option>
            <option value="Contract">Contract</option>
          </select>
          {errors.jobType && <p className="text-red-500 text-sm mt-1">{errors.jobType}</p>}
        </div>

        {/* Qualification */}
        <div>
          <div className="text-[14px] font-normal">Qualification</div>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className={`text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border ${
              errors.qualification ? 'border-red-500' : 'border-[#606060]'
            } focus:outline-[#098476]`}
          >
            <option value="Any">Any</option>
            <option value="Bachelor’s Degree">Bachelor’s Degree</option>
            <option value="Master’s Degree">Master’s Degree</option>
            <option value="Degree">Degree</option>
          </select>
          {errors.qualification && (
            <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
          )}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="text-[14px] font-semibold">Responsibilities :</div>
        </div>
        {responsibilities.map((res, index) => (
          <textarea
            key={index}
            value={res}
            onChange={(e) => handleResponsibilityChange(index, e.target.value)}
            placeholder={`Responsibility ${index + 1}`}
            className={`text-[14px] font-normal mt-4 w-full h-[76px] px-4 py-3 rounded-lg border ${
              errors.responsibilities ? 'border-red-500' : 'border-[#CCCCCC]'
            } focus:outline-[#098476] placeholder:text-[#C5C5C5]`}
          />
        ))}
        {errors.responsibilities && (
          <p className="text-red-500 text-sm mt-1">{errors.responsibilities}</p>
        )}
        <div
          onClick={addResponsibility}
          onMouseEnter={() => setIsAddBtnHovered(true)}
          onMouseLeave={() => setIsAddBtnHovered(false)}
          className="flex items-center justify-center gap-2 py-4 rounded-lg bg-[#E7E7E7] text-[#000000] hover:text-[#0B776B] cursor-pointer mt-4"
        >
          <img
            src={isAddBtnHovered ? addIconBlackHover : addIconBlack}
            className="w-4 h-4"
          />
          <div className="text-[14px] font-normal">Add Responsibility</div>
        </div>
      </div>

      {/* Requirements */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <div className="text-[14px] font-semibold">Requirements :</div>
        </div>
        {requirements.map((req, index) => (
          <textarea
            key={index}
            value={req}
            onChange={(e) => handleRequirementChange(index, e.target.value)}
            placeholder={`Requirement ${index + 1}`}
            className={`text-[14px] font-normal mt-4 w-full h-[76px] px-4 py-3 rounded-lg border ${
              errors.requirements ? 'border-red-500' : 'border-[#CCCCCC]'
            } focus:outline-[#098476] placeholder:text-[#C5C5C5]`}
          />
        ))}
        {errors.requirements && (
          <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>
        )}
        <div
          onClick={addRequirement}
          onMouseEnter={() => setIsAddBtnHovered2(true)}
          onMouseLeave={() => setIsAddBtnHovered2(false)}
          className="flex items-center justify-center gap-2 py-4 rounded-lg bg-[#E7E7E7] text-[#000000] hover:text-[#0B776B] cursor-pointer mt-4"
        >
          <img
            src={isAddBtnHovered2 ? addIconBlackHover : addIconBlack}
            className="w-4 h-4"
          />
          <div className="text-[14px] font-normal">Add Requirement</div>
        </div>
      </div>

      {/* Email */}
      <div className="grid grid-cols-4 mt-8 gap-6">
        <div>
          <div className="text-[14px] font-normal">Contact mail ID</div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email ID"
            className={`text-[14px] font-normal mt-2 w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-[#606060]'
            } focus:outline-[#098476] placeholder:text-[#C5C5C5]`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-16 w-fit ml-auto mb-[116px]">
        <div
          className="text-[16px] font-medium border border-[#7A7A7A] px-[32px] py-[10px] rounded-lg cursor-pointer hover:text-[#04A391] hover:border-[#04A391] duration-300"
          onClick={() => navigate(-1)}
        >
          Cancel
        </div>
        <div
          className="text-[16px] font-medium text-[#FFFFFF] px-[32px] py-[10px] bg-[#04A391] hover:bg-[#097468] duration-300 rounded-lg cursor-pointer"
          onClick={handleSaveOrUpdate}
        >
          {designationId ? 'Update' : 'Save'}
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-[57%] flex justify-center items-center">
          <div className="bg-white shadow-lg w-fit rounded-lg p-8">
            {designationId ? 'Updating data. Please wait...' : 'Saving data. Please wait...'}
          </div>
        </div>
      )}
    </div>
  );
}

export default VacancyAddingForm;
