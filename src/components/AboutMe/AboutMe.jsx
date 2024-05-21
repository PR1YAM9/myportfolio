import React from 'react'
import './AboutMe.css'
import img3 from '../../images/image 3 (1).svg';

const AboutMe = () => {
  return (
    <>
        <div className="AboutMeBox">
            <h3>About Me</h3>
            <div className="lower">
                <div className="left"><img src={img3} alt="" /></div>
                <div className="right">I am a tech enthusiast with a knack of building ideas, currently exploring development and machine learning, You can find me coding, watching youtube, or at the nearest badminton court. </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe