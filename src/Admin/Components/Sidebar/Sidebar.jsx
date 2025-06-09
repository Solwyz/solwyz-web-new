import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
import logoutIcon from "../../../assets/logoutIcon.svg";

// Sidebar Item Component
function SidebarItem({ label, icon, iconHover, activeItem, setActiveItem, to, onLogoutClick }) {
    const [hovered, setHovered] = useState(false);
    const isActive = activeItem === label;

    const handleClick = (e) => {
        if (label === "Logout") {
            e.preventDefault();
            onLogoutClick();
        } else {
            setActiveItem(label);
        }
    };

    return (
        <Link to={to} onClick={handleClick}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
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
        </Link>
    );
}

// Sidebar Component
function Sidebar() {
    const [activeItem, setActiveItem] = useState("Career Management");
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/admin"; // or use react-router's useNavigate
    };

    return (
        <div className='text-black bg-[#FFFFFF] shadow-lg w-[283px] h-screen max-h-full fixed text-[24px] py-8'>
            <div className='pr-[39px]'>
                <div className='bg-[#E1F7F4] py-[30px] pl-10 pr-[30px] rounded-r-3xl'>
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className='mt-[80px] px-6 h-full'>
                <SidebarItem label="Career Management" to="/admin/career" icon={CM} iconHover={CMHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Job Applications" to="/admin/jobapplications" icon={JA} iconHover={JAHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Website Audit" to="/admin/WebsiteAudit" icon={WA} iconHover={WAHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Blog Management" to="/admin/blogPage" icon={BM} iconHover={BMHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Contact Enquiry" to="/admin/enquiries" icon={CE} iconHover={CEHover} activeItem={activeItem} setActiveItem={setActiveItem} />
                <SidebarItem label="Logout" to="/login" icon={Logout} iconHover={LogoutHover} activeItem={activeItem} setActiveItem={setActiveItem} onLogoutClick={() => setShowLogoutModal(true)} />
            </div>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white p-6 shadow-lg items-center text-center w-[360px] rounded-lg">
                        <img src={logoutIcon} className='w-[64px] items-center mx-auto h-[64px]' alt="Logout Icon" />
                        <h1 className='mt-6 text-xl font-semibold text-center text-[#3F3F3F]'>Confirm Logout?</h1>
                        <h2 className="font-normal text-sm text-[#888888] mt-4">Do you want to really logout ?</h2>
                        <div className="flex justify-between mt-8">
                            <button
                                className="w-[147px] h-12 border rounded-lg font-normal text-base border-[#7A7A7A] text-black"
                                onClick={() => setShowLogoutModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-[#ED1C24] hover:bg-[#ff4747] w-[150px] h-12 font-normal text-base rounded-lg text-white"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
