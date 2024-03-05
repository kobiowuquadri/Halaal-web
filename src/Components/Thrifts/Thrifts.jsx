import React from 'react'
import thriftsImg from '../../assets/thrift_img.png'
import './thrifts.scss'

function Thrifts() {
  return (
    <div className='thrifts_sec my-4'>
      <h1>Thrift with Halal</h1>
      <ul>
        <li>Halal Ajo for Individuals</li>
        <li>Halal Ajo for Businesses</li>
      </ul>
      <div>
        <div>
          <p>
          Move your existing ajo group to Halal and keep saving with your friends with up to 3% cash back when you are the last to withdraw
          </p>
          <p>
          Create an ajo group on Halal and start saving instantly with 2k administrative reward for group saving upto 200k monthly
          </p>
          <p>
          1k referral bonus credit to your ajo wallet on first cashout of users you refer.
          </p>
          <p>
          Automate weekly or monthly savings in your Halal vault so you don’t miss your contribtuion
          </p>
        </div>

        <div>
          <img src={thriftsImg} alt="" className='img-fluid' />
        </div>

      </div>
    </div>
  )
}

export default Thrifts