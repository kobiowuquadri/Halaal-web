import React from 'react'
import thriftsImg from '../../assets/thrift_img.png'
import img_1 from '../../assets/1.png'
import img_2 from '../../assets/2.png'
import img_3 from '../../assets/3.png'
import img_4 from '../../assets/4.png'

import './thrifts.scss'

function Thrifts () {
  return (
    <div className='thrifts_sec my-4'>
      <h2 className='p-3'>Thrift with Halal</h2>
      <ul className='d-flex list-unstyled justify-content-center gap-5'>
        <li>Halal Ajo for Individuals</li>
        <li>Halal Ajo for Businesses</li>
      </ul>
      <div id='thrifts' className='d-flex align-items-center'>
        <div className='thrifts_content' data-aos='fade-right'>
          <p className='d-flex align-items-center gap-4'>
            <img src={img_1} alt='' />
            Move your existing ajo group to Halal and keep saving with your
            friends with up to 3% cash back when you are the last to withdraw
          </p>
          <p className='d-flex align-items-center gap-4'>
            <img src={img_2} alt='' />
            Create an ajo group on Halal and start saving instantly with 2k
            administrative reward for group saving upto 200k monthly
          </p>
          <p className='d-flex align-items-center gap-4'>
            <img src={img_3} alt='' />
            1k referral bonus credit to your ajo wallet on first cashout of
            users you refer.
          </p>
          <p className='d-flex align-items-center gap-4'>
            <img src={img_4} alt='' />
            Automate weekly or monthly savings in your Halal vault so you don’t
            miss your contribtuion
          </p>
        </div>

        <div className='thrifts_image' data-aos='fade-left'>
          <img src={thriftsImg} alt='' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Thrifts
