"use client"; // ✅ Required for hooks, framer-motion, and react-slick

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Next.js optimized images

// ✅ No imports needed now – just paths from /public/assets
const associates = [
  { normal: "/assets/OurAssociates/Emerald.svg", hover: "/assets/OurAssociates/EmeraldHover.svg" },
  { normal: "/assets/OurAssociates/Leelanjali.svg", hover: "/assets/OurAssociates/LeelanjaliHover.svg" },
  { normal: "/assets/OurAssociates/KingLife.svg", hover: "/assets/OurAssociates/KingLifeHover.svg" },
  { normal: "/assets/OurAssociates/Savery.svg", hover: "/assets/OurAssociates/SaveryHover.svg" },
  { normal: "/assets/OurAssociates/Hudson.svg", hover: "/assets/OurAssociates/HudsonHover.svg" },
  { normal: "/assets/OurAssociates/MedocPharma.svg", hover: "/assets/OurAssociates/MedocPharmaHover.svg" },
  { normal: "/assets/OurAssociates/AlQudas.svg", hover: "/assets/OurAssociates/AlQudasHover.svg" },
  { normal: "/assets/OurAssociates/Ayurvedic.svg", hover: "/assets/OurAssociates/AyurvedicHover.svg" },
  { normal: "/assets/OurAssociates/CentralLink.svg", hover: "/assets/OurAssociates/CenterLinkHover.svg" },
  { normal: "/assets/OurAssociates/Blend.svg", hover: "/assets/OurAssociates/BlendHover.svg" },
  { normal: "/assets/OurAssociates/DeArt.svg", hover: "/assets/OurAssociates/DeArtHover.svg" },
  { normal: "/assets/OurAssociates/DrFood.svg", hover: "/assets/OurAssociates/DrFoodHover.svg" },
  { normal: "/assets/OurAssociates/KGAPCO.svg", hover: "/assets/OurAssociates/KGAPCOhover.svg" },
  { normal: "/assets/OurAssociates/Oxymiles.svg", hover: "/assets/OurAssociates/OxymilesHover.svg" },
  { normal: "/assets/OurAssociates/Map.svg", hover: "/assets/OurAssociates/MapHover.svg" },
  { normal: "/assets/OurAssociates/Hazi.svg", hover: "/assets/OurAssociates/HaziHover.svg" },
];

export default function OurAssociate() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesPerRow: 4,
    rows: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesPerRow: 3, rows: 3 } },
      { breakpoint: 768, settings: { slidesPerRow: 2, rows: 3 } },
      { breakpoint: 480, settings: { slidesPerRow: 1, rows: 3 } },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full md:py-[104px] pt-[72px]"
    >
      <div className="md:text-[48px] text-[24px] px-4 font-bold text-white md:px-[120px]">
        Our <span className="text-[#04A391] font-normal">trusted</span> associates
      </div>

      <Slider {...settings} className="mt-10 overflow-x-hidden">
        {associates.map((associate, index) => (
          <div key={index} className="p-2">
            <div
              className="relative w-full h-full aspect-[2/1] bg-black rounded-md overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Normal Image */}
              <Image
                src={associate.normal}
                alt={`Associate ${index}`}
                fill
                className={`object-contain transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Hover Image */}
              <Image
                src={associate.hover}
                alt={`Associate ${index} Hover`}
                fill
                className={`object-contain transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
