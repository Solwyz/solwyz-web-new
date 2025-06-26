import React, { useEffect, useState } from 'react'
import forwardArrowGreen from '@assets/arrow_forward (green).svg'
import forwardArrow from '@assets/arrow_forward.svg'
import buzzImg from '@assets/Rectangle 3872.png'
import { Link, useNavigate } from 'react-router-dom'
import Api from '../../../../Services/Api'
import { motion } from 'framer-motion'
function LatestBuzz() {

    const [blogs, setBlogs] = useState([])

    const navigate = useNavigate();

    const handleBuzzClick = (id) => {
        navigate(`/blogdetails/${id}`)
    }

    useEffect(() => {
        Api.get("api/blog/all")
            .then(response => {
                if (response && response.status === 200) {
                    console.log("Latest buzz fetched successfully:", response.data.data);
                    setBlogs(response.data.data);
                } else {
                    console.error("Failed to fetch buzz:", response);
                }
            })
    }, [])

    return (
        <motion.div

            className='bg-[#FFFFFF] mt-[48px] md:pt-[104px] pt-[48px] md:pb-[104px] pb-[48px] md:px-[120px] px-4'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} // Trigger earlier
                transition={{ duration: 0.4, ease: "easeOut" }} // Smoother transition
                className='flex items-center justify-between pb-[32px] md:pb-[48px]'>
                <div className='md:text-[48px] text-[24px] mx-auto md:mx-0 font-bold'>The Latest Buzz.</div>
                <Link to="/blogs">
                    <div className='md:flex items-center justify-center gap-2 hidden hover:bg-[#EDEDED] duration-300 px-4 py-[6px]'>
                        <div className='text-[16px] font-medium text-[#03434F]'>View All</div>
                        <img src={forwardArrowGreen} alt='' className='w-[15px] h-[15px]' />
                    </div>
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} // Trigger earlier
                transition={{ duration: 0.6, ease: "easeOut" }} // Smoother transition
                className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                {blogs.slice(0, 3).map((blog, index) => (
                    <div className='md:min-h-[443px] min-h-[339px] relative'>
                        <img src={blog.image} alt='' className='w-full md:h-[255px] h-[175px] object-cover' />
                        <div className='text-[16px] font-semibold md:mt-4 mt-2'>{blog.title} </div>
                        <div className='text-[14px] font-normal text-[#C1C1C1] md:w-[384px] mt-3'>
                            {blog.shortDescription?.split(' ').slice(0, 20).join(' ')}{blog.shortDescription?.split(' ').length > 20 ? '...' : ''}
                        </div>
                        <div className="justify-start flex md:justify-start items-center">
                            <div className="relative group w-[156px] mt-8 md:mt-0 h-[48px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391]" onClick={() => handleBuzzClick(blog.id)}>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#04A391] to-[#035249] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10 flex items-center justify-center gap-2 h-full">
                                    <div className="sm:text-[16px] text-[12px] text-white leading-6 font-medium">Read More</div>
                                    <img src={forwardArrow} alt='' className='w-[15px] h-[15px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </motion.div>
            <div className='md:hidden flex items-center justify-center gap-2 mt-8'>
                <div className='text-[16px] font-medium text-[#03434F]'>View All</div>
                <img src={forwardArrowGreen} alt='' className='w-[15px] h-[15px]' />
            </div>
        </motion.div>
    )
}

export default LatestBuzz
