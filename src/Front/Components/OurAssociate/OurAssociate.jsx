import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image imports
import Emerald from '@assets/OurAssociates/Emerald.svg';
import EmeraldHover from '@assets/OurAssociates/EmeraldHover.svg';
import Leelanjali from '@assets/OurAssociates/Leelanjali.svg';
import LeelanjaliHover from '@assets/OurAssociates/LeelanjaliHover.svg';
import Saveri from '@assets/OurAssociates/Savery.svg';
import SaveriHover from '@assets/OurAssociates/SaveryHover.svg';
import Kinglife from '@assets/OurAssociates/KingLife.svg';
import KinglifeHover from '@assets/OurAssociates/KingLifeHover.svg';
import HudsonPaper from '@assets/OurAssociates/Hudson.svg';
import HudsonPaperHover from '@assets/OurAssociates/HudsonHover.svg';
import MedocPharmaHover from '@assets/OurAssociates/MedocPharma.svg';
import MedocPharma from '@assets/OurAssociates/MedocPharmaHover.svg';
import AlQudas from '@assets/OurAssociates/AlQudas.svg';
import AlQudasHover from '@assets/OurAssociates/AlQudasHover.svg';
import Aryavedic from '@assets/OurAssociates/Ayurvedic.svg';
import AryavedicHover from '@assets/OurAssociates/AyurvedicHover.svg';
import centralLink from '@assets/OurAssociates/CentralLink.svg';
import centralLinkHover from '@assets/OurAssociates/CenterLinkHover.svg';
import Blend from '@assets/OurAssociates/Blend.svg';
import BlendHover from '@assets/OurAssociates/BlendHover.svg';
import DeArt from '@assets/OurAssociates/DeArt.svg';
import DeArtHover from '@assets/OurAssociates/DeArtHover.svg';
import DrFood from '@assets/OurAssociates/DrFood.svg';
import DrFoodHover from '@assets/OurAssociates/DrFoodHover.svg';
import GrameenHover from '@assets/OurAssociates/KGAPCOhover.svg';
import Grameen from '@assets/OurAssociates/KGAPCO.svg';
import Oximiles from '@assets/OurAssociates/Oxymiles.svg';
import OximilesHover from '@assets/OurAssociates/OxymilesHover.svg';
import Map from '@assets/OurAssociates/Map.svg';
import MapHover from '@assets/OurAssociates/MapHover.svg';
import Hazi from '@assets/OurAssociates/Hazi.svg';
import HaziHover from '@assets/OurAssociates/HaziHover.svg';
import { motion } from 'framer-motion';

const associates = [
  { normal: Emerald, hover: EmeraldHover },
  { normal: Leelanjali, hover: LeelanjaliHover },
  { normal: Kinglife, hover: KinglifeHover },
  { normal: Saveri, hover: SaveriHover },
  { normal: HudsonPaper, hover: HudsonPaperHover },
  { normal: MedocPharmaHover, hover: MedocPharma },
  { normal: AlQudas, hover: AlQudasHover },
  { normal: Aryavedic, hover: AryavedicHover },
  { normal: centralLink, hover: centralLinkHover },
  { normal: Blend, hover: BlendHover },
  { normal: DeArt, hover: DeArtHover },
  { normal: DrFood, hover: DrFoodHover },
  { normal: Grameen, hover: GrameenHover },
  { normal: Oximiles, hover: OximilesHover },
  { normal: Map, hover: MapHover },
  { normal: Hazi, hover: HaziHover },
];

function OurAssosiate() {
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
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 3,
          rows: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerRow: 1,
          rows: 3,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger earlier
      transition={{ duration: 0.6, ease: "easeOut" }} // Smoother transition
      className="w-full md:py-[104px] pt-[72px]">
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
              <img
                src={associate.normal}
                alt={`Associate ${index}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                  }`}
              />

              {/* Hover Image */}
              <img
                src={associate.hover}
                alt={`Associate ${index} Hover`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            </div>

          </div>
        ))}
      </Slider>
    </motion.div>
  );
}

export default OurAssosiate;
