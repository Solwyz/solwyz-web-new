import React, { useEffect, useState } from 'react';
import careerImg3 from "../../../assets/Careers/a.svg"
import careerImg2 from "../../../assets/Careers/b.svg"
import careerImg1 from "../../../assets/Careers/c.svg"
import careerImg4 from "../../../assets/Careers/d.svg"
import Search from '../../../assets/Careers/search.svg'
import Arrow from '../../../assets/Careers/Arrow.svg'


function CareersPage() {
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



  const [selectedCategory, setSelectedCategory] = useState('All positions (2)');
  const categories = [
    'All positions (2)',
    'Engineering (1)',
    'Human Resource (0)',
    'Design (0)',
    'Operation (0)',
    'Marketing (1)'
  ];

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
                <img className='md:mx-0 mx-auto' src={careerImg2} alt="" />
                <h1 className='font-bold mt-6 md:text-start text-center'>Secured Future</h1>
                <p className='font-normal text-[#C5C5C5] mt-6'>Lorem Ipsum is simply dummy text of <br className='hidden md:block' /> the printing and typesetting industry. <br className='hidden md:block' /> Lorem Ipsum has been the industry.</p>
              </div>
            </div>
            <div className='md:flex md:gap-[64px] md:mt-[56px]'>
              <div>
                <img className='md:mx-0 mx-auto' src={careerImg3} alt="" />
                <h1 className='font-bold mt-6 md:text-start text-center'>Learning Opportunity</h1>
                <p className='font-normal text-[#C5C5C5] mt-6'>Lorem Ipsum is simply dummy text of <br className='hidden md:block' /> the printing and typesetting industry. <br className='hidden md:block' /> Lorem Ipsum has been the industry.</p>
              </div>
              <div>
                <img className='md:mx-0 mx-auto' src={careerImg4} alt="" />
                <h1 className='font-bold mt-6 md:text-start text-center'>Upgrade Skills</h1>
                <p className='font-normal text-[#C5C5C5] mt-6'>Lorem Ipsum is simply dummy text of <br className='hidden md:block' /> the printing and typesetting industry. <br className='hidden md:block' /> Lorem Ipsum has been the industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-[120px] md:py-[72px] py-[64px] bg-[#F7F9FC]'>
        <div>
          <h1 className='font-normal text-[32px] text-center'>Current Openings</h1>
          <div className='md:flex md:justify-between sm:mt-[80px] sm:p-0 p-5 sm:gap-0 gap-2'>
            <div className='sm:w-[287px] hidden md:block md:mt-[64px]'>
              <div className='sm:h- sm:text-[20px] text-[12px] sm:leading-[32px] font-medium border-2 border-black rounded-lg sm:py-[14px] text-start sm:px-[24px] px-2'>All (2)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-medium text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Engineering (1)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Human Resource (0)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Design (0)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Operation (0)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Marketing (1)</div>
            </div>
            <div className="sm:hidden block w-full mb-4">
              <select className="w-full border-2 border-black rounded-lg p-3 text-[12px] font-medium">
                <option>All positions (2)</option>
                <option>Engineering (1)</option>
                <option>Human Resource (0)</option>
                <option>Design (0)</option>
                <option>Operation (0)</option>
                <option>Marketing (1)</option>
              </select>
            </div>
            <div className='sm:w-[877px] bg-[#F7F9FC]'>
              <div className='border border-[#D7D7D7] rounded-lg flex sm:mb-[30px] '>
                <img className='sm:h-6 sm:w-6 h-6 w-6 my-auto sm:ml-6 ml-3' src={Search}></img>
                <input className='sm:ml-4 ml-2 w-full px-6 py-[14px] sm:placeholder-[16px] placeholder-[12px] focus:outline-none placeholder-[#A8A8A8] bg-[#F7F9FC] rounded-lg' type='text' placeholder='Search Position'></input>
              </div>


              <div className='bg-[#FFFFFF]  p-6 sm:mt-[16px] mt-8'>
                <div className='bg-[#FFFFFF] md:flex md:justify-between'>
                  <div>
                    <div className='sm:text-[16px] text-[14px] leading-6 font-semibold text-left'>Flutter Developer</div>
                    <div className='text-[12px] leading-[13px] font-medium sm:mt-4 text-left'>Banglore / Chennai / Trivandrum</div>
                    <div className='mt-4 flex gap-2'>
                      <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-full rounded-full w-fit px-4 py-2 text-sm'>3+ yrs Experience</div>
                      <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-full rounded-full w-fit px-4 py-2 text-sm'>Full-time</div>
                      <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-full rounded-full w-fit px-4 py-2 text-sm'>2-4 yrs Experience</div>
                      
                    </div>
                  </div>

                  <div className='justify-end flex md:justify-center items-center'>
                    <div className='sm:w-[111px] mt-8 md:mt-0  sm:h-[48px] w-[90px] h-[32px] bg-[#04A391] flex items-center justify-center gap-2 rounded-lg  cursor-pointer'>
                      <div className='sm:text-[16px] text-[12px] text-white leading-6 font-medium'>Apply</div>
                      <div><img className='' src={Arrow}></img></div>
                    </div>
                  </div>

                </div>
              </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CareersPage;
