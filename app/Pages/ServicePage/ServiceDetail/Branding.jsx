import React, { useEffect, useState } from "react";
import detailBg from "@assets/service/detailBg.png";
import detailBgMob from "@assets/service/detailBgMob.png";
import Bulb from "@assets/service/Bulb.svg"
import Arrow from "@assets/service/Arow.svg"
import Line from "@assets/service/Line 301.svg"
import { Link } from "react-router-dom";
import Pageloader from "../../../Loaders/Pageloader";

function Branding() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Pageloader />;

  return (
    <div className="pt-[104px]  mb-[72px] md:pt-[95px] md:max-w-[1540px] mx-auto">
      <div className="px-4 md:px-[120px]">
        <h1 className="font-semibold text-white md:mt-[40px] mt-[48px] md:text-start text-center md:text-[40px] md:flex  text-[24px]">
          Branding{" "} <img className=" md:w-[428px] w-[231px] md:ml-4 md:mt-[27px] mt-3 justify-center  mx-auto" src={Line} alt="" />
        </h1>
        <p className="text-[#C0C0C0]  font-medium  mt-12 md:mt-4 text-base md:leading-8 leading-6 text-justify md:text-[20px]">
          Elevate your business identity with our comprehensive Branding services. From logo design to brand voice, we help businesses craft a unique image that resonates with their audience and builds long-term recognition and trust. 
        </p>
      </div>
      <div className="mt-8 md:mt-[56px]">
        <img
          src={detailBg}
          className="w-full h-[507px] object-cover md:block hidden"
          alt=""
        />
        <img src={detailBg} className="w-full h-[231px] md:hidden object-cover " alt="" />
      </div>

      <div className="px-4 text-white md:px-[120px] mt-8 md:mt-[56px] ">
        <div className="md:flex md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Bulb} alt="" /> <h1 className=""> Our Approach</h1></div>
            <p className="border-[1px]  mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
              Our branding strategy begins with a comprehensive brand discovery session where we delve into your company’s vision, mission, values, and current market positioning. This foundational step helps us understand what makes your brand unique and where it fits within your industry. We use this insight to develop a strategic blueprint that defines your brand’s voice, tone, and core messaging pillars, setting the stage for consistent and impactful communication. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Next, our creative team brings your brand to life visually. We design essential brand elements such as logos, color palettes, typography, and iconography that not only reflect your identity but also distinguish you from competitors. We also craft detailed brand guidelines that ensure consistency across all touchpoints—whether it’s a website, social media, packaging, or internal communication—reinforcing brand recognition and trust. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Our process is driven by audience research, competitor benchmarking, and a deep understanding of your business objectives. Whether you're launching a startup or refreshing an established identity, we create brands that are emotionally resonant, strategically positioned, and built to last. Through a collaborative and flexible approach, we deliver branding that conveys professionalism, purpose, and the promise of long-term value. </p>
          </div>
        </div>
        <div className="md:flex mt-8 md:mt-[56px] md:justify-between">
          <div>
            <div className="flex items-center"> <img src={Arrow} alt="" /><h1 className="">We focus on</h1> </div>
            <p className="border mt-2 border-[#04A391] w-[282px]"></p>
          </div>

          <div className="flex-col">
            <p className="md:w-[894px] mt-6 md:mt-0 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">
              We focus on building brands that not only stand out visually but also forge emotional connections with their audiences. At the core of our approach is developing authentic brand narratives that reflect your purpose and resonate with your audience’s values and aspirations. Whether you're launching a new brand, refreshing an existing one, or expanding into new markets, we apply both strategic thinking and creative precision to ensure your brand communicates with clarity and impact. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8">Our services cover the full spectrum of branding—visual identity, messaging frameworks, tone of voice, brand positioning, and user experience across all touchpoints. Each design is tailored to your industry standards while incorporating unique, memorable elements that enhance brand recognition and audience relatability. We believe strong branding isn’t just about aesthetics; it’s about alignment—ensuring that every visual and verbal cue consistently supports your business identity and values. </p>
            <p className="md:mt-4 md:w-[894px] mt-6 text-justify text-[#C0C0C0] font-medium text-base leading-6 md:leading-8"> Our branding assets are crafted to grow with your business, whether through digital platforms, printed collateral, packaging, or social media presence. By combining design excellence with storytelling, we deliver branding that goes beyond the surface—one that fosters loyalty, builds trust, and sustains long-term growth. With our support, your brand becomes more than a logo; it becomes a legacy. </p>
            
          </div>
        </div>
      </div>
      <div className="md:bg-serviceDetailBg bg-serviceDetailBgMob bg-cover bg-center md:mt-[104px] mt-[72px] h-[370px] md:h-[360px] flex items-center justify-center text-center">
        <div className="pt-14 md:pt-0 px-4 md:px-0 ">
          <h1 className="text-white text-2xl md:text-[40px] w-full  md:w-[625px] font-bold md:leading-10 mx-auto">
            Want to turn your website into your most valuable asset?
          </h1>
          <Link to="/contact">
            <button className="mt-10 bg-white font-bold text-base text-[#04A391] py-3 px-6 rounded-lg  hover:bg-[#00BEA7] hover:text-white duration-500 transition">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Branding;
