import React from "react";
import linkedIn from "../../../../assets/homeContacts/linkedin.svg";
import insta from "../../../../assets/homeContacts/insta.svg";
import fb from "../../../../assets/homeContacts/fbIcon.svg";
import dropArrow from "../../../../assets/homeContacts/drop.svg";

function HomeContact() {
  return (
    <div className="bg-white  md:px-[120px] md:py-[104px] px-4 py-12">
      <div className="md:flex md:justify-between">
        <div className="md:mt-[64px]">
          <h1 className="font-bold text-[40px] leading-10 text-start md:w-[350px]">
            Get In Touch With Our{" "}
            <span className="text-[#04A391] font-normal">Support</span>
          </h1>
          <p className="font-normal text-base leading-6 mt-6 ">
            Let our team help you move forward
          </p>
          <div className="flex items-center space-x-2 mt-6">
            <img
              src={linkedIn}
              className="hover:bg-[#D5F7F3] cursor-pointer rounded-full w-[30px] h-[30px]"
              alt=""
            />
            <img
              src={fb}
              className="hover:bg-[#D5F7F3] cursor-pointer rounded-full w-[30px] h-[30px]"
              alt=""
            />
            <img
              src={insta}
              className="hover:bg-[#D5F7F3] cursor-pointer rounded-full w-[30px] h-[30px]"
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-[675px] py-10 px-4 mt-6 md:mt-0 md:px-10 border border-[#DBDBDB] ">
          <form className="space-y-10">
            {/* First Row: Full Name & Email Address */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="text-sm font-light leading-5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-[#5B5B5B] p-2 f focus:outline-none placeholder:text-[#D9D9D9] font-normal text-sm mt-1"
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-light leading-5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email "
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] font-normal text-sm mt-1"
                />
              </div>
            </div>

            {/* Second Row: Company & Website Link */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="text-sm font-light leading-5">Company</label>
                <input
                  type="text"
                  placeholder="Enter company name "
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] font-normal text-sm mt-1"
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-light leading-5">
                  Website Link
                </label>
                <input
                  type="text"
                  placeholder="Enter website link"
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] font-normal text-sm mt-1"
                />
              </div>
            </div>

            {/* Third Row: Service & Budget (Dropdowns) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full relative">
                <label className="text-sm font-light leading-5">Service</label>
                <select
                  defaultValue=""
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none text-sm font-normal appearance-none mt-1"
                >
                  <option className="text-[#D9D9D9]" value="" disabled hidden>
                    Select service
                  </option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
                <img
                  src={dropArrow}
                  className="absolute right-2 bottom-3 pointer-events-none w-4 h-4"
                  alt="dropdown arrow"
                />
              </div>

              <div className="w-full relative">
                <label className="text-sm font-light leading-5">Budget</label>
                <select
                  defaultValue=""
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none text-sm font-normal appearance-none mt-1"
                >
                  <option className="text-[#D9D9D9]" value="" disabled hidden>
                    Select your budget
                  </option>
                  <option value="low">Below $1000</option>
                  <option value="medium">$1000 - $5000</option>
                  <option value="high">Above $5000</option>
                </select>
                <img
                  src={dropArrow}
                  className="absolute right-2 bottom-3 pointer-events-none w-6 h-6"
                  alt="dropdown arrow"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="text-sm font-light leading-5">Message</label>
              <textarea
                placeholder="Write your message"
                rows={3}
                className="w-full border-b border-[#5B5B5B]  p-2 focus:outline-none placeholder:text-[#D9D9D9] font-normal text-sm mt-1 resize-none"
              />
            </div>

            {/* Send Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#04A391] text-white py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-[linear-gradient(270deg,_#035249_0%,_#04A391_100%)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default HomeContact;
