import heroImg from './../../assets/img/anima-hero.png'
import nft1 from './../../assets/nft/anima-1.jpeg'
import nft2 from './../../assets/nft/anima-2.jpeg'
import nft3 from './../../assets/nft/anima-3.jpeg'
import nft4 from './../../assets/img/fondoRadmap.png'
import avatar1 from './../../assets/img/avatar1.png'
import avatar2 from './../../assets/img/avatar2.png'
import avatar3 from './../../assets/img/avatar3.png'
import { Hero } from '../../components/Hero/Hero'
import React, { useEffect } from 'react'

import './Home.scss'
import { Footer } from '../../components/Footer/Footer'

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
        title='Welcome to Anima' 
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
      <div className='RoadMap anima-section'>
        <h2>RoadMap</h2>
        <div className='RoadMap-block'>
            <p className='title'>ANIMA WEARABLES</p>
            <div className='RoadMap-block-caracteristicas'>
              <p>You will be able to redeem unique wearables depending on the avatar you hold.</p>
              <p>Redeem unique physical collectibles created from your Anima avatar.</p>
            </div>
        </div>
        <div className='RoadMap-block'>
            <p className='title'>SPECIAL ACCESS</p>
            <div className='RoadMap-block-caracteristicas'>
              <p>Owning one of our NFTs will grant you access to ANIMA ecosystem and only holders unique experiences.</p>
            </div>
        </div>
        <div className='RoadMap-block'>
            <p className='title'>METAVERSE & BEYOND</p>
            <div className='RoadMap-block-caracteristicas'>
              <p>ANIMA.META will give you access to 3D files to use across different metaverse platforms.</p>
              <p>Meaning your avatar will be available in other platforms.</p>
            </div>
        </div>
        <div className='RoadMap-block'>
            <p className='title'>ANIMA HOME</p>
            <div className='RoadMap-block-caracteristicas'>
              <p>Airdropped for free to our holders, you will be able to customize, upgrade, hangout with friends and host events in your own exclusive space.</p>
            </div>
        </div>
      </div>
      <div className='separator'></div>
      <div className="AboutProyect anima-section">
          <div className="AboutProyect-info">
            <div className='AboutProyect-info_text'>
              <h2>Avatars</h2>
              <p>10000 avatar will be available in total. All avatar traits and attributes will be generated randomly and revealed after the sale.</p>
            </div>        
            <div className='AboutProyect-imgs'>
              <div className='AboutProyect-img_nft icon'>
                <img className='avatar' src={avatar1}></img>
              </div>
              <div className='AboutProyect-img_nft icon'>
                <img className='avatar' src={avatar2}></img>
              </div>    
              <div className='AboutProyect-img_nft icon'>
                <img className='avatar small' src={avatar3}></img>
              </div>    
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
   