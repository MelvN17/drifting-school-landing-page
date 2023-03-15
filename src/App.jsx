import React, { useState } from 'react'
import './App.scss'
import AboutUsPage from './components/Pages/AboutUsSection/AboutUsPage'
import GalleryPage from './components/Pages/GallerySection/GalleryPage'
import HeroPage from './components/Pages/HeroSection/2.MainSection/HeroPage'

function App() {

  return (
    <div className="App">
      <HeroPage />
      <AboutUsPage />
      <GalleryPage />
    </div>
  )
}

export default App
