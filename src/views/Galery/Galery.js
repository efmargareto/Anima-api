import React, { useEffect, useState } from 'react'
import { FilterGalery } from '../../components/FilterGalery/FilterGalery'
import { getAllNfts } from '../../services/NftService'
import './Galery.scss'

export const Galery = () => {
  const [allNfts, setAllNfts] = useState(null)
  const [filterNfts, setFilterNfts] = useState(null) 

  const [backgroundState, setBackgroundState] = useState(false)
  const backgroundSubFilters = ['white', 'pink', 'green']
  const [clothesState, setClothesState] = useState(false)
  const clothesSubFilters = ['t-shirt', 'jacket', 'sweatshirt'] 
  const [jewelsState, setJewelsState] = useState(false)
  const jewelsSubFilters = ['earrings', 'chains', 'others'] 
  const [skinState, setSkinState] = useState(false)
  const skinSubFilter = ['basic', 'tatto', 'other']
  const [eyesState, setEyesState] = useState(false)
  const eyesSubFilter = ['basic', 'glasses', 'other']
  const [headState, setHeadState] = useState(false)
  const headSubFilter = ['basic', 'glasses', 'other']

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

  const handleSubFilter = (namefilter, subfilter) => {
    console.log(allNfts)
    console.log(namefilter, subfilter)

    if( namefilter && subfilter ) {
      const filterNft = allNfts.filter((nft) => {
        return nft[namefilter].includes(subfilter)
      })
      console.log(filterNft)
      setFilterNfts(filterNft)
    }

  }

  useEffect(() => {
    getAllNfts()
      .then((nfts) => {
        console.log(nfts)
        setAllNfts(nfts)
        setFilterNfts(nfts)
      })
      .catch()
  }, [])

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
                subFilters={backgroundSubFilters} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery 
                nameFilter='clothes' 
                state={clothesState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={clothesSubFilters} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='jewels' 
                state={jewelsState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={jewelsSubFilters} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='skin' 
                state={skinState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={skinSubFilter} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='eyes' 
                state={eyesState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={eyesSubFilter} 
                handleSubFilter={handleSubFilter}
              />
              <FilterGalery  
                nameFilter='head' 
                state={headState}
                handleFilltersOptions={handleFilltersOptions} 
                subFilters={headSubFilter}
                handleSubFilter={handleSubFilter} 
              />
          </div>
          <div className='Galery-nft d-flex'>

            { filterNfts && 
              filterNfts.map( (nft, ind) => {
                const { background, clotes, earrings, eyes, head, image, mouth, skin } = nft
                return (
                  <div key={ind} className='nft' style={{backgroundImage: `url(${image})`}}></div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
