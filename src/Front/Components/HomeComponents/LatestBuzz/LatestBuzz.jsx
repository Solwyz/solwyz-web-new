import React from 'react'
import forwardArrowGreen from '@assets/arrow_forward (green).svg'
import forwardArrow from '@assets/arrow_forward.svg'
import buzzImg from '@assets/Rectangle 3872.png'
import { useNavigate } from 'react-router-dom'

function LatestBuzz() {

    const navigate = useNavigate();

    const handleBuzzClick = () => {
        navigate('/blogdetails')
    }

    return (
        <div className='bg-[#FFFFFF] mt-[48px] md:pt-[104px] pt-[48px] md:pb-[104px] pb-[48px] md:px-[120px] px-4'>
            <div className='flex items-center justify-between pb-[32px] md:pb-[48px]'>
                <div className='md:text-[48px] text-[24px] mx-auto md:mx-0 font-bold'>The Latest Buzz</div>
                <div className='md:flex items-center justify-center gap-2 hidden'>
                    <div className='text-[16px] font-medium text-[#03434F]'>View All</div>
                    <img src={forwardArrowGreen} alt='' className='w-[15px] h-[15px]' />
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                <div className='md:min-h-[443px] min-h-[339px] relative'>
                    <img src={buzzImg} alt='' className='w-full md:h-[255px] h-[175px] object-cover' />
                    <div className='text-[16px] font-semibold md:mt-4 mt-2'>How To Become a Graphic Designer in 10 Simple Steps </div>
                    <div className='text-[14px] font-normal md:mt-4 mt-2 pb-[60px]'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
                    <div className="justify-end flex md:justify-start items-center">
                        <div className="relative group sm:w-[156px] mt-8 md:mt-0 sm:h-[48px] w-[90px] h-[32px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391]" onClick={handleBuzzClick}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#04A391] to-[#035249] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-center justify-center gap-2 h-full">
                                <div className="sm:text-[16px] text-[12px] text-white leading-6 font-medium">Read More</div>
                                <img src={forwardArrow} alt='' className='w-[15px] h-[15px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:min-h-[443px] min-h-[339px] relative'>
                    <img src={buzzImg} alt='' className='w-full md:h-[255px] h-[175px] object-cover' />
                    <div className='text-[16px] font-semibold md:mt-4 mt-2'>How To Become a Graphic Designer in 10 Simple Steps </div>
                    <div className='text-[14px] font-normal md:mt-4 mt-2 pb-[60px]'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
                    <div className="justify-end flex md:justify-start items-center">
                        <div className="relative group sm:w-[156px] mt-8 md:mt-0 sm:h-[48px] w-[90px] h-[32px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391]" onClick={handleBuzzClick}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#04A391] to-[#035249] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-center justify-center gap-2 h-full">
                                <div className="sm:text-[16px] text-[12px] text-white leading-6 font-medium">Read More</div>
                                <img src={forwardArrow} alt='' className='w-[15px] h-[15px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:min-h-[443px] min-h-[339px] relative'>
                    <img src={buzzImg} alt='' className='w-full md:h-[255px] h-[175px] object-cover' />
                    <div className='text-[16px] font-semibold md:mt-4 mt-2'>How To Become a Graphic Designer in 10 Simple Steps </div>
                    <div className='text-[14px] font-normal md:mt-4 mt-2 pb-[60px]'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
                    <div className="justify-end flex md:justify-start items-center">
                        <div className="relative group sm:w-[156px] mt-8 md:mt-0 sm:h-[48px] w-[90px] h-[32px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391]" onClick={handleBuzzClick}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#04A391] to-[#035249] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-center justify-center gap-2 h-full">
                                <div className="sm:text-[16px] text-[12px] text-white leading-6 font-medium">Read More</div>
                                <img src={forwardArrow} alt='' className='w-[15px] h-[15px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex items-center justify-center gap-2 mt-8'>
                <div className='text-[16px] font-medium text-[#03434F]'>View All</div>
                <img src={forwardArrowGreen} alt='' className='w-[15px] h-[15px]' />
            </div>
        </div>
    )
}

export default LatestBuzz
