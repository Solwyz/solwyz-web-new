import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import innovateBg from "../../../../assets/about/innovateBg.png";
import innovate from "../../../../assets/about/innovate.png";
import impactBg from "../../../../assets/about/impactBg.png";
import impact from "../../../../assets/about/impact.png";
import integrateBg from "../../../../assets/about/integrateBg.png";
import integrate from "../../../../assets/about/integrate.png";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { bg: innovateBg, image: innovate, title: "Innovate" },
  { bg: impactBg, image: impact, title: "Impact" },
  { bg: integrateBg, image: integrate, title: "Integrate" },
];

function AboutAnimate() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (!el) return;

      const bg = el.querySelector(".background-image");
      const image = el.querySelector(".main-image");
      const text = el.querySelector(".main-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        bg,
        { y: "20%", scale: 1.05 },
        { y: "0%", scale: 1, ease: "power4.out", duration: 1 }, // was 1
        0
      );
      
      tl.fromTo(
        image,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power4.out",
          duration: 2, // was 1.2
        },
        0.6
      );
      
      tl.fromTo(
        text,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power4.out",
          duration: 2, // was 1
        },
        1.2
      );
      

    });
  }, []);

  return (
    <div className="overflow-hidden">
      {panels.map((panel, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="relative w-full h-screen flex items-center justify-center"
        >
          {/* Background */}
          <img
            src={panel.bg}
            alt="background"
            className="background-image absolute w-full h-full object-cover top-0 left-0 z-0"
          />

          {/* Foreground */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <img
              src={panel.image}
              alt={panel.title}
              className="main-image w-[260px] md:w-[510px] h-[220px] object-contain opacity-0"
            />
            <h1 className="main-text text-white text-[70px] md:text-[160px] font-bold opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {panel.title}
            </h1>
          </div>
        </section>
      ))}
    </div>
  );
}

export default AboutAnimate;
