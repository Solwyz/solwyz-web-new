"use client"; // ✅ Required for useState, useEffect, etc.

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Next.js navigation
import Pageloader from "../Loaders/Pageloader";

// ✅ Import assets
// import digital from "@assets/service/digital.svg";
// import erp from "@assets/service/erp.svg";
// import mobileWeb from "@assets/service/mobileWeb.svg";
// import pharma from "@assets/service/pharma.svg";
// import design from "@assets/service/design.svg";
// import designBg from "@assets/service/designBg.svg";
// import custom from "@assets/service/custom.svg";
// import customBg from "@assets/service/customBg.svg";
// import deployment from "@assets/service/deployment.svg";
// import deploymentBg from "@assets/service/deploymentBg.svg";
// import discovery from "@assets/service/discovery.svg";
// import discoveryBg from "@assets/service/discoveryBg.svg";
// import marketing from "@assets/service/marketing.svg";
// import marketingBg from "@assets/service/marketingBg.svg";
// import solutionBg from "@assets/service/solutionBg.svg";
// import solution from "@assets/service/solution.svg";
// import support from "@assets/service/support.svg";
// import supportBg from "@assets/service/supportBg.svg";
// import testing from "@assets/service/testing.svg";
// import testingBg from "@assets/service/testingBg.svg";
// import Line from "@assets/service/Line 301.svg";

// import Img1 from "@assets/OurServices/seo.svg";
// import Img2 from "@assets/OurServices/socialmm.svg";
// import Img3 from "@assets/OurServices/sem.svg";
// import Img4 from "@assets/OurServices/influencermark.svg";
// import Img5 from "@assets/OurServices/videomarketing.svg";
// import Img6 from "@assets/OurServices/branding.svg";
// import Img7 from "@assets/OurServices/webdeve.svg";
// import Img8 from "@assets/OurServices/appmark.svg";
// import Img9 from "@assets/OurServices/erp.svg";
// import Img0 from "@assets/OurServices/crm.svg";

export default function ServicePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Services | Solwyz Technologies";
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Pageloader />;

    return (
        <div className="pt-[104px] md:mb-[120px] mb-[72px] md:pt-[95px] px-4 md:px-[120px] md:max-w-[1440px] mx-auto">
            <h1 className="font-bold text-white md:mt-[40px] mt-[54px] md:text-center text-center md:text-[48px] text-[24px]">
                Digital Marketing
            </h1>

            {/* digital marketing */}
            <div className=" md:flex gap-[37px] md:space-y-[56px] space-y-6">
                <div>
                    <h1 className="font-semibold text-white md:mt-[40px] mt-[48px] md:text-start text-center md:text-[32px]   text-[24px]">
                        Our Services <img className=" md:w-[269px] w-[231px]  md:mt-4 mt-3 justify-center mx-auto" src='/assets/service/Line 301.svg' alt="" />
                    </h1>
                </div>
                <div className="md:w-[894px] ">
                    <Link href="SEO-Services">
                        <div className="border group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src='/assets/OurServices/SEO.svg' className=" w-[80px] h-20 " alt="" />
                                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                                    SEO Services
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Boost your website’s visibility with our tailored SEO strategies. We focus on keyword optimization, technical SEO, and quality backlinks to rank higher on search engines, attract organic traffic, and drive business growth. Our SEO services ensure long-term performance and measurable results that help your brand stay ahead in competitive digital landscapes.
                            </p>
                        </div>
                    </Link>
                    <Link href="SEO-ServicesSocial-Media-Marketing">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src='/assets/OurServices/SocialMM.svg' className=" w-[80px] h-20" alt="" />
                                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                                    Social Media Marketing
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Build stronger customer relationships through effective social media campaigns. We create, manage, and optimize content across platforms like Instagram, Facebook, LinkedIn, and X. Our strategies focus on engagement, audience growth, and brand consistency to generate leads, enhance trust, and increase your brand presence through powerful social storytelling and data-driven insights.
                            </p>
                        </div>
                    </Link>
                    <Link href="SEO-ServicesSearch-Engine-Marketing">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src='/assets/OurServices/SEM.svg' className=" w-[80px] h-20" alt="" />
                                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                                    Search engine marketing
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Drive immediate visibility and ROI with our targeted SEM campaigns. We manage Google Ads, display ads, and PPC strategies that convert. With a focus on keyword planning, performance tracking, and ad optimization, we ensure your business appears where it matters—on top of search results—capturing high-intent traffic efficiently.
                            </p>
                        </div>
                    </Link>
                    <Link href="SEO-ServicesInfluencer-Marketing">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src='/assets/OurServices/Influ.svg' className=" w-[80px] h-20" alt="" />
                                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                                    Influencer Marketing
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Connect with your audience through trusted voices. We plan and execute influencer campaigns that match your brand with credible creators across Instagram, YouTube, and TikTok. From micro-influencers to macro partnerships, we handle strategy, outreach, and analytics to boost awareness, build credibility, and drive consumer action authentically.
                            </p>
                        </div>
                    </Link>
                    <Link href="SEO-ServicesVideo-Marketing">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src='/assets/OurServices/VideoMarketing.svg' className=" w-[80px] h-20" alt="" />
                                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                                    Video Marketing
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Engage your audience with compelling video content that tells your brand story. We create high-quality reels, product videos, and promotional content tailored for platforms like YouTube, Instagram, and Facebook. Our video marketing services enhance retention, boost engagement, and help brands stand out in today’s fast-paced visual world.
                            </p>
                        </div>
                    </Link>
                    <Link href="SEO-ServicesBranding">
                        <div className="border group duration-300 md:justify-between mt-3 hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] w-full md:py-8 pr-4 pl-4 pt-8 pb-4 md:pl-8 md:pr-[18px]">
                            <div className="flex md:block gap-4 md:gap-0">
                                <img src='/assets/OurServices/Branding.svg' className=" w-[80px] h-20" alt="" />
                                <h1 className="text-center  mt-6 font-semibold text-[16px] leading-5">
                                    Branding
                                </h1>
                            </div>
                            <p className="text-justify text-[#A5A5A5] font-medium md:w-[598px] justify-center mt-8 md:mt-5 group-hover:text-white text-sm leading-[18px]">
                                Create a powerful identity that resonates. From logo design to brand strategy, we help define your tone, voice, and visual presence. Our branding solutions ensure your business stands out with clarity and consistency across digital platforms, leaving a lasting impression and building trust with your target audience.
                            </p>
                        </div>
                    </Link>

                </div>
            </div>


            {/* End-to-End Digital Delivery Section */}
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
                                    src="assets/service/discovery.svg"
                                    alt="Discovery & Consultation"
                                    className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity h-full object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/discoveryBg.svg"
                                    alt="Discovery & Consultation"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/discoveryBg.svg"
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
                                    src="assets/service/solution.svg"
                                    alt="Solution Planning"
                                    className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity h-full object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/solutionBg.svg"
                                    alt="Solution Planning"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/solutionBg.svg"
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
                                    src="assets/service/design.svg"
                                    alt="Design & Prototyping"
                                    className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/designBg.svg"
                                    alt="Design & Prototyping"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/designBg.svg"
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
                                    src="assets/service/custom.svg"
                                    alt="Custom Development"
                                    className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/customBg.svg"
                                    alt="Custom Development"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/customBg.svg"
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
                                    src="assets/service/testing.svg"
                                    alt="Testing & Compliance"
                                    className="w-full hidden opacity-100 duration-300 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/testingBg.svg"
                                    alt="Testing & Compliance"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/testingBg.svg"
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
                                    src="assets/service/deployment.svg"
                                    alt="Deployment & Launch"
                                    className="w-full hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:block h-full object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/deploymentBg.svg"
                                    alt="Deployment & Launch"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/deploymentBg.svg"
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
                                    src="assets/service/marketing.svg"
                                    alt="Marketing & User Acquisition"
                                    className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 h-full hidden md:block object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/marketingBg.svg"
                                    alt="Marketing & User Acquisition"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/marketingBg.svg"
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
                                    src="assets/service/support.svg"
                                    alt="Ongoing Support & Evolution"
                                    className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:block hidden h-full object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/supportBg.svg"
                                    alt="Ongoing Support & Evolution"
                                    className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                                />
                                <img
                                    src="assets/service/supportBg.svg"
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
