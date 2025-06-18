import React from "react";
import doubleQuotes from "@assets/doublequotes-big.svg";
import downQts from "@assets/downquotes.svg";
import profImg from "@assets/profileimg.png";
import AnwarShahulHameed from "@assets/Testimonial/AnwarShahulHameed.svg";
import DrAnusree from "@assets/Testimonial/DrAnusree.svg";
import DrArya from "@assets/Testimonial/DrArya.svg";
import Prashob from "@assets/Testimonial/Prashob.svg";
import SajanAbraham from "@assets/Testimonial/SajanAbraham.svg";
import Thoufeeq from "@assets/Testimonial/Thoufeeq.svg";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anwar Shahul Hameed",
    company: "CEO - King Life Trading LLC",
    text: "As a trading company, we relied on Solwyz to build our website and handle digital marketing. Their clear approach and fast execution helped us grow online with confidence.",
    image: AnwarShahulHameed,
  },
  {
    name: "Thoufeeq ",
    company: "COO - Medoc Pharmacy LLC",
    text: "Solwyz built a solid system for us. The ERP, website, and marketing support made it easier to manage work and helped Medoc Pharmacy grow online and offline.",
    image: Thoufeeq,
  },
  {
    name: " Dr Anusree ",
    company: "Managing Director - Leelajani Ayurcare",
    text: "Solwyz has been managing our digital marketing with genuine effort and focus. Their strategies have helped Leelajani Ayurcare reach more people seeking trusted Ayurvedic care.",
    image: DrAnusree,
  },
  {
    name: " Shajan Joseph",
    company: "Brand Manager - Dr. Food Nutri ",
    text: "Solwyz gave us a clean, vibrant platform to showcase our products. Their content and design really reflect our food brand.",
    image: SajanAbraham,
  },
  {
    name: "  Dr. Arya",
    company: " CEO - Dr. Arya’s Ident",
    text: "Solwyz crafted a website that perfectly reflects our brand and continues to manage our online presence with clarity, consistency, and care",
    image: DrArya,
  },
  {
    name: "Er. Prashobh V",
    company: " Chairman, - Map Foundation ",
    text: "Solwyz delivered a professional, modern site that highlights our architectural expertise. Their attention to design and structure truly impressed us.",
    image: Prashob,
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="text-[#FFFFFF] md:pt-[104px] pt-[72px]">
      <img src={doubleQuotes} alt="" className="w-16 h-16 mx-auto" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.4, ease: "easeOut" }} 
        className="md:text-[48px] text-[24px] font-bold text-center md:px-[215px] px-[48px]">
        Discover what our clients have to say about their{" "}
        <span className="font-light text-[#04A391]">experience with us</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="md:mt-[104px] mt-[40px] px-8">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3 py-8 relative">
              <div className=" bg-[#141414] p-6 w-full  min-h-[327px] fullBoxShadow text-center relative">
                <div>
                  <img src={downQts} alt="" />
                </div>

                <div className="w-28 h-28 rounded-full overflow-hidden absolute left-1/2 transform -translate-x-1/2 -top-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-[20px] font-medium text-white mt-12 fadeInDelay">
                  {testimonial.name}
                </h3>
                <p className="text-[16px] font-normal mt-2 text-[#ACACAC] fadeInDelay">
                  {testimonial.company}
                </p>
                <p className="text-[16px] text-justify font-normal text-[#CACACA] leading-6 mt-4 fadeInLongDelay">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Testimonials;
