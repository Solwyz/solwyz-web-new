import React, { useEffect, useState } from "react";
import digital from "../../../assets/service/digital.svg";
import erp from "../../../assets/service/erp.svg";
import mobileWeb from "../../../assets/service/mobileWeb.svg";
import pharma from "../../../assets/service/pharma.svg";
import design from "../../../assets/service/design.svg";
import designBg from "../../../assets/service/designBg.svg";
import custom from "../../../assets/service/custom.svg";
import customBg from "../../../assets/service/customBg.svg";
import deployment from "../../../assets/service/deployment.svg";
import deploymentBg from "../../../assets/service/deploymentBg.svg";
import discovery from "../../../assets/service/discovery.svg";
import discoveryBg from "../../../assets/service/discoveryBg.svg";
import marketing from "../../../assets/service/marketing.svg";
import marketingBg from "../../../assets/service/marketingBg.svg";
import solutionBg from "../../../assets/service/solutionBg.svg";
import solution from "../../../assets/service/solution.svg";
import support from "../../../assets/service/support.svg";
import supportBg from "../../../assets/service/supportBg.svg";
import testing from "../../../assets/service/testing.svg";
import testingBg from "../../../assets/service/testingBg.svg";
import { Link } from "react-router-dom";
import Pageloader from "../../Loaders/Pageloader";

function ServicePage() {
    const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      document.title = "Services | Solwyz Technologies";
    }, []);
    useEffect(() => {
      // Simulate delay
      setTimeout(() => setLoading(false), 1000);
    }, []);
  
    if (loading) return <Pageloader/>;
  return (
    <div className="pt-[104px] md:mb-[120px] mb-[72px] md:pt-[95px] px-4 md:px-[120px]">
      <h1 className="font-bold text-white md:mt-[104px] mt-[54px] md:text-start text-center md:text-[48px] text-[24px]">
        Our Services
      </h1>

      <div className="md:mt-[40px] mt-[70px] flex flex-col md:space-y-[56px] space-y-6">
      <Link to="Pharma-E-Commerce">
          <div className="border group duration-300 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
            <div className="md:w-[202px]">
              <img src={pharma} className="mx-auto w-[80px] h-20" alt="" />
              <h1 className="text-center  mt-6 font-semibold text-xl leading-5">
                Pharma E-Commerce
              </h1>
            </div>
            <p className="text-justify text-[#A5A5A5] md:w-[876px] md:ml-[72px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
              Our Pharma E-commerce platform offers a robust and comprehensive
              solution designed to meet the needscom prensive ution designed meet
              bfrbffbfffof pharmaceutical businesses, providing bfba perfect blend
              obfbfffbf vOur Pharma E-commerce platform offers a robust and
              comprehensive solution designed to meet the needscom prensive ution
              designed meet bfrbffbfffof pharmaceutical businesses, providing bfba
              perfect
            </p>
          </div>
        </Link>
        <Link to="digital-marketing">

        <div className="border group duration-300 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
          <div className="md:w-[202px]">
            <img src={digital} className="mx-auto w-[80px] h-20" alt="" />
            <h1 className="text-center  mt-6 font-semibold text-xl leading-5">
              Digital Marketing
            </h1>
          </div>
          <p className="text-justify text-[#A5A5A5] md:w-[876px] md:ml-[72px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
            Our Pharma E-commerce platform offers a robust and comprehensive
            solution designed to meet the needscom prensive ution designed meet
            bfrbffbfffof pharmaceutical businesses, providing bfba perfect blend
            obfbfffbf vOur Pharma E-commerce platform offers a robust and
            comprehensive solution designed to meet the needscom prensive ution
            designed meet bfrbffbfffof pharmaceutical businesses, providing bfba
            perfect
          </p>
        </div>
</Link>
        <Link to="mobile-and-web">

        <div className="border group duration-300 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
          <div className="md:w-[202px]">
            <img src={mobileWeb} className="mx-auto w-[80px] h-20" alt="" />
            <h1 className="text-center  mt-6 font-semibold text-xl leading-5">
              Customized mobile & web app
            </h1>
          </div>
          <p className="text-justify text-[#A5A5A5] md:w-[876px] md:ml-[72px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
            Our Pharma E-commerce platform offers a robust and comprehensive
            solution designed to meet the needscom prensive ution designed meet
            bfrbffbfffof pharmaceutical businesses, providing bfba perfect blend
            obfbfffbf vOur Pharma E-commerce platform offers a robust and
            comprehensive solution designed to meet the needscom prensive ution
            designed meet bfrbffbfffof pharmaceutical businesses, providing bfba
            perfect
          </p>
        </div>
        </Link>

        <Link to="Pharma-ERP">

        <div className="border group duration-300 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
          <div className="md:w-[202px]">
            <img src={erp} className="mx-auto w-[80px] h-20" alt="" />
            <h1 className="text-center  mt-6 font-semibold text-xl leading-5">
              Pharma ERP Services
            </h1>
          </div>
          <p className="text-justify text-[#A5A5A5] md:w-[876px] md:ml-[72px] justify-center  mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
            Our Pharma E-commerce platform offers a robust and comprehensive
            solution designed to meet the needscom prensive ution designed meet
            bfrbffbfffof pharmaceutical businesses, providing bfba perfect blend
            obfbfffbf vOur Pharma E-commerce platform offers a robust and
            comprehensive solution designed to meet the needscom prensive ution
            designed meet bfrbffbfffof pharmaceutical businesses, providing bfba
            perfect
          </p>
        </div>
        </Link>
      </div>

      <div className="md:mt-[104px] mt-[72px]">
        <h1 className="text-center text-white text-[24px] md:text-[48px] font-bold ">
          End-to-End Digital Delivery
        </h1>
        <p className="text-center font-normal mt-4 leading-[24px] md:leading-8 md:mt-6 text-[#04A391] text-base ">
          Core principles
          <span className="text-white"> guide every smart solution</span>
        </p>

        <div className="md:mt-20 mt-12">
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-white">
          
            {/* Mobile dividing lines for 2x2 grid */}
            <div className="block md:hidden absolute top-0 bottom-0 left-1/2 translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="block md:hidden absolute left-0 right-0 top-1/2 translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>
            <div className="block md:hidden absolute left-0 right-0 -top-[-25%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>
            <div className="block md:hidden absolute left-0 right-0 -top-[-75%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>

            {/* Desktop lines as you have */}
            <div className="hidden md:block absolute top-0 bottom-0 left-[25%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="hidden md:block absolute top-0 bottom-0 left-[50%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="hidden md:block absolute top-0 bottom-0 left-[75%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="hidden md:block absolute left-0 right-0 top-[50%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>

            {/* 1. Discovery & Consultation */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={discovery}
                  alt="Discovery & Consultation"
                  className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity  h-full object-contain z-10 relative"
                />
                <img
                  src={discoveryBg}
                  alt="Discovery & Consultation"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={discoveryBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Discovery & Consultation
              </p>
            </div>

            {/* 2. Solution Planning */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={solution}
                  alt="Solution Planning"
                  className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity   h-full object-contain z-10 relative"
                />
                <img
                  src={solutionBg}
                  alt="Solution Planning"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={solutionBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Solution <br className="md:hidden" />
                Planning
              </p>
            </div>

            {/* 3. Design & Prototyping */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={design}
                  alt="Design & Prototyping"
                  className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity  md:block h-full object-contain z-10 relative"
                />
                <img
                  src={designBg}
                  alt="Design & Prototyping"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={designBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Design & Prototyping
              </p>
            </div>

            {/* 4. Custom Development */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={custom}
                  alt="Custom Development"
                  className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity  md:block h-full object-contain z-10 relative"
                />
                <img
                  src={customBg}
                  alt="Custom Development"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={customBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Custom Development
              </p>
            </div>

            {/* 5. Testing & Compliance */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={testing}
                  alt="Testing & Compliance"
                  className="w-full hidden opacity-100 duration-300 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                />
                <img
                  src={testingBg}
                  alt="Testing & Compliance"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={testingBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Testing & Compliance
              </p>
            </div>

            {/* 6. Deployment & Launch */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={deployment}
                  alt="Deployment & Launch"
                  className="w-full hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300  md:block h-full object-contain z-10 relative"
                />
                <img
                  src={deploymentBg}
                  alt="Deployment & Launch"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={deploymentBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Deployment & Launch
              </p>
            </div>

            {/* 7. Marketing & User Acquisition */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={marketing}
                  alt="Marketing & User Acquisition"
                  className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300  h-full hidden md:block object-contain z-10 relative"
                />
                <img
                  src={marketingBg}
                  alt="Marketing & User Acquisition"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={marketingBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Marketing & User Acquisition
              </p>
            </div>

            {/* 8. Ongoing Support & Evolution */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src={support}
                  alt="Ongoing Support & Evolution"
                  className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:block hidden h-full object-contain z-10 relative"
                />
                <img
                  src={supportBg}
                  alt="Ongoing Support & Evolution"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src={supportBg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Ongoing Support & Evolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
