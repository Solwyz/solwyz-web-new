import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhoweAreVideo from "@assets/Videos/web promo.mp4"


gsap.registerPlugin(ScrollTrigger);

function WhoweAre() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".animate-heading", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".animate-paragraph",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.5"
        )
        .from(
          ".animate-video",
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="md:mt-[104px] mt-[72px] md:px-[120px] px-4 text-white"
    >
      <div className="md:flex md:justify-between md:items-start flex-col md:flex-row gap-6">
        <h1 className="animate-heading md:text-[48px] text-2xl leading-8 md:text-start text-center font-bold md:leading-[56px]">
          Who we are ?
        </h1>
        <p className="animate-paragraph text-justify hidden md:block font-normal text-base w-[694px]">
          Solwyz Technologies specializes in website development, mobile app
          development, digital marketing, and ERP/CRM solutions. Our experienced
          team delivers tailored services that help businesses establish a
          strong online presence, streamline operations, and reach their target
          audience effectively. We combine technical expertise with a
          client-focused approach to ensure every project meets your unique
          needs and drives measurable results for your business growth.
        </p>
      </div>

      {/* Video container */}
      <div className="animate-video w-full border border-[#363636] rounded-lg md:mt-[104px] flex items-center justify-center md:h-[640px] h-[192px] mt-8  overflow-hidden">
        <div className="w-full h-full relative">
          <video
            className="w-full h-full object-cover"
            src="https://s3.ap-south-1.amazonaws.com/webpromo.solwyz/web+promo+(1).mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </div>
      </div>

      {/* Mobile paragraph */}
      <p className="animate-paragraph text-justify md:hidden mt-6 tracking-normal font-normal text-base">
        Solwyz Technologies specializes in website development, mobile app
        development, digital marketing, and ERP/CRM solutions. Our experienced
        team delivers tailored services that help businesses establish a strong
        online presence, streamline operations, and reach their target audience
        effectively. We combine technical expertise with a client-focused
        approach to ensure every project meets your unique needs and drives
        measurable results for your business growth.
      </p>
    </div>
  );
}

export default WhoweAre;
