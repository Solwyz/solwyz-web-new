import React from 'react';
import logo from "../assets/footer/Solwyz Logo 1 (1) 2.png";

import './Loader.css';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-50">
    <div className="card">
      <div className="loader text-white">
        <p>loading</p>
        <div className="words">
          <span className="word">buttons</span>
          <span className="word">forms</span>
          <span className="word">switches</span>
          <span className="word">cards</span>
          <span className="word">buttons</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Loader;
