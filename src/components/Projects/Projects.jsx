import React from "react";
import "./Projects.css";

import chachiCover from "../../images/chachiCover.png";
import imagineAiCover from "../../images/imagineAiCover.png";
import jagritiCover from "../../images/jagritiCover.png";
import robochartCover from "../../images/robochat.png";
import partypals from "../../images/partypals1.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const data = [
  {
    heading: "Party Pals",
    description: "• Created PartyPals, an event planning platform featuring vendor/guest onboarding, chat and announcements, seating arrangements, scheduling, gift registry, and budget tracking.</br> •  Integrated Gmail SMTP for RSVPs and Socketio for real time chat and annoucements",
    techStack: "ReactJS,MUI, ExpressJS, MongoDB, NodeJS, Socket.io",
    links: "https://party-pals.vercel.app/",
    img: partypals
  },  
  {
    heading: "Consultation & Appointment Booking Website",
    description: "• Developed a website using NextJS with a focus on SEO, resulting in a remarkable 55% increase in appointment bookings. </br> • Added features such as Online Booking, Online Payment, Appointment Reminders & Health Records Access",
    techStack: "NextJs, ExpressJS, MongoDB, NodeJS",
    links: "https://dr-sandy.vercel.app/",
    img: chachiCover
  },
  {
    heading: "RoboChat",
    description: "• React-based chat bot application that allows users to create and manage multiple chat sessions.  </br>• It features a responsive design with a sidebar for managing chats and a chat area for viewing and interacting with messages. </br> • Utilizes OpenAI Api for chat response and stores chat instances in local storage.",
    techStack: "ReactJS, OpenAi API",
    links: "https://chat-app-pr1yam9.vercel.app/",
    img: robochartCover
  },
  {
    heading: "Imagine-AI",
    description: "A responsive web app that generates images based on user prompts using Leap-AI API </br> • Designed and developed a responsive user interface using React.js keeping user web flow in mind.</br> • Configured Leap-AI API to produce relevant images based on the user prompts.</br>",
    techStack: "ReactJs, ExpressJS, MongoDB, NodeJS",
    links: "https://imagineai-teal.vercel.app/",
    img: imagineAiCover
  },
  {
    heading: "Brand Ambassador's Portfolio",
    description: "Developed a responsive portfolio website for a Canadian marketing consultant. Focused on web flow and user experience.Handled deployment and solved bugs throughout the development.",
    techStack: "NextJs, ExpressJS, MongoDB, NodeJS",
    links: "www.jagritimalhotra.com",
    img: jagritiCover
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
              <AccordionItemPanel className="accsp">
                <div className="PInternalCover">
                  <div className="PImg">
                    <a href={project.links} target="_blank" rel="noreferrer"><img className="PimgInner" src={project.img} alt={project.heading} /></a>
                  </div>
                  <div className="Pdesc">
                    <div className="PdescHeader">Description</div>
                    <div className="PdescInner" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                  </div>
                  <div className="PTStack">
                    <div className="PTfirst">
                      <div className="PdescHeader">Tech Stack</div>
                      <div className="PdescInner">{project.techStack}</div>
                    </div>
                    <div className="PTsecond">
                      <div className="PdescHeader">Links</div>
                      <div className="PdescInner">
                        <a className="Pview" target="_blank" rel="noreferrer" href={project.links}> View ↗️</a>
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
