import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import Bulb from "@assets/service/Bulb.svg"
import Arrow from "@assets/service/Arow.svg"
import Line from "@assets/service/Line 301.svg"
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function WebDevelopment() {
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
                    Web Development{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
                </h1>
                <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
                    Empower your digital presence with our Web Development services. We create responsive, fast-loading, and secure websites tailored to your brand and business needs—built to captivate users and drive measurable results.
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
                            Our web development approach begins with a deep understanding of your business objectives, target audience, and specific functionality requirements. We start by creating a detailed sitemap and wireframes that define the user journey, ensuring intuitive navigation and a logical content structure. This foundational planning phase sets the stage for a seamless user experience that guides visitors toward meaningful interactions with your brand.   </p>
                        <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> On the front end, our developers craft visually appealing, responsive designs that reflect your brand identity and function flawlessly across all devices and screen sizes. Meanwhile, our back-end team focuses on building a fast, secure, and scalable framework—integrating essential third-party tools such as CRM systems, marketing platforms, and payment gateways. We follow best practices for clean, modular coding to make future updates and enhancements simple and efficient.  </p>
                        <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> To ensure top-tier performance, we conduct rigorous quality assurance testing across browsers and devices, checking for speed, accessibility, and compatibility. SEO-readiness and website security are baked into every stage of development. Post-launch, we offer training and ongoing support so your team can manage the site with confidence. Every line of code is designed with purpose—to deliver a high-performing, conversion-focused website that supports long-term business growth. </p>
                    </div>
                </div>
                <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
                    <div>
                        <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
                        <p className="border mt-2 border-[#04A391] w-[282px]"></p>
                    </div>

                    <div className="flex-col">
                        <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
                           We focus on delivering websites that not only look stunning but perform flawlessly across all devices. Our approach blends aesthetic excellence with functional precision, ensuring that every user interaction is smooth and purposeful. By designing with the end-user in mind, we create intuitive navigation structures, fast-loading pages, and mobile-first responsive layouts that provide a seamless experience regardless of device or platform. </p>
                        <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">Each website is built to align with your specific business goals and industry standards—whether it's a feature-rich e-commerce platform or a sleek corporate website. We implement SEO best practices from the ground up, integrate powerful analytics tools, and adhere to strict data security protocols. Accessibility is also a core priority; we follow WCAG guidelines to make your website inclusive and compliant. </p>
                        <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> To empower your team, we offer content management solutions such as WordPress or custom-built dashboards that simplify updates and content control. After launch, our work doesn’t stop—we provide ongoing maintenance, security monitoring, and performance optimization services to ensure your site evolves with your business. With Solwyz, your website becomes more than just an online presence—it becomes a trusted digital asset that drives credibility, engagement, and long-term growth. </p>
                        
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

export default WebDevelopment;
