import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import Bulb from "@assets/service/Bulb.svg"
import Arrow from "@assets/service/Arow.svg"
import Line from "@assets/service/Line 301.svg"
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function SearchEngineMarketing() {
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
         Search Engine Marketing{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
        </h1>
        <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
          Improve your online presence and drive quality organic traffic with our expert SEO services. We specialize in optimizing websites to rank higher on search engines like Google, enhancing visibility, engagement, and conversions. With a focus on strategic planning, technical excellence, and content-driven approaches, we help businesses attract the right audience and achieve long-term growth in a competitive digital landscape.
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
              Our SEO approach is comprehensive, data-driven, and tailored to your unique business objectives. We begin by conducting an in-depth analysis of your current website performance, industry competitors, and keyword opportunities. This includes a full technical SEO audit, backlink profile review, and content assessment. Based on these insights, we craft a strategic SEO plan that encompasses both short-term wins and long-term growth.We focus on improving every element of your site—from meta tags and internal linking to mobile optimization and site speed. Content plays a central role in our strategy; we ensure that your pages are optimized with high-performing, relevant keywords and structured to match user intent. We also implement a strong link-building strategy that adheres to white-hat practices and builds your domain authority organically. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> What sets our approach apart is continuous optimization. SEO isn’t a one-time job—it’s an evolving process. We provide monthly performance reports, monitor algorithm updates, and refine our tactics accordingly. Our collaborative workflow keeps you informed and involved every step of the way, ensuring transparency and measurable progress. Whether you’re a startup or an established brand, we adapt to your scale and market dynamics, always aiming for better visibility, higher rankings, and more meaningful engagement.</p>
          </div>
        </div>
        <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
              We focus on delivering SEO solutions that produce measurable and lasting results. At the core, our priority is to align SEO strategies with your business goals—whether it's boosting e-commerce sales, increasing brand awareness, or generating qualified leads. We begin with robust keyword research to identify what your audience is actively searching for, ensuring your content meets those demands in a natural and engaging way.</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Our technical SEO services aim to build a strong foundation for search engines to easily crawl, index, and rank your website. This includes optimizing site architecture, fixing broken links, improving page speed, ensuring mobile responsiveness, and implementing structured data for rich results. We also emphasize content relevance and authority. Every blog, landing page, and product description is optimized for both users and algorithms, enhancing user experience and increasing time-on-site metrics.Backlink building is another crucial focus. We aim to establish your website as a trustworthy authority by acquiring high-quality, relevant backlinks through ethical outreach and partnerships. Additionally, we prioritize local SEO for businesses targeting a geographic market, optimizing your presence across Google Maps, local listings, and directories.</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Our Monitoring, reporting, and adapting are constant in our process. We track KPIs like keyword rankings, organic traffic, bounce rate, and conversion rates to measure progress and adjust strategies. Our goal is to build a sustainable SEO ecosystem that grows with your business and keeps you ahead in an ever-changing digital landscape.</p>
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

export default SearchEngineMarketing;
