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
    <iframe
      className="w-full h-full absolute top-0 left-0"
      src="https://www.youtube.com/embed/sQ22pm-xvrE?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=sQ22pm-xvrE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

     
    </div>
  );
}

export default AboutBanner;
