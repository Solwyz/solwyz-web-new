import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import Bg from "../../assets/login/adminBg.png";
import userIco from "../../assets/login/user.svg";
import checkBlank from "../../assets/login/checkBlank.svg";
import checkBox from "../../assets/login/checkBox.svg";
import email from "../../assets/login/email.svg";
import eye from "../../assets/login/eye.svg";
import eyeOff from "../../assets/login/eyeOff.svg";
import lock from "../../assets/login/lock.svg";
import Api from "../../Services/Api";
import { ClipLoader } from "react-spinners";

function AdminLogin({ setToken }) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [emailId, setEmailId] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true)
    Api.post('api/auth/login', {
      "username": emailId,
      "password": password
    })
      .then(response => {
        setLoading(false)
        if (response && response.status === 200) {
          console.log("Login response:", response.data);
          setToken(response.data.jwt);
          localStorage.setItem("token", response.data.jwt);
        } else {
          console.error("Login failed:", response);
          setLoginError("Incorrect email ID or password. Please try again")
          setPassword("");
        }

      })
  };

  return (
    <div className="flex bg-gradient-to-b from-[#004841] to-[#12A695] h-screen w-screen overflow-hidden">
      {/* Left Background Image */}
      <div className="">
        <img src={Bg} className="h-full object-cover" alt="Background" />
      </div>

      {/* Right Content */}
      <div className="flex relative">
        {/* Logo */}
        <img
          src={logo}
          className="absolute top-[191px] left-[-173px] w-[348px] h-[80px]"
          alt="Solwyz Logo"
        />

        {/* Login Card */}
        <div className="w-[376px] ml-[392px] h-[580px] mt-[123px] rounded-[24px] bg-white/15 text-white backdrop-blur-[40px] border py-10 px-8 shadow-[0_10px_24px_0px_rgba(0,0,0,0.15)]">
          <img src={userIco} className="mx-auto" alt="User Icon" />

          {/* Email Input */}
          <div className="flex items-center border-b border-white mt-[64px]">
            <img src={email} className="mr-4" alt="Email Icon" />
            <input
              type="email"
              placeholder="Email ID"
              className="bg-transparent text-base font-normal outline-none text-white placeholder-[#60A9A2] w-full py-4"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border-b border-white mt-6">
            <img src={lock} className="mr-4" alt="Lock Icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent text-base font-normal outline-none text-white placeholder-[#60A9A2] w-full py-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? eye : eyeOff}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              alt="Toggle Password Visibility"
            />
          </div>

          <div className="mt-2">{loginError && (
            <div className="text-red-400 text-[14px] font-bold">{loginError}</div>
          )}</div>

          {/* Remember Me */}
          <div
            className="flex items-center mt-2 cursor-pointer"
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
          <button
            className="w-full mt-[60px] hover:text-[#005E53] hover:shadow-[0px_4px_8px_0px_#00000040] transition-shadow duration-300 bg-white text-[#04A391] rounded-lg py-3.5 font-medium text-base flex justify-center items-center"
            onClick={handleLogin}
            disabled={loading} // Optional: disable during loading
          >
            {loading ? (
              <ClipLoader color="#04A391" size={20} />  // Use smaller size like 20
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
