import React, { useEffect, useState } from "react";
import Line from "@assets/service/Line 301.svg";
import { Link } from "react-router-dom";
import Pageloader from "../../Loaders/Pageloader";
import Img1 from "@assets/OurServices/SEO.svg";
import Img2 from "@assets/OurServices/SocialMM.svg";
import Img3 from "@assets/OurServices/SEM.svg";
import Img4 from "@assets/OurServices/Influ.svg";
import Img5 from "@assets/OurServices/VideoMarketing.svg";
import Img6 from "@assets/OurServices/Branding.svg";
import Img7 from "@assets/OurServices/WEBDEV (2).svg";
import Img8 from "@assets/OurServices/APPMAR.svg";
import Img9 from "@assets/OurServices/ERP.svg";
import Img0 from "@assets/OurServices/CRM.svg";
import EndToEndService from "../../Components/EndToEndService";

function ServicePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Services | Solwyz Technologies";
  }, []);
  useEffect(() => {
    // Simulate delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Pageloader />;
  return (
    <div className="pt-[104px] md:mb-[120px] mb-[72px] md:pt-[95px] px-4 md:px-[120px] md:max-w-[1440px] mx-auto">
      <h1 className="font-bold text-white md:mt-[40px] mt-[54px] md:text-center text-center md:text-[48px] text-[24px]">
        Digital Marketing
      </h1>
      {/* digital marketing */}
      <div className=" md:flex gap-[37px] md:space-y-[56px] space-y-6">
        <div>
          <h1 className="font-semibold text-white md:mt-[40px] mt-[48px] md:text-start text-center md:text-[32px]   text-[24px]">
            Our Services{" "}
            <img
              className=" md:w-[269px] w-[231px]  md:mt-4 mt-3 justify-center mx-auto"
              src={Line}
              alt=""
            />
          </h1>
        </div>
        <div className="md:w-[894px] ">
          <Link to="SEO-Service">
            <div className="border group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img1} className=" w-[80px] h-20 " alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  SEO Services
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                Boost your website’s visibility with our tailored SEO
                strategies. We focus on keyword optimization, technical SEO, and
                quality backlinks to rank higher on search engines, attract
                organic traffic, and drive business growth. Our SEO services
                ensure long-term performance and measurable results that help
                your brand stay ahead in competitive digital landscapes.
              </p>
            </div>
          </Link>
          <Link to="Social-Media-Marketing">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img2} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  Social Media Marketing
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                Build stronger customer relationships through effective social
                media campaigns. We create, manage, and optimize content across
                platforms like Instagram, Facebook, LinkedIn, and X. Our
                strategies focus on engagement, audience growth, and brand
                consistency to generate leads, enhance trust, and increase your
                brand presence through powerful social storytelling and
                data-driven insights.
              </p>
            </div>
          </Link>
          <Link to="Search-Engine-Marketing">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img3} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  Search engine marketing
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                Drive immediate visibility and ROI with our targeted SEM
                campaigns. We manage Google Ads, display ads, and PPC strategies
                that convert. With a focus on keyword planning, performance
                tracking, and ad optimization, we ensure your business appears
                where it matters—on top of search results—capturing high-intent
                traffic efficiently.
              </p>
            </div>
          </Link>
          <Link to="Influencer-Marketing">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img4} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  Influencer Marketing
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                Connect with your audience through trusted voices. We plan and
                execute influencer campaigns that match your brand with credible
                creators across Instagram, YouTube, and TikTok. From
                micro-influencers to macro partnerships, we handle strategy,
                outreach, and analytics to boost awareness, build credibility,
                and drive consumer action authentically.
              </p>
            </div>
          </Link>
          <Link to="Video-Marketing">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img5} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  Video Marketing
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                Engage your audience with compelling video content that tells
                your brand story. We create high-quality reels, product videos,
                and promotional content tailored for platforms like YouTube,
                Instagram, and Facebook. Our video marketing services enhance
                retention, boost engagement, and help brands stand out in
                today’s fast-paced visual world.
              </p>
            </div>
          </Link>
          <Link to="Branding">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img6} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  Branding
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                Create a powerful identity that resonates. From logo design to
                brand strategy, we help define your tone, voice, and visual
                presence. Our branding solutions ensure your business stands out
                with clarity and consistency across digital platforms, leaving a
                lasting impression and building trust with your target audience.
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="md:mt-[40px] mt-[70px] flex gap-[37px] md:space-y-[56px] space-y-6">
        <div>
          <h1 className="font-semibold text-white md:mt-[40px] mt-[48px] md:text-start text-center md:text-[32px]   text-[24px]">
            IT Services <img className=" md:w-[269px] w-[231px]  md:mt-4 mt-3 justify-center" src={Line} alt="" />
          </h1>
        </div>
        <div className="md:w-[894px] ">
          <Link to="Web-Development">
            <div className="border group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img7} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  Web Development
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
              We build responsive, high-performance websites tailored to your business needs. Whether e-commerce, corporate, or portfolio, our websites are fast, secure, and SEO-friendly. With intuitive UX/UI, mobile optimization, and scalable architecture, our web development ensures you make the right digital first impression and convert visitors into customers. 
              </p>
            </div>
          </Link>
          <Link to="App-Development">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img8} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  App Development
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
             Launch powerful mobile experiences across iOS and Android. Our app development service covers design, coding, and deployment of intuitive, scalable applications. From startups to enterprises, we create feature-rich apps that improve user experience, boost engagement, and align with your business model to meet evolving customer expectations. 
              </p>
            </div>
          </Link>
          <Link to="ERP-Solution">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img9} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  ERP Solutions
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
              Streamline business processes with customized ERP solutions. We integrate modules for finance, inventory, sales, and operations into one cohesive system. Our ERP software enhances productivity, data accuracy, and decision-making with real-time insights—ideal for growing businesses looking for control, efficiency, and scalability in a fast-moving environment. 
              </p>
            </div>
          </Link>
          <Link to="CRM-Solution">
            <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
              <div className="flex md:block gap-4 md:gap-0">
                <img src={Img0} className=" w-[80px] h-20" alt="" />
                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                  CRM Solutions
                </h1>
              </div>
              <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
              Nurture leads and manage customer relationships effectively. Our CRM solutions offer smart tools for sales tracking, marketing automation, and client communication. Designed for ease of use and customization, our systems help businesses improve customer satisfaction, streamline operations, and drive long-term loyalty through actionable insights. 
              </p>
            </div>
          </Link>



        </div>
      </div> */}
      <EndToEndService/>
    </div>
  );
}

export default ServicePage;
