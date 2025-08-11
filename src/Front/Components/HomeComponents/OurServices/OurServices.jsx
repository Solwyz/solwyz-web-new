import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ourImg from "@assets/OurServices/ourImg.svg";
import Img1 from "@assets/OurServices/SEO.svg";
import Img2 from "@assets/OurServices/SocialMM.svg";
import Img3 from "@assets/OurServices/SEM.svg";
import Img4 from "@assets/OurServices/Influ.svg";
import Img5 from "@assets/OurServices/VideoMarketing.svg";
import Img6 from "@assets/OurServices/Branding.svg";
import Img7 from "@assets/OurServices/WEBDEV (2).svg";
import Img8 from "@assets/OurServices/APPMAR.svg";
import Img9 from "@assets/OurServices/ERP.svg";
import Img0 from "@assets/OurServices/CRM.svg";
import verticleLine from "@assets/OurServices/verticleLine.svg";
import HorizondalLine from "@assets/OurServices/HorizondalLine.svg";

gsap.registerPlugin(ScrollTrigger);

function OurServices() {
  const cardsRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top center",
        end: "+=400",
        scrub: true,
      },
    });

    tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(lineRef.current, { scaleY: 0, transformOrigin: "top" }, { scaleY: 1, duration: 1, ease: "power2.out" }, "<+0.2")
      .fromTo(subHeadRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "<+0.2");

    const elements = gsap.utils.toArray(".group");
    elements.forEach((el, index) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.to(".vertical-line", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".our-service",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      }
    });

    gsap.from(".content h1", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".our-service",
        start: "top center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.fromTo(".parallax-heading", { opacity: 0, yPercent: 30, scale: 1.2, filter: "blur(10px)" },
      { opacity: 0.07, yPercent: -10, scale: 1, filter: "blur(0px)", ease: "power3.out", scrollTrigger: { trigger: cardsRef.current, start: "top bottom", end: "top top", scrub: true } }
    );
  }, []);

  const imgList = [Img1, Img2, Img3, Img4, Img5, Img6];
  const imgList2 = [Img7, Img8, Img9, Img0];

  const titles = [
    "SEO Services",
    "Social Media Marketing",
    "Search Engine Marketing",
    "Influencer Marketing",
    "Video Marketing",
    "Branding",
  ];
  const titles2 = [
    "Web Development",
    "App Development",
    "ERP Solutions",
    "CRM Solutions",
  ];
  const descriptions = [
    "Our SEO services boost your website’s visibility across search engines, enhancing organic traffic, improving search rankings, and driving sustainable growth with customized strategies tailored to your business goals.",
    "We create impactful social media campaigns that increase engagement, grow brand presence, and convert followers into customers using data-driven content strategies tailored to each platform and audience behavior.",
    "Our SEM solutions drive fast and measurable results through paid search ads, targeted keyword strategies, and performance optimization to increase visibility, leads, and ROI across major search engines.",
    "We connect your brand with trusted influencers to build authentic relationships with your audience, increase product visibility, and drive conversions through creative, engaging influencer collaborations and campaigns.",
    "We produce compelling video content that tells your brand story, boosts engagement, and increases retention through strategic distribution across YouTube, social media, and other key digital platforms.",
    "Our branding services shape your identity with impactful visuals, messaging, and positioning strategies that resonate with your audience and build a lasting impression across all digital touchpoints."
  ];
  const descriptions2 = [
    "We design and build responsive, scalable websites optimized for performance, SEO, and user experience, tailored to meet your business objectives and ensure seamless functionality across all devices",
    "From Android to iOS, we develop custom mobile applications with smooth UI/UX, robust backend, and integrated features, perfect for enhancing user engagement and driving business operations forward.",
    "Our ERP systems streamline your business processes by integrating key operations like finance, HR, inventory, and sales into one centralized platform, boosting productivity and operational efficiency.",
    "We develop customized CRM solutions that help you manage customer interactions, improve sales pipelines, automate workflows, and deliver personalized experiences that increase loyalty and customer satisfaction.",
  ];

  const links = ["SEO-Service", "Social-Media-Marketing", "Search-Engine-Marketing", "Influencer-Marketing", "Video-Marketing", "Branding"];
  const links2 = ["Web-Development", "App-Development", "ERP-Solution", "CRM-Solution"];

  return (
    <div className="relative mt-[184px] md:max-w-[1440px] md:mx-auto md:px-6 px-6 md:mt-[72px]" ref={cardsRef}>
      <h1 className="parallax-heading hidden uppercase md:block absolute top-1/2 left-1/2 -translate-x-1/2 text-[160px] font-bold text-[#ffffff] pointer-events-none z-0 leading-none whitespace-nowrap">
        Services
      </h1>

      <div className="relative z-10 our-service">
        <div className="md:px-[120px] md:mt-0 mt-[72px]">
          <h1 ref={headingRef} className="md:text-[48px] text-[24px] font-bold md:text-center text-center text-[#FFFFFF] content">
            Our Services
          </h1>
        </div>

        <div>
          <div className="relative flex justify-center mt-4 vertical-line-container">
            <img ref={lineRef} src={verticleLine} alt="vertical line" className="vertical-line" style={{ transform: "scaleY(0)" }} />
          </div>

          <div ref={subHeadRef} className="text-center text-white md:mt-8 content">
            With an in-house team, we offer{" "}
            <span className="text-[#04A391]">personalized services</span>
          </div>

          {/* Digital Marketing */}
          <div>
            <div className="text-[32px] font-bold text-white text-center md:mt-14">Digital Marketing</div>
            <img className="mx-auto mt-4" src={HorizondalLine} alt="Horizontal Line" />
          </div>

          <div className=" md:flex flex-col items-center md:mt-16 mt-8 space-y-10">
            <div className="flex gap-8 justify-center flex-wrap">
              {[0, 1, 2, 3].map((index) => (
                <Link to={`/services/${links[index]}`} key={index} className="group relative md:w-[282px] w-full">
                  <div className="absolute top-0 left-0 w-full h-full border border-[#59728A] bg-[#59728A] rounded-bl-3xl rounded-tr-3xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4 group-hover:-left-4 z-0" />
                  <div className="relative bg-black border border-[#676767] rounded-tr-3xl rounded-bl-3xl p-6 w-full z-10">
                    <div className="pb-[24px]">
                      <img className="w-[72px] h-[72px]" src={imgList[index]} alt={titles[index]} />
                      <h1 className="text-[18px] font-semibold mt-12 text-white">{titles[index]}</h1>
                      <p className="text-sm font-medium leading-[18px] mt-3 text-[#A5A5A5] text-justify">{descriptions[index]}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:items-center">
              {[4, 5].map((index) => (
                <Link to={`/services/${links[index]}`} key={index} className="group relative md:w-[282px] w-full">
                  <div className="absolute top-0 left-0 w-full h-full border border-[#59728A] bg-[#59728A] rounded-bl-3xl rounded-tr-3xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4 group-hover:-left-4 z-0" />
                  <div className="relative bg-black border border-[#676767] rounded-tr-3xl rounded-bl-3xl p-6 w-full z-10">
                    <div className="pb-[24px]">
                      <img src={imgList[index]} alt={titles[index]} />
                      <h1 className="text-[18px] font-semibold mt-12 text-white">{titles[index]}</h1>
                      <p className="text-sm font-medium leading-[18px] mt-3 text-[#A5A5A5] text-justify">{descriptions[index]}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div>
            <div className="text-[32px] font-bold text-white text-center mt-14">IT Services</div>
            <img className="mx-auto mt-4" src={HorizondalLine} alt="Horizontal Line" />
          </div>

          <div className="mt-8 md:mt-16 space-y-10">
            <div className=" flex-col items-center space-y-10 md:flex md:flex-wrap md:flex-row md:justify-center md:gap-8 md:space-y-0">
              {[0, 1, 2, 3].map((index) => (
                <Link to={`/services/${links2[index]}`} key={index} className="group relative w-full  md:w-[282px]">
                  <div className="absolute top-0 left-0 w-full h-full border border-[#59728A] bg-[#59728A] rounded-bl-3xl rounded-tr-3xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-top-4 group-hover:-left-4 z-0" />
                  <div className="relative bg-black border border-[#676767] rounded-tr-3xl rounded-bl-3xl p-6 w-full z-10">
                    <div className="pb-[24px]">
                      <img src={imgList2[index]} alt={titles2[index]} />
                      <h1 className="text-[18px] font-semibold mt-12 text-white">{titles2[index]}</h1>
                      <p className="text-sm font-medium leading-[18px] mt-3 text-[#A5A5A5] text-justify">{descriptions2[index]}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurServices;
