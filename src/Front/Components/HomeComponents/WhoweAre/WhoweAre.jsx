import React from "react";

function WhoweAre() {
  return (
    <div className="md:mt-[104px] mt-[72px] md:px-[120px] px-4">
      <div className="md:flex text-white   md:justify-between">
        <h1 className="md:text-[48px] text-2xl leading-8 md:text-start text-center font-bold md:leading-[56px]">
          Who we are ?{" "}
        </h1>
        <p className="text-justify hidden md:block font-normal text-base w-[694px]">
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
       <div className="w-full md:mt-[64px]  flex items-center justify-center md:h-[640px] h-[192px] mt-8">
        <div className="w-full h-full relative">
          <iframe
            className="w-full h-full absolute top-0 left-0"
            src="https://www.youtube.com/embed/iBVxogg5QwE?si=xbUfcwyYoJ8lr4p8&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p className="text-justify md:hidden mt-6 text-white tracking-normal  font-normal text-base ">
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
  );
}

export default WhoweAre;
