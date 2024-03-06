import React from 'react'
import zakatImg from '../../assets/finance.png'
import arrowRight from '../../assets/arrow-right-w.png'
import './islamicfinance.scss'

function IslamicFinance() {
  return (
    <div className='finance_section'>
        <h1>Unlocking the Power of Islamic Finance</h1>
        <p>we believe everyone should have access to money at the time they need it without exorbitant interest rates that makes it hard to return.</p>
        <button className='d-flex gap-2 align-items-center btn border-3 text-white' style={{ borderBottom: '3px solid white' }}>
        See How We Do it
            <img src={arrowRight} alt='' />
          </button>
        <p id='p_img'>
            <img src={zakatImg} alt="" />
        </p>
    </div>
  )
}

export default IslamicFinance