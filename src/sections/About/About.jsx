import React from "react";
import "../About/About.css";
import vector2 from "../../assets/vector2.svg";

export default function About(props) {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="aboutContent">
            <h1 className="aboutHeader">ABOUT ME</h1>
            <p>
              I am a Frontend Developer with experience of building fast and
              beautiful websites for products and companies.
            </p>
            <p>
              I mainly build projects with ReactJS but also use VueJS as they
              are both reliable and fast. For SEO websites, NextJS is my go to
              framework as it is both fast and renders pages on the server. All
              these are being built with the guidance of the best practices in
              web development for easier scalability and maintenance.
            </p>
            <p>
              Aside from coding, I also love to travel around the world and
              explore hidden and underrated coffee shops and restaurants.{" "}
            </p>
          </div>
          <div className="aboutVector">
            <img src={vector2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
