import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Partners from '../../Components/Partners/Partners'
import MarketTraders from '../../Components/MarketTraders/MarketTraders'
import IslamicFinance from '../../Components/IslamicFinance/IslamicFinance'
import Features from '../../Components/Features/Features'


function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Partners/>
      <MarketTraders/>
      <IslamicFinance/>
      <Features/>
    </>
  )
}

export default Home