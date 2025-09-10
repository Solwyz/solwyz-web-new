import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import Bulb from "@assets/service/Bulb.svg"
import Arrow from "@assets/service/Arow.svg"
import Line from "@assets/service/Line 301.svg"
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";
import App from "../../../../App";

function AppDevelopment() {
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
         App Development{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
        </h1>
        <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
           We build scalable, high-performance mobile and web applications tailored to your business needs. Our app development ensures a seamless user experience across iOS, Android, and cross-platform environments.
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
               At Solwyz Technologies, we approach app development with a product-first mindset. Our process begins with a deep understanding of your business goals, user expectations, and technical requirements. We conduct in-depth research and define clear product strategies before moving into wireframing, UI/UX design, and architectural planning. Whether you're building from scratch or enhancing an existing app, we ensure each step aligns with your long-term vision.</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> We specialize in both native and cross-platform development using frameworks like Flutter and React Native. Our focus is on creating apps that are intuitive, visually appealing, secure, and highly performant. From seamless user interfaces to fast load times, we prioritize a smooth, frictionless experience. On the backend, we build robust systems using secure APIs and scalable databases, ensuring your app runs reliably under varying loads.</p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Our agile development cycles allow us to quickly iterate, implement feedback, and adapt to shifting market needs. Post-launch, we offer ongoing support, maintenance, and updates to keep your app current with evolving technologies and user behavior. Whether it’s an MVP or a full-scale enterprise solution, our goal is to deliver mobile applications that drive engagement, deliver value, and scale with your business.</p>
          </div>
        </div>
        <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
              Our app development approach emphasizes functionality, usability, and innovation. We create applications that are compatible across devices, optimized for performance, and designed with clean, intuitive interfaces. Every app is built to solve real user challenges while boosting brand interaction. We seamlessly integrate features like push notifications, onboarding flows, analytics, and in-app purchases to enhance user engagement and retention. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">Security and performance are at the core of our development process. We implement best practices in data protection, encryption, and compliance with industry regulations. Our team also focuses on offline functionality, rapid deployment cycles, and automated quality assurance to ensure every app is reliable and responsive. Whether it's for healthcare, retail, logistics, or other sectors, we tailor apps to specific industry demands while embedding scalability for future growth. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">Collaboration is key to delivering exceptional results. We work closely with clients throughout the development journey, using tools like Figma for design prototyping and Jira for task management and progress tracking. This transparent workflow ensures alignment, faster feedback loops, and better outcomes. The result? Apps that users love, businesses depend on, and markets respond to.</p>
            
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

export default AppDevelopment;
