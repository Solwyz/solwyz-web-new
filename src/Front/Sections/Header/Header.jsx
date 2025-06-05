import React, { useState, useEffect } from "react";
import Logo from "../../../assets/Logo.svg";
import Arrow from "../../../assets/header/arw_sevc.svg";
import Arrow_hvr from "../../../assets/header/arw_clr.svg";
import Img1 from "../../../assets/header/1aa.svg";
import Img2 from "../../../assets/header/2aa.svg";
import Img3 from "../../../assets/header/3aa.svg";
import Img4 from "../../../assets/header/4aa.svg";
import cntcIcn from "../../../assets/header/cntcIcn.svg";
import cntcIcnHvr from "../../../assets/header/cnctIcnHvr.svg";
import mobMenu from "../../../assets/header/mobMenu.svg";
import cls from "../../../assets/header/cls.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [isContactHovering, setIsContactHovering] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll hide/show header
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div className="relative w-full">
      {/* Header */}
      <div
        className={`pl-[20px] pr-[20px] md:pl-[56px] md:pr-[120px] py-6 bg-bgColor transition-transform duration-1000 fixed w-full top-0 z-50 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-white flex justify-between items-center">
        <Link to="/"> <img className="hidden md:block" src={Logo} alt="Logo" /> </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 relative">
            <Link to="/">
              {" "}
              <div>
                {" "}
                <h1 className="hover:text-[#04A391] duration-300">Home</h1>
              </div>
            </Link>
            <Link to="/about">
              <div>
                <h1 className="hover:text-[#04A391] duration-300">About</h1>
              </div>
            </Link>
            <div
              className="relative cursor-pointer hover:text-[#04A391] w-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Service menu item */}
              <Link to="/services">
                <h1 className="hover:text-[#04A391] duration-300 flex items-center">
                  Service
                  <img
                    className="ml-1"
                    src={isHovering ? Arrow_hvr : Arrow}
                    alt="Arrow"
                  />
                </h1>
              </Link>

              {/* Dropdown content */}
              <div
                className={`fixed top-[70px] left-0 w-full z-50 px-[120px] py-[32px] bg-[#141414] mt-6 shadow-lg text-center hidden md:flex gap-6 justify-between items-center
                 transition-all duration-500 ease-in-out
                 ${
                   showHeader && isDropdownOpen
                     ? "opacity-100 translate-y-0 pointer-events-auto"
                     : "opacity-0 -translate-y-4 pointer-events-none"
                 }
                      `}
              >
                <Link
                  to="services/Pharma-E-Commerce"
                  className="text-white hover:border-[#04A391] cursor-pointer duration-500 border border-[#393939] w-full rounded-lg py-8 px-6 text-center"
                >
                  <img
                    className="justify-center mx-auto mb-4"
                    src={Img1}
                    alt="Service 1"
                  />
                  Pharma E-commerce
                </Link>
                <Link
                  to="services/mobile-and-web"
                  className="text-white hover:border-[#04A391] cursor-pointer duration-500 border border-[#393939] w-full rounded-lg py-8 px-6 text-center"
                >
                  <img
                    className="justify-center mx-auto mb-4"
                    src={Img2}
                    alt="Service 2"
                  />
                  Customized mobile & web app
                </Link>
                <Link
                  to="services/digital-marketing"
                  className="text-white hover:border-[#04A391] cursor-pointer duration-500 border border-[#393939] w-full rounded-lg py-8 px-6 text-center"
                >
                  <img
                    className="justify-center mx-auto mb-4"
                    src={Img3}
                    alt="Service 3"
                  />
                  Digital Marketing
                </Link>
                <Link
                  to="services/Pharma-ERP"
                  className="text-white hover:border-[#04A391] cursor-pointer duration-500 border border-[#393939] w-full rounded-lg py-8 px-6 text-center"
                >
                  <img
                    className="justify-center mx-auto mb-4"
                    src={Img4}
                    alt="Service 4"
                  />
                  Pharma ERP Services
                </Link>
              </div>
            </div>

            <Link to="/blogs">
              {" "}
              <div>
                {" "}
                <h1 className="hover:text-[#04A391] duration-300">Blog</h1>
              </div>
            </Link>
            <Link to="/careers">
              <div>
                {" "}
                <h1 className="hover:text-[#04A391] duration-300">Career</h1>
              </div>
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-10">
            <div className="group flex items-center font-semibold text-[16px] cursor-pointer duration-300">
              <span className="group-hover:text-[#04A391] duration-300">
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

            <Link to="contact">
              <div
                onMouseEnter={() => setIsContactHovering(true)}
                onMouseLeave={() => setIsContactHovering(false)}
                className="cursor-pointer duration-300 hover:text-[#04A391] flex items-center"
              >
                Contact
                <img
                  className={`ml-2 duration-300 ${
                    isContactHovering ? "translate-x-[3px]" : ""
                  }`}
                  src={isContactHovering ? cntcIcnHvr : cntcIcn}
                  alt="Contact Icon"
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div>
              <img
                src={mobMenu}
                alt="Menu"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer w-8 h-8"
              />
            </div>
            <div>
              <img
                className="md:hidden block w-[174px] h-10"
                src={Logo}
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FFFFFF] w-full h-full px-8 py-10 flex flex-col gap-4 text-lg">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-2xl font-bold"
            >
              <img src={cls} alt="Close" />
            </button>
          </div>
          {["Home", "About", "Service", "Blog", "Career", "Contact"].map(
            (item, idx) => (
              <h1
                key={idx}
                className="hover:text-[#04A391] text-[#676767] text-center border-b p-6 font-semibold duration-300"
              >
                {item}
              </h1>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
