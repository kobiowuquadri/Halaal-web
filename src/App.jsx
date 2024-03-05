import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App () {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
