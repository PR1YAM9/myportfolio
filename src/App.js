import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Name from './components/Name/Name'
import Resume from './components/Resume/Resume'

const App = () => {
  return (
    <>
      <Header />
      <div className="middle">
        <AboutMe />
        <Name />
      </div>
      <div className="middle">
        <Resume />
      </div>
    </>
  )
}

export default App