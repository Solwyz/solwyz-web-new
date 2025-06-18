import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function WebDesign() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { text: "" },
      {
        text: `"Your website should speak for your business, bring in new opportunities, support marketing efforts, and build lasting impressions with visitors."`,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // trigger when top of element hits 80% of viewport
          toggleActions: "play none none none", // only play once
        },
      }
    );
  }, []);

  return (
    <div className='text-white md:h-[459px] h-[333px] md:text-[32px] text-[18px] text-center font-normal flex items-center justify-center bg-webDesign bg-cover bg-no-repeat bg-center md:px-[120px] px-4 md:mt-[104px] mt-[72px]'>
      <p ref={textRef}></p>
    </div>
  );
}

export default WebDesign;
