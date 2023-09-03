import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from './pages/home/Home'

import {Routes, Route} from "react-router-dom";
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    
    
      
    </>
  )
}

export default App