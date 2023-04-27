import React from "react";
import "./header.css";
// import { useState } from "react";
// import { VscColorMode } from "react-icons/vsc";

const Nav = () => {
  // const [color, setColor] = useState("#121212");

  // document.body.style.backgroundColor = color;

  // let changeColor = () => {
  //   if (color === "#121212") {
  //     document.body.style.backgroundColor = "#4f4338";
  //     setColor("#4f4338");
  //   } else if (color === "#4f4338") {
  //     document.body.style.backgroundColor = "#121212";
  //     setColor("#121212");
  //   }
  // };
  return (
    <nav className="nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
      {/* <VscColorMode
        style={{ color: "ffffff", cursor: "pointer", marginLeft: "1rem" }}
        onClick={changeColor}
      /> */}
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
