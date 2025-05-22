import React from 'react'
import ourImg from "../../../../assets/OurServices/ourImg.svg"
import Img1 from "../../../../assets/header/1aa.svg"
import Img2 from "../../../../assets/header/2aa.svg"
import Img3 from "../../../../assets/header/3aa.svg"
import Img4 from "../../../../assets/header/4aa.svg"

function OurServices() {
    return (
        <div className='md:mt-[184px] px-6 '>
            <div className='md:px-[120px] md:mt-0 mt-[72px]'>
                <h1 className='md:text-[48px] text-[24px] font-bold md:text-start text-center text-[#FFFFFF]'>Our Services</h1>
            </div>

            <div className='relative md:border border-[#6F6F6F] md:p-[96px] md:mt-[43px] grid md:grid-cols-2 gap-10'>
                {/* Left side */}
                <div className='md:mt-0 mt-6'>
                    <h1 className='md:text-[32px] text-[24px] md:text-start text-center font-normal text-[#FFFFFF]'>
                        With an in-house team, we <br className='hidden md:block' />
                        offer <span className='text-[#04A391]'>personalized services</span>
                    </h1>
                    <img src={ourImg} className='md:mt-10 hidden md:block' alt="" />
                </div>
                <div className='hidden md:flex'>

                    {/* Left Side - cards */}
                    <div className='relative'>
                        {/* Highlighted overlay card */}
                        <div className="absolute -top-[267px] -left-10 group w-[282px] z-20">
                            <div className="absolute top-0 left-0 w-full h-full border border-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4 group-hover:-left-4 z-0"></div>

                            <div className="relative bg-[#1E1E1E] group-hover:bg-[#FFFFFF] p-6 w-full transition-all duration-500 z-10">
                                <div className='border-b-2 border-[#505050] pb-[61px]'>
                                    <img src={Img1} alt="Pharma E-commerce" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Pharma E-commerce
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-[-168px] -left-10 group w-[282px] z-20">
                            <div className="absolute top-0 left-0 w-full h-full border border-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4 group-hover:-left-4 z-0"></div>

                            <div className="relative bg-[#1E1E1E] group-hover:bg-[#FFFFFF] p-6 w-full transition-all duration-500 z-10">
                                <div className='border-b-2 border-[#505050] pb-[31px]'>
                                    <img src={Img2} alt="Pharma E-commerce" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Customized mobile & web app
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* Right side - cards */}
                    <div className='relative'>
                        {/* Highlighted overlay card */}
                        <div className="absolute -top-[203px] -left-[-271px] group w-[282px] z-20">
                            <div className="absolute top-0 left-0 w-full h-full border border-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4 group-hover:-left-4 z-0"></div>

                            <div className="relative bg-[#1E1E1E] group-hover:bg-[#FFFFFF] p-6 w-full transition-all duration-500 z-10">
                                <div className='border-b-2 border-[#505050] pb-[61px]'>
                                    <img src={Img3} alt="Pharma E-commerce" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Digital Marketing
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Pharma ERP Services Card (custom top) */}
                        <div className="absolute -top-[-233px] -left-[-271px] group w-[282px] z-20">
                            <div className="absolute top-0 left-0 w-full h-full border border-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4 group-hover:-left-4 z-0"></div>

                            <div className="relative bg-[#1E1E1E] group-hover:bg-[#FFFFFF] p-6 w-full transition-all duration-500 z-10">
                                <div className='border-b-2 border-[#505050] pb-[61px]'>
                                    <img src={Img4} alt="Pharma ERP Services" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Pharma ERP Services
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                {/* Mobile view */}
                <div>
                    <div className='md:hidden block'>


                        <div className='grid grid-cols-1 gap-6 mt-6'>
                            <div className='bg-[#1E1E1E] p-6 '>
                               <div className='border-b pb-6'>
                                    <img src={Img1} alt="Pharma E-commerce" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Pharma E-commerce
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                               </div>
                            </div>
                            <div className='bg-[#1E1E1E] p-6'>
                               <div className='border-b pb-6'>
                                    <img src={Img2} alt="Pharma E-commerce" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Customized mobile & web app
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                               </div>
                            </div>
                            <div className='bg-[#1E1E1E] p-6'>
                               <div>
                                    <img src={Img3} alt="Pharma E-commerce" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Digital Marketing
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                               </div>
                            </div>
                            <div className='bg-[#1E1E1E] p-6'>
                               <div>
                                    <img src={Img4} alt="Pharma ERP Services" />
                                    <h1 className='text-[20px] font-semibold mt-12 group-hover:text-black text-white'>
                                        Pharma ERP Services
                                    </h1>
                                    <p className='text-justify tracking-tighter group-hover:text-[#555555] mt-3 text-[#A5A5A5]'>
                                        Our Pharma E-commerce platform offers a robust and comprehensive solution designed to meet the needs of pharmaceutical businesses, providing a perfect blend...
                                    </p>
                               </div>
                            </div>

                        </div>


                    </div>
                </div>


            </div>
        </div> 
    )
}

export default OurServices;
