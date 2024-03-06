import React, { useState } from 'react'
import logo from '../../assets/halaal_logo.png'
import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icon-menu.svg'
import closeIcon from '../../assets/icon-close.svg'
import './header.scss'

function Header () {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div id='navcard' className={toggle ? 'show' : ''}>
        <img id='close' src={closeIcon} onClick={() => setToggle(false)}></img>
        <ul>
          <li>
            <a href='#'>Why Halal?</a>
          </li>
          <li>
            <a href='#'>Our Culture</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>Join As Cooperative</a>
          </li>

          <li>
            <button className='btn btn-primary'>Sign Up For Free</button>
          </li>

          <li>
            {' '}
            <button className='btn btn-outline-secondary border-primary text-primary'>
              Download App
            </button>
          </li>
        </ul>
      </div>

      <header
        id='header'
        className='d-flex justify-content-between align-items-center fixed-top'
      >
        <Link to='/'>
          <img src={logo} width={'120px'} alt='' />
        </Link>
        <div id='nav' className='d-flex gap-5 align-items-center'>
          <nav className='d-flex gap-5'>
            <a href='#'>Why Halal?</a>
            <a href='#'>Our Culture</a>
            <a href='#'>FAQ</a>
            <a href='#'>Join As Cooperative</a>
          </nav>
          <div id='buttons' className='d-flex gap-lg-5 gap-sm-3'>
            <button className='btn btn-primary'>Sign Up For Free</button>
            <button className='btn btn-outline-secondary border-primary text-primary'>
              Download App
            </button>
          </div>
        </div>
        <img
          src={menuIcon}
          onClick={() => setToggle(true)}
          id='menuBar'
          alt=''
        />
      </header>
    </>
  )
}

export default Header
