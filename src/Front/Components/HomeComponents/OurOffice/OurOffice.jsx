import React from "react";
import indiaImg from "@assets/homeContacts/india.png";
import indiaImgMob from "@assets/homeContacts/IndiaMob.png";
import UaeImg from "@assets/homeContacts/Uae.png";
import UaeImgMob from "@assets/homeContacts/UaeMob.png";
import locationIco from "@assets/homeContacts/location.svg";
import CallIco from "@assets/homeContacts/call.svg";
import mailIco from "@assets/homeContacts/mail.svg";
import { motion } from "framer-motion";

function OurOffice() {
  return (
     <motion.div
     initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
       className="md:px-[120px] mb-[104px] text-white  md:mt-[104px] px-4 mt-[72px] max-w-[1440px] mx-auto ">
      <h1 className="text-center  text-[24px] md:text-[48px] font-bold md:leading-[56px] leading-8">
        Our Offices
      </h1>
      <p className="font-normal md:text-xl text-center leading-6 md:leading-8 text-base mt-6 md:mt-8 ">
      Solwyz operates offices and development centres in India and UAE.

      </p>

      <div className="md:flex mt-10 md:mt-[64px]">
        <div className="hidden md:flex justify-center gap-6">
          {/* INDIA */}
          <div className="relative w-[282px] h-[257px]">
            <img
              src={indiaImg}
              className="w-full h-full object-cover"
              alt="India"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-[40px] font-bold leading-[48px]">
                INDIA
              </p>
            </div>
          </div>

          {/* UAE */}
          <div className="relative w-[282px] h-[257px]">
            <img
              src={UaeImg}
              className="w-full h-full object-cover"
              alt="UAE"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-[40px] font-bold leading-[48px]">
                UAE
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center gap-6 ">
          {/* INDIA */}
          <div className="relative w-[168px] h-[155px]">
            <img
              src={indiaImgMob}
              className="w-full h-full object-cover"
              alt="India"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-[40px] font-bold leading-[48px]">
                INDIA
              </p>
            </div>
          </div>

          {/* UAE */}
          <div className="relative w-[168px] h-[155px]">
            <img
              src={UaeImgMob}
              className="w-full h-full object-cover"
              alt="UAE"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-[40px] font-bold leading-[48px]">
                UAE
              </p>
            </div>
          </div>
        </div>

        <div className="md:py-[13px]  md:px-12">
          <h1 className="text-white underline underline-offset-8  mt-10 md:mt-0 font-medium text-base ">
            Contact
          </h1>
          <div className="md:flex">
            <div>
              <h1 className="text-white font-medium text-sm  mt-8 md:mt-5">
                INDIA
              </h1>
              <div className="flex mt-5 ">
                <img src={locationIco} className="w-8 h-8 " alt="" />
                <p className="w-[247px] ml-4 font-medium text-sm leading-5">
                  2nd floor, Asiatic Business Centre , NH Bypass, Near
                  Technopark phase-1, Kazhakkoottam, Thiruvananthapuram
                </p>
              </div>
              <h1 className="text-white font-medium text-sm  mt-6 md:mt-4">
                UAE
              </h1>
              <div className="flex mt-5 ">
                <img src={locationIco} className="w-8 h-8 " alt="" />
                <p className="w-[247px] ml-4 font-medium text-sm leading-5">
                  Room 207, Bussiness point building, Port Saeed Street,
                  Deira-UAE
                </p>
              </div>
            </div>

            <div className="border-l ml-6 w-6  md:block hidden border-[#505050]"></div>
            <div className="border w-full border-[#505050] md:hidden mt-6 "></div>
            <div>
              <div className="flex items-center justify-start mt-6 md:mt-[55px]">
                <img src={CallIco} className="w-8 h-8" alt="" />
                <div className="ml-4 font-medium text-sm space-y-2">
                  <p className="hover:text-[#04A391] ">+91 9778422854</p>
                  <p className="hover:text-[#04A391] ">+91 9778699266</p>
                </div>
              </div>

              <div className="flex items-center mt-6 md:mt-12">
                <img src={mailIco} className="w-8 h-8" alt="" />
                <p className="ml-4 font-medium text-sm hover:text-[#04A391]">
                  connect@solwyz.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default OurOffice;
