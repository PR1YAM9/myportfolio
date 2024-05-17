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
import CurrentlyListening from './components/CurrentlyListening/CurrentlyListening'



const App = () => {
  return (
    <>
      <Header />
      <div className="Cover">
        <div className="middle">
          <AboutMe />
          <Name />
        </div>
        <div className="middle">
          <Resume />
          <TechStack />
        </div>
        <div className="middle">
          <Experience/>
          {/* <CurrentlyListening/> */}
        </div>
        <div className="middle">
          <Projects/>
        </div>
        <div className="middle">
          <Achivements />
          <BongocatGif />
        </div>
      </div>
    </>
  )
}

export default App