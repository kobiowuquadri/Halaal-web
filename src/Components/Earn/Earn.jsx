import React from 'react'
import earn_1 from '../../assets/earn_1.png'
import earn_2 from '../../assets/earn_2.png'
import './earn.scss'

function Earn () {
  return (
    <div className='earn_sec'>
      <h2>
        Earn upto 12% <span style={{ color: '#0066F4' }}>halal returns</span> on
        savings
      </h2>
      <p>
        Earn in the <span style={{ color: '#0066F4' }}>halal</span> way from
        your savings with our Mudarabah Principle (Partnership). We invest in
        profitable, Shariah-compliant ventures and share profits based on an
        agreed ratio between you and us.
      </p>
      <div id='earn' className='d-flex'>
        <div
          className='earn_content py-4'
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          <h4 style={{ color: '#003780' }}>Upto 12% profit on your savings</h4>
          <p>
            <img src={earn_1} className='img-fluid' alt='' />
          </p>
        </div>
        <div
          className='earn_image py-4'
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <p>
            <img src={earn_2} className='img-fluid' alt='' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Earn
