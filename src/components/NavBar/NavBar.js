import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import { logout } from '../../store/AccessTokenStore'
import logo from './../../assets/img/Anima-white.png'
import galeryIcon from './../../assets/img/icon-galery.svg'
import homeIcon from './../../assets/img/home-icon.png'
import homeIconDark from './../../assets/img/home-icon-dark.png'
import loginIon from './../../assets/img/login-icon.png'
import loginIonDark from './../../assets/img/home-icon-dark.png'
import singUpIon from './../../assets/img/singup.png'
import singUpIonDark from './../../assets/img/singup-icon-dark.png'
import profileIcon from './../../assets/img/profile.png'
import profileIconDrak from './../../assets/img/singup-icon-dark.png'
import './NavBar.scss'

export const NavBar = () => {
  const { user } = useAuthContext();

  const handleLink = (event) => {
    console.log(event.target)
    document.querySelectorAll('.NavBar-block_link').forEach(elem=> {
      elem.parentElement.classList.remove('active')
    })
    event.target.parentElement.classList.add('active')
  }

  return (
    <div className='NavBar'>
    {console.log('renderizado....')}
        <img id='logo' src={logo} alt='logo'></img>
        <div className='NavBar-block'>
          <p className='NavBar-block_title' onClick={handleLink}>Overview</p>
          <div className='NavBar-block_element active'>
            <img className='NavBar-block_linkIcon' src={homeIcon} alt='logo'></img>
            <NavLink className='NavBar-block_link' to='/' onClick={(event) => handleLink(event)}>Home</NavLink>
          </div>
          <div className='NavBar-block_element'>
            <img className='NavBar-block_linkIcon' src={galeryIcon} alt='logo'></img>
            <NavLink className='NavBar-block_link' to='/galery' onClick={(event) => handleLink(event)}>Galery</NavLink>
         </div> 
        </div>
        <div className='NavBar-block'>
          <p className='NavBar-block_title'>Others</p>
          <div className='NavBar-block_element'>
            <img className='NavBar-block_linkIcon' src={loginIon} alt='logo'></img>
            <NavLink className='NavBar-block_link' to='/login' onClick={(event) => handleLink(event)}>Login</NavLink>
          </div>
          <div className='NavBar-block_element'>
            <img className='NavBar-block_linkIcon' src={singUpIon} alt='logo'></img>
            <NavLink className='NavBar-block_link' to='/register' onClick={(event) => handleLink(event)}>Sign Up</NavLink>
          </div>
        </div>
        {!user ? (
          <>
          </>
        ) : (
          <>
            <div className='NavBar-block'>
              <p className='NavBar-block_title'>Profile</p>
              <div className='NavBar-block_element'>
                <img className='NavBar-block_linkIcon' src={profileIcon} alt='logo'></img>
                <NavLink className='NavBar-block_link' to='/profile' onClick={(event) => handleLink(event)}>Account</NavLink>
              </div>
            </div>
            <button className='link-anima' onClick={logout}>Logout</button>
          </>
        )}
    </div>
  )
}
