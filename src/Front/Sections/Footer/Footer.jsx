import React from "react";
import logo from "../../../assets/footer/Solwyz Logo 1 (1) 2.png";
import linkedinIco from "../../../assets/footer/linkedin.svg";
import fbIcon from "../../../assets/footer/fbicon.svg";
import IgIcon from "../../../assets/footer/Igicon.svg";

function Footer() {
  return (
    <div className="w-full   md:py-8  py-6 px-4 md:px-[120px] h-[817px] md:h-[461px]   ">
      <div className="md:bg-footerMap  bg-footerMapMob w-full h-[239px]  md:h-[461px] bg-center bg-cover">
        <div className=" md:flex md:justify-between">
          <div>
            <img src={logo} alt="" className="w-[207px] h-[47px] items-start" />
            <p className="mt-4 font-normal leading-[28px] text-sm font-manrope text-[#FFFFFF]">
              Widen the horizon of Your Business with Solwyz!
            </p>
            <div className="flex gap-2 mt-8">
              <img
                src={linkedinIco}
                alt=""
                className="hover:bg-[#3A3A3A] duration-300 w-[30px] h-[30px] rounded-full"
              />
              <img
                src={fbIcon}
                alt=""
                className="hover:bg-[#3A3A3A] duration-300 w-[30px] h-[30px] rounded-full"
              />
              <img
                src={IgIcon}
                alt=""
                className="hover:bg-[#3A3A3A] duration-300 w-[30px] h-[30px] rounded-full"
              />
            </div>
          </div>
          {/* Company */}
          <div className="md:block hidden">
            <h1 className="text-white font-medium text-base leading-6 underline underline-offset-8">
              Company
            </h1>
            <ul className="space-y-4  mt-5 text-sm leading-5  text-[#ffffff] font-medium">
              <li className="hover:text-[#04A391] duration-300">About</li>
              <li className="hover:text-[#04A391] duration-300">Services</li>
              <li className="hover:text-[#04A391] duration-300">Blogs</li>
              <li className="hover:text-[#04A391] duration-300">Career</li>
              <li className="hover:text-[#04A391] duration-300">Contact</li>
            </ul>
          </div>
           {/* Services */}
          <div className="md:mt-0 mt-[64px] ">
            <h1 className="text-white font-medium text-base leading-6 underline underline-offset-8 ">
              Services
            </h1>
            <ul className="space-y-4  mt-5 text-sm leading-5  text-[#ffffff] font-medium">
              <li className="hover:text-[#04A391] duration-300">
                Pharma E-commerce
              </li>
              <li className="hover:text-[#04A391] duration-300">
                Customized Mobile & Web App
              </li>
              <li className="hover:text-[#04A391] duration-300">
                Digital Marketing
              </li>
              <li className="hover:text-[#04A391] duration-300">
                Pharma ERP Services
              </li>
            </ul>
          </div>
          {/* Company Mob */}
          <div className="md:hidden mt-[64px] ">
            <h1 className="text-white font-medium text-base leading-6 underline underline-offset-8">
              Company
            </h1>
            <ul className="space-y-4  mt-5 text-sm leading-5  text-[#ffffff] font-medium">
              <li className="hover:text-[#04A391] duration-300">About</li>
              <li className="hover:text-[#04A391] duration-300">Services</li>
              <li className="hover:text-[#04A391] duration-300">Blogs</li>
              <li className="hover:text-[#04A391] duration-300">Career</li>
              <li className="hover:text-[#04A391] duration-300">Contact</li>
            </ul>
          </div>
        </div>
        <div className="md:justify-between justify-center text-center md:mt-[121px] md:flex">
          <p className="text-white font-normal text-sm leading-6 mt-10 md:hidden tracking-wide">
            Privacy policy
          </p>
          <p className="text-white font-normal text-sm leading-6 tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-white font-normal text-sm leading-6 mt-4 md:block hidden tracking-wide">
            Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
