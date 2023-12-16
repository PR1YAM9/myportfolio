import React from "react";
import "./Projects.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Projects = () => {
  return (
    <>
      <div className="PBox">
        <Accordion preExpanded={["a", "c"]}>
          <AccordionItem uuid="a">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h2>Project 1</h2>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium egestas sapien et mollis. Nullam tincidunt, sapien non
                pharetra aliquam, lectus quam ornare urna, eget accumsan ex
                velit eget metus. Aliquam erat volutpat. Nulla facilisi. Donec
                euismod, velit vel euismod rutrum, quam odio aliquet lacus, eu
                fermentum risus augue non neque. Nulla facilisi. Nulla facilisi.
                Donec euismod, velit vel euismod rutrum, quam odio aliquet
                lacus, eu fermentum risus augue non neque. Nulla facilisi.
              </p>
            </AccordionItemPanel>`
          </AccordionItem> // Will be expanded by default
          <AccordionItem uuid="b" />
          <AccordionItem uuid="c" /> // Will be expanded by default
          <AccordionItem uuid="d" />
        </Accordion>
      </div>
    </>
  );
};

export default Projects;
