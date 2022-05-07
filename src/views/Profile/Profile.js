import { computeHeadingLevel } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Hero } from '../../components/Hero/Hero'
import { getNftLiked } from '../../services/NftService'
import { getCurrentUser } from '../../services/UserService'
import heroImg from './../../assets/img/anima-hero-account.png'
import './profile.scss'

export const Profile = () => {

  const [loading, setloading] = useState(true)
  const [savedNft, setSavedNft] = useState([])

  useEffect(() => {
    getCurrentUser()
    .then((user) => {
      console.log('USER WITH LIKES', user.id)
      getNftLiked(user.id)
        .then( nftSaved => {
          console.log('getLiked NFT',nftSaved)
          setloading(false)
          setSavedNft(nftSaved)
        })
    })
  }, [])

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
            <h4 className='mb-3'>Wellcome to your inventory</h4>
            <p className='small'>You could see your saved NFT in this page</p>
            <p className='small'>Go to the galery and Check All Anima NFT</p>
            <Link className='btn-anima' to="/galery">Galery</Link>
          </div>
        </div>

        <div className='separator'></div>

        <div className='Profile-inventory-saved anima-section'>

          <h4 className='mb-4'>All your saved NFTs</h4>

          {
            loading 
            ? (
              <>
                <p className='small'>You dont have nft saved...</p>
              </>
            ) : (
              <div className='NFT-saved-Block'>

              { 
                savedNft.map( (nftSaved, ind) => {
                  const {image} = nftSaved

                  console.log('NFT Saved', nftSaved)
                    return (
                      <div className={ind}>
                        <div  
                          className='nft' 
                          style={{backgroundImage: `url(${image})`}}
                        >
                        </div>
                      </div>
                    )
       
                })
              }
              <div className='nft'></div>
              </div>
            )
          }

        </div>

        <div className='separator'></div>

      </div>
    </div>
  )
}
