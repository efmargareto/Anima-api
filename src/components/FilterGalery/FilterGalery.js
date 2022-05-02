import React from 'react'

export const FilterGalery = (props) => {
  const { nameFilter, subFilters, handleFilltersOptions, state } =  props
  return (
    <div className={`FilterGalery ${state && 'active'}`}>
        <div className='filter-name' onClick={(event) => handleFilltersOptions(event)}>{nameFilter}</div>
        {
          state && (
            <div className='filter-options background-options'>
              { subFilters && 
                subFilters.map( (subfilter,ind) => {
                  return (
                    <div key={ind}>                
                      {
                        <div className='subfilter'>{subfilter}</div>
                      }
                    </div>
                  )
                })
              } 
            </div>
          )
        }
    </div>
  )
}




