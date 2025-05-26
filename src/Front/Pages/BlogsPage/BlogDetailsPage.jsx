import React from 'react'
import serviceImg from '../../../assets/Rectangle 5625.png'
import blogImg from '../../../assets/blog image.png'
import arrowForward from '../../../assets/chevron_forward.svg'
import arrowForwardGreen from '../../../assets/chevron_forward (green).svg'


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

    return (
        <div className='md:pt-[234px] pt-[158px]'>
            <div className='md:text-[32px] text-[16px] font-semibold text-[#FFFFFF] md:px-[120px] px-4'>A healthy smile Lorem impsum A healthy smile Lorem impsum</div>
            <img src={serviceImg} className='md:mt-[55px] mt-[48px] md:h-[354px] md:w-full h-[193px] object-cover md:px-0 px-4'/>
            <div className='text-[16px] font-normal text-[#FFFFFF] md:px-[120px] px-4 text-justify leading-6 pt-6'>
                <div className='mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean tincidunt posuere quam non vestibulum. Suspendisse nec diam mi. Nulla vitae convallis leo. Morbi ut turpis dui. Aenean urna justo, posuere in pellentesque et, porta vitae neque. Curabitur euismod ultricies ligula a viverra. Nullam a risus metus. Sed porttitor commodo tortor, eu molestie nibh ullamcorper sit amet. Etiam posuere nisl a urna dictum sollicitudin. Fusce maximus augue eleifend dui bibendum pellentesque. Phasellus sapien sem, mattis in risus ac, tincidunt pellentesque nibh.
                </div>
                <div className='mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean tincidunt posuere quam non vestibulum. Suspendisse nec diam mi. Nulla vitae convallis leo. Morbi ut turpis dui. Aenean urna justo, posuere in pellentesque et, porta vitae neque. Curabitur euismod ultricies ligula a viverra. Nullam a risus metus. Sed porttitor commodo tortor, eu molestie nibh ullamcorper sit amet. Etiam posuere nisl a urna dictum sollicitudin. Fusce maximus augue eleifend dui bibendum pellentesque. Phasellus sapien sem, mattis in risus ac, tincidunt pellentesque nibh.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean tincidunt posuere quam non vestibulum. Suspendisse nec diam mi. Nulla vitae convallis leo. Morbi ut turpis dui. Aenean urna justo, posuere in pellentesque et, porta vitae neque. Curabitur euismod ultricies ligula a viverra. Nullam a risus metus. Sed porttitor commodo tortor, eu molestie nibh ullamcorper sit amet. Etiam posuere nisl a urna dictum sollicitudin. Fusce maximus augue eleifend dui bibendum pellentesque. Phasellus sapien sem, mattis in risus ac, tincidunt pellentesque nibh.
                </div>
                <div className='mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean tincidunt posuere quam non vestibulum. Suspendisse nec diam mi. Nulla vitae convallis leo. Morbi ut turpis dui. Aenean urna justo, posuere in pellentesque et, porta vitae neque. Curabitur euismod ultricies ligula a viverra. Nullam a risus metus. Sed porttitor commodo tortor, eu molestie nibh ullamcorper sit amet. Etiam posuere nisl a urna dictum sollicitudin. Fusce maximus augue eleifend dui bibendum pellentesque. Phasellus sapien sem, mattis in risus ac, tincidunt pellentesque nibh.
                </div>
                <div className='mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean tincidunt posuere quam non vestibulum. Suspendisse nec diam mi. Nulla vitae convallis leo. Morbi ut turpis dui. Aenean urna justo, posuere in pellentesque et, porta vitae neque. Curabitur euismod ultricies ligula a viverra. Nullam a risus metus. Sed porttitor commodo tortor, eu molestie nibh ullamcorper sit amet. Etiam posuere nisl a urna dictum sollicitudin. Fusce maximus augue eleifend dui bibendum pellentesque. Phasellus sapien sem, mattis in risus ac, tincidunt pellentesque nibh.
                </div>
            </div>
            <div className='text-[#FFFFFF] md:px-[120px] px-4 text-justify md:mt-[104px] mt-[72px]'>
                <div className='text-[16px] font-medium'>More Blogs</div>


                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-12 mt-8'>
                    {Blogs.map((blog, index) => (
                        <div className='md:h-[413px] h-[350px] relative'>
                            <img src={blogImg} alt='blogImage' className='w-full md:h-[237px] h-[182px] object-cover' />
                            <div className='text-[16px] font-semibold text-[#FFFFFF] mt-4'>A healthy smile Lorem impsum A healthy smile Lorem impsum</div>
                            <div className='text-[14px] font-normal text-[#C1C1C1] mt-3'>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec mattis.Lorem ipsum dolor sit amet, consectetur adipi scing elit.</div>
                            <div className='flex items-center justify-center w-fit gap-2 text-[#FFFFFF] hover:text-[#04A391] hover:border-b absolute bottom-0 group'>
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
