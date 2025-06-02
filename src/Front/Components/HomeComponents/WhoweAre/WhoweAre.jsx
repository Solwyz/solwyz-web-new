import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          Solwyz Technologies stands at the forefront of modern technology
          solutions, specializing in pharmacy e-commerce and pharmaceutical ERP
          systems. Our innovative approach ensures tha.Solwyz Technologies
          stands at the forefront of modern technology solutions, specializing
          in pharmacy e-commerce and pharmaceutical ERP systems.Our innovative
          approach ensures tha.Solwyz Technologies stands at the forefront of
          modern technology solutions, specializing in pharmacy e-commerce and
          pharmaceutical ERP systems. Our innovative approach ensures tha.
        </p>
      </div>

      {/* Video container */}
      <div className="animate-video w-full border border-[#363636] rounded-lg md:mt-[64px] flex items-center justify-center md:h-[640px] h-[192px] mt-8  overflow-hidden">
  <div className="w-full h-full relative">
  <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dkbjsnnt4/video/upload/v1748855053/blsdqqhryc9hkhkdu4yo.mp4"
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
        Solwyz Technologies stands at the forefront of modern technology
        solutions, specializing in pharmacy e-commerce and pharmaceutical ERP
        systems. Our innovative approach ensures tha.Solwyz Technologies stands
        at the forefront of modern technology solutions, specializing in
        pharmacy e-commerce and pharmaceutical ERP systems.Our innovative
        approach ensures tha.Solwyz Technologies stands at the forefront of
        modern technology solutions, specializing in pharmacy e-commerce and
        pharmaceutical ERP systems. Our innovative approach ensures tha.
      </p>
    </div>
  );
}

export default WhoweAre;
