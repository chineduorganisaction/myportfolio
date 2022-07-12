import React, {memo} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='body'>
      <Navbar />
      <Intro />
      <Portfolio />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default memo(App);