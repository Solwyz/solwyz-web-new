import React from "react";
import sijeena from "../../../../assets/about/sijeena.png";
import sijeenaMob from "../../../../assets/about/sijeenaMob.png";

function AboutOur() {
  return (
    <div className="md:mt-[104px] md:px-[120px] mt-[72px] px-4">
      <div className="md:flex">
        <h1 className="md:hidden font-bold text-[24px] text-white text-center w-full leading-8">
          Together, We Build.Together,
          <br /> We Grow.
        </h1>
        <img
          src={sijeena}
          className="w-[282px] h-[309px] object-cover hidden md:block"
          alt=""
        />
        <img
          src={sijeenaMob}
          className="w-[282px] mt-8 mx-auto items-center justify-center h-[309px] object-cover md:hidden"
          alt=""
        />
        <div className="md:w-[891px] text-white md:ml-6  ">
          <h1 className="font-bold text-[40px] hidden md:block">
            Together, We Build. Together, We Grow.
          </h1>
          <p className="mt-8 md:mt-[50px] font-light text-xl md:text-start  text-justify leading-[28px]">
            Our success at Solwyz Technologies is a reflection of the
            commitment, clarity, and innovation brought in by our passionate
            team. Every achievement is a shared one, powered by purpose and
            progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutOur;
