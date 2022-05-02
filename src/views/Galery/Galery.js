import React, { useState } from 'react'
import { FilterGalery } from '../../components/FilterGalery/FilterGalery'
import './Galery.scss'


export const Galery = () => {
  const [backgroundState, setBackgroundState] = useState(false)
  const backgroundSubFilters = ['white', 'pink', 'green']

  const [clothesState, setClothesState] = useState(false)
  const clothesSubFilters = ['t-shirt', 'jacket', 'sweatshirt'] 

  const [jewelsState, setJewelsState] = useState(false)
  const jewelsSubFilters = ['earrings', 'chains', 'others'] 

  const handleFilltersOptions = (event) => {
    const filterSelected = event.target.innerText.toLowerCase();
    console.log(filterSelected)
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
      default:
        break;
    }
  }

  return (
    <div className='Galery'>
      <div className='anima-container'>
        <div className='Galery-block anima-section'>
          <div className='Galery-filters'>
            <h3>Filters</h3>

            <FilterGalery 
              nameFilter='background' 
              subFilters={backgroundSubFilters} 
              handleFilltersOptions={handleFilltersOptions} 
              state={backgroundState}
            />

            <FilterGalery 
              nameFilter='clothes' 
              subFilters={clothesSubFilters} 
              handleFilltersOptions={handleFilltersOptions} 
              state={clothesState}
            />

            <FilterGalery  
              nameFilter='jewels' 
              subFilters={jewelsSubFilters} 
              handleFilltersOptions={handleFilltersOptions} 
              state={jewelsState}
            />


   





            <div className='filter'>Jewels</div>
            <div className='filter'>Skin</div>
            <div className='filter'>Eyes</div>
            <div className='filter'>Head</div>
          </div>


          <div className='Galery-nft d-flex'>

              <div className='nft'></div>
              <div className='nft'></div>
              <div className='nft'></div>
              <div className='nft'></div>
              <div className='nft'></div>
              <div className='nft'></div>
              <div className='nft'></div>
              <div className='nft'></div>
              <div className='nft'></div>
              
          </div>

        </div>
        
        {/* </div> */}
      </div>
    </div>
  )
}
