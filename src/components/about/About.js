import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { BsFolderPlus } from "react-icons/bs";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Personal Projects</h5>
              <small>12+</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Deployed project</h5>
              <small>5</small>
            </article>
          </div>
          <p>
            {" "}
            As a skilled Full Stack MERN (MongoDB, Express.js, React.js,
            Node.js) Developer, I bring a comprehensive understanding of both
            front-end and back-end technologies to create seamless and efficient
            web applications. With a passion for clean and scalable code, I
            thrive in collaborative environments, leveraging my expertise in
            JavaScript, React, and Node.js to deliver innovative solutions. My
            commitment to staying updated on the latest industry trends allows
            me to develop cutting-edge applications that meet the needs of
            clients and end-users alike. Let's build the future of the web
            together.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
