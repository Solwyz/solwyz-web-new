import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import Bulb from "@assets/service/Bulb.svg"
import Arrow from "@assets/service/Arow.svg"
import Line from "@assets/service/Line 301.svg"
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function InfluencerMarketing() {
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
        Influencer Marketing{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
        </h1>
        <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
          Boost credibility and expand your brand's reach through authentic influencer marketing. We collaborate with trusted influencers across industries to craft campaigns that connect with niche audiences. From micro to macro influencers, we drive engagement, awareness, and sales through strategic partnerships and content-driven storytelling that feels genuine and impactful. 
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
              We take a data-first, relationship-driven approach to influencer marketing. Our process begins with identifying influencers who truly align with your brand’s values, tone, and target audience. We go beyond follower counts to assess metrics such as engagement rates, content authenticity, audience demographics, and niche relevance. This ensures that every collaboration is rooted in quality and impact, not just visibility. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">Once suitable influencers are shortlisted, we craft tailored collaboration briefs that outline campaign goals, deliverables, timelines, and creative direction. Our team manages the entire workflow—from influencer outreach and negotiations to briefing, content approvals, and publishing. We focus on building long-term partnerships instead of one-off promotions, fostering genuine brand advocacy and deeper audience trust. Each campaign is aligned with key performance indicators like reach, engagement, website traffic, and conversions</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">To ensure compliance and accountability, we handle legal agreements, FTC disclosure guidelines, and content usage rights. After campaigns go live, we track performance through detailed analytics and provide insights for ongoing optimization. This allows us to refine future strategies and improve ROI over time. Whether the goal is to drive product awareness, increase credibility, or expand market presence, our influencer marketing approach delivers meaningful results through strategic, authentic collaborations. </p>
          </div>
        </div>
        <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
              We focus on building influencer campaigns that foster genuine connections and deliver measurable results. Our primary goal is to align your brand with influencers who authentically connect with their followers, ensuring your message feels relatable and trustworthy. By tailoring each campaign to specific objectives—whether it’s raising awareness, driving engagement, or boosting conversions—we ensure that every collaboration serves a clear strategic purpose. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Creative storytelling is at the heart of our influencer strategy. We work closely with influencers to produce high-quality, platform-optimized content that reflects your brand voice and resonates with the intended audience. We guide influencers on messaging while allowing room for authenticity, resulting in content that performs well and aligns with your overall marketing goals. Every campaign is evaluated through key performance indicators such as cost-per-engagement, brand sentiment, follower growth, and content shares. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">With access to a diverse network of influencers across industries and regions, we design segmented campaigns that reach distinct audience groups effectively. Our approach allows for scalability—enabling collaborations with multiple influencers simultaneously while maintaining consistency and message integrity. Ultimately, we aim to turn influencer impact into real business growth, ensuring each partnership adds meaningful value to your brand’s digital presence. </p>
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

export default InfluencerMarketing;
