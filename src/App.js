import React from "react";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
