import React from "react";
import "./Projects.css";

import chachiCover from "../../images/chachiCover.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const data = [
  {
    heading: "Chachi",
    description: "Developed the website using NextJS keeping SEO in mind. Made an admin's page, protected routes, and added authorization to protect user's data. Utilized MongoDB to store user information, booking information",
    techStack: "NextJs, ExpressJS, MongoDB, NodeJS",
    links: "www.chachi.com",
    img: chachiCover
  },
  {
    heading: "Imagine-AI",
    description: "A responsive web app that generates images based on user prompts using Leap-AI API. Designed and developed a responsive user interface using React.js keeping user web flow in mind. Configured Leap-AI API to produce relevant images based on the user prompts. Used Express.JS and MongoDB to store user data for login and signup functionality.",
    techStack: "NextJs, ExpressJS, MongoDB, NodeJS",
    links: "www.imagine-ai.com",
    img: chachiCover
  },
  {
    heading: "Jagriti Malhotra's Portfolio",
    description: "Developed a responsive portfolio website for a Canadian marketing consultant. Focused on web flow and user experience.Handled deployment and solved bugs throughout the development.",
    techStack: "NextJs, ExpressJS, MongoDB, NodeJS",
    links: "www.jagriti-portfolio.com",
    img: chachiCover
  },
];

const Projects = () => {
  return (
    <>
      {/* <div className="PBox"> */}
        <Accordion className="ACover" preExpanded={["a"]}>
          {data.map((project, index) => (
            <AccordionItem className="Accs" key={index} uuid={String.fromCharCode(97 + index)}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h2 className="Pheading">{project.heading}</h2>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="PInternalCover">
                  <div className="PImg">
                    <img className="PimgInner" src={project.img} alt={project.heading} />
                  </div>
                  <div className="Pdesc">
                    <div className="PdescHeader">Description</div>
                    <div className="PdescInner">{project.description}</div>
                  </div>
                  <div className="PTStack">
                    <div className="PTfirst">
                      <div className="PdescHeader">Tech Stack</div>
                      <div className="PdescInner">{project.techStack}</div>
                    </div>
                    <div className="PTsecond">
                      <div className="PdescHeader">Links</div>
                      <div className="PdescInner">
                        <a href={project.links}> View ↗️</a>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      {/* </div> */}
    </>
  );
};

export default Projects;
