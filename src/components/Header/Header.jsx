import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/logo/COZ_COMFORT.png" 
              alt="COZ COMFORT Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <a href="#home" className="text-white/80 hover:text-[#F37E3A] font-light tracking-wider uppercase text-sm transition-all duration-300 relative group">
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#projects-section" className="text-white/80 hover:text-[#F37E3A] font-light tracking-wider uppercase text-sm transition-all duration-300 relative group">
                Properties
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#amenities-section" className="text-white/80 hover:text-[#F37E3A] font-light tracking-wider uppercase text-sm transition-all duration-300 relative group">
                Amenities
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#about-section" className="text-white/80 hover:text-[#F37E3A] font-light tracking-wider uppercase text-sm transition-all duration-300 relative group">
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#contact-section" className="text-white/80 hover:text-[#F37E3A] font-light tracking-wider uppercase text-sm transition-all duration-300 relative group">
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] text-white px-8 py-3 rounded-full font-medium tracking-wider uppercase hover:shadow-2xl hover:shadow-[#F37E3A]/25 transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#F37E3A] focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-black/95 backdrop-blur-md border-t border-white/10">
              <a href="#home" className="text-white/80 hover:text-[#F37E3A] block px-4 py-3 text-base font-light tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5">Home</a>
              <a href="#projects-section" className="text-white/80 hover:text-[#F37E3A] block px-4 py-3 text-base font-light tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5">Properties</a>
              <a href="#amenities-section" className="text-white/80 hover:text-[#F37E3A] block px-4 py-3 text-base font-light tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5">Amenities</a>
              <a href="#about-section" className="text-white/80 hover:text-[#F37E3A] block px-4 py-3 text-base font-light tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5">About</a>
              <a href="#contact-section" className="text-white/80 hover:text-[#F37E3A] block px-4 py-3 text-base font-light tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5">Contact</a>
              <button className="w-full bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] text-white px-6 py-3 rounded-full font-medium tracking-wider uppercase hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-4">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header