import React from 'react'
import doubleQuotes from '../../../../assets/doublequotes-big.svg'
import downQts from '../../../../assets/downquotes.svg'
import profImg from '../../../../assets/profileimg.png'
import Slider from 'react-slick';
import './Testimonials.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Justin Samuel",
        company: "RGW Exports and Imports Pvt Ltd",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ook a galley of type",
        image: profImg,
    },
    {
        name: "Abraham",
        company: "Marco Logistics",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ook a galley of type",
        image: profImg,
    },
    {
        name: "Romeo Roshan",
        company: "SVN Exports and Imports Pvt Ltd",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ook a galley of type",
        image: profImg,
    },
];

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className='text-[#FFFFFF] md:pt-[104px] pt-[72px]'>
            <img src={doubleQuotes} alt='' className='w-16 h-16 mx-auto' />
            <div className='md:text-[48px] text-[24px] font-bold text-center md:px-[215px] px-[48px]'>Discover what our clients have to say about their <span className='font-light text-[#04A391]'>experience with us</span></div>
            <div className='md:mt-[104px] mt-[40px] px-8'>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='px-3 py-8 relative'>
                            <div className=' bg-[#FFFFFF14] p-6 w-full  min-h-[327px] fullBoxShadow text-center relative'>
                                <div><img src={downQts} alt='' /></div>

                                <div className='w-28 h-28 rounded-full overflow-hidden absolute left-1/2 transform -translate-x-1/2 -top-8'>
                                    <img src={testimonial.image} alt={testimonial.name} className='w-full h-full object-cover' />
                                </div>

                                <h3 className='text-[20px] font-medium text-white mt-10 fadeInDelay'>{testimonial.name}</h3>
                                <p className='text-[16px] font-normal text-[#ACACAC] fadeInDelay'>{testimonial.company}</p>
                                <p className='text-[16px] font-normal text-[#CACACA] leading-6 mt-4 fadeInLongDelay'>{testimonial.text}</p>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials
