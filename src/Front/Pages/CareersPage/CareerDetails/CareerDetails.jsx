
import React, { useEffect, useState } from 'react';

import Arrow from '../../../../assets/Careers/Arrow.svg';
import { Link } from 'react-router-dom';


function CareerDetails() {

  const words = ["Creativity", "Innovation", "Growth"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {

    document.title = "Careers | Solwyz Technologies";

    const interval = setInterval(() => {

      setOpacity(0);

      setTimeout(() => {

        setCurrentIndex((prev) => (prev + 1) % words.length);

        setOpacity(1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='md:mb-[120px] font-manrope'>
      <div className="md:h-[95px] h-[104px]"></div>
      <div>
        <div className="text-white bg-careersbanner md:justify-start justify-center md:h-[358px] bg-cover md:px-[430px] md:py-[99px] px-[52px] py-[97px]">
          <div className="text-[24px] md:font-medium ">
            Join a culture of
          </div>


          <div className='hidden md:block'>
            <svg
              className="block mt-0 whitespace-nowrap"
              width="100%"
              height="150px"
              viewBox="0 0 1000 120"
              preserveAspectRatio="xMinYMid meet"
            >
              <text
                x="0"
                y="120"
                fontSize="190px"
                fontWeight="700"
                fontFamily="sans-serif"
                fill="none"
                stroke="#0E7368"
                strokeWidth="2"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: opacity,
                }}
              >
                {words[currentIndex]}
              </text>
            </svg>
          </div>
          <div className='md:hidden block'>
            <svg
              className="block mt-2 md:mt-0 w-full"
              height="100"
              viewBox="0 0 1000 120"
              preserveAspectRatio="xMinYMid meet"
            >
              <text
                x="0"
                y="100"
                fontSize="190px" // mobile-friendly size
                fontWeight="700"
                fontFamily="sans-serif"
                fill="none"
                stroke="#0E7368"
                strokeWidth="5"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: opacity,
                }}
              >
                {words[currentIndex]}
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen text-white py-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 font-manrope">
        {/* Responsibilities Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 font-manrope">Responsibilities :</h2>
          <ul className="space-y-4 text-sm sm:text-base">
            <li className="list-disc ml-6">
              Project Planning and Execution: Define project scope, objectives, and deliverables; develop detailed project plans, schedules, and timelines; monitor progress, identify risks, and implement corrective actions for on-time delivery.
            </li>
            <li className="list-disc ml-6">
              Team Coordination: Coordinate with cross-functional teams; assign tasks, set priorities, and ensure clear communication channels; facilitate meetings, stand-ups, and reviews to track progress and address blockers.
            </li>
            <li className="list-disc ml-6">
              Client Communication: Serve as the primary client contact; provide updates, address feedback, manage expectations; foster strong client relationships.
            </li>
            <li className="list-disc ml-6">
              Project Planning and Execution: Define project scope, objectives, and deliverables; develop detailed project plans, schedules, and timelines; monitor progress, identify risks, and implement corrective actions for on-time delivery.
            </li>
            <li className="list-disc ml-6">
              Resource Management: Manage budget, personnel, tools; optimize resource allocation; identify skill development opportunities.
            </li>
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 font-manrope">Requirement :</h2>
          <ul className="space-y-4 text-sm sm:text-base">
            <li className="list-disc ml-6">
              Project Planning and Execution: Define project scope, objectives, and deliverables; develop detailed project plans, schedules, and timelines; monitor progress, identify risks, and implement corrective actions for on-time delivery.
            </li>
            <li className="list-disc ml-6">
              Team Coordination: Coordinate with cross-functional teams; assign tasks, set priorities, and ensure clear communication channels; facilitate meetings, stand-ups, and reviews to track progress and address blockers.
            </li>
            <li className="list-disc ml-6">
              Client Communication: Serve as the primary client contact; provide updates, address feedback, manage expectations; foster strong client relationships.
            </li>
            <li className="list-disc ml-6">
              Project Planning and Execution: Define project scope, objectives, and deliverables; develop detailed project plans, schedules, and timelines; monitor progress, identify risks, and implement corrective actions for on-time delivery.
            </li>
            <li className="list-disc ml-6">
              Resource Management: Manage budget, personnel, tools; optimize resource allocation; identify skill development opportunities.
            </li>
          </ul>
        </div>

        {/* Contact */}
        <p className="text-sm font-medium font-manrope mb-6">Contact : careerssolwyz@gmail.com</p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
          {/* Back Button */}
          <button
            className="bg-transparent border border-white text-white h-[40px] sm:h-[48px] px-6 sm:px-9 rounded-lg text-sm sm:text-[16px] font-medium hover:border-[#04A391] hover:text-[#04A391] duration-300"
          >
            Back
          </button>

          {/* Apply Button with Gradient Hover */}
       <Link to={"/careerForm"}>
            <div className="relative group h-[40px] sm:h-[48px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391] px-5 sm:px-6 flex items-center justify-center">
              <div
                className="absolute inset-0 
        bg-gradient-to-r from-[#04A391] to-[#035249]
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300"
              ></div>
  
              <div className="relative z-10 flex items-center justify-center gap-2">
                <div className="text-[12px] sm:text-[16px] text-white font-medium">Apply</div>
                <div><img src={Arrow} alt="arrow" className="w-4 h-4" /></div>
              </div>
            </div>
       </Link>
        </div>

      </div>

    </div>
  )
}

export default CareerDetails
