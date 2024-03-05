import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App () {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
