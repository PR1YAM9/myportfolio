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
                <div className="right">I am a web developer. You can find me coding, watching anime, or at the nearest badminton court. blah </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe