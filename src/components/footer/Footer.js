import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import './Footer.css'          
     
const Footer = () => {
  return (
    <section id="footer">
      <a href="#" className='footer__logo'>SAYAN</a>

      <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com" target="_blank"><FaFacebook/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com" target="_blank"><AiFillTwitterCircle/></a>
      </div>

      <div className='footer__copyright'>
      <small>&copy; [Sayan's Portfolio Websites. All rights reserved]</small>
      </div>
      
    </section>
  )
}

export default Footer
