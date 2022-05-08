import { computeHeadingLevel } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { getNftLiked } from '../../services/NftService'
import { deleteUser, editUser, getCurrentUser } from '../../services/UserService'
import { logout } from '../../store/AccessTokenStore'
import heroImg from './../../assets/img/anima-hero-account.png'
import basura from './../../assets/img/basura.png'
import nft1 from './../../assets/nft/anima-2.jpeg'
import './profile.scss'

export const Profile = () => {
  const [loading, setloading] = useState(true)
  const [savedNft, setSavedNft] = useState([])
  const [userAccount, setUser] = useState(null)
  const [datos, setDatos] = useState({ name: '', email: ''})

  useEffect(() => {
    getCurrentUser()
    .then((user) => {
      setUser(user)
      getNftLiked(user.id)
        .then( nftSaved => {
          if (nftSaved.length > 1) setloading(false)
          setSavedNft(nftSaved)
      })
    })
  }, [])

  const handleEditUser = () => {
    let params = [
      `nombre=${datos.name}`,
      `email=${datos.email}`
    ]
    const urlParams = `?${params.join().replace(',','&')}`
    editUser(userAccount._id, urlParams)
      .then((response) => {
        setUser({
          ...userAccount,
          name: response.name,
          email: response.email
        })
      })
      .catch()
  }

  const handleInputChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }

  const handleDelete = () => {
    deleteUser(userAccount._id,)
    .then( (reponse) => {
      logout()
      Navigate('/')
      setUser({})
    })
  }

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
            <img src={nft1} alt=''></img>
            <p className='name'>{userAccount && userAccount.name}</p>
            <p className='small'>{userAccount && userAccount.email}</p>
            <img className='basura' src={basura} alt='' onClick={() => {handleDelete()}}></img>
          </div>
          <div className='Profile-inventory-block'>
            <h5 className='mb-3'>Welcome to your inventory</h5>
            <p className='small'>You could see your saved NFT in this page</p>
            <p className='small'>Go to the galery and Check All Anima NFT</p>
            <Link className='btn-anima' to="/galery">Galery</Link>
          </div>
          <div className='Profile-inventory-block'>
            <h5 className='mb-3'>Edit Profile</h5>
            <form onSubmit={(event) => handleEditUser(event)}>
              <div className='mb-2'>
                <label>Edit Name:</label>
                <input 
                  type='text' 
                  name='name'
                  onChange={handleInputChange}
                ></input>
              </div>
              <div>
                <label>Edit Email: </label>
                <input 
                  type='text' 
                  name='email'
                  onChange={handleInputChange} 
                ></input>
              </div>
              <button className='btn-anima'>Save</button>
            </form>
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
                  const {image} = nftSaved.producto
                    return (
                      <div className={ind} key={ind}>
                        <div  
                          className='nft' 
                          style={{backgroundImage: `url(${image})`}}
                        >
                        </div>
                      </div>
                    )
                })
              }
              </div>
            )
          }
        </div>
        <Footer/>
      </div>
    </div>
  )
}
