import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Your image imports
import Emerald from '../../../assets/OurAssociates/emerald_logo[1].svg';
import EmeraldHover from '../../../assets/OurAssociates/emerald_logo[1] (1).svg';
import Leelanjali from '../../../assets/OurAssociates/leelanjali_logo[1].svg';
import LeelanjaliHover from '../../../assets/OurAssociates/leelanjali_logo[1] (1).svg';
import Saveri from '../../../assets/OurAssociates/saveri_logo[1].svg';
import SaveriHover from '../../../assets/OurAssociates/saveri_logo[1] (1).svg';
import Kinglife from '../../../assets/OurAssociates/king_life[1].svg';
import KinglifeHover from '../../../assets/OurAssociates/king_life[1] (1).svg';
import HudsonPaper from '../../../assets/OurAssociates/hudson_paper_logo[1] (1).svg';
import HudsonPaperHover from '../../../assets/OurAssociates/hudson_paper_logo[1].svg';
import MedocPharma from '../../../assets/OurAssociates/medoc pharmacy (1).svg';
import MedocPharmaHover from '../../../assets/OurAssociates/medoc pharmacy.svg';
import AlQudas from '../../../assets/OurAssociates/al qudas logo.svg';
import AlQudasHover from '../../../assets/OurAssociates/al qudas logo (1).svg';
import Aryavedic from '../../../assets/OurAssociates/aryavedic.svg';
import AryavedicHover from '../../../assets/OurAssociates/aryavedic (1).svg';
import centralLink from '../../../assets/OurAssociates/central_link.svg';
import centralLinkHover from '../../../assets/OurAssociates/central_link (1).svg';
import Blend from '../../../assets/OurAssociates/blend_by_emerald[1].svg';
import BlendHover from '../../../assets/OurAssociates/blend_by_emerald[1] (1).svg';
import DeArt from '../../../assets/OurAssociates/de_art_logo[1].svg';
import DeArtHover from '../../../assets/OurAssociates/de_art_logo[1] 1.svg';
import DrFood from '../../../assets/OurAssociates/dr_food_logo[1].svg';
import DrFoodHover from '../../../assets/OurAssociates/dr_food_logo[1] (1).svg';
import GrameenHover from '../../../assets/OurAssociates/grameen_agro_producer_logo[1].svg';
import Grameen from '../../../assets/OurAssociates/grameen_agro_producer_logo[1] (1).svg';
import Oximiles from '../../../assets/OurAssociates/oxymiles_logo[1].svg';
import OximilesHover from '../../../assets/OurAssociates/oxymiles_logo[1] (1).svg';
import Map from '../../../assets/OurAssociates/map[1].svg';
import MapHover from '../../../assets/OurAssociates/map[1] (1).svg';
import Hazi from '../../../assets/OurAssociates/hazi_logo[1].svg';
import HaziHover from '../../../assets/OurAssociates/hazi_logo[1] (1).svg';
import { tr } from 'framer-motion/client';

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
    <div className=" md:pt-[104px] w-full">
     <style>{`
    .slick-list {
      height: auto !important;
    }
  `}</style>
      <div className="md:text-[48px] font-bold text-white md:px-[120px]">
        Our <span className="text-[#04A391] font-normal">trusted</span> associates
      </div>

      <Slider {...settings} className="mt-10 overflow-x-hidden">
        {associates.map((associate, index) => (
          <div key={index} className="px-2">
            <div className="bg-[#0F0F0F] p-5 flex items-center justify-center group mb-4">
              <div className="relative w-[100px] h-[80px] ">
                <img
                  src={associate.normal}
                  alt={`Associate ${index}`}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={associate.hover}
                  alt={`Associate ${index} Hover`}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default OurAssosiate;
