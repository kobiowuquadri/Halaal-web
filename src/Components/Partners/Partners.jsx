import React from 'react'
import flutterwaveImage from '../../assets/flutter.png'
import paystackImage from '../../assets/paystack.png'
import remitaImg from '../../assets/remita.png'
import interswitchImg from '../../assets/intersw 1.png'
import '../Hero/hero.scss'

function Partners() {
  return (
    <div className='p-lg-5 text-center'>
        <h3 className='p-4 text-secondary'>Official partners of halal</h3>
        <div id='partners' className='d-flex justify-content-between'>
            <p data-aos="flip-left"><img src={flutterwaveImage} alt="" /></p>
            <p data-aos="flip-left"><img src={paystackImage} alt="" /></p>
            <p data-aos="flip-left"><img src={remitaImg} alt="" /></p>
            <p data-aos="flip-left"><img src={interswitchImg} alt="" /></p>
        </div>
    </div>
  )
}

export default Partners