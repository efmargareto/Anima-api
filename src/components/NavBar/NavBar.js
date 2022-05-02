import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/img/Anima-white.png'
import galeryIcon from './../../assets/img/icon-galery.svg'
import './NavBar.scss'

export const NavBar = () => {
  return (
    <div className='NavBar'>
        <img id='logo' src={logo} alt='logo'></img>
        <div className='NavBar-block'>
          <p className='NavBar-block_title'>Overview</p>
          <div className='NavBar-block_element'>
            <img className='NavBar-block_linkIcon' src={galeryIcon} alt='logo'></img>
            <NavLink className='NavBar-block_link' to='/galery'>Galery</NavLink>
          </div>
        </div>
        <div className='NavBar-block'>
          <p className='NavBar-block_title'>Others</p>
          <div className='NavBar-block_element'>
            <img className='NavBar-block_linkIcon' src={galeryIcon} alt='logo'></img>
            <NavLink className='NavBar-block_link' to='/login'>Login</NavLink>
          </div>
          <div className='NavBar-block_element'>
            <img className='NavBar-block_linkIcon' src={galeryIcon} alt='logo'></img>
            <NavLink className='NavBar-block_link' to='/register'>Sing Up</NavLink>
          </div>
        </div>
    </div>
  )
}
