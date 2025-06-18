import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/DigitalMarketing.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function DigitalService() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Pageloader />;

  return (
    <div className="pt-[104px]  mb-[72px] md:pt-[95px] ">
      <div className="px-4 md:px-[120px]">
        <h1 className="font-bold text-white md:mt-[72px] mt-[48px] md:text-start text-center md:text-[48px] text-[24px]">
          Digital Marketing
        </h1>
        <p className="text-white  font-medium  mt-12 md:mt-[64px] text-base md:leading-8 leading-6 text-justify md:text-2xl">
          Reach your audience where it matters. Our digital marketing strategies
          focus on visibility, engagement, and conversion using data-driven
          campaigns across SEO, social media, paid ads, and content to grow your
          brand consistently and measurably.
        </p>
      </div>
      <div className="mt-8 md:mt-[80px]">
        <img
          src={detailBg}
          className="w-full h-[498px] object-cover md:block hidden"
          alt=""
        />
        <img src={detailBg} className="w-full h-[263px] md:hidden object-cover " alt="" />
      </div>

      <div className="px-4 text-white md:px-[120px] mt-8 md:mt-[64px] ">
        <div className="md:flex md:justify-between">
          <div>
            <h1 className="">Our Approach</h1>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <p className="md:w-[894px] mt-6 md:mt-0 text-justify font-medium text-base leading-6 md:leading-8">
            Our digital marketing approach begins with deep market research and
            competitor analysis. We develop tailored strategies that align with
            your brand goals—focusing on your target audience, messaging, and
            KPIs. From SEO optimization and PPC advertising to email marketing
            and content strategy, every campaign is data-backed and
            performance-focused. We monitor user behavior, analyze results in
            real-time, and adjust campaigns for maximum ROI. Our creative team
            crafts compelling visuals and messages that resonate with your
            audience, while our analysts ensure your budget is spent
            efficiently. Whether launching a new product or scaling an existing
            brand, we integrate tools and technology that ensure transparency
            and long-term success. Your growth is our goal—online, on every
            platform, and in every market you aim to reach.
          </p>
        </div>
        <div className="md:flex mt-8 md:mt-[104px] md:justify-between">
          <div>
            <h1 className="">We focus on</h1>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <p className="md:w-[894px] mt-6 md:mt-0 text-justify font-medium text-base leading-6 md:leading-8">
            We prioritize ROI-driven strategies that combine creativity with
            analytics. Our focus areas include targeted social media campaigns,
            performance marketing, SEO growth, and conversion rate optimization.
            We aim to increase traffic, build trust, and boost sales using the
            right mix of channels. We also handle reputation management,
            influencer outreach, and ongoing content development. Every tactic
            is aligned to your brand voice and market potential. Whether you're
            starting or scaling, we optimize your digital presence for long-term
            impact and measurable success.
          </p>
        </div>
      </div>
      <div className="md:bg-serviceDetailBg bg-serviceDetailBgMob bg-cover bg-center md:mt-[104px] mt-[72px] h-[370px] md:h-[360px] flex items-center justify-center text-center">
        <div className="pt-14 md:pt-0 px-4 md:px-0 ">
          <h1 className="text-white text-2xl md:text-[40px] w-full  md:w-[625px] font-bold md:leading-10 mx-auto">
            Want to turn your website into your most valuable asset?
          </h1>
          <Link to="/contact">
            <button className="mt-10 bg-white font-bold text-base text-[#04A391] py-3 px-6 rounded-lg  hover:bg-[#00BEA7] hover:text-white duration-300 transition">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DigitalService;
