import React, { useEffect, useState, useRef } from 'react';
import BackupImg from '../../../../assets/Careers/backup.svg';
import CheckBox from '../../../../assets/Careers/checkBox.svg';
import WithOutCheck from '../../../../assets/Careers/withOut.svg';





function CareerForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        dob: '',
        qualification: '',
        resume: null,
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFormData({ ...formData, resume: e.dataTransfer.files[0] });
        }
    };

    const handleFileClick = () => {
        inputRef.current.click();
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.dob.trim()) newErrors.dob = 'Date of Birth is required';
        if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';
        if (!formData.agree) newErrors.agree = 'You must agree to the policy';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully');
            // handle form submission
        }
    };

    const words = ["Creativity", "Innovation", "Growth"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        document.title = "Careers | Solwyz Technologies";
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setOpacity(1);
            }, 500);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="md:h-[95px] h-[104px]"></div>

            <div className="text-white bg-careersbanner md:justify-start justify-center md:h-[358px] bg-cover md:px-[430px] md:py-[99px] px-[52px] py-[97px]">
                <div className="text-[24px] md:font-medium ">Join a culture of</div>

                <div className="hidden md:block">
                    <svg className="block mt-0 whitespace-nowrap" width="100%" height="150px" viewBox="0 0 1000 120" preserveAspectRatio="xMinYMid meet">
                        <text x="0" y="120" fontSize="190px" fontWeight="700" fontFamily="sans-serif" fill="none" stroke="#0E7368" strokeWidth="2" style={{ transition: "opacity 0.5s ease-in-out", opacity: opacity }}>
                            {words[currentIndex]}
                        </text>
                    </svg>
                </div>

                <div className="md:hidden block">
                    <svg className="block mt-2 md:mt-0 w-full" height="100" viewBox="0 0 1000 120" preserveAspectRatio="xMinYMid meet">
                        <text x="0" y="100" fontSize="190px" fontWeight="700" fontFamily="sans-serif" fill="none" stroke="#0E7368" strokeWidth="5" style={{ transition: "opacity 0.5s ease-in-out", opacity: opacity }}>
                            {words[currentIndex]}
                        </text>
                    </svg>
                </div>
            </div>

            <div className="flex justify-center items-center min-h-screen w-full bg-[#010B02] px-4 md:mt-[72px]">
                <form onSubmit={handleSubmit} className="w-full max-w-3xl text-white bg-[#010B02] p-8">
                    <h2 className="text-center md:w-[312px] justify-center items-center mx-auto pb-4 text-2xl md:text-[32px] font-normal mb-6 border-b border-gray-600 ">
                        Job Application Form
                    </h2>

                    <div className="grid sm:grid-cols-2 space-y-[57px] gap-[20px] md:mt-[72px]">
                        <div>
                            <label className="block mb-1 md:mt-[29px]">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input name="firstName" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} className="w-full bg-transparent border-b border-gray-400 outline-none py-4" />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>

                        <div className="pt-6 sm:pt-0">
                            <input name="secondName" placeholder="Enter second name" value={formData.secondName} onChange={handleChange} className="w-full bg-transparent border-b border-gray-400 outline-none py-4" />
                        </div>

                        <div>
                            <label className="block mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-gray-400 outline-none py-4" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block mb-1">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-gray-400 outline-none py-4" />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block mb-1">
                                Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <input name="dob" placeholder="DD/MM/YYYY" value={formData.dob} onChange={handleChange} className="w-full bg-transparent border-b border-gray-400 outline-none py-4" />
                            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                        </div>

                        <div>
                            <label className="block mb-1">
                                Highest Qualification <span className="text-red-500">*</span>
                            </label>
                            <input name="qualification" placeholder="Enter qualification" value={formData.qualification} onChange={handleChange} className="w-full bg-transparent border-b border-gray-400 outline-none py-4" />
                            {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification}</p>}
                        </div>
                    </div>

                    <div className="mt-[51px]">
                        <label className="block mb-2 text-white">Upload Resume</label>

                        <div
                            className={`bg-[#212121] py-10  text-center  ${dragActive ? 'border-[#04A391]' : 'border-[#555]'
                                } relative transition-all duration-300 cursor-pointer`}
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            onClick={handleFileClick}
                        >
                            <input
                                ref={inputRef}
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <div className="text-[#737373] pointer-events-none flex flex-col items-center justify-center">
                                <img src={BackupImg} alt="Upload" className="mb-2 w-10 h-10" />
                                {formData.resume ? (
                                    <div className="text-green-400 font-medium">{formData.resume.name}</div>
                                ) : (
                                    <>
                                        <div className="mb-1">Upload a file</div>
                                        <div>Drag and drop files here</div>
                                    </>
                                )}
                            </div>
                        </div>

                        {errors.resume && <p className="text-red-500 text-sm mt-2">{errors.resume}</p>}
                    </div>

                    <div className="flex  mt-6 cursor-pointer items-center " onClick={() => setFormData({ ...formData, agree: !formData.agree })}>
                        <img
                            src={formData.agree ? CheckBox : WithOutCheck}
                            alt="checkbox"
                            className="w-5 h-5 mr-2 items-center justify-center"
                        />
                        <label className="text-sm text-white">
                            I accept the electronic saving of my data according to the privacy policy.
                        </label>
                    </div>
                    {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

                    {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

                    <div className="relative group h-[40px] w-[191px] md:mt-[81px] mx-auto sm:h-[48px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391] px-5 sm:px-6 flex items-center justify-center">
                        <div
                            className="absolute inset-0 
               bg-gradient-to-r from-[#04A391] to-[#035249]
               opacity-0 group-hover:opacity-100 
               transition-opacity duration-300"
                        ></div>

                        <div className="relative z-10 flex items-center justify-center gap-2">
                            <div className="text-[12px] sm:text-[16px] text-white font-medium">Apply</div>
                            <div></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CareerForm;
