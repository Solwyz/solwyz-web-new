import React, { useState } from 'react';
import Logo from "../../../assets/Logo.svg";
import Arrow from "../../../assets/header/arw_sevc.svg";
import Arrow_hvr from "../../../assets/header/arw_clr.svg";
import Img1 from "../../../assets/header/1aa.svg";
import Img2 from "../../../assets/header/2aa.svg";
import Img3 from "../../../assets/header/3aa.svg";
import Img4 from "../../../assets/header/4aa.svg";


function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHovering(true);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovering(false);
      setDropdownOpen(false);
    }, 200); // delay
    setTimeoutId(id);
  };

  return (
    <div className='relative'>
      <div className='pl-[56px] pr-[120px] py-6 bg-bgColor'>
        <div className='text-white flex justify-between items-center'>
          <img src={Logo} alt="" />

          <div className='flex gap-12 relative'>
            <h1 className='hover:text-[#04A391] duration-300'>Home</h1>
            <h1 className='hover:text-[#04A391] duration-300'>About</h1>

            {/* Service + dropdown handler */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='relative cursor-pointer'
            >
              <h1 className='hover:text-[#04A391] duration-300 flex items-center'>
                Service
                <img className='ml-1' src={isHovering ? Arrow_hvr : Arrow} alt="" />
              </h1>
            </div>

            <h1 className='hover:text-[#04A391] duration-300'>Blog</h1>
            <h1 className='hover:text-[#04A391] duration-300'>Career</h1>
          </div>

          <div className='flex gap-10'>
            <div className='cursor-pointer duration-300  hover:text-[#04A391]'>Brochure</div>
            <div className='cursor-pointer duration-300  hover:text-[#04A391]'>Contact</div>
          </div>
        </div>
      </div>

      {/* Full-width dropdown */}
      {isDropdownOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='absolute bg-[#141414] w-full gap-6 text-center flex px-[120px] py-[32px] justify-between items-center p-4 mt-[24px] left-0 z-50 shadow-lg'
        >
          <h1 className='text-white  hover:border-[#04A391] cursor-pointer duration-500  border border-[#393939] w-full rounded-lg py-8 px-6'><img className='justify-center mx-auto mb-4' src={Img1} alt="" /> Pharma E-commerce</h1>
          <h1 className='text-white  hover:border-[#04A391] cursor-pointer duration-500 border border-[#393939] w-full rounded-lg py-8 px-6'><img className='justify-center mx-auto mb-4' src={Img2} alt="" /> Customized mobile & web app</h1>
          <h1 className='text-white  hover:border-[#04A391] cursor-pointer duration-500 border border-[#393939] w-full rounded-lg py-8 px-6'><img className='justify-center mx-auto mb-4' src={Img3} alt="" /> Digital Marketing</h1>
          <h1 className='text-white  hover:border-[#04A391] cursor-pointer duration-500 border border-[#393939] w-full rounded-lg py-8 px-6'><img className='justify-center mx-auto mb-4' src={Img4} alt="" />Pharma ERP Services</h1>
        </div>
      )}
    </div>
  );
}

export default Header;
