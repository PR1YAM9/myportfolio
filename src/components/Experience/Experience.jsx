import React from 'react';
import './Experience.css';
import B from '../../images/exp-icon1.svg';
import Q from '../../images/Q.svg';

const data = [
    {
      company: 'Quatro',
      time: 'August 2023-December 2023',
      designation: 'Freelance Web Developer',
      desc: "• Accomplished the successful delivery of four full-stack web development projects within a five-month timeframe. <br /> • Played a vital role in a collaborative team effort, consistently meeting deadlines and received commendable feedback from clients.<br />• Utilized the MERN (MongoDB, Express.js, React.js, Node.js) stack and Figma.",
      image : Q
  },
  {
    company: 'Business Next',
    time: 'June 2023-August 2023',
    designation: 'Software Engineering Intern',
    desc: "• Contributed to the development of a meeting scheduling website by actively collaborating with cross-functional teams.<br />• Reduced re-rendering of react components by 25% which decreased the load time significantly.<br />• Worked extensively with RESTful APIs to integrate data from external sources into the web applications.<br />• Tech stack: ReactJS, JavaScript, CSS, Axios, JSX",
    image: B
},
];

const Experience = () => {
  return (
    <div className='expboxbox'>
      <div className="ExpBox">
        <h1 className="ExpHeader">Experience</h1>
        <div className="ExpInner">
          {data.map((item, index) => (
            <div key={index} className="ExpEx">
              <div className="ExpImg"><img src={item.image} alt="" /></div>
              <div className="ExUselessInner">
                <div className="ExpInnerHeading">
                  <div className="HeadingInner">
                    <h1 className='expCompany'>{item.company}</h1><h4 className='expTime'>{item.time}</h4>
                  </div>
                  <h3 className='expDesig'>{item.designation}</h3>
                </div>
                <div className="expDesc" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
