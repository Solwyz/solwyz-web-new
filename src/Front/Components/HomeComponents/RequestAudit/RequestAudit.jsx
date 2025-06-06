import React, { useState, useEffect } from "react";
import forwardArrow from "../../../../assets/arrow_forward.svg";
import BgArrow from "../../../../assets/icons/bgArrow.svg";
import close from "../../../../assets/close.svg";
import Api from "../../../../Services/Api";

function RequestAudit() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({

    fullName: '',
    email: '',
    contact: '',
    businessName: '',
    industry: '',
    location: '',
    website: '',
    goals: [],
  });



  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCheckboxChange = (goal) => {
    setFormData((prev) => {
      const goals = prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal];
      return { ...prev, goals };
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await Api.post("api/audit/create", formData);
      alert("Audit request submitted successfully!");
      console.log("Response:", response.data);
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        location: "",
        businessName: "",
        industry: "",
        websiteUrl: "",
        phoneNo: "",
        goals: [],
      });
    } catch (error) {
      console.error("Submission error:", error);
     
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const handleRequestClick = () => {
    console.log("Form Data:", formData);
    Api.post('api/audit/create', {
      name: formData.fullName,
      email: formData.email,
      location: formData.location,
      businessName: formData.businessName,
      industry: formData.industry,
      websiteUrl: formData.website,
      phoneNo: formData.contact,
      goals: formData.goals
    })
    .then(response => {
      if(response && response.status === 200) {
        console.log("Audit request submitted successfully:", response);
        setIsModalOpen(false); 
        setFormData({
          fullName: '',
          email: '',
          contact: '',
          businessName: '',
          industry: '',
          location: '',
          website: '',
          goals: [],
        }); 
      } else {
        console.error("Error submitting audit request:", response);
      }
    })
  }

  return (
    <div className="mt-[34px]">
      <div
        className="w-fit mx-auto cursor-pointer group pb-[10px]"
        onClick={toggleModal}
      >
        <div className="flex gap-2 items-center transition-colors duration-300">
          <h1 className="text-[16px] font-medium text-white group-hover:text-[#05C2AE] transition-colors duration-300">
            Request a website audit
          </h1>


          {/* Container with exact size */}

          <div className="relative w-[24px] h-[24px]">
            <img
              src={forwardArrow}
              alt="Arrow"
              className="absolute top-0 left-0 w-full h-full items-center transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={BgArrow}
              alt="Hover Arrow"
              className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>


        <div className="mt-1 border-b border-white transition-colors duration-300 group-hover:border-[#05C2AE]"></div>
      </div>






      {isModalOpen && (
        <div className="fixed inset-0 md:px-[177px]  px-4 bg-black bg-opacity-50  overflow-y-auto z-50">
          <div className="bg-white md:py-[104px] mt-[104px] py-[56px] h-[1282px] md:px-[248px] px-3 w-full relative ">
            <button
              className="absolute md:top-8 md:right-8 top-2 right-2 w-10 h-10   hover:bg-[#F5F5F5] hover:rounded-lg "
              onClick={toggleModal}
            >
              <img src={close} className="mx-auto" alt="" />
            </button>
            <h2 className="text-center md:text-[32px] text-[24px] font-medium md:leading-10 leading-8 ">
              Maximize Your Online Impact
              <br />
              <span className="font-normal ">Get a Free Audit</span>
            </h2>

            <form className=" md:mt-[64px] mt-[56px]">
              <h1 className=" text-[#04A391] font-semibold text-base ">
                Basic Information
              </h1>
              <div className="flex mt-4 flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="text-sm font-medium leading-5">
                    Full Name
                  </label>
                  <input
                    type="text"

                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}

                    placeholder="Enter your name"
                    className="w-full border-b border-[#5B5B5B] p-2 placeholder:text-[#D9D9D9] font-normal text-sm mt-1 focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label className="text-sm font-medium leading-5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}

                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                    placeholder="Enter email "
                    className="w-full border-b border-[#5B5B5B] p-2 placeholder:text-[#D9D9D9] font-normal text-sm mt-1 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full mt-4 md:w-[300px] ">
                <label className="text-sm font-medium leading-5">
                  Contact number
                </label>
                <input
                  type="text"

                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}

                  placeholder="Enter number"
                  className="w-full border-b border-[#5B5B5B] p-2 placeholder:text-[#D9D9D9] font-normal text-sm mt-1 focus:outline-none"
                />
              </div>

              <h1 className=" text-[#04A391] mt-[56px] md:mt-[48px] font-semibold text-base ">
                Business details
              </h1>
              <div className="flex mt-4 flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="text-sm font-medium leading-5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}

                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}

                    placeholder="Enter Business Name"
                    className="w-full border-b border-[#5B5B5B] p-2 placeholder:text-[#D9D9D9] font-normal text-sm mt-1 focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label className="text-sm font-medium leading-5">
                    Industry/Category
                  </label>
                  <input
                    type="text"
                    value={formData.industry}

                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}

                    placeholder="Enter category"
                    className="w-full border-b border-[#5B5B5B] p-2 placeholder:text-[#D9D9D9] font-normal text-sm mt-1 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full mt-4 md:w-[300px] ">
                <label className="text-sm font-medium leading-5">Location</label>
                <input
                  type="text"
                  value={formData.location}

                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}

                  placeholder="Enter Location"
                  className="w-full border-b border-[#5B5B5B] p-2 placeholder:text-[#D9D9D9] font-normal text-sm mt-1 focus:outline-none"
                />
              </div>

              <h1 className=" text-[#04A391] mt-[56px] md:mt-[48px] font-semibold text-base ">
                Website details
              </h1>
              <div className="w-full mt-4">
                <label className="text-sm font-medium leading-5">
                  Website Link
                </label>
                <input
                  type="text"

                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}

                  placeholder="Enter website link"
                  className="w-full border-b border-[#5B5B5B] p-2 placeholder:text-[#D9D9D9] font-normal text-sm mt-1 focus:outline-none"
                />
              </div>

              <div className="mt-6 md:mt-8">
                <p className="text-sm font-medium">
                  What are your top goals for the website?
                </p>
                <div className="flex flex-col mt-5 gap-4 font-medium text-[#494949] text-sm">

                  <label className="flex items-center gap-4">
                    <input type="checkbox" defaultChecked
                      checked={formData.goals.includes('Increase traffic')}
                      onChange={(e) => {
                        const value = 'Increase traffic';
                        setFormData(prev => ({
                          ...prev,
                          goals: e.target.checked
                            ? [...prev.goals, value]
                            : prev.goals.filter(goal => goal !== value)
                        }));
                      }}
                    />
                    Increase traffic
                  </label>
                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={formData.goals.includes("Improve design/UX")}
                      onChange={(e) => {
                        const value = "Improve design/UX";
                        setFormData((prev) => ({
                          ...prev,
                          goals: e.target.checked
                            ? [...prev.goals, value]
                            : prev.goals.filter((goal) => goal !== value),
                        }));
                      }}
                    />
                    Improve design/UX
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={formData.goals.includes("Generate leads")}
                      onChange={(e) => {
                        const value = "Generate leads";
                        setFormData((prev) => ({
                          ...prev,
                          goals: e.target.checked
                            ? [...prev.goals, value]
                            : prev.goals.filter((goal) => goal !== value),
                        }));
                      }}
                    />
                    Generate leads
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={formData.goals.includes("Enhance SEO")}
                      onChange={(e) => {
                        const value = "Enhance SEO";
                        setFormData((prev) => ({
                          ...prev,
                          goals: e.target.checked
                            ? [...prev.goals, value]
                            : prev.goals.filter((goal) => goal !== value),
                        }));
                      }}
                    />
                    Enhance SEO
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={formData.goals.includes("Boost conversions")}
                      onChange={(e) => {
                        const value = "Boost conversions";
                        setFormData((prev) => ({
                          ...prev,
                          goals: e.target.checked
                            ? [...prev.goals, value]
                            : prev.goals.filter((goal) => goal !== value),
                        }));
                      }}
                    />
                    Boost conversions
                  </label>


                </div>
              </div>

              <div className="mt-[56px] md:mt-[104px]">

                <button
                  type="submit"
                  onClick={handleRequestClick}
                  className="relative group  w-full  text-white py-3 rounded-md text-base font-medium   overflow-hidden cursor-pointer bg-[#04A391] transition-all duration-400"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#04A391] to-[#035249] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  <div className="relative z-10 flex items-center justify-center gap-2 h-full">
                    <span className="text-base  text-white  font-medium">

                      Request Audit
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestAudit;
