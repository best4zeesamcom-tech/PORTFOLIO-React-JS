import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        MUHAMMAD <span>SamiUllah</span>
      </a>
      <div className="menu">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <nav className="navbar">
        <a href="#Home">Home</a>
        <a href="#Education">Education</a>
        <a href="#Services">Services</a>
        <a href="#Testimonials">Testimonials</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
