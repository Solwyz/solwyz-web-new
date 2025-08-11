import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import Bulb from "@assets/service/Bulb.svg"
import Arrow from "@assets/service/Arow.svg"
import Line from "@assets/service/Line 301.svg"
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function ERPsolution() {
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
         ERP Solution{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
        </h1>
        <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
           Our ERP solutions streamline and centralize your operations, improving efficiency and visibility across departments. Designed for industries like pharma, retail, and manufacturing, our ERP tools boost control and decision-making.
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
              Solwyz Technologies delivers tailored ERP systems designed to match the unique workflow of your organization. Our process begins with a comprehensive audit of your operations—including inventory management, human resources, finance, and procurement. Based on this assessment, we design and develop custom ERP modules that integrate seamlessly to streamline processes and eliminate manual inefficiencies. Whether you choose a cloud-based or on-premise solution, our platforms are built for security, scalability, and ease of use.  </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Our ERP systems feature intuitive dashboards, real-time data reporting, and secure user management with detailed permission controls and audit trails. We prioritize user experience by designing clean interfaces that offer immediate access to critical information. Each ERP deployment includes smooth data migration, personalized staff training, and long-term support to ensure your teams can fully adopt and benefit from the system</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> We work closely with your stakeholders to map departmental workflows and automate repetitive tasks, improving efficiency across the board. Whether transitioning from spreadsheets or outdated legacy software, our team ensures a smooth implementation process. We also help you stay compliant with industry regulations and leverage intelligent automation to reduce operational bottlenecks and boost productivity.</p>
          </div>
        </div>
        <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
              At Solwyz Technologies, our goal is to develop ERP systems that unify and streamline your business operations. We focus on building user-friendly interfaces with intuitive navigation, so teams across departments can work more efficiently. Real-time dashboards provide actionable insights into key areas like KPIs, financials, inventory, and customer data—all in one centralized location. We also ensure seamless integration with third-party tools such as CRM systems, accounting platforms, and POS software to create a connected ecosystem.</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">Each ERP module—ranging from HR and payroll to procurement, sales, and inventory—is tailored to increase productivity and reduce manual work. Our systems support better resource planning, accurate forecasting, and adherence to industry compliance standards. By minimizing data duplication and improving cross-department communication, we help businesses make faster and more informed decisions. Features like automated alerts, custom reporting, and workflow automation enhance day-to-day operations. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Security and scalability are core to our ERP architecture. We implement role-based access controls, encrypted data transfers, and multi-level permissions to ensure data privacy and secure collaboration. Our mobile-enabled ERP solutions empower your team to access critical information and perform tasks on the go. Whether you’re a growing SME or an established enterprise, our ERP systems are designed to adapt as your business evolves—driving efficiency and sustainable growth. </p>
            
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

export default ERPsolution;
