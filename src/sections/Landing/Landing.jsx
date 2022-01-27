import React from "react";
import "../Landing/Landing.css";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import landingVector from "../../assets/landing-vector.svg";

import {
  MailOutlined,
  GithubOutlined,
  LinkedinFilled,
  FacebookFilled,
  CaretDownOutlined,
} from "@ant-design/icons";

export default function Landing(props) {
  const state = useSelector((state) => state);
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="introductionContent">
            <p>Hello, I'm Ella</p>
            <p>Frontend Developer</p>
            <p>
              I build <span>beautiful things</span> for the Web.
            </p>
            <Link
              id="landingButton"
              className={
                "contactButton " + (state.toggleDarkTheme ? "dark" : "light")
              }
              to="contact"
              spy={true}
              smooth={true}
            >
              CONTACT ME
            </Link>

            <ul className="socialLinks">
              <li>
                <a href="mailto:gopezellam@gmail.com">
                  <MailOutlined />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gopezella"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <GithubOutlined />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ellagopez/"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <LinkedinFilled />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/gopezella/"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <FacebookFilled />
                </a>
              </li>
            </ul>
            <Link to="about" spy={true} smooth={true}>
              <CaretDownOutlined className="arrowDown" />
            </Link>
          </div>

          <div className="vectorImage">
            {/* <LandingVector /> */}
            <img src={landingVector} alt="Landing Vector" />
          </div>
        </div>
      </section>
    </>
  );
}
