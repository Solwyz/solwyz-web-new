"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Anwar Shahul Hameed",
    company: "CEO - King Life Trading LLC",
    text: "As a trading company, we relied on Solwyz to build our website and handle digital marketing. Their clear approach and fast execution helped us grow online with confidence.",
    image: "/assets/Testimonial/AnwarShahulHameed.svg",
  },
  {
    name: "Thoufeeq ",
    company: "COO - Medoc Pharmacy LLC",
    text: "Solwyz built a solid system for us. The ERP, website, and marketing support made it easier to manage work and helped Medoc Pharmacy grow online and offline.",
    image: "/assets/Testimonial/Thoufeeq.svg",
  },
  {
    name: "Dr Anusree",
    company: "Managing Director - Leelajani Ayurcare",
    text: "Solwyz has been managing our digital marketing with genuine effort and focus. Their strategies have helped Leelajani Ayurcare reach more people seeking trusted Ayurvedic care.",
    image: "/assets/Testimonial/DrAnusree.svg",
  },
  {
    name: "Shajan Joseph",
    company: "Brand Manager - Dr. Food Nutri",
    text: "Solwyz gave us a clean, vibrant platform to showcase our products. Their content and design really reflect our food brand.",
    image: "/assets/Testimonial/SajanAbraham.svg",
  },
  {
    name: "Dr. Arya",
    company: "CEO - Dr. Arya’s Ident",
    text: "Solwyz crafted a website that perfectly reflects our brand and continues to manage our online presence with clarity, consistency, and care.",
    image: "/assets/Testimonial/DrArya.svg",
  },
  {
    name: "Er. Prashobh V",
    company: "Chairman - Map Foundation",
    text: "Solwyz delivered a professional, modern site that highlights our architectural expertise. Their attention to design and structure truly impressed us.",
    image: "/assets/Testimonial/Prashob.svg",
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
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="text-[#FFFFFF] md:mt-[104px] mt-[72px]">
      {/* Top quotes */}
      <Image
        src="/assets/doublequotes-big.svg"
        alt="Double Quotes"
        width={64}
        height={64}
        className="mx-auto"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:text-[48px] text-[24px] font-bold text-center md:px-[215px] px-[48px]"
      >
        Discover what our clients have to say about their{" "}
        <span className="font-light text-[#04A391]">experience with us</span>
      </motion.div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:mt-[104px] mt-[40px] px-8"
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3 py-[70px] relative">
              {/* Gradient Border */}
              <div className="p-[2px] bg-gradient-to-br from-[#620559] via-[#182221] to-[#028375] rounded-tl-[32px] rounded-br-[32px] h-full">
                {/* Inner Box */}
                <div className="bg-[#061615] p-8 w-full rounded-tl-[32px] rounded-br-[32px] min-h-[327px] fullBoxShadow text-center relative">
                  {/* Quote Icon */}
                  <Image
                    src="/assets/downquotes.svg"
                    alt="Quote"
                    width={24}
                    height={24}
                  />

                  {/* Profile Image */}
                  <div className="w-28 h-28 rounded-full overflow-hidden absolute left-1/2 transform -translate-x-1/2 -top-[4rem] border-4 border-[#061615]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-[20px] font-medium text-white mt-12 fadeInDelay">
                    {testimonial.name}
                  </h3>
                  {/* Company */}
                  <p className="text-[16px] font-normal mt-2 text-[#ACACAC] fadeInDelay">
                    {testimonial.company}
                  </p>
                  {/* Text */}
                  <p className="text-[16px] text-justify font-normal text-[#CACACA] leading-6 mt-4 fadeInLongDelay">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Testimonials;
