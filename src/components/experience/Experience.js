import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Exerience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>JAVASCRIPT</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>REACT JS</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>REDUX</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MATERIAL UI</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>EXPRESS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MONGODB</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MYSQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>FIREBASE</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>LINUX</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Java Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>JAVA</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>OOPS</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>FullStack Framework</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Next JS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
