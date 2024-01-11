import React from "react";
import data from "../../data";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data?.map((ele) => {
          return (
            <article key={ele.id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={ele.image} alt={ele.title} />
              </div>
              <h3>{ele.title}</h3>
              <div className="portfolio__item__cta">
                <a
                  className="btn"
                  href={ele.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn"
                  href={ele.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
