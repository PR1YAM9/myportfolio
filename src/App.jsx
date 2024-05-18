import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Name from './components/Name/Name'
import Resume from './components/Resume/Resume'
import TechStack from './components/TechStack/TechStack'
import Achivements from './components/Achivements/Achivements'
import BongocatGif from './components/BongoCatGif/BongocatGif'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import NavbarComponent from './components/Navbar/NavbarComponent'

const App = () => {
  return (
    <>
      <NavbarComponent/>
      <Header />
      <div className="Cover">
        <div className="middle" id="about-me">
          <AboutMe />
          <Name />
        </div>
        <div className="middle" id="resume">
          <Resume />
          <TechStack />
        </div>
        <div className="middle" id="experience">
          <Experience />
        </div>
        <div className="middle" id="projects">
          <Projects />
        </div>
        <div className="middle" id="achievements">
          <Achivements />
          <BongocatGif />
        </div>
      </div>
    </>
  )
}

export default App
