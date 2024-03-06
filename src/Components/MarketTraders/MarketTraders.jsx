import React, { useState } from 'react'
import marketTraderImg from '../../assets/market_traders.png'
import smallBusinessImg from '../../assets/small_business.png'
import comperativesImg from '../../assets/comperatives.png'
import privateOfficersImg from '../../assets/private_officers.png'
import publicOfficesImg from '../../assets/public_offices.png'
import arrowRight from '../../assets/arrow-right.png'
import './markettraders.scss'

function MarketTraders () {
  const [selectedItem, setSelectedItem] = useState(0)

  const itemsData = [
    {
      item: 'Market Traders',
      title: 'Do you belong to a Market Association?',
      description:
        'we believe everyone should have access to money at the time they need it without exorbitant interest rates that makes it hard to return.',
      image: marketTraderImg
    },
    {
      item: 'Small Businesses',
      title: 'Or you own a small business?',
      description:
        'we believe everyone should have access to money at the time they need it without exorbitant interest rates that makes it hard to return.',
      image: smallBusinessImg
    },
    {
      item: 'Comperatives',
      title: 'Cooperatives are not left out',
      description:
        'we believe everyone should have access to money at the time they need it without exorbitant interest rates that makes it hard to return.',
      image: comperativesImg
    },
    {
      item: 'Private Officers',
      title: 'Halal also works with private officers',
      description:
        'we believe everyone should have access to money at the time they need it without exorbitant interest rates that makes it hard to return.',
      image: privateOfficersImg
    },
    {
      item: 'Public Offices',
      title: 'Halal also works with public officers',
      description:
        'we believe everyone should have access to money at the time they need it without exorbitant interest rates that makes it hard to return.',
      image: publicOfficesImg
    }
  ]

  const handleItemClick = index => {
    setSelectedItem(index)
  }

  return (
    <div className='traders_section'>
      <ul
        id='tarders_list'
        className='d-flex justify-content-between list-unstyled'
        style={{ cursor: 'pointer' }}
      >
        {itemsData.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item.item}
          </li>
        ))}
      </ul>
      <div className='d-flex main_content' data-aos='fade-right'>
        <div className='market_content'>
          <h1>{itemsData[selectedItem].title}</h1>
          <p>{itemsData[selectedItem].description}</p>
          <button className='d-flex gap-2 align-items-center btn border-3 text-primary' style={{ borderBottom: '3px solid #0066F4' }}>
            Learn More
            <img src={arrowRight} alt='' />
          </button>
        </div>
        <div className='market_image' data-aos='fade-left'>
          <img
            src={itemsData[selectedItem].image}
            className='img-fluid'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default MarketTraders
