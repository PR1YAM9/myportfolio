import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Name from './components/Name/Name'
import Resume from './components/Resume/Resume'
import TechStack from './components/TechStack/TechStack'
import Achivements from './components/Achivements/Achivements'
import BongoCat from './components/BongoCat/BongoCat'

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
          <Achivements />
          <BongoCat />
        </div>
      </div>
    </>
  )
}

export default App