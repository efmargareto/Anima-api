import heroImg from './../../assets/img/anima-hero.png'
import nft1 from './../../assets/nft/home-1.jpeg'
import nft2 from './../../assets/nft/home-2.jpeg'
import nft3 from './../../assets/nft/home-3.jpeg'
import React, { useEffect } from 'react'
import './Home.scss'

export const Home = () => {


  document.onscroll = () => {
    let depth = 1 + window.scrollY / 1000
    const element = document.querySelector('.Hero-img');
    element.style.transform = `scale(${depth}) translateY(${depth}px)`
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='Home'>
      <div className='anima-container'>

        <div className='Hero'>
          <img className='Hero-img' src={heroImg} alt=''></img>
          <div className='background-overlay'></div>
          <div className='Hero-block'>
            <h1>Wellcome to Anima</h1>
            <p>A limited NFT collection for degens from degens.</p>
            <button className='btn-anima'>Galery</button>
            <button className='link-anima ms-2'>Login</button>
          </div>
        </div>

        <div className='separator'></div>

        <div className="AboutProyect anima-section">
          <div className="AboutProyect-info">
            <div className='AboutProyect-info_text'>
              <h2>About the proyect</h2>
              <p>ANIMA NFT IS OUR FIRST PROJECT,THE BEGINNING OF A WHOLE ECOSYSTEM FOR OUR COMMUNITY, QUALITY- FOCUSED, HIGH-END AVATARS, READY FOR THE METAVERSE & REAL LIFE FASHION INDUSTRY.</p>
            </div>        
            <div className='AboutProyect-imgs'>
              <img className='AboutProyect-img_nft' src={nft1} alt=''></img>
              <img className='AboutProyect-img_nft' src={nft2} alt=''></img>    
              <img className='AboutProyect-img_nft' src={nft3} alt=''></img>    
            </div>
          </div>
        </div>

        <div className='separator'></div>

        <div className='Avatars anima-section'>
          <h2>Avatars</h2>
          <div className='Avatars-info'>
            <p>10000 avatar will be available in total. All avatar traits and attributes will be generated randomly and revealed after the sale.</p>
            <div className='Avatars-info-block'>
              <div className='Avatars-info-block_icon'></div>
              <div className='Avatars-info-block_icon'></div>
              <div className='Avatars-info-block_icon'></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
