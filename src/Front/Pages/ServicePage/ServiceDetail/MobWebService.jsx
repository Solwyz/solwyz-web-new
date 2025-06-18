import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/Mobile&Web.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function MobWebService() {
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
          Customized mobile & web app{" "}
        </h1>
        <p className="text-white  font-medium  mt-12 md:mt-[64px] text-base md:leading-8 leading-6 text-justify md:text-2xl">
          We design and develop scalable, user-centric mobile and web
          applications that align with your business goals. From initial
          wireframes to final deployment, we build digital tools that drive
          engagement, productivity, and real business value.
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
            Our development process starts with understanding your business
            requirements, end-users, and operational goals. We then create
            detailed project roadmaps, wireframes, and UI/UX designs tailored to
            your vision. Our agile development model ensures frequent updates,
            fast iterations, and complete transparency throughout the lifecycle.
            We use modern frameworks and scalable architecture for performance
            and longevity. Whether it's an internal enterprise tool, a
            customer-facing app, or a service-based platform, we ensure
            intuitive functionality, responsive design, and easy integration
            with existing systems. Post-launch, we provide continuous support,
            updates, and enhancements to keep your app running at peak
            performance. Our goal is to build digital products that evolve with
            your business and deliver consistent user satisfaction and
            operational efficiency.
          </p>
        </div>
        <div className="md:flex mt-8 md:mt-[104px] md:justify-between">
          <div>
            <h1 className="">We focus on</h1>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <p className="md:w-[894px] mt-6 md:mt-0 text-justify font-medium text-base leading-6 md:leading-8">
            Our focus lies in building intuitive, high-performance apps
            customized to your specific needs. We prioritize clean design,
            responsive user experience, and secure coding practices. From MVPs
            to enterprise-scale platforms, we develop flexible solutions that
            scale with your business. We ensure seamless cross-platform
            compatibility, API integration, and backend reliability. Whether you
            need customer portals, logistics apps, booking systems, or workflow
            tools—we deliver custom apps that streamline processes, boost user
            satisfaction, and support your digital growth journey from concept
            to execution.
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

export default MobWebService;
