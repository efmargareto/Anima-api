import React from 'react'
import logo from './../../assets/img/Anima-white.png'
import socialMedia from './../../assets/img/socialmedia.png'
import './Footer.scss'

export const Footer = () => {
  return (
    <>
      <div className='Footer'>
        <div className='separator'></div>
        <div className='Footer-block'>
          <img id='logo' src={logo} alt='logo'></img>
          <img  className='social-icons' src={socialMedia}></img>
        </div>
      </div>

    </>
  )
}
