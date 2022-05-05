import React from 'react'

export const Hero = (props) => {
  const { isSmall, title, subtitle, mainButton, secondaryButton, image } = props
  console.log(isSmall)

  document.onscroll = () => {
    let depth = 1 + window.scrollY / 1000
    const element = document.querySelector('.Hero-img');
    element.style.transform = `scale(${depth}) translateY(${depth}px)`
  }

  return (
      <div className={`Hero ${isSmall && 'small'}`}>
        <img className='Hero-img' src={image} alt=''></img>
        <div className='background-overlay'></div>
        <div className='Hero-block'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
         {
           mainButton && secondaryButton &&
           <div>
            <button className='btn-anima'>{mainButton.text}</button> 
            <button className='link-anima ms-2'>{secondaryButton.text}</button>
           </div>
         } 
          
        </div>
      </div>
  )
}

