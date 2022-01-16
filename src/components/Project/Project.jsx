import React from "react";
import "../Project/Project.css";

import { Tag } from "antd";

export default function Project(props) {
  const { title, description, tools, url, image } = props;

  const tool = tools.map((tool, index) => (
    <Tag key={index} color="green">
      {tool}
    </Tag>
  ));

  return (
    <>
      <div>
        <div className="projectContent">
          <div className="projectImage">
            <img src={image} alt="" />
          </div>

          {/* <Image className="projectImage" src={image} preview={false} /> */}
          <div className="projectInformation">
            <h1 className="title">
              {title}
              <Tag className="year" color="#a2b29f">
                2021
              </Tag>
            </h1>

            <p className="description">{description}</p>
            <div className="tools">{tool}</div>

            <a href={url} className="visitButton">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
