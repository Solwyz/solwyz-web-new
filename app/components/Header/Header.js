"use client"; // required since we use useState/useEffect in App Router

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";


export default function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [isContactHovering, setIsContactHovering] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [locationTimeoutId, setLocationTimeoutId] = useState(null);

  const [servicesOpen, setServicesOpen] = useState(true);
  const [digitalOpen, setDigitalOpen] = useState(false);
  const [itOpen, setItOpen] = useState(false);
  const [isLocationHovering, setIsLocationHovering] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Trivandrum");
  const [locationOpen, setLocationOpen] = useState(false);
  const [openLocation, setOpenLocation] = useState(null);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const currentPath = usePathname();

  const pathname = usePathname();

  const digitalMarketingServices = {
    Trivandrum: [],
    UAE: [],
  };

  const itServices = {
    Trivandrum: [],
    UAE: [],
  };

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
      <div
        className={`pl-[20px] pr-[20px] md:pl-[56px] md:pr-[120px] py-6 bg-black transition-transform duration-1000 fixed w-full top-0 z-50 ${showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="text-white flex justify-between items-center">
          <Link href="/">
            <img
              className="hidden md:block"
              src="/assets/Logo.svg"
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 relative">
            <Link href="/">
              <h1
                className={`duration-300 ${currentPath === "/" ? "text-[#04A391]" : "hover:text-[#04A391]"
                  }`}
              >
                Home
              </h1>
            </Link>
            <Link href="/about">
              <h1
                className={`duration-300 ${currentPath === "/about"
                  ? "text-[#04A391]"
                  : "hover:text-[#04a391]"
                  }`}
              >
                About
              </h1>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative cursor-pointer hover:text-[#04A391] w-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              <h1
                className={`duration-300 flex items-center ${currentPath === "/services"
                  ? "text-[#04A391]"
                  : "hover:text-[#04A391]"
                  }`}
              >
                Service
                <img
                  className="ml-1"
                  src={
                    isHovering || currentPath === "/service"
                      ? "/assets/header/arw_clr.svg"
                      : "/assets/header/arw_sevc.svg"
                  }
                  alt="Arrow"
                />
              </h1>

              <div
                className={`fixed top-[70px] left-0 w-full z-50 px-[120px] py-[32px] bg-[#FFFFFF] mt-6 shadow-lg hidden md:flex gap-6 justify-between items-center transition-all duration-500 ease-in-out ${showHeader && isDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
              >
                {/* Digital Marketing Services */}
                <Link
                  href="/service"
                  className="group text-[#2F2F2F] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[64px]"
                >
                  <div className="flex md:text-[20px] md:font-bold">
                    <img className="mr-4" src="/assets/header/DigitalMarketing.svg" alt="" />
                    Digital Marketing Services
                  </div>
                  <div className="flex justify-between ml-[64px] text-[#9B9B9B]">
                    <div className="space-y-3">
                      <Link href="/services/SEO-Service" className="hover:text-[#04A391] duration-300 block">
                        SEO Services
                      </Link>
                      <Link href="/services/Social-Media-Marketing" className="hover:text-[#04A391] duration-300 block">
                        Social Media Marketing
                      </Link>
                      <Link href="/services/Search-Engine-Marketing" className="hover:text-[#04A391] duration-300 block">
                        Search Engine Marketing
                      </Link>
                    </div>
                    <div className="space-y-3">
                      <Link href="/services/Influencer-Marketing" className="hover:text-[#04A391] duration-300 block">
                        Influencer Marketing
                      </Link>
                      <Link href="/services/Video-Marketing" className="hover:text-[#04A391] duration-300 block">
                        Video Marketing
                      </Link>
                      <Link href="/services/Branding" className="hover:text-[#04A391] duration-300 block">
                        Branding
                      </Link>
                    </div>
                  </div>
                </Link>

                {/* IT Services */}
                <Link
                  href="/Pages/itservicepage"
                  className="group text-[#2f2f2f] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[64px]"
                >
                  <div className="flex md:text-[20px] md:font-bold">
                    <img className="mr-4" src="/assets/header/ITSolution.svg" alt="" />
                    IT Services
                  </div>
                  <div className="flex justify-between ml-[64px] text-[#9B9B9B]">
                    <div className="space-y-3">
                      <Link href="/ITServices/Web-Development" className="hover:text-[#04A391] duration-300 block">
                        Web Development
                      </Link>
                      <Link href="/ITServices/App-Development" className="hover:text-[#04A391] duration-300 block">
                        Application Development
                      </Link>
                      <Link href="/ITServices/ERP-Solution" className="hover:text-[#04A391] duration-300 block">
                        ERP Solution
                      </Link>
                    </div>
                    <div className="space-y-3">
                      <Link href="/ITServices/CRM-Solution" className="hover:text-[#04A391] duration-300 block">
                        CRM Solution
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>


            <Link href="/Pages/Blogs">
              <h1
                className={`duration-300 ${currentPath === "/blogs"
                  ? "text-[#04A391]"
                  : "hover:text-[#04a391]"
                  }`}
              >
                Blog
              </h1>
            </Link>
            <Link href="/Pages/CareerPage">
              <h1
                className={`duration-300 ${currentPath === "/careers"
                  ? "text-[#04A391]"
                  : "hover:text-[#04a391]"
                  }`}
              >
                Career
              </h1>
            </Link>

            <div
              className="relative cursor-pointer hover:text-[#04A391]"
              onMouseEnter={() => {
                handleLocationEnter();
                setIsLocationHovering(true);
              }}
              onMouseLeave={() => {
                handleLocationLeave();
                setIsLocationHovering(false);
              }}
            >
              <h1 className={`duration-300 ${isLocationHovering ? "text-[#04A391]" : ""}`}>
                Locations
              </h1>

              <div
                className={`fixed top-[70px] left-0 w-full z-50 px-[120px] py-[32px] bg-[#FFFFFF] mt-6 shadow-lg hidden md:flex gap-6 justify-between transition-all duration-500 ease-in-out ${showHeader && isLocationDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
              >
                {/* Location Buttons */}
                <div className="flex flex-col text-[#2F2F2F] font-semibold border-gray-300 pr-4">
                  <button
                    className={`hover:text-[#04A391] duration-300 text-left ${selectedLocation === "Trivandrum" ? "text-[#04A391]" : ""
                      }`}
                    onClick={() => setSelectedLocation("Trivandrum")}
                  >
                    Trivandrum
                  </button>
                  <div className="border w-[79px] mt-3 border-black"></div>
                  <button
                    className={`hover:text-[#04A391] duration-300 text-left mt-3 ${selectedLocation === "UAE" ? "text-[#04A391]" : ""
                      }`}
                    onClick={() => setSelectedLocation("UAE")}
                  >
                    UAE
                  </button>
                </div>

                {/* Services */}
                <div className="grid grid-cols-2 gap-10 text-[#2F2F2F]">
                  {/* Digital Marketing */}
                  <Link href={
                    selectedLocation === "Trivandrum"
                      ? "/Digital-Marketing-Trivandrum"
                      : selectedLocation === "UAE"
                        ? "/Digital-Marketing-UAE"
                        : "#"
                  } className="group text-[#2F2F2F] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[64px]">
                    <div className="flex md:text-[20px] md:font-bold mb-4">
                      <img className="mr-4" src='/assets/header/DigitalMarketing.svg' alt="" />

                      <div

                        className="group-hover:text-[#04A391] duration-300"
                      >
                        {`Digital Marketing Services${selectedLocation ? ` ${selectedLocation}` : ""}`}
                      </div>
                    </div>

                    <div className="space-y-3 text-[#9B9B9B]">
                      {digitalMarketingServices[selectedLocation]?.map((service, index) => (
                        <div key={index} className="hover:text-[#04A391] duration-300">
                          {service}
                        </div>
                      ))}
                    </div>
                  </Link>

                  {/* IT Services */}
                  <Link href={
                    selectedLocation === "Trivandrum"
                      ? "/IT-Service-Trivandrum"
                      : selectedLocation === "UAE"
                        ? "/IT-Service-UAE"
                        : "#"
                  } className="group hover:shadow-[0_0_20px_#0280719E] border border-[#D4D4D4] cursor-pointer duration-500 w-full rounded-lg py-8 px-6">
                    <div className="flex md:text-[20px] md:font-bold mb-4">
                      <img className="mr-4" src='/assets/header/ITSolution.svg' alt="" />
                      <div

                        className="group-hover:text-[#04A391] duration-300"
                      >
                        {`IT Services${selectedLocation ? ` ${selectedLocation}` : ""}`}
                      </div>
                    </div>
                    <div className="space-y-3 text-[#9B9B9B]">
                      {itServices[selectedLocation]?.map((service, index) => (
                        <div key={index} className="hover:text-[#04A391] duration-300">
                          {service}
                        </div>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-10">
            {/* ---- Brochure ---- */}
            <div
              className="group flex items-center text-[16px] cursor-pointer relative duration-300"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/SolwyzTechnologies.pdf";
                link.download = "Brochure.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <span className="group-hover:text-[#04A391] duration-300 custom-underline">
                Brochure
              </span>
              <button className="Btn">
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <span className="icon2"></span>
              </button>
            </div>

            {/* ---- Contact ---- */}
            <Link href="/contact">
              <div
                onMouseEnter={() => setIsContactHovering(true)}
                onMouseLeave={() => setIsContactHovering(false)}
                className={`cursor-pointer duration-300 flex items-center relative group custom-contact-underline ${pathname === "/contact"
                  ? "text-[#04A391]"
                  : "hover:text-[#04A391]"
                  }`}
              >
                Contact
                <img
                  className={`ml-2 duration-300 ${isContactHovering || pathname === "/contact" ? "translate-x-[3px]" : ""
                    }`}
                  src={
                    isContactHovering || pathname === "/contact"
                      ? "/assets/header/cnctIcnHvr.svg"
                      : "/assets/header/cntcIcn.svg"
                  }
                  alt="Contact Icon"

                />

              </div>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center justify-between w-full">
            <img
              src="/assets/header/mobMenu.svg"
              alt="Menu"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer w-8 h-8"
            />
            <img
              className="md:hidden block w-[174px] h-10"
              src="/assets/Logo.svg"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Keep your mobile menu code exactly the same, just switch all imports to /assets/... */}
    </div>
  );
}
