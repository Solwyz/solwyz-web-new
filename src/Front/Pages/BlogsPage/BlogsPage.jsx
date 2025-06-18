import React, { useEffect, useState } from 'react'
import blogImg from '@assets/blog image.png'
import arrowForward from '@assets/chevron_forward.svg'
import arrowForwardGreen from '@assets/chevron_forward (green).svg'
import Pageloader from '../../Loaders/Pageloader'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Services/Api'

// const Blogs = [
//   {
//     title: "A healthy smile Lorem impsum A healthy smile Lorem impsum",
//     description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec mattis.Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
//     image: blogImg,
//   },
//   {
//     title: "A healthy smile Lorem impsum A healthy smile Lorem impsum",
//     description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec mattis.Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
//     image: blogImg,
//   },
// ]

function BlogsPage() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const navigate = useNavigate();

    const handleBlogClick =(id)=> {
      navigate(`/blogdetails/${id}`)
    }

    useEffect(() => {
      Api.get("api/blog/all")
      .then(response => {
        if(response && response.status === 200) {
         console.log("Blogs fetched successfully:", response.data.data);
         setBlogs(response.data.data);
        } else {
          console.error("Failed to fetch blogs:", response);
        }
      })
    },[])
  
  useEffect(() => {
        document.title = "Blogs | Solwyz Technologies";
      }, []);
      useEffect(() => {
        // Simulate delay
        setTimeout(() => setLoading(false), 1000);
      }, []);
    
      if (loading) return <Pageloader />;
  return (
    <div className='md:pt-[200px] pt-[158px] md:pb-[104px] pb-[72px] md:px-[120px] px-4 md:max-w-[1440px] mx-auto'>
      <div className='flex items-center md:justify-between justify-center'>
        <div className='text-[#FFFFFF] md:text-[48px] text-[24px] font-bold'>Blogs</div>
        <div className='md:block hidden text-[20px] text-[#959595] font-normal'>Insights, ideas, and inspiration—<br></br>explore our latest stories.</div>
      </div>
      <div className='md:hidden block text-[16px] font-normal text-[#959595] text-center mt-6 px-8'>Insights, ideas, and inspiration—explore our latest stories.</div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-12'>
        {blogs.map((blog, index) => (
          <div className='md:h-[413px] h-[350px] relative'>
            <img src={blog.image} alt='blogImage' className='w-full md:h-[237px] h-[182px] object-cover' />
            <div className='text-[16px] font-semibold text-[#FFFFFF] mt-4'>{blog.title}</div>
            <div className='text-[14px] font-normal text-[#C1C1C1] mt-3'>{blog.shortDescription}</div>
            <div className='flex items-center justify-center w-fit gap-2 text-[#FFFFFF] hover:text-[#04A391] hover:border-b absolute bottom-0 group cursor-pointer' onClick={()=>handleBlogClick(blog.id)}>
              <div className='teaxt-[16px] font-semibold'>Read More</div>
              <img src={arrowForward} alt='arrowForward' className='w-[6px] h-[10px] group-hover:hidden' />
              <img src={arrowForwardGreen} alt='arrowForward' className='w-[6px] h-[10px] hidden group-hover:block' />
            </div>
          </div>
        ))}

        {/* <div className='bg-red-300'>13</div>
        <div className='bg-green-200'>14</div>
        <div className='bg-blue-200'>15</div>
        <div className='bg-blue-200'>15</div> */}
      </div>
    </div>
  )
}

export default BlogsPage
