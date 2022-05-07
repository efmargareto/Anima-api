import React, { useEffect, useState } from 'react'
import { FilterGalery } from '../../components/FilterGalery/FilterGalery'
import { getAllNfts, getFilterNfts, getSubFilters, likeNft } from '../../services/NftService'
import { getAccessToken } from '../../store/AccessTokenStore'
import { useAuthContext } from '../../contexts/AuthContext'
import { getCurrentUser } from '../../services/UserService'
import { computeHeadingLevel } from '@testing-library/react'
import './Galery.scss'

export const Galery = () => {
  const [filterNfts, setFilterNfts] = useState(null) 
  const [setSubFilters, setSubfilter] = useState({}) 
  const [avaliableSubFilter, setGetSubfilter] = useState({})

  const [backgroundState, setBackgroundState] = useState(false)
  const [clothesState, setClothesState] = useState(false)
  const [jewelsState, setJewelsState] = useState(false)
  const [skinState, setSkinState] = useState(false)
  const [eyesState, setEyesState] = useState(false)
  const [headState, setHeadState] = useState(false)

  useEffect(() => {
    getAllNfts()
      .then((nfts) => {
        setFilterNfts(nfts)
      })
      .catch()
    getSubFilters()
      .then((data) => {
        setGetSubfilter(data)
      })
      .catch()
  }, [])

  const handleFilltersOptions = (event) => {
    const filterSelected = event.target.innerText.toLowerCase();
    switch (filterSelected) {
      case 'background':
        setBackgroundState( () => !backgroundState ? true : false )
        break;
      case 'clothes':
        setClothesState( () => !clothesState ? true : false )
        break;
      case 'jewels':
        setJewelsState( () => !jewelsState ? true : false )
        break;
      case 'skin':
        setSkinState( () => !skinState ? true : false )
      break;
      case 'eyes':
        setEyesState( () => !eyesState ? true : false )
      break;
      case 'head':
        setHeadState( () => !headState ? true : false )
      break;
      default:
        break;
    }
  }

  const handleSubFilter = (namefilter, subfilter, event) => {
  
    const addSubfilter = {
      ...setSubFilters,
      [namefilter]: subfilter
    }
    
    const activeSubfilterClass = document.querySelectorAll(`.${namefilter}-subfilter`) 
    activeSubfilterClass.forEach(element => {
      event.target.innerText === element.innerText 
      ? element.classList.add('active')
      : element.classList.remove('active')
    });

    setSubfilter(addSubfilter)
    let params = []
    for (const key in addSubfilter) {
      params.push(`${key}=${addSubfilter[key]}`)
    }
    const urlParams = `?${params.join().replace(',','&')}`
    getFilterNfts(urlParams)
      .then((response) => {
        setFilterNfts(response)
      })
      .catch()
  }

  const handleReset = () => {
    getAllNfts()
    .then((nfts) => {
      getSubFilters()
      .then((data) => {
        setFilterNfts(nfts)
        setGetSubfilter({})
        setBackgroundState(false)
        setClothesState(false)
        setJewelsState(false)
        setSkinState(false)
        setEyesState(false)
        setHeadState(false)
        setGetSubfilter(data)
      })
      .catch()
    })
    .catch()
  } 

  const handleLikes = (event, productId) => {
    console.log('handle like')
    console.log('event target dataset', event.target)

    getCurrentUser()
    .then((user) => {
      likeNft(productId, user.id)
        .then( response => {
          console.log('like server response', response)
          event.target.classList.toggle('active')
        })
    })
  }

  return (
    <div className='Galery'>
      <div className='anima-container'>
        <div className='Galery-block anima-section'>
          <div className='Galery-filters'>
            <h3>Filters</h3>
              <FilterGalery 
                nameFilter='background' 
                state={backgroundState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={avaliableSubFilter?.background} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery 
                nameFilter='clothes' 
                state={clothesState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={avaliableSubFilter?.clothes} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='jewels' 
                state={jewelsState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={avaliableSubFilter?.jewels} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='skin' 
                state={skinState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={avaliableSubFilter?.skin} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='eyes' 
                state={eyesState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={avaliableSubFilter?.eyes} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='head' 
                state={headState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={avaliableSubFilter?.head}
                handleSubFilter={handleSubFilter} 
              />
              <button className='FilterGalery button' onClick={() => handleReset()}>Resest Filters</button>
          </div>
          <div className='Galery-nft d-flex'>
            { filterNfts && 
              filterNfts.map( (nft, ind) => {
                const { image, _id } = nft
                return (
                  <div 
                    key={ind} 
                    className='nft' 
                    style={{backgroundImage: `url(${image})`}}
                  >
                    {
                      getAccessToken() &&
                      <>
                        <div
                          className='like-icon' 
                          onClick={event => handleLikes(event, _id)}
                          >  
                        </div>
                      </>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
