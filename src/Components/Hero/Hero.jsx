import React from 'react'
import appleImage from '../../assets/app_store.png'
import googleImage from '../../assets/google_play.png'
import heroImage from '../../assets/hero_image.png'
import cbnImage from '../../assets/cbn_logo.png'
import ndicImage from '../../assets/ndic_logo.png'
import { TypeAnimation } from 'react-type-animation'
import './hero.scss'

function Hero () {
  return (
    <div
      id='hero'
    >
      <div className='hero_content d-flex flex-column'>
        <h1>
          The <span style={{ color: '#0066F4' }}>Interest-free</span> <br />{' '}
          Bank
        </h1>
        <p className='fw-bold'>
          <TypeAnimation
            sequence={[
              'banking the ethical way...',
              1000,
              () => {
                console.log('Sequence completed')
              }
            ]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
            style={{ textAlign: 'center' }}
          />
          <em></em>
        </p>
        <div className='btns d-flex'>
          <p>
            <img src={appleImage} alt='' />
          </p>
          <p>
            <img src={googleImage} alt='' />
          </p>
        </div>
        <div id='license' className='d-flex'>
          <p className='d-flex gap-2 align-items-center'>
            Licensed by the CBN
            <img src={cbnImage} alt='' />
          </p>
          <p className='d-flex gap-2 align-items-center'>
            Deposit insured by
            <img src={ndicImage} alt='' />
          </p>
        </div>
      </div>
      <div className='hero_image w-lg-50 w-md-100'>
        <img src={heroImage} className='img-fluid' alt='' />
      </div>
    </div>
  )
}

export default Hero
