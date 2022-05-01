import React from 'react'
import './Galery.scss'

export const Galery = () => {
  return (
    <div className='Galery'>
      <div className='anima-container'>
        <div className='Galery-block'>

        
          <div className='Galery-filters'>
            <h3>Filters</h3>
            <span className='filter'>Background</span>
            <span className='filter'>Clothes</span>
            <span className='filter'>Earrings</span>
            <span className='filter'>Skin</span>
            <span className='filter'>Eyes</span>
            <span className='filter'>Head</span>
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
