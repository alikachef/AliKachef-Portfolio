import React from 'react'
import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import Projects from './PortfolioContainer/Projects/Projects';
import Skills from './PortfolioContainer/Skills/skills';
import Contactme from './PortfolioContainer/ContactMe/contactme'

function App() {
  return (
    <div className="App">
      <Profile/>
      <Projects/>
      <Skills />
      <Contactme />
    </div>
  );
}

export default App;
