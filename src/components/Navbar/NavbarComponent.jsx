import React, { useState } from 'react'
import './Navbar.css'
import hamburger from '../../images/hambruger.svg'

const NavbarComponent = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo mobile-only">
          <div className='textpm textlogo'>
            PM
          </div>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a className='tagText' href="#about-me" onClick={() => setShowMediaIcons(false)}>About Me</a>
            </li>
            <li>
              <a className='tagText' href="#experience" onClick={() => setShowMediaIcons(false)}>Experience</a>
            </li>
            <li>
              <a className='textpm pc-only' href="#" onClick={() => setShowMediaIcons(false)}>PM</a>
            </li>
            <li>
              <a className='tagText' href="#projects" onClick={() => setShowMediaIcons(false)}>Projects</a>
            </li>
            <li>
              <a className='tagText' href="#achievements" onClick={() => setShowMediaIcons(false)}>Contact Me</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <img src={hamburger} alt="hamburger" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent
