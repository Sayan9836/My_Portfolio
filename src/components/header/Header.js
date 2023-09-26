import React from 'react'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import './Header.css'
const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello I am</h5>
      <h1>Sayan Maity</h1>
      <h5 className='text_light'>Aspiring Front-End Web Developer</h5>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
      <img src={me} alt="my-pic" />
      </div>
      <a href="/" className="scroll__down">scroll__down</a>
    </div>
    </header>
  )
}

export default Header