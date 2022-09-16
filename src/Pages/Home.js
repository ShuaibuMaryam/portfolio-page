import React from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Services from '../Components/Services'
import Skills from '../Components/Skills'

function Home() {
  return (
    <div>
        <Hero />

        <About />

        <Heading title = 'My Skills' description = 'Here are a few skills I posess'/>

        <Skills />
        
        <Services />

        <Projects />

        <Footer />
    </div>
  )
}

export default Home