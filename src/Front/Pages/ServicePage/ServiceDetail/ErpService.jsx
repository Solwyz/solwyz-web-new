import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function ErpService() {
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
          Pharma ERP Services{" "}
        </h1>
        <p className="text-white  font-medium  mt-12 md:mt-[64px] text-base md:leading-8 leading-6 text-justify md:text-2xl">
          Streamline pharmaceutical operations with our end-to-end ERP systems.
          Built for efficiency, compliance, and scalability, our ERP solution
          covers inventory, billing, CRM, HR, and analytics—empowering your
          business to thrive in a competitive pharma landscape.
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
            Our ERP systems are designed specifically for the pharma industry,
            ensuring seamless integration of every department. We begin with a
            detailed assessment of your workflows, pain points, and compliance
            needs. Based on this, we configure modules that handle inventory
            management, sales, purchase orders, HR, finance, CRM, and regulatory
            reporting. Our systems ensure real-time visibility across your
            supply chain and operations. We use role-based access, cloud
            compatibility, and automated backups to enhance security and
            scalability. Custom dashboards provide data-driven insights for
            smarter decision-making. Our implementation is phased, ensuring
            minimal disruption and maximum adaptability. Post-deployment, we
            offer extensive training, support, and system upgrades to
            future-proof your operations. With our ERP, pharma businesses gain
            control, compliance, and clarity in every process.
          </p>
        </div>
        <div className="md:flex mt-8 md:mt-[104px] md:justify-between">
          <div>
            <h1 className="">We focus on</h1>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <p className="md:w-[894px] mt-6 md:mt-0 text-justify font-medium text-base leading-6 md:leading-8">
            We focus on providing industry-specific ERP features that simplify
            operations and ensure compliance. Our solution supports automated
            stock tracking, batch traceability, HR payroll, GST-ready billing,
            and real-time reporting. We enable you to manage procurement,
            production, and distribution from a unified dashboard. Scalability
            and flexibility are key—our ERP adapts to your growth and changing
            business needs. We also focus on seamless integration with your
            current tools, ensuring smooth migration and ongoing performance.
            Efficiency, control, and compliance drive our ERP success formula.
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

export default ErpService;
