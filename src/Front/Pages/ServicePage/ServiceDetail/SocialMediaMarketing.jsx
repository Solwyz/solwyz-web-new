import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import Bulb from "@assets/service/Bulb.svg"
import Arrow from "@assets/service/Arow.svg"
import Line from "@assets/service/Line 301.svg"
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function SeoService() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Pageloader />;

  return (
    <div className="pt-[104px]  mb-[72px] md:pt-[95px] md:max-w-[1440px] mx-auto">
      <div className="px-4 md:px-[120px]">
        <h1 className="font-semibold text-white md:mt-[40px] mt-[48px] md:text-start text-center md:text-[40px] md:flex  text-[24px]">
          Social Media Marketing{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
        </h1>
        <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
          Reach your ideal customers quickly and effectively with our result-oriented search engine marketing (SEM) services. By leveraging paid advertising on platforms like Google Ads and Bing Ads, we position your brand in front of high-intent searchers, driving immediate visibility, traffic, and ROI through strategic keyword targeting and ad optimization.
        </p>
      </div>
      <div className="mt-8 md:mt-[56px]">
        <img
          src={detailBg}
          className="w-full h-[507px] object-cover md:block hidden"
          alt=""
        />
        <img src={detailBg} className="w-full h-[231px] md:hidden object-cover " alt="" />
      </div>

      <div className="px-4 text-white md:px-[120px] mt-8 md:mt-[56px] ">
        <div className="md:flex md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Bulb} alt="" /> <h1 className=""> Our Approach</h1></div>
            <p className="border-[1px]  mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
             Our SEM strategy is grounded in performance, precision, and deep market insight. We start by conducting comprehensive keyword research, analyzing competitor strategies, and identifying market opportunities to uncover the most relevant and cost-effective keywords. This foundation helps us create well-targeted campaigns aimed at maximizing visibility and conversions. From Search and Display to Shopping and YouTube ads, every campaign is designed to align with your brand goals and audience intent.  </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">We craft high-impact ad copies using optimized headlines, compelling descriptions, and strong calls-to-action that resonate with your audience’s search behavior. Our team carefully manages bidding strategies, A/B tests ad variations, and implements robust conversion tracking systems. This allows us to constantly test and fine-tune ad performance, ensuring a higher return on ad spend (ROAS). We also segment audiences for strategic retargeting and use geo-targeting to further enhance ad relevance and reach.  </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">To ensure long-term success, we continuously monitor key performance metrics such as CPC, CTR, Quality Score, conversion rates, and ROI. We place strong emphasis on improving ad relevance and landing page experiences to increase engagement and lower acquisition costs. Our team stays updated on the latest platform changes and industry trends to adapt campaigns as needed. This agile, analytics-driven approach helps us maintain your competitive edge in the ever-evolving paid search landscape. </p>
          </div>
        </div>
        <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
             We focus on delivering measurable results through highly tailored ad strategies. Our primary goal is to ensure your ads reach the right audience, at the right time, with the most relevant messaging. This involves careful planning of keyword match types, compelling ad copy, and audience targeting to maximize impact. By aligning ad relevance with user intent and optimized landing pages, we work to boost your Quality Scores and lower your cost-per-click (CPC). </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Our attention to detail extends across every element of campaign execution. We actively manage negative keywords, refine ad extensions, and implement dynamic remarketing strategies that increase click-through and conversion rates. We also prioritize mobile ad optimization and cross-device tracking to ensure seamless user experiences. With location-based targeting and bid adjustments, we tailor campaigns to specific demographics and geographies for even better performance.  </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">To stay ahead of market fluctuations, we closely monitor search trends and seasonal behavior, adjusting bids and budget allocations in real time. Whether your objective is brand visibility, lead generation, or increased e-commerce sales, we create scalable SEM campaigns that evolve with your business goals. Transparency is central to our approach—we provide detailed performance reports and actionable insights, empowering you to understand campaign ROI and confidently plan future strategies. </p>
          </div>
        </div>
      </div>
      <div className="md:bg-serviceDetailBg bg-serviceDetailBgMob bg-cover bg-center md:mt-[104px] mt-[72px] h-[370px] md:h-[360px] flex items-center justify-center text-center">
        <div className="pt-14 md:pt-0 px-4 md:px-0 ">
          <h1 className="text-white text-2xl md:text-[40px] w-full  md:w-[625px] font-bold md:leading-10 mx-auto">
            Want to turn your website into your most valuable asset?
          </h1>
          <Link to="/contact">
            <button className="mt-10 bg-white font-bold text-base text-[#04A391] py-3 px-6 rounded-lg  hover:bg-[#00BEA7] hover:text-white duration-500 transition">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SeoService;
