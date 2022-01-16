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
                <MailOutlined />
              </li>
              <li>
                <GithubOutlined />
              </li>
              <li>
                <LinkedinFilled />
              </li>
              <li>
                <FacebookFilled />
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
