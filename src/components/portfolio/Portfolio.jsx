import React from "react";
import "./portfolio.css";
import dashboard from "../../assets/dashboard.png";
import weatherapp from "../../assets/weatherapp.png";
import calculator from "../../assets/calculator.png";
import todo from "../../assets/todo.png";
import rps from "../../assets/rps.png";

function Items() {
  const portfolioItems = [
    {
      name: "Expense Tracker",
      imgSrc: dashboard,
      gitUrl: "https://github.com/olegskrivko/expenses",
      demoUrl: "https://olegskrivko.github.io/expenses/",
    },
    {
      name: "Weather App",
      imgSrc: weatherapp,
      gitUrl: "https://github.com/olegskrivko/weather",
      demoUrl: "https://olegskrivko.github.io/weather/",
    },
    {
      name: "Calculator",
      imgSrc: calculator,
      gitUrl: "https://github.com/olegskrivko/calculator",
      demoUrl: "https://olegskrivko.github.io/calculator/",
    },
    {
      name: "To-Do",
      imgSrc: todo,
      gitUrl: "https://github.com/olegskrivko/todo",
      demoUrl: "https://inspiring-cat-709f47.netlify.app/",
    },
    {
      name: "Rock Paper Scissors",
      imgSrc: rps,
      gitUrl: "https://github.com/olegskrivko/rps",
      demoUrl: "https://olegskrivko.github.io/rps/",
    },
  ];

  return (
    <>
      {portfolioItems.map((item, index) => (
        <div key={item.name + "-" + index} className="portfolio-item">
          <img src={item.imgSrc} alt={`${item.name}`} />
          <p className="portfolio-item-title">{item.name}</p>
          <div className="portfolio-item-footer">
            <a
              href={`${item.gitUrl}`}
              className="portfolio-git-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="code-effect">&lt;</span> GITHUB
              <span className="code-effect"> /&gt;</span>
            </a>
            <a
              href={`${item.demoUrl}`}
              className="portfolio-demo-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="code-effect">&lt;</span> DEMO
              <span className="code-effect"> /&gt;</span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

const Portfolio = () => {
  return (
    <div className="container">
      <section className="portfolio-wrapper" id="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio">
          <Items />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
