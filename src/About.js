import React from 'react'
import About1 from './components/About1'
import './components/about.css'
import About2 from './components/About2'
import About3 from './components/About3'
import Footer from './components/Footer'
import FaqPage from './components/FaqPage'
const About = () => {
  return (
    <div>
      <About1/>
      <About2/>
      <About3/>
    <FaqPage></FaqPage>
      <Footer/>
    </div>
  )
}

export default About
