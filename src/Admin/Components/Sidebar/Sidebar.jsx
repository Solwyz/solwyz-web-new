import React, { useState } from 'react';
import Logo from "../../../assets/AdminHeader/LogoBlack.svg";
import CM from "../../../assets/AdminSideBar/CM.svg";
import CMHover from "../../../assets/AdminSideBar/CMHover.svg";
import JA from "../../../assets/AdminSideBar/JA.svg";
import JAHover from "../../../assets/AdminSideBar/JAHover.svg";
import WA from "../../../assets/AdminSideBar/WA.svg";
import WAHover from "../../../assets/AdminSideBar/WAHover.svg";
import BM from "../../../assets/AdminSideBar/BM.svg";
import BMHover from "../../../assets/AdminSideBar/BMHover.svg";
import CE from "../../../assets/AdminSideBar/CE.svg";
import CEHover from "../../../assets/AdminSideBar/CEHover.svg";
import Logout from "../../../assets/AdminSideBar/Logout.svg";
import LogoutHover from "../../../assets/AdminSideBar/LogoutHover.svg";

// Sidebar Item Component
function SidebarItem({ label, icon, iconHover, activeItem, setActiveItem }) {
    const [hovered, setHovered] = useState(false);
    const isActive = activeItem === label;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setActiveItem(label)}
            className={`flex items-center justify-start text-[14px] font-semibold cursor-pointer duration-300 py-4 ${
                isActive ? 'text-[#04A391]' : hovered ? 'text-[#04A391]' : 'text-black'
            }`}
        >
            <div className="relative w-6 h-6 mr-4">
                <img
                    src={icon}
                    alt={label}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${isActive || hovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    src={iconHover}
                    alt={`${label} Hover`}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${isActive || hovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
            {label}
        </div>
    );
}

// Sidebar Component
function Sidebar() {
    const [activeItem, setActiveItem] = useState("Career Management");

    return (
        <div className='text-black bg-[#FFFFFF] shadow-lg w-[283px] h-screen text-[24px] py-8'>
            <div className='pr-[39px]'>
                <div className='bg-[#E1F7F4] py-[30px] pl-10 pr-[30px] rounded-r-3xl'>
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className='mt-[80px] px-6'>
                <SidebarItem label="Career Management" icon={CM} iconHover={CMHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Job Applications" icon={JA} iconHover={JAHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Website Audit" icon={WA} iconHover={WAHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Blog Management" icon={BM} iconHover={BMHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Contact Enquiry" icon={CE} iconHover={CEHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Logout" icon={Logout} iconHover={LogoutHover} activeItem={activeItem} setActiveItem={setActiveItem} />
            </div>
        </div>
    );
}

export default Sidebar;
