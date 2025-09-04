import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Ultra-simple counting animation - no stuttering
    const timer = setTimeout(() => {
      let current = 0
      const target = 500
      const increment = 5 // Larger increments
      const interval = 20 // Faster intervals
      
      const countUp = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(countUp)
        } else {
          setCount(current)
        }
      }, interval)
      
      // Cleanup function
      return () => clearInterval(countUp)
    }, 1500) // Start after 1.5s delay
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen pt-20 lg:pt-24 pb-16 lg:pb-20 px-4 lg:px-8 flex items-center relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #0d1117 50%, #161b22 75%, #0f0f0f 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 20s ease infinite'
    }}>
      
      {/* Subtle texture overlay for video-like aesthetic */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(243, 126, 58, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(40, 142, 194, 0.1) 0%, transparent 50%)`,
        backgroundSize: '100px 100px',
        animation: 'float 15s ease-in-out infinite'
      }}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Grid Container - Fixed sizing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-auto lg:h-[70vh] max-h-[700px] min-h-[500px]">
          
          {/* Left Column */}
          <div className="grid grid-rows-2 gap-4 lg:gap-6">
            
            {/* Top Left - Simple Industry 360° with Navy Blue */}
            <div 
              className={`rounded-3xl px-8 py-12 flex flex-col justify-center items-center relative overflow-hidden transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                boxShadow: '0 25px 50px -12px rgba(30, 41, 59, 0.4)'
              }}
            >
              {/* Just Industry 360° */}
              <div className="text-center">
                <div className="text-white text-6xl lg:text-7xl font-light tracking-wider">
                  Industry <span className="font-normal">360</span><span className="text-4xl align-super">°</span>
                </div>
              </div>
            </div>

            {/* Bottom Left - Professional Portfolio Display */}
            <div 
              className={`rounded-3xl relative overflow-hidden transform transition-all duration-1000 delay-400 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                background: 'linear-gradient(135deg, #F37E3A 0%, #e66a2b 100%)',
                boxShadow: '0 25px 50px -12px rgba(243, 126, 58, 0.3)',
                minHeight: '200px'
              }}
            >
              {/* Main Image Display */}
              <div className="absolute inset-3">
                <div className="w-full h-full rounded-2xl overflow-hidden relative group cursor-pointer">
                  <img 
                    src="/1.jpg" 
                    alt="Industrial Portfolio" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white text-lg font-medium mb-1">Portfolio</div>
                      <div className="text-white/80 text-sm">Industrial Projects</div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-4 lg:gap-6">
            
            {/* Top Right - Main Hero Video/Image */}
            <div 
              className={`rounded-3xl overflow-hidden relative group cursor-pointer transform transition-all duration-1000 delay-200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                background: 'linear-gradient(135deg, #6EBD49 20%, #5da83d 100%)',
                boxShadow: '0 25px 50px -12px rgba(110, 189, 73, 0.3)'
              }}
            >
              {/* Main Video Area */}
              <div className="absolute inset-0">
                <video 
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
                
                {/* Fallback Image */}
                <img 
                  src="/wilhelm-gunkel-_rD1pJwWpbU-unsplash.jpg" 
                  alt="Industrial Space" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{zIndex: -1}}
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/40">
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl lg:text-3xl font-light text-white leading-tight opacity-90 drop-shadow-md">
                    Build Where<br />
                    <span className="font-normal">You Grow.</span>
                  </h2>
                </div>
              </div>
              
            </div>

            {/* Bottom Right Grid - Stats & Brand */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              
              {/* Stats Section */}
              <div 
                className={`rounded-3xl p-6 flex flex-col justify-center items-center transform transition-all duration-1000 delay-600 relative overflow-hidden ${
                  isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #288EC2 0%, #1e7aa1 100%)',
                  boxShadow: '0 25px 50px -12px rgba(40, 142, 194, 0.4)'
                }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                <div className="text-center relative z-10">
                  <div className="relative mb-2">
                    <div className="text-white text-5xl font-black tracking-wider transform hover:scale-105 transition-all duration-100 ease-out" 
                         style={{fontFamily: 'Arial Black, "Arial Bold", Gadget, sans-serif', letterSpacing: '0.05em'}}>
                      <span className="relative" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                        {count}
                        <span className="text-white ml-1">+</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-white/90 text-sm font-bold tracking-[0.25em] uppercase" 
                       style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>
                    Projects
                  </div>
                </div>
              </div>

              {/* Brand Section with Aesthetic Image */}
              <div 
                className={`rounded-3xl overflow-hidden flex flex-col justify-center transform transition-all duration-1000 delay-700 relative ${
                  isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/2.jpg" 
                    alt="Industrial Excellence" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Aesthetic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F37E3A]/20 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10 p-4 text-center">
                  <div className="text-white text-2xl font-light leading-tight mb-2 drop-shadow-lg">
                    COZ<br />
                    <span className="font-medium">COMFORT</span>
                  </div>
                  <div className="text-white/90 text-xs tracking-wider uppercase drop-shadow">
                    Excellence
                  </div>
                </div>

                {/* Aesthetic light effects */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#F37E3A]/60 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero