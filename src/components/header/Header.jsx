import React from "react";
import "./header.css";

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header" id="#">
      <div className="container">
        <div className="header-wrapper">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
