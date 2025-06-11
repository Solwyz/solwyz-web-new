import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(TextPlugin);

function HomeBanner() {
  const navigate = useNavigate();
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(line1Ref.current, {
      duration: 1,
      text: "Your Growth Partners In",
      ease: "power2.out",
      opacity: 1,
    })
    .to(line2Ref.current, {
      duration: 1,
      text: "MENA & India",
      ease: "power2.out",
      opacity: 1,
    }, "+=0.1"); 
  }, []);

  return (
    <div>
      <div className='md:h-[95px] h-[104px]'></div>
      <div className='text-white bg-bannerBackground bg-cover bg-no-repeat bg-center h-[572px] flex items-center justify-center md:px-[120px] px-[33px]'>
        <div className='mt-[197px] text-center'>
          <div
            ref={line1Ref}
            className='md:text-[88px] text-[28px] font-bold whitespace-nowrap opacity-0'
          ></div>
          <div
            ref={line2Ref}
            className='md:text-[88px] text-[52px] font-bold text-[#04A391] text-center whitespace-nowrap opacity-0'
          ></div>
          <div   onClick={() => navigate('/about')} className='bg-[#FFFFFF] cursor-pointer duration-300 hover:bg-[#04A391] hover:text-white  text-[#000000] text-[16px] w-fit py-3 px-6 rounded-lg mt-14 mx-auto mb-[100px]'>
            Know More
          </div>
        </div>
      </div>
      <div className='md:flex items-center justify-around gap-4 md:px-[120px] px-[33px]'>
        <div className='text-[16px] font-normal text-[#FFFFFF] text-center'>
        Delivering technology that adapts to your business needs. 
        </div>
        <div className='flex-grow border-b border-[#3C3C3C] hidden md:block'></div>
        <div className='md:flex hidden'>
          <div className='text-[#FFFFFF] text-[16px] font-semibold w-fit border-b'>
            Our services
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
