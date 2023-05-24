import React from "react";
import "../Header/Header.css";
import { useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <>
      <div className={`header ${isMobile ? "mobile" : ""}`}>
        <p className="headerItem">API Docs</p>
        <p className="headerItem">About us</p>
        <p className="headerItem">FAQ</p>
        <p className="headerItem">Terms of Service</p>
        <p className="headerItem btn">Get Started for Free</p>
      </div>
      <button className="menu-button" onClick={handleMenuClick}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </>
  );
};

export default Header;
