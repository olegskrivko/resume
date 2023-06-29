import React from "react";
import "./intro.css";

import Typewriter from "typewriter-effect";
import CV from "../../assets/Olegs_Krivko_CV.pdf";

const Intro = () => {
  return (
    <div className="container">
      <section id="intro" className="intro">
        <div className="intro-wrapper">
          <h3 className="intro-title">Hi, I am Oļegs Krivko</h3>
          <div className="type-writer-wrapper">
            <div className="type-writer-auto-text">
              <Typewriter
                options={{
                  strings: ["Developer", "Creator", "Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <a href={CV} download className="download-btn">
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default Intro;
