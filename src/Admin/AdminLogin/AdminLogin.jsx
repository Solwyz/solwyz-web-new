import React, { useState } from "react";
import logo from "@assets/Logo.svg";
import Bg from "@assets/Login/adminBG.png";
import userIco from "@assets/Login/user.svg";
import checkBlank from "@assets/Login/checkBlank.svg";
import checkBox from "@assets/Login/checkBox.svg";
import email from "@assets/Login/email.svg";
import eye from "@assets/Login/eye.svg";
import eyeOff from "@assets/Login/eyeOff.svg";
import lock from "@assets/Login/lock.svg";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex bg-gradient-to-b from-[#004841] to-[#12A695] h-screen w-screen overflow-hidden">
      {/* Left Background Image */}
      <div className="">
        <img src={Bg} className="h-full object-cover" alt="Background" />
      </div>

      {/* Right Content */}
      <div className="flex  relative">
        {/* Logo */}
        <img
          src={logo}
          className="absolute top-[191px] left-[-173px] w-[348px] h-[80px]"
          alt="Solwyz Logo"
        />

        {/* Login Card */}
        <div className="w-[376px] ml-[392px] h-[580px]  mt-[123px] rounded-[24px] bg-white/15 text-white backdrop-blur-[40px] border py-10 px-8 shadow-[0_10px_24px_0px_rgba(0,0,0,0.15)]">
          <img src={userIco} className="mx-auto " alt="User Icon" />

          {/* Email Input */}
          <div className="flex items-center border-b border-white mt-[64px] ">
            <img src={email} className="mr-4" alt="Email Icon" />
            <input
              type="email"
              placeholder="Email ID"
              className="bg-transparent  text-base font-normal outline-none text-white placeholder-[#60A9A2] w-full py-4"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border-b border-white mt-6 ">
            <img src={lock} className="mr-4" alt="Lock Icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent  text-base font-normal outline-none text-white placeholder-[#60A9A2] w-full py-4"
            />
            <img
              src={showPassword ? eye : eyeOff}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              alt="Toggle Password Visibility"
            />
          </div>

          {/* Remember Me */}
          <div
            className="flex items-center mt-6 cursor-pointer"
            onClick={() => setRemember(!remember)}
          >
            <img
              src={remember ? checkBox : checkBlank}
              className="mr-2"
              alt="Checkbox"
            />
            <label className="text-white font-medium text-base cursor-pointer select-none">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button className="w-full mt-[60px] hover:text-[#005E53] hover:shadow-[0px_4px_8px_0px_#00000040] transition-shadow duration-300 bg-white text-[#04A391] rounded-lg py-3.5 font-medium text-base ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
