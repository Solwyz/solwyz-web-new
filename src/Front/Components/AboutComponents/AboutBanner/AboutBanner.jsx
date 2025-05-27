import React from "react";

function AboutBanner() {
  return (
    <div className="md:pt-[95px] px-4 md:px-[120px] pt-[104px]">
      <div className="bg-aboutbanner md:mt-[52px] mt-[34px] md:h-[223px] h-[143px] bg-center bg-no-repeat bg-contain text-center flex items-center justify-center w-full">
        <h1 className="text-white font-bold md:text-[56px] mt-[56px] md:mt-0 text-[24px] leading-8 md:leading-[72px]">
          Crafting Digital Journeys <br />
          <span className="text-[#04A391] font-light">That Matter.</span>
        </h1>
      </div>

      {/* Video container */}
      <div className="animate-video w-full md:mt-[64px] flex items-center justify-center md:h-[640px] h-[192px] mt-8 rounded-lg overflow-hidden shadow-lg bg-[#111]">
  <div className="w-full h-full relative">
  <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dkbjsnnt4/video/upload/v1748338663/videoplayback_y9ycn8.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
  </div>
</div>

     
    </div>
  );
}

export default AboutBanner;
