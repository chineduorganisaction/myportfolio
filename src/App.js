import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <div className='body'>
      <Navbar />
      <Intro />
      <Portfolio />
      <Project />
      <Experience />
      <Footer />
    </div>
  )
}

export default App