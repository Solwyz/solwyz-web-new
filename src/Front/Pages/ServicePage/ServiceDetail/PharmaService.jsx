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

  if (loading) return <Pageloader />;

  return (
    <div className="pt-[104px]  mb-[72px] md:pt-[95px] ">
      <div className="px-4 md:px-[120px]">
        <h1 className="font-bold text-white md:mt-[72px] mt-[48px] md:text-start text-center md:text-[48px] text-[24px]">
          Pharma E-Commerce{" "}
        </h1>
        <p className="text-white  font-medium  mt-12 md:mt-[64px] text-base md:leading-8 leading-6 text-justify md:text-2xl">
          Empower your pharmacy with our advanced e-commerce solutions. We
          create secure, scalable platforms that streamline ordering, inventory,
          and customer experience—bringing pharmacies closer to patients with
          seamless online access to essential healthcare products.
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
            Our pharma e-commerce platform is purpose-built to address the
            unique needs of pharmaceutical retailers and distributors. We
            integrate secure payment gateways, real-time inventory systems,
            prescription uploads, order tracking, and user-friendly interfaces
            that comply with industry regulations. Our solutions ensure HIPAA
            and local regulatory compliance, enabling pharmacists to operate
            online with confidence. Whether you're launching a B2C storefront or
            a B2B supply chain solution, we tailor the platform to match your
            operational workflow. Our team works closely with stakeholders to
            create intuitive dashboards, smart analytics, and responsive design.
            From concept to launch and post-deployment support, we ensure that
            your digital pharmacy operates smoothly, efficiently, and
            securely—giving your customers the convenience and reliability they
            deserve in today’s digital age.
          </p>
        </div>
        <div className="md:flex mt-8 md:mt-[104px] md:justify-between">
          <div>
            <h1 className="">We focus on</h1>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <p className="md:w-[894px] mt-6 md:mt-0 text-justify font-medium text-base leading-6 md:leading-8">
            We emphasize secure and compliant development, ensuring your
            e-commerce platform follows pharmaceutical regulations. Our focus
            includes easy inventory management, smooth order processing, and
            real-time prescription validation. We design for seamless customer
            interaction and offer backend tools for streamlined admin control.
            Whether it’s a local pharmacy or a nationwide distributor, we
            customize every element to suit your scale, improve user
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
