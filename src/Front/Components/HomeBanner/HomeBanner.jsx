import React from 'react'

function HomeBanner() {
  return (
    <div>
      <div className='text-white bg-bannerBackground bg-cover bg-no-repeat bg-center h-[572px] flex items-center justify-center md:px-[120px] px-[33px]'>
        <div className='mt-[197px]'>
          <div className='md:text-[88px] text-[28px] font-bold'>Your Growth Partners in </div>
          <div className='md:text-[88px] text-[52px] font-bold text-[#04A391] text-center'>MENA & India</div>
          <div className='bg-[#FFFFFF] text-[#000000] text-[16px] w-fit py-3 px-6 rounded-lg mt-14 mx-auto mb-[100px]'>Know More</div>
        </div>
      </div>
      <div className='flex justify-around md:px-[120px] px-[33px]'>
        <div className='text-[16px] font-normal text-[#FFFFFF]'>Pioneering business success through innovative solutions</div>
        <div className='flex-grow border-b border-white'></div>
        <div className='flex'>
          <div className='text-[#FFFFFF] text-[16px] font-semibold w-fit border-b'>Our services</div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
