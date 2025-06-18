import React, { useState } from "react";
import linkedIn from "@assets/homeContacts/linkedin.svg";
import insta from "@assets/homeContacts/insta.svg";
import fb from "@assets/homeContacts/fbIcon.svg";
import dropArrow from "@assets/homeContacts/drop.svg";
import Api from "../../../../Services/Api";

function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    websiteLink: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
const [isSent, setIsSent] = useState(false);
 // optional for button loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Validation check: returns true only if all fields are filled
  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleSubmit = async (e) => {

    e.preventDefault();
    setIsSubmitting(true);
  

    const payload = {
      id: 0,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      websiteLink: formData.websiteLink,
      service: formData.service,
      budget: parseInt(formData.budget),
      message: formData.message,
      createdAt: new Date().toISOString(),
    };
  
    try {
      const response = await Api.post("api/contact/create", payload);
      console.log("Success:", response.data);
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        websiteLink: "",
        service: "",
        budget: "",
        message: "",
      });
  
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending form data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white md:px-[120px] md:py-[104px] px-4 py-12">
      <div className="md:flex md:justify-between">
        <div className="md:mt-[64px]">
          <h1 className="font-bold text-[40px] leading-10 text-start md:w-[350px]">
            Get In Touch With Our{" "}
            <span className="text-[#04A391] font-normal">Support</span>
          </h1>
          <p className="font-normal text-base leading-6 mt-6">
            Let our team help you move forward
          </p>
          <div className="flex items-center space-x-2 mt-6">
            <a
              href="https://www.linkedin.com/company/solwyz-technologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedIn}
                className="hover:bg-[#D5F7F3] rounded-full w-[30px] h-[30px] cursor-pointer"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61559030405055"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fb}
                className="hover:bg-[#D5F7F3] rounded-full w-[30px] h-[30px] cursor-pointer"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/solwyz_technologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                className="hover:bg-[#D5F7F3] rounded-full w-[30px] h-[30px] cursor-pointer"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[675px] py-10 px-4 mt-6 md:mt-0 md:px-10 border border-[#DBDBDB]">
          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="text-sm font-light leading-5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-light leading-5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                />
              </div>
            </div>

            {/* Company and Website */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="text-sm font-light leading-5">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-light leading-5">Website Link</label>
                <input
                  type="text"
                  name="websiteLink"
                  placeholder="Enter website link"
                  value={formData.websiteLink}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                />
              </div>
            </div>

            {/* Service and Budget */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full relative">
                <label className="text-sm font-light leading-5">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none text-sm font-normal appearance-none mt-1"
                >
                  <option value="" disabled hidden>Select service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
                <img src={dropArrow} className="absolute right-2 bottom-3 w-4 h-4 pointer-events-none" alt="dropdown arrow" />
              </div>
              <div className="w-full relative">
                <label className="text-sm font-light leading-5">Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none text-sm font-normal appearance-none mt-1"
                >
                  <option value="" disabled hidden>Select your budget</option>
                  <option value="0">Below 1 lakh</option>
                  <option value="1">1 lakh - 5 lakh</option>
                  <option value="2">Above 5 lakh</option>
                </select>
                <img src={dropArrow} className="absolute right-2 bottom-3 w-6 h-6 pointer-events-none" alt="dropdown arrow" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-light leading-5">Message</label>
              <textarea
                name="message"
                placeholder="Write your message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex justify-center items-center">
            <button
  type="submit"
  disabled={!isFormValid || isSubmitting || isSent}
  className={`w-full ${
    isFormValid && !isSent
      ? "bg-[#04A391] hover:bg-[linear-gradient(270deg,#035249_0%,#04A391_100%)]"
      : "bg-[#04A391] hover:bg-[linear-gradient(270deg,#035249_0%,#04A391_100%)] cursor-not-allowed"
  } text-white py-3 rounded-md text-base font-medium transition-all duration-300`}
>
  {isSent ? "Message Sent ✓" : isSubmitting ? "Sending..." : "Send Message"}
</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
