import React from "react";

import useScrollAnimation from "./useScrollAnimation";
function Header() {
    useScrollAnimation(); 
  return (
    <header className="header animate delay-1"  id="Header">
      <a href="#" className="logo animate delay-1">
        MUHAMMAD <span>SamiUllah</span>
      </a>
      <div className="menu animate delay-7">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <nav className="navbar">
        <a href="#Home"  className="animate delay-2">Home</a>
        <a href="#Education" className="animate delay-3">Education</a>
        <a href="#Services" className="animate delay-4">Services</a>
        <a href="#Testimonials" className="animate delay-5">Testimonials</a>
        <a href="#Contact" className="animate delay-6">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
