import React, { useState, useEffect } from "react";
import Logo from "@assets/Logo.svg";
import Arrow from "@assets/header/arw_sevc.svg";
import Arrow_hvr from "@assets/header/arw_clr.svg";
import DigiMarketing from "@assets/header/DigitalMarketing.svg";
import ITSolution from "@assets/header/ITSolution.svg";
import cntcIcn from "@assets/header/cntcIcn.svg";
import cntcIcnHvr from "@assets/header/cnctIcnHvr.svg";
import mobMenu from "@assets/header/mobMenu.svg";
import cls from "@assets/header/cls.svg";
import ArrowDown from "@assets/header/arrow_drop_down.svg"
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [isContactHovering, setIsContactHovering] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLocationHovering, setIsLocationHovering] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [locationTimeoutId, setLocationTimeoutId] = useState(null);

  const [servicesOpen, setServicesOpen] = useState(true);
  const [digitalOpen, setDigitalOpen] = useState(false);
  const [itOpen, setItOpen] = useState(false);




  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHovering(true);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovering(false);
      setDropdownOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  const handleLocationEnter = () => {
    if (locationTimeoutId) clearTimeout(locationTimeoutId);
    setIsLocationHovering(true);
    setIsLocationDropdownOpen(true);
  };

  const handleLocationLeave = () => {
    const id = setTimeout(() => {
      setIsLocationHovering(false);
      setIsLocationDropdownOpen(false);
    }, 200);
    setLocationTimeoutId(id);
  };

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className={`pl-[20px] pr-[20px] md:pl-[56px] md:pr-[120px] py-6 bg-bgColor transition-transform duration-1000 fixed w-full top-0 z-50 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="text-white flex justify-between items-center">
          <Link to="/">
            <img className="hidden md:block" src={Logo} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 relative">
            <Link to="/"><h1 className={`duration-300 ${currentPath === "/" ? "text-[#04A391]" : "hover:text-[#04A391]"}`}>Home</h1></Link>
            <Link to="/about"><h1 className={`duration-300 ${currentPath === "/about" ? "text-[#04A391]" : "hover:text-[#04a391]"}`}>About</h1></Link>

            {/* Services Menu */}
            <div
              className="relative cursor-pointer hover:text-[#04A391] w-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services">
                <h1 className={`duration-300 flex items-center ${currentPath === "/services" ? "text-[#04A391]" : "hover:text-[#04A391]"}`}>
                  Service
                  <img className="ml-1" src={isHovering || currentPath === "/services" ? Arrow_hvr : Arrow} alt="Arrow" />
                </h1>
              </Link>

              {/* Services Dropdown */}
              <div className={`fixed top-[70px] left-0 w-full z-50 px-[120px] py-[32px] bg-[#FFFFFF] mt-6 shadow-lg hidden md:flex gap-6 justify-between items-center transition-all duration-500 ease-in-out ${showHeader && isDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                {/* Digital Marketing Services */}
                <div className="group text-[#2F2F2F] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[64px]">
                  <div className="flex md:text-[20px] md:font-bold">
                    <img className="mr-4" src={DigiMarketing} alt="" />
                    Digital Marketing Services
                  </div>
                  <div className="flex justify-between ml-[64px] text-[#9B9B9B]">
                    <div className="space-y-3">
                      <Link to="/services/SEO-Service" className="hover:text-[#04A391] duration-300 block">SEO Services</Link>
                      <Link to="/services/Social-Media-Marketing" className="hover:text-[#04A391] duration-300 block">Social Media Marketing</Link>
                      <Link to="/services/Search-Engine-Marketing" className="hover:text-[#04A391] duration-300 block">Search Engine Marketing</Link>
                    </div>
                    <div className="space-y-3">
                      <Link to="/services/Influencer-Marketing" className="hover:text-[#04A391] duration-300 block">Influencer Marketing</Link>
                      <Link to="/services/Video-Marketing" className="hover:text-[#04A391] duration-300 block">Video Marketing</Link>
                      <Link to="/services/Branding" className="hover:text-[#04A391] duration-300 block">Branding</Link>
                    </div>
                  </div>
                </div>

                {/* IT Services */}
                <div className="group text-[#2f2f2f] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[64px]">
                  <div className="flex md:text-[20px] md:font-bold">
                    <img className="mr-4" src={ITSolution} alt="" />
                    IT Services
                  </div>
                  <div className="flex justify-between ml-[64px] text-[#9B9B9B]">
                    <div className="space-y-3">
                      <Link to="/services/Web-Development" className="hover:text-[#04A391] duration-300 block">Web Development</Link>
                      <Link to="/services/App-Development" className="hover:text-[#04A391] duration-300 block">Application Development</Link>
                      <Link to="/services/ERP-Solution" className="hover:text-[#04A391] duration-300 block">ERP Solution</Link>
                    </div>
                    <div className="space-y-3">
                      <Link to="/services/CRM-Solution" className="hover:text-[#04A391] duration-300 block">CRM Solution</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}


            <Link to="/blogs"><h1 className={`duration-300 ${currentPath === "/blogs" ? "text-[#04A391]" : "hover:text-[#04a391]"}`}>Blog</h1></Link>
            <Link to="/careers"><h1 className={`duration-300 ${currentPath === "/careers" ? "text-[#04A391]" : "hover:text-[#04a391]"}`}>Career</h1></Link>
            <div
              className="relative cursor-pointer hover:text-[#04A391]"
              onMouseEnter={handleLocationEnter}
              onMouseLeave={handleLocationLeave}
            >
              <h1 className={`duration-300 ${isLocationHovering ? "text-[#04A391]" : ""}`}>
                Locations
              </h1>

            
              <div className={`fixed top-[70px] left-0 w-full z-50 px-[120px] py-[32px] bg-[#FFFFFF] mt-6 shadow-lg hidden md:flex gap-6 justify-between  transition-all duration-500 ease-in-out  ${showHeader && isLocationDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                <div className="flex flex-col  text-[#2F2F2F] font-semibold  border-gray-300 pr-4">
                  <button className="hover:text-[#04A391] duration-300 text-left">INDIA</button>
                  <div className="border w-[79px] mt-3 border-black"></div>
                  <button className="hover:text-[#04A391] duration-300 text-left mt-3 ">UAE</button>
                </div>

                <div className="grid grid-cols-2 gap-10 text-[#2F2F2F]">
                  
                  <div className="group text-[#2F2F2F] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-[496px] rounded-lg py-8 pl-6 pr-[64px]">
                    <div className="flex md:text-[20px] md:font-bold mb-4">
                      <img className="mr-4" src={DigiMarketing} alt="" />
                      Digital Marketing Services
                    </div>
                    <div className="space-y-3 text-[#9B9B9B]">
                      <div className="hover:text-[#04A391] duration-300">SEO Services</div>
                      <div className="hover:text-[#04A391] duration-300">Social Media Marketing</div>
                      <div className="hover:text-[#04A391] duration-300">Search Engine Marketing</div>
                      <div className="hover:text-[#04A391] duration-300">Influencer Marketing</div>
                      <div className="hover:text-[#04A391] duration-300">Video Marketing</div>
                      <div className="hover:text-[#04A391] duration-300">Branding</div>
                    </div>
                  </div>

                 
                  <div className="group hover:shadow-[0_0_20px_#0280719E] border border-[#D4D4D4] cursor-pointer duration-500 w-full rounded-lg py-8 px-6">
                    <div className="flex md:text-[20px] md:font-bold mb-4">
                      <img className="mr-4" src={ITSolution} alt="" />
                      IT Services
                    </div>
                    <div className="space-y-3 text-[#9B9B9B]">
                      <div className="hover:text-[#04A391] duration-300">Web Development</div>
                      <div className="hover:text-[#04A391] duration-300">Application Development</div>
                      <div className="hover:text-[#04A391] duration-300">ERP Solutions</div>
                      <div className="hover:text-[#04A391] duration-300">CRM Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-10">
            <div className="group flex items-center text-[16px] cursor-pointer relative duration-300"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/SolwyzTechnologies.pdf";
                link.download = "Brochure.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <span className="group-hover:text-[#04A391] duration-300 custom-underline">Brochure</span>
              <button className="Btn">
                <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <span className="icon2"></span>
              </button>
            </div>
            <Link to="/contact">
              <div onMouseEnter={() => setIsContactHovering(true)} onMouseLeave={() => setIsContactHovering(false)} className={`cursor-pointer duration-300 flex items-center relative group custom-contact-underline ${currentPath === "/contact" ? "text-[#04A391]" : "hover:text-[#04A391]"}`}>
                Contact
                <img className={`ml-2 duration-300 ${isContactHovering ? "translate-x-[3px]" : ""}`} src={isContactHovering || currentPath === "/contact" ? cntcIcnHvr : cntcIcn} alt="Contact Icon" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center justify-between w-full">
            <img src={mobMenu} alt="Menu" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="cursor-pointer w-8 h-8" />
            <img className="md:hidden block w-[174px] h-10" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FFFFFF] w-full h-full px-8 py-10 flex flex-col gap-4 text-lg overflow-y-auto">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-2xl font-bold"
            >
              <img src={cls} alt="Close" />
            </button>
          </div>

          {/* Main Links */}
          <Link
            to="/"
            className="hover:text-[#04A391] text-[#04A391] font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#04A391] text-[#676767] font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Services */}
          {/* Services */}
          <div>
            <div
              className="flex items-center justify-between font-semibold text-[#676767] cursor-pointer"
            // onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              {/* <img
                src={arrowDown}
                alt="arrow"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              /> */}
            </div>

            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-4">
                {/* Digital Marketing */}
                <div
                  className="flex items-center  cursor-pointer"
                  onClick={() => setDigitalOpen(!digitalOpen)}
                >
                  <span>Digital Marketing</span>
                  <img
                    src={ArrowDown}
                    alt="arrow"
                    className={`transition-transform ${digitalOpen ? "rotate-180" : ""}`}
                  />
                </div>
                {digitalOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-2 text-[#676767]">
                    <Link to="services/SEO-Service" onClick={() => setMobileMenuOpen(false)}>
                      SEO Services
                    </Link>
                    <Link to="services/Social-Media-Marketing" onClick={() => setMobileMenuOpen(false)}>
                      Social Media Marketing
                    </Link>
                    <Link to="services/Search-Engine-Marketing" onClick={() => setMobileMenuOpen(false)}>
                      Search Engine Marketing
                    </Link>
                    <Link to="services/Influencer-Marketing" onClick={() => setMobileMenuOpen(false)}>
                      Influencer Marketing
                    </Link>
                    <Link to="services/Video-Marketing" onClick={() => setMobileMenuOpen(false)}>
                      Video Marketing
                    </Link>
                    <Link to="services/Branding" onClick={() => setMobileMenuOpen(false)}>
                      Branding
                    </Link>
                  </div>
                )}

                {/* IT Services */}
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setItOpen(!itOpen)}
                >
                  <span>IT Services</span>
                  <img
                    src={ArrowDown}
                    alt="arrow"
                    className={`transition-transform ${itOpen ? "rotate-180" : ""}`}
                  />
                </div>
                {itOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-2 text-[#676767]">
                    <Link to="services/Web-Development" onClick={() => setMobileMenuOpen(false)}>
                      Web Development
                    </Link>
                    <Link to="services/App-Development" onClick={() => setMobileMenuOpen(false)}>
                      Application Development
                    </Link>
                    <Link to="services/ERP-Solution" onClick={() => setMobileMenuOpen(false)}>
                      ERP Solutions
                    </Link>
                    <Link to="services/CRM-Solution" onClick={() => setMobileMenuOpen(false)}>
                      CRM Solutions
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>


          {/* Remaining Links */}
          <Link
            to="/blogs"
            className="hover:text-[#04A391] text-[#676767] font-semibold mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#04A391] text-[#676767] font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

    </div>
  );
}

export default Header;
