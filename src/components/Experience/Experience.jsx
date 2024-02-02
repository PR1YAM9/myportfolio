import React from 'react'
import './Experience.css'
import B from '../../images/exp-icon1.svg'
const Experience = () => {
  return (
    <>
        <div className="ExpBox">
            <h1 className="ExpHeader">Experince</h1>
            <div className="ExpInner">
                <div className="ExpEx">
                    <div className="ExpImg"><img src={B} alt="" /></div>
                    <div className="ExUselessInner">

                        <div className="ExpInnerHeading">
                            <div className="HeadingInner">
                                <h1 className='expCompany'>Business Next</h1><h4 className='expTime'>June 2023-August-2023</h4>
                            </div>
                            <h3 className='expDesig'>Software Engineering Intern</h3>
                        </div>
                        <div className="expDesc">
                        Contributed to the meeting scheduling website sprint, connecting clients and the team, while extensively integrating external data through RESTful APIs into web applications.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience