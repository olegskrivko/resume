import React from "react";
import "./portfolio.css";
import todo from "../../assets/todo.png";
import cooking from "../../assets/cooking.jpg";
import animals from "../../assets/animals.jpg";
import shoppingcart from "../../assets/shoppingcart.jpg";

function Items() {
  const portfolioItems = [
    {
      name: "Find Your Pet",
      imgSrc: animals,
      gitUrl: "https://github.com/olegskrivko/pawprint",
      demoUrl: "https://pawclix.cyclic.app",
      isAvailable: true,
    },
    {
      name: "To-Do App",
      imgSrc: todo,
      gitUrl: "https://github.com/olegskrivko/todo",
      demoUrl: "https://react-to-do-local-storage.netlify.app/",
      isAvailable: true,
    },
    {
      name: "Cooking Recipes",
      imgSrc: cooking,
      gitUrl: "https://github.com/olegskrivko/cookingapp",
      demoUrl: "https://cooking.cyclic.app",
      isAvailable: false,
    },

    {
      name: "Shopping Cart",
      imgSrc: shoppingcart,
      gitUrl: "https://github.com/olegskrivko/react-shop",
      demoUrl: "https://react-shop-cart-prj.netlify.app/",
      isAvailable: true,
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

            {item.isAvailable && (
              <a
                href={`${item.demoUrl}`}
                className="portfolio-demo-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="code-effect">&lt;</span> DEMO
                <span className="code-effect"> /&gt;</span>
              </a>
            )}
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
