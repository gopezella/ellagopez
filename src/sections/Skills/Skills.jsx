import React, { useState } from "react";
import "../Skills/Skills.css";

import javascriptLogo from "../../assets/js.svg";
import figmaLogo from "../../assets/figma.svg";
import antDesign from "../../assets/antDesign.svg";
import bootstrapLogo from "../../assets/bootstrap.svg";
import githubLogo from "../../assets/github.svg";
import reactLogo from "../../assets/react.svg";
import vueLogo from "../../assets/vue.svg";
import nextLogo from "../../assets/nextjs.svg";

export default function Skills(props) {
  const [isHovered, setIsHovered] = useState("");

  const onMouseEnterHandler = (e) => {
    let classValue = e.target.className;
    setIsHovered(classValue);
  };

  const onMouseLeaveHandler = () => {
    setIsHovered("");
  };

  console.log(isHovered);

  return (
    <>
      <section id="skills">
        <div className="container">
          <div className="skillsContent">
            <h1 className="skillsHeader">SKILLS</h1>
            <p>Tech Stacks to build</p>
            <p>a fast and beautiful Website.</p>
            <div className="techStacksContainer">
              <div className="techStacks">
                <ul>
                  <li
                    className="figma"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    Figma
                  </li>
                  <li
                    className="antDesign"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    Ant Design
                  </li>
                  <li
                    className="bootstrap"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    Bootstrap
                  </li>
                  <li
                    className="github"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    Github
                  </li>
                </ul>
                <ul>
                  <li
                    className="javascript"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    Javascript
                  </li>
                  <li
                    className="react"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    ReactJS
                  </li>
                  <li
                    className="vue"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    VueJS
                  </li>
                  <li
                    className="next"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    NextJS
                  </li>
                </ul>
              </div>
              <div className="techStacksLogo">
                <img
                  src={figmaLogo}
                  alt="Figma Logo"
                  className={
                    "figmaLogo " + (isHovered === "figma" ? "logoHovered" : "")
                  }
                />
                <img
                  src={antDesign}
                  alt="Ant Design Logo"
                  className={
                    "antDesignLogo " +
                    (isHovered === "antDesign" ? "logoHovered" : "")
                  }
                />
                <img
                  src={bootstrapLogo}
                  alt="Bootstrap Logo"
                  className={
                    "bootstrapLogo " +
                    (isHovered === "bootstrap" ? "logoHovered" : "")
                  }
                />
                <img
                  src={githubLogo}
                  alt="Github Logo"
                  className={
                    "githubLogo " +
                    (isHovered === "github" ? "logoHovered" : "")
                  }
                />
                <img
                  src={javascriptLogo}
                  alt="Javascript Logo"
                  className={
                    "javascriptLogo " +
                    (isHovered === "javascript" ? "logoHovered" : "")
                  }
                />
                <img
                  src={reactLogo}
                  alt="React Logo"
                  className={
                    "reactLogo " + (isHovered === "react" ? "logoHovered" : "")
                  }
                />
                <img
                  src={vueLogo}
                  alt="Vue Logo"
                  className={
                    "vuefigmaLogo " + (isHovered === "vue" ? "logoHovered" : "")
                  }
                />
                <img
                  src={nextLogo}
                  alt="NextJS Logo"
                  className={
                    "nextLogo " + (isHovered === "next" ? "logoHovered" : "")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
