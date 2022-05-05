import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Hero } from '../../components/Hero/Hero'
import heroImg from './../../assets/img/anima-hero-account.png'
import './profile.scss'

export const Profile = () => {

  const [loading, setloading] = useState(true)

  

  return (
    <div className='Profile'>
      <div className='anima-container'>

        <Hero 
          isSmall={true}
          image={heroImg} 
          title='Account' 
          subtitle='Check you favorites NFT, and edit you profile'
        />

        <div className='separator'></div>

        <div className='Profile-inventory anima-section'>
          <div className='Profile-inventory-info'>
            <img scr={heroImg} alt=''></img>
            <p className='name'>Eduardo</p>
            <p className='small'>efmargareto@hotmail.com</p>
          </div>
          <div className='Profile-inventory-block'>
            <h5>Wellcome to your inventory</h5>
            <p className='small'>You could see your saved NFT in this page</p>
            <p className='small'>Go to the galery and Check All Anima NFT</p>
            <Link className='btn-anima' to="/galery">Galery</Link>
          </div>
        </div>

        <div className='separator'></div>

        <div className='Profile-inventory-saved anima-section'>

          <h5>All your saved NFTs</h5>

          {
            loading 
            ? (
              <>
                <p className='small'>You dont have nft saved...</p>
              </>
            ) : (
              <div className='NFT-saved-Block'>

              </div>
            )
          }

        </div>

        <div className='separator'></div>

      </div>
    </div>
  )
}
