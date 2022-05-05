import heroImg from './../../assets/img/anima-hero.png'
import nft1 from './../../assets/nft/anima-1.jpeg'
import nft2 from './../../assets/nft/anima-2.jpeg'
import nft3 from './../../assets/nft/anima-3.jpeg'
import { computeHeadingLevel } from '@testing-library/react'
import { Hero } from '../../components/Hero/Hero'
import React, { useEffect } from 'react'
import './Home.scss'

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='Home'>
      <div className='anima-container'>

        <Hero 
          isSmall={false}
          image={heroImg} 
          title='Wellcome to Anima' 
          subtitle='A limited NFT collection for degens from degens.'
          mainButton={{text:'Galery', href:'#'}}
          secondaryButton={{text:'Login', href:'#'}}
        />
  
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
