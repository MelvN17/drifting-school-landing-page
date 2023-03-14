import React, { useState } from 'react'
import './App.scss'
import AboutUsPage from './components/Pages/AboutUsSection/AboutUsPage'
import HeroPage from './components/Pages/HeroSection/2.MainSection/HeroPage'

function App() {

  return (
    <div className="App">
      <HeroPage />
      <AboutUsPage />
      <AboutUsPage />
    </div>
  )
}

export default App
