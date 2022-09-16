import React from 'react'
import footerLinkedin from '../Assets/footer-linkedin.png'
import footerTwitter from '../Assets/footer-twitter.png'
import footerMailbox from '../Assets/footer-mailbox.png'

function Footer() {
  return (
    <div className='footer'>
        <h2>Seyi Onifade.</h2>
        <div className='footer-socials'>
            <img src= {footerLinkedin}/>
            <img src= {footerTwitter}/>
            <img src= {footerMailbox}/>
        </div>
        <p>Copyright 2021 | All rights Reserved</p>
    </div>
  )
}

export default Footer