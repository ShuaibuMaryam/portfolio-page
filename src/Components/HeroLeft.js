import React from 'react'
import Socials from './Socials'

function HeroLeft() {
  return (
    <div className='hero-left'>
        <nav>
            <h2 className='brand-name'>Seyi Onifade</h2>
            <ul className='nav-items'>
                <li><a href='#'>About me</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact Me</a></li>
            </ul>
        </nav>
        <div className='intro'>
            <span>HI THERE</span>
            <p>I am Seyi Onifade</p>
            <h1>A Top-Notch Developer, Writer and Mentor.</h1>
        </div>
        
        <Socials />
    </div>
  )
}

export default HeroLeft