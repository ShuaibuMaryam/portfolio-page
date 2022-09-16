import React from 'react'
import Linkedin from '../Assets/Linkedin.png'
import Twitter from '../Assets/Twitter.png'

function Socials() {
  return (
    <div className='socials'>
        <a><img src={Linkedin}/></a>
        <a><img src={Twitter}/></a>
    </div>
  )
}

export default Socials