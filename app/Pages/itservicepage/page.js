"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Pageloader from "../../Loaders/Pageloader"; // adjust path if needed

function ITService() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Services | Solwyz Technologies";
    }, []);

    useEffect(() => {
        // Simulate delay
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) return <Pageloader />;

    return (
        <div className="pt-[104px] md:mb-[120px] mb-[72px] md:pt-[95px] px-4 md:px-[120px] md:max-w-[1440px] mx-auto">
            <h1 className="font-bold text-white md:mt-[40px] mt-[54px] md:text-center text-center md:text-[48px] text-[24px]">
                IT Services
            </h1>

            {/* Section: Our Services */}
            <div className="md:mt-[40px] mt-[70px] flex gap-[37px] md:space-y-[56px] space-y-6">
                <div>
                    <h1 className="font-semibold text-white md:mt-[40px] mt-[48px] md:text-start text-center md:text-[32px] text-[24px]">
                        Our Services{" "}
                        <img
                            className="md:w-[269px] w-[231px] md:mt-4 mt-3 justify-center"
                            src="/assets/service/Line 301.svg"
                            alt=""
                        />
                    </h1>
                </div>

                <div className="md:w-[894px]">
                    {/* Web Development */}
                    <Link href="/services/Web-Development">
                        <div className="border group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src="/assets/OurServices/webdeve.svg" className="w-[80px] h-20" alt="" />
                                <h1 className="text-center mt-6 font-semibold text-[16px] leading-5">
                                    Web Development
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                We build responsive, high-performance websites tailored to your business needs. Whether e-commerce, corporate, or portfolio, our websites are fast, secure, and SEO-friendly. With intuitive UX/UI, mobile optimization, and scalable architecture, our web development ensures you make the right digital first impression and convert visitors into customers.
                            </p>
                        </div>
                    </Link>

                    {/* App Development */}
                    <Link href="/services/App-Development">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src="/assets/OurServices/appmark.svg" className="w-[80px] h-20" alt="" />
                                <h1 className="text-center mt-6 font-semibold text-[16px] leading-5">
                                    App Development
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Launch powerful mobile experiences across iOS and Android. Our app development service covers design, coding, and deployment of intuitive, scalable applications. From startups to enterprises, we create feature-rich apps that improve user experience, boost engagement, and align with your business model to meet evolving customer expectations.
                            </p>
                        </div>
                    </Link>

                    {/* ERP Solutions */}
                    <Link href="/services/ERP-Solution">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src="/assets/OurServices/ERP.svg" className="w-[80px] h-20" alt="" />
                                <h1 className="text-center mt-6 font-semibold text-[16px] leading-5">
                                    ERP Solutions
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Streamline business processes with customized ERP solutions. We integrate modules for finance, inventory, sales, and operations into one cohesive system. Our ERP software enhances productivity, data accuracy, and decision-making with real-time insights—ideal for growing businesses looking for control, efficiency, and scalability in a fast-moving environment.
                            </p>
                        </div>
                    </Link>

                    {/* CRM Solutions */}
                    <Link href="/services/CRM-Solution">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src="/assets/OurServices/CRM.svg" className="w-[80px] h-20" alt="" />
                                <h1 className="text-center mt-6 font-semibold text-[16px] leading-5">
                                    CRM Solutions
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Nurture leads and manage customer relationships effectively. Our CRM solutions offer smart tools for sales tracking, marketing automation, and client communication. Designed for ease of use and customization, our systems help businesses improve customer satisfaction, streamline operations, and drive long-term loyalty through actionable insights.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* End-to-End Digital Delivery */}
            <div className="md:mt-[104px] mt-[72px]">
                <h1 className="text-center text-white text-[24px] md:text-[48px] font-bold ">
                    End-to-End Digital Delivery
                </h1>
                <p className="text-center font-normal mt-4 leading-[24px] md:leading-8 md:mt-6 text-[#04A391] text-base ">
                    Core principles
                    <span className="text-white"> guide every smart solution</span>
                </p>

                {/* The 8 Steps Grid */}
                <div className="md:mt-20 mt-12">
                    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-white">
                        {/* Mobile dividing lines for 2x2 grid */}
                        <div className="block md:hidden absolute top-0 bottom-0 left-1/2 translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
                        <div className="block md:hidden absolute left-0 right-0 top-1/2 translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>
                        <div className="block md:hidden absolute left-0 right-0 -top-[-25%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>
                        <div className="block md:hidden absolute left-0 right-0 -top-[-75%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>

                        {/* Desktop lines as you have */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-[25%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
                        <div className="hidden md:block absolute top-0 bottom-0 left-[50%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
                        <div className="hidden md:block absolute top-0 bottom-0 left-[75%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
                        <div className="hidden md:block absolute left-0 right-0 top-[50%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>

                        {/* 1. Discovery & Consultation */}
                        {/* 1. Discovery & Consultation */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/discovery.svg"
                                    alt="Discovery & Consultation"
                                    className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity h-full object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/discoveryBg.svg"
                                    alt="Discovery & Consultation"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/discoveryBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Discovery & Consultation
                            </p>
                        </div>

                        {/* 2. Solution Planning */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/solution.svg"
                                    alt="Solution Planning"
                                    className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity h-full object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/solutionBg.svg"
                                    alt="Solution Planning"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/solutionBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Solution <br className="md:hidden" /> Planning
                            </p>
                        </div>

                        {/* 3. Design & Prototyping */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/design.svg"
                                    alt="Design & Prototyping"
                                    className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/designBg.svg"
                                    alt="Design & Prototyping"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/designBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Design & Prototyping
                            </p>
                        </div>

                        {/* 4. Custom Development */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/custom.svg"
                                    alt="Custom Development"
                                    className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/customBg.svg"
                                    alt="Custom Development"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/customBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Custom Development
                            </p>
                        </div>

                        {/* 5. Testing & Compliance */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/testing.svg"
                                    alt="Testing & Compliance"
                                    className="w-full hidden opacity-100 duration-300 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/testingBg.svg"
                                    alt="Testing & Compliance"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/testingBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Testing & Compliance
                            </p>
                        </div>

                        {/* 6. Deployment & Launch */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/deployment.svg"
                                    alt="Deployment & Launch"
                                    className="w-full hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/deploymentBg.svg"
                                    alt="Deployment & Launch"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/deploymentBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Deployment & Launch
                            </p>
                        </div>

                        {/* 7. Marketing & User Acquisition */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/marketing.svg"
                                    alt="Marketing & User Acquisition"
                                    className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 h-full hidden md:block object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/marketingBg.svg"
                                    alt="Marketing & User Acquisition"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/marketingBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Marketing & User Acquisition
                            </p>
                        </div>

                        {/* 8. Ongoing Support & Evolution */}
                        <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
                            <div className="mb-4 w-16 h-16 relative">
                                <img
                                    src="/assets/service/support.svg"
                                    alt="Ongoing Support & Evolution"
                                    className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:block hidden h-full object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/supportBg.svg"
                                    alt="Ongoing Support & Evolution"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="/assets/service/supportBg.svg"
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-center font-bold md:text-base text-sm underline-animate">
                                Ongoing Support & Evolution
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ITService;
