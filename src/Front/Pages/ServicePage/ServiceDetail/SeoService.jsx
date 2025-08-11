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
    <div className="pt-[104px]  mb-[72px] md:pt-[95px] md:max-w-[1540px] mx-auto">
      <div className="px-4 md:px-[120px]">
        <h1 className="font-semibold text-white md:mt-[40px] mt-[48px] md:text-start text-center md:text-[40px] md:flex  text-[24px]">
          SEO Service{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
        </h1>
        <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
          Improve your online presence and drive organic traffic with our expert SEO services. We optimize websites to rank higher on search engines like Google, enhance visibility, engagement, and conversions. Through strategic planning, technical SEO, and content optimization, we help businesses attract the right audience and build a strong digital footprint for sustainable growth in today’s competitive market.
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
              Our SEO approach is holistic, data-driven, and tailored to your business objectives. We start by conducting deep audits of your current website performance, industry landscape, and target keywords. With these insights, we build a detailed SEO plan that covers on-page SEO, technical fixes, link-building, and local SEO strategies.  </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> We implement structured schema, mobile optimization, and speed enhancements to ensure your website meets modern search engine requirements. Our content strategies are designed to target high-intent keywords while offering value to users, enhancing both rankings and engagement. We also focus on optimizing your site architecture for easy navigation and crawling by search bots. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Additionally, we track performance using top SEO tools and analytics, continuously refining tactics based on results. Our team maintains close alignment with Google’s evolving algorithm updates to ensure your site remains compliant and competitive. Whether you're launching a new site or optimizing an existing one, our agile process ensures measurable improvements in traffic, rankings, and conversions. </p>
          </div>
        </div>
        <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
              We focus on delivering SEO solutions that generate long-term, scalable growth. Our primary aim is to align your business goals with proven SEO strategies that improve online visibility and bring consistent, qualified traffic to your website. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">We work on both on-page and off-page SEO—including keyword targeting, metadata optimization, high-quality content creation, internal linking, and backlink building—to help improve your domain authority and relevance. Our team ensures your site is technically sound with fast loading speeds, secure connections (HTTPS), mobile responsiveness, and structured data that help search engines understand and rank your content better.</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> For businesses in highly competitive industries, we implement advanced SEO strategies like content gap analysis, competitor benchmarking, and keyword clustering to outpace market rivals. We also monitor ranking fluctuations and user behavior insights to fine-tune strategies in real time.</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">Our commitment doesn’t end with higher rankings. We prioritize conversion-oriented SEO, optimizing user journeys and call-to-actions to turn visitors into leads or customers. Whether you’re targeting local markets or global reach, our customized SEO approach ensures your digital presence scales with precision and performance. </p>
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
