import React from "react";
import "./Techstack.css";

import react from "../../images/react.svg";
// import js from '../../images/js.svg'
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import node from "../../images/node.svg";
import mongo from "../../images/mongo.svg";
import express from "../../images/express.svg";

import java from "../../images/java.svg";
import js from "../../images/js.svg";
import c from "../../images/C.svg";
import cpp from "../../images/C++.svg";

import postman from "../../images/postman.svg";
import git from "../../images/git.svg";
import github from "../../images/github.svg";
import materialUI from "../../images/materialui.svg";
import bootstrap from "../../images/Bootstrap.svg";

const webData = {
  react: {
    imgSrc: react,
    skillName: "React",
  },
  node: {
    imgSrc: node,
    skillName: "Node.js",
  },
  express: {
    imgSrc: express,
    skillName: "Express.js",
  },
  mongo: {
    imgSrc: mongo,
    skillName: "MongoDB",
  },
  html: {
    imgSrc: html,
    skillName: "HTML",
  },
  css: {
    imgSrc: css,
    skillName: "CSS",
  },
};

const langData = {
  java: {
    imgSrc: java,
    skillName: "Java",
  },
  js: {
    imgSrc: js,
    skillName: "JavaScript",
  },
  c: {
    imgSrc: c,
    skillName: "C",
  },
  cpp: {
    imgSrc: cpp,
    skillName: "C++",
  },
};

const otherData = {
    postman: {
        imgSrc: postman,
        skillName: "Postman",
    },
    git: {
        imgSrc: git,
        skillName: "Git",
    },
    github: {
        imgSrc: github,
        skillName: "Github",
    },
    materialUI: {
        imgSrc: materialUI,
        skillName: "Material UI",
    },
    bootstrap: {
        imgSrc: bootstrap,
        skillName: "Bootstrap",
    },
    };

const TechStack = () => {
  return (
    <div className="TCBox">
      <h1 className="TCHeader">Tech Stack</h1>
      <div className="stackBox">
        <div className="SBcover">
          <h2 className="SBHeading">Web Development</h2>
          <div className="SBcontainer">
            {Object.keys(webData).map((key) => {
              return (
                <div className="SBcard">
                  <img src={webData[key].imgSrc} alt="" className="SBimg" />
                  <h3 className="SBname">{webData[key].skillName}</h3>
                </div>
              );
            })}
          </div>
          </div>
          <div className="SBcover">
            <h2 className="SBHeading">Programming Languages</h2>
            <div className="SBcontainer">
              {Object.keys(langData).map((key) => {
                return (
                  <div className="SBcard">
                    <img src={langData[key].imgSrc} alt="" className="SBimg" />
                    <h3 className="SBname">{langData[key].skillName}</h3>
                  </div>
                );
              })}
            </div>
          </div>

              <div className="SBcover">
                <h2 className="SBHeading">Spftware & Frameworks</h2>
                <div className="SBcontainer">
                  {Object.keys(otherData).map((key) => {
                    return (
                      <div className="SBcard">
                        <img src={otherData[key].imgSrc} alt="" className="SBimg" />
                        <h3 className="SBname">{otherData[key].skillName}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>

        </div>
      </div>
  );
};

export default TechStack;
