import React from 'react'
import Image from '../Assets/HeroImage.png'
import Socials from './Socials'

function HeroRight() {
  return (
    <div className='hero-right'>
        <div className='hero-right-socials'>
            <Socials />
        </div>
        <div className='hero-right-image'>
            <img src={Image} alt=''/>
        </div>
    </div>
  )
}

export default HeroRight