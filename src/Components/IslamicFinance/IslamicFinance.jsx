import React from 'react'
import zakatImg from '../../assets/finance.png'
import './islamicfinance.scss'

function IslamicFinance() {
  return (
    <div className='finance_section'>
        <h1>Unlocking the Power of Islamic Finance</h1>
        <p>we believe everyone should have access to money at the time they need it without exorbitant interest rates that makes it hard to return.</p>
        <button className='btn btn-outline-secondary text-white' data-aos="flip-up">See How We Do it</button>
        <p id='p_img'>
            <img src={zakatImg} alt="" />
        </p>
    </div>
  )
}

export default IslamicFinance