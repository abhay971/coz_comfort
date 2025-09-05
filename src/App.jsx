import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Properties from './components/Properties/Properties'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      <Header />
      <Hero />
      <Features />
      <Properties />
      <Footer />
    </div>
  )
}

export default App
