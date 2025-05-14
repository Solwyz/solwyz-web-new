import React from 'react'
import forwardArrowGreen from '../../../../assets/arrow_forward (green).svg'
import forwardArrow from '../../../../assets/arrow_forward.svg'
import buzzImg from '../../../../assets/Rectangle 3872.png'

function LatestBuzz() {
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
                    <div className='flex bg-[#04A391] w-fit px-6 py-3 rounded-lg items-center justify-center gap-1 absolute bottom-0'>
                        <div className='text-[#FFFFFF] text-[16px] font-medium'>Read More</div>
                        <img src={forwardArrow} alt='' className='w-[15px] h-[15px]' />
                    </div>
                </div>
                <div className='md:min-h-[443px] min-h-[339px] relative'>
                    <img src={buzzImg} alt='' className='w-full md:h-[255px] h-[175px] object-cover' />
                    <div className='text-[16px] font-semibold md:mt-4 mt-2'>How To Become a Graphic Designer in 10 Simple Steps </div>
                    <div className='text-[14px] font-normal md:mt-4 mt-2 pb-[60px]'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
                    <div className='flex bg-[#04A391] w-fit px-6 py-3 rounded-lg items-center justify-center gap-1 absolute bottom-0'>
                        <div className='text-[#FFFFFF] text-[16px] font-medium'>Read More</div>
                        <img src={forwardArrow} alt='' className='w-[15px] h-[15px]' />
                    </div>
                </div>
                <div className='md:min-h-[443px] min-h-[339px] relative'>
                    <img src={buzzImg} alt='' className='w-full md:h-[255px] h-[175px] object-cover' />
                    <div className='text-[16px] font-semibold md:mt-4 mt-2'>How To Become a Graphic Designer in 10 Simple Steps </div>
                    <div className='text-[14px] font-normal md:mt-4 mt-2 pb-[60px]'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
                    <div className='flex bg-[#04A391] w-fit px-6 py-3 rounded-lg items-center justify-center gap-1 absolute bottom-0'>
                        <div className='text-[#FFFFFF] text-[16px] font-medium'>Read More</div>
                        <img src={forwardArrow} alt='' className='w-[15px] h-[15px]' />
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
