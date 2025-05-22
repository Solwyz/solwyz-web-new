import React, { useEffect, useState } from 'react';
import careerImg3 from "../../../assets/Careers/a.svg"
import careerImg2 from "../../../assets/Careers/b.svg"
import careerImg1 from "../../../assets/Careers/c.svg"
import careerImg4 from "../../../assets/Careers/d.svg"


function CareersPage() {
  const words = ["Creativity", "Innovation", "Growth"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
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
    <div>
      <div className="md:h-[95px] h-[104px]" />
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
      <div className='md:px-[120px] md:py-[104px] px-4 py-8 bg-[#010B02] text-white md:text-start text-justify'>
        <div className='md:flex md:justify-between'>
          <div>
            <h2 className='uppercase text-[16px] font-medium'>Benefits</h2>

            <div className='text-[32px] font-bold mt-[21px]'>Why you Should Join Our <br className='hidden md:block' />
              Awesome Team</div>

            <div className='mt-8'>At Solwyz Technologies, we provide a friendly and <br className='hidden md:block' /> supportive workspace that helps you grow and thrive. Our <br className='hidden md:block' /> positive and efficient work environment nurtures the right <br className='hidden md:block' /> talent, allowing you to reach your full potential.</div>
          </div>
          <div className='md:mt-0 mt-12'>
            <div className='md:flex md:gap-[64px] '>
              <div className=''>
                <img className='md:mx-0 mx-auto' src={careerImg1} alt="" />
                <h1 className='font-bold mt-6 md:text-start text-center'>Team work</h1>
                <p className='font-normal text-[#C5C5C5] mt-6'>Lorem Ipsum is simply dummy text of <br className='hidden md:block' /> the printing and typesetting industry. <br className='hidden md:block' /> Lorem Ipsum has been the industry.</p>
              </div>
              <div>
                <img className='md:mx-0 mx-auto'  src={careerImg2} alt="" />
                <h1 className='font-bold mt-6 md:text-start text-center'>Secured Future</h1>
                <p className='font-normal text-[#C5C5C5] mt-6'>Lorem Ipsum is simply dummy text of <br className='hidden md:block' /> the printing and typesetting industry. <br className='hidden md:block' /> Lorem Ipsum has been the industry.</p>
              </div>
            </div>
            <div className='md:flex md:gap-[64px] md:mt-[56px]'>
              <div>
                <img className='md:mx-0 mx-auto'  src={careerImg3} alt="" />
                <h1 className='font-bold mt-6 md:text-start text-center'>Learning Opportunity</h1>
                <p className='font-normal text-[#C5C5C5] mt-6'>Lorem Ipsum is simply dummy text of <br className='hidden md:block' /> the printing and typesetting industry. <br className='hidden md:block' /> Lorem Ipsum has been the industry.</p>
              </div>
              <div>
                <img className='md:mx-0 mx-auto'  src={careerImg4} alt="" />
                <h1 className='font-bold mt-6 md:text-start text-center'>Upgrade Skills</h1>
                <p className='font-normal text-[#C5C5C5] mt-6'>Lorem Ipsum is simply dummy text of <br className='hidden md:block' /> the printing and typesetting industry. <br className='hidden md:block' /> Lorem Ipsum has been the industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
