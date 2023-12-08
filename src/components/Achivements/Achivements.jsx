import React from "react";
import "./Achivements.css";

const data = [
  "Secured first position🏆in frontend web development competition",
  "Actively contributed and helped others in GGSOC 23",
  "CCNA: Introduction to Networks from Cisco",
  "API fundamentals from Postman",
  "DSA in JAVA from Coding Blocks",
];

const Achivements = () => {
  return (
    <>
      <div className="ACbox">
        <div className="ACheading">Achivements & <br />
        Certificates</div>
        <div className="ABox">
          <ul>
            {data.map((item, index) => (
              <div className="Awords" key={index}>{item}</div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Achivements;
