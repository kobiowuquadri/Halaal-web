import React from 'react'
import flutterwaveImage from '../../assets/flutter.png'
import paystackImage from '../../assets/paystack.png'
import remitaImg from '../../assets/remita.png'
import interswitchImg from '../../assets/intersw 1.png'
import '../Hero/hero.scss'

function Partners() {
  return (
    <div className='p-lg-5 text-center'>
        <h2 className='p-4 text-secondary'>Official Partners</h2>
        <div id='partners' className='d-flex justify-content-between'>
            <p><img src={flutterwaveImage} alt="" /></p>
            <p><img src={paystackImage} alt="" /></p>
            <p><img src={remitaImg} alt="" /></p>
            <p><img src={interswitchImg} alt="" /></p>
        </div>
    </div>
  )
}

export default Partners