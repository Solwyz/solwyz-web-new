import React, { useEffect, useState } from 'react'
import serviceImg from '../../../assets/Rectangle 5625.png'
import blogImg from '../../../assets/blog image.png'
import arrowForward from '../../../assets/chevron_forward.svg'
import arrowForwardGreen from '../../../assets/chevron_forward (green).svg'
import Pageloader from '../../Loaders/Pageloader'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../../../Services/Api'
import './BlogPage.css'


const Blogs = [
    {
        title: "A healthy smile Lorem impsum A healthy smile Lorem impsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec mattis.Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
        image: blogImg,
    },
    {
        title: "A healthy smile Lorem impsum A healthy smile Lorem impsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec mattis.Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
        image: blogImg,
    },
    {
        title: "A healthy smile Lorem impsum A healthy smile Lorem impsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec mattis.Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
        image: blogImg,
    },
]

function BlogDetailsPage() {
    const [loading, setLoading] = useState(true);
    const [detailedBlog, setDetailedBlog] = useState(null);
    const [paragraphs, setParagraphs] = useState([]);
    const [similarBlogs, setSimilarBlogs] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const handleBlogClick = (id) => {
        navigate(`/blogdetails/${id}`)
    }

    useEffect(() => {
        Api.get(`api/blog/${id}`)
            .then(response => {
                if (response && response.status === 200) {
                    console.log("Blog details fetched successfully:", response.data);
                    setDetailedBlog(response.data)
                    setParagraphs(response.data.paragraphss)
                } else {
                    console.error("Failed to fetch blog:", response);
                }
            })
        Api.get(`api/blog/similar/${id}`)
            .then(response => {
                if (response && response.status === 200) {
                    console.log('similar res', response.data.similarBlogs)
                    setSimilarBlogs(response.data.similarBlogs)
                } else {
                    console.error("Failed to fetch similar blogs:", response);
                }
            })
    }, [id])

    useEffect(() => {
        // Simulate delay
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) return <Pageloader />;

    return (
        <div className='md:pt-[167px] pt-[158px]'>
            <div className='md:text-[32px] text-[16px] font-semibold text-[#FFFFFF] md:px-[120px] px-4'>{detailedBlog.title}</div>

            <img src={detailedBlog.image} className='md:mt-[55px] mt-[48px] md:h-[354px] md:w-full h-[193px] object-cover md:px-0 px-4' />

            <div className='text-[16px] font-normal text-[#FFFFFF] md:px-[120px] px-4 text-justify leading-6 pt-6'>
                <div
                    className="mt-6 blog-content"
                    dangerouslySetInnerHTML={{ __html: detailedBlog.paragraphs }}
                />

                {/* {paragraphs.map((paragraph, index) => (
                    <div
                        key={index}
                        className='mt-6'
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                ))} */}
            </div>

            <div className='text-[#FFFFFF] md:px-[120px] px-4 text-justify md:mt-[104px] mt-[72px]'>
                <div className='text-[16px] font-medium'>More Blogs</div>


                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-12 mt-8'>
                    {similarBlogs.map((blog, index) => (
                        <div className='md:h-[413px] h-[350px] relative' key={index}>
                            <img src={blog.image} alt='blogImage' className='w-full md:h-[237px] h-[182px] object-cover' />
                            <div className='text-[16px] font-semibold text-[#FFFFFF] mt-4'>{blog.title}</div>
                            <div className='text-[14px] font-normal text-[#C1C1C1] md:w-[384px] mt-3'>
                                {blog.shortDescription?.split(' ').slice(0, 20).join(' ')}{blog.shortDescription?.split(' ').length > 20 ? '...' : ''}
                            </div>
                            <div className='flex items-center justify-center w-fit gap-2 text-[#FFFFFF] hover:text-[#04A391] hover:border-b absolute bottom-0 group cursor-pointer' onClick={() => handleBlogClick(blog.id)}>
                                <div className='teaxt-[16px] font-semibold'>Read More</div>
                                <img src={arrowForward} alt='arrowForward' className='w-[6px] h-[10px] group-hover:hidden' />
                                <img src={arrowForwardGreen} alt='arrowForward' className='w-[6px] h-[10px] hidden group-hover:block' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BlogDetailsPage
