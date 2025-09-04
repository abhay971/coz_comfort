import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Properties from './components/Properties/Properties'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Properties />
      <Footer />
    </div>
  )
}

export default App
