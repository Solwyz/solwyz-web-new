"use client"; // 👈 Required because we’re using useEffect, gsap, and DOM refs

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link"; // ✅ Next.js navigation
import "./HomeBanner.css";

gsap.registerPlugin(TextPlugin);

export default function HomeBanner() {
  const line1Ref = useRef(null);
  const lensRef = useRef(null);
  const containerRef = useRef(null);
  const [lensVisible, setLensVisible] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(line1Ref.current, {
      duration: 1,
      text: "Your Growth Partners in",
      ease: "power2.out",
      opacity: 1,
    });

    // Initialize lens at left edge
    const lens = lensRef.current;
    const container = containerRef.current;
    if (lens && container) {
      const bounds = container.getBoundingClientRect();
      const initialY = bounds.height / 2 - lens.offsetHeight / 2;
      lens.style.transform = `translate(0px, ${initialY}px)`;
      setLensVisible(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    const lens = lensRef.current;
    const container = containerRef.current;
    if (!lens || !container) return;

    const bounds = container.getBoundingClientRect();

    const x = e.clientX - bounds.left - lens.offsetWidth / 2;
    const y = bounds.height / 2 - lens.offsetHeight / 2;

    lens.style.transform = `translate(${x}px, ${y}px)`;
    setLensVisible(true);
  };

  return (
    <div>
      <div className="md:h-[95px] h-[104px]"></div>

      <div
        className="text-white h-[572px] flex items-center justify-center md:px-[120px] px-[33px]"
        style={{
          backgroundImage: "url('/assets/Background.svg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="mt-[197px] text-center">
          {/* Main Text with Lens Effect */}
          <div
            className="relative inline-block text-center md:text-[88px] text-[28px] font-medium whitespace-nowrap"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setLensVisible(true)}
            ref={containerRef}
          >
            <span className="relative z-10 cursor-pointer" ref={line1Ref}>
              Your Growth Partners in
            </span>

            <div
              ref={lensRef}
              className="lens hidden md:block"
              style={{ opacity: lensVisible ? 1 : 0 }}
            ></div>
          </div>

          {/* Gradient Text */}
          <div className="text-[52px] md:text-[88px] font-light text-transparent bg-clip-text bg-gradient-to-r from-[#A06DA1] to-[#04A391] text-center whitespace-normal mt-2">
            MENA &amp; India
          </div>

          {/* Know More Button */}
          <Link
            href="/about"
            className="bg-[#FFFFFF] cursor-pointer duration-300 hover:bg-[#04A391] hover:text-white text-[#000000] text-[16px] w-fit py-3 px-6 rounded-lg mt-14 mx-auto mb-[100px] hover:bg-gradient-to-r hover:from-[#00695f] hover:to-[#00C0A6]"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
