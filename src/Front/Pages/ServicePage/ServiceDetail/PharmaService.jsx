import React, { useEffect, useState } from "react";
import detailBg from "../../../../assets/service/detailBg.png";
import detailBgMob from "../../../../assets/service/detailBgMob.png";
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function PharmaService() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Pageloader/>;

  return (
    <div className="pt-[104px]  mb-[72px] md:pt-[95px] ">
      <div className="px-4 md:px-[120px]">
        <h1 className="font-bold text-white md:mt-[72px] mt-[48px] md:text-start text-center md:text-[48px] text-[24px]">
        Pharma E-Commerce        </h1>
        <p className="text-white  font-medium  mt-12 md:mt-[64px] text-base md:leading-8 leading-6 text-justify md:text-2xl">
          Intro content: online marketing services are designed to help your
          business thrive in the digital world. With a focus on social media and
          other online channels, we provide the best strategies and techniques
          to drive exceptional.
        </p>
      </div>
      <div className="mt-8 md:mt-[80px]">
        <img
          src={detailBg}
          className="w-full h-[498px] object-cover md:block hidden"
          alt=""
        />
        <img src={detailBgMob} className="w-full h-[263px] md:hidden " alt="" />
      </div>

      <div className="px-4 text-white md:px-[120px] mt-8 md:mt-[64px] ">
        <div className="md:flex md:justify-between">
          <div>
            <h1 className="">Our Approach</h1>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <p className="md:w-[894px] mt-6 md:mt-0 text-justify font-medium text-base leading-6 md:leading-8">
            Our goal is to help you build your business and achieve long-term
            success. We offer a range of services including social media
            management, content creation, search engine optimization, paid
            advertising, and more. Whether you're a small startup or an
            established company, our online marketing services are designed to
            drive tangible results, increase brand awareness, and boost your
            online presence. Trust us to be your partner in success and let us
            help you take your business to new heights in the digital world. ur
            goal is to help you build your business and achieve long-term
            success. We offer a range of services including social media
            management, content creation, search engine optimization, paid
            advertising, and more. Whether you're a small startup or an
            established company,
          </p>
        </div>
        <div className="md:flex mt-8 md:mt-[104px] md:justify-between">
          <div>
            <h1 className="">We focus on</h1>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <p className="md:w-[894px] mt-6 md:mt-0 text-justify font-medium text-base leading-6 md:leading-8">
            Our goal is to help you build your business and achieve long-term
            success. We offer a range of services including social media
            management, content creation, search engine optimization, paid
            advertising, and more. Whether you're a small startup or an
            established company, our online marketing services are designed to
            drive tangible results, increase brand awareness, and boost your
            online presence. Trust us to be your partner in success and let us
            help you take your business to new heights in the digital world.
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

export default PharmaService;
