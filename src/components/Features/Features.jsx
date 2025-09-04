import React, { useEffect, useRef, useState } from 'react'

const Features = () => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionsRef = useRef([])
  const [counts, setCounts] = useState({
    sqft: 0,
    greenSpaces: 0,
    residences: 0,
    concierge: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id))
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (visibleSections.has('stats-section') && !hasAnimated) {
      setHasAnimated(true)
      
      // Ultra-smooth animation with optimized intervals
      const animateCount = (key, target, delay = 0) => {
        setTimeout(() => {
          let start = 0
          const duration = 2000
          const startTime = performance.now()
          
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Smooth easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentValue = Math.round(start + (target - start) * easeOutQuart)
            
            setCounts(prev => ({ ...prev, [key]: currentValue }))
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          
          requestAnimationFrame(animate)
        }, delay)
      }

      // Staggered start with smooth delays
      animateCount('sqft', 150, 0)
      animateCount('greenSpaces', 60, 200)
      animateCount('residences', 30, 400)
      animateCount('concierge', 24, 600)
    }
  }, [visibleSections, hasAnimated])

  return (
    <>
      {/* About Section - Enhanced with scroll animations */}
      <section 
        id="about-section"
        ref={el => sectionsRef.current[0] = el}
        className="min-h-screen bg-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #0d1117 50%, #161b22 75%, #0f0f0f 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite'
        }}></div>

        {/* Sophisticated decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#F37E3A]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-1 h-32 bg-gradient-to-t from-[#288EC2]/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-8 w-8 h-8 bg-[#6EBD49]/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        
        <div className={`relative z-10 grid lg:grid-cols-2 gap-4 lg:gap-0 min-h-screen transition-all duration-1000 ${
          visibleSections.has('about-section') ? 'opacity-100 translate-y-0 animate-luxury-fade' : 'opacity-0 translate-y-20'
        }`}>
          {/* Left Content - Enhanced */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-8 lg:py-20">
            <div className="mb-8">
              <div className={`text-sm font-medium tracking-wider text-[#F37E3A] uppercase mb-8 transition-all duration-700 delay-300 ${
                visibleSections.has('about-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                (ABOUT)
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 sm:mb-8 transition-all duration-1000 delay-500 ${
                visibleSections.has('about-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{fontFamily: 'Georgia, serif'}}>
                TIMELESS<br />
                <span>DESIGN.</span><br />
                INDUSTRY-<br />
                FOCUSED<br />
                <em>SPACES.</em>
              </h2>
              
              {/* Added elegant line element */}
              <div className={`w-24 h-0.5 bg-gradient-to-r from-[#F37E3A] to-[#288EC2] mb-6 transition-all duration-700 delay-700 ${
                visibleSections.has('about-section') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}></div>
            </div>
          </div>
          
          {/* Right Image - Enhanced */}
          <div className={`relative py-8 lg:py-0 transition-all duration-1000 delay-300 ${
            visibleSections.has('about-section') ? 'opacity-100 translate-x-0 animate-sophisticated-zoom' : 'opacity-0 translate-x-20'
          }`}>
            <div className="absolute inset-4 lg:inset-8 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/1.jpg" 
                alt="Industrial Space" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Added corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#F37E3A]/60"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#F37E3A]/60"></div>
              
              {/* Text Overlay - Desktop Only */}
              <div className="hidden sm:block absolute bottom-8 right-8 max-w-xs bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  Every element of COZ COMFORT reflects a commitment to excellence. From the finest materials to expertly curated amenities, the property embodies a holistic approach to industrial innovation.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  Whether you're seeking operational efficiency, strategic location, or spaces that honor growth, COZ COMFORT delivers excellence.
                </p>
                <button className="bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] text-white px-6 py-2 text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  LEARN MORE
                </button>
              </div>
            </div>
            
            {/* Mobile Text Content - Outside Image */}
            <div className="block sm:hidden mt-4 mx-4 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Every element of COZ COMFORT reflects a commitment to excellence. From the finest materials to expertly curated amenities, the property embodies a holistic approach to industrial innovation.
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Whether you're seeking operational efficiency, strategic location, or spaces that honor growth, COZ COMFORT delivers excellence.
              </p>
              <button className="bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] text-white px-6 py-2 text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Inspired by Reference 3 */}
      <section 
        id="stats-section"
        ref={el => sectionsRef.current[1] = el}
        className="min-h-screen bg-black text-white flex items-center justify-center px-8"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          visibleSections.has('stats-section') ? 'opacity-100 translate-y-0 animate-card-flip' : 'opacity-0 translate-y-30'
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-32">
            
            <div className="text-center">
              <div className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-light mb-4 text-white transition-all duration-100 ease-out" style={{fontFamily: 'Georgia, serif'}}>
                {counts.sqft}k
              </div>
              <div className="text-xs sm:text-sm font-light tracking-widest text-gray-400 uppercase">
                sq. ft.<br />
                of meticulously designed<br />
                living space
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 transition-all duration-100 ease-out" style={{fontFamily: 'Georgia, serif'}}>
                {counts.greenSpaces}<span className="text-lg sm:text-xl lg:text-2xl align-top">%</span>
              </div>
              <div className="text-xs sm:text-sm font-light tracking-widest text-gray-400 uppercase">
                green spaces<br />
                for tranquility & wellness
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 text-white transition-all duration-100 ease-out" style={{fontFamily: 'Georgia, serif'}}>
                {counts.residences}
              </div>
              <div className="text-xs sm:text-sm font-light tracking-widest text-gray-400 uppercase">
                exclusive residences<br />
                designed for comfort<br />
                & elegance
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 transition-all duration-100 ease-out" style={{fontFamily: 'Georgia, serif'}}>
                {counts.concierge}<span className="text-xl sm:text-3xl lg:text-4xl">/</span>7
              </div>
              <div className="text-xs sm:text-sm font-light tracking-widest text-gray-400 uppercase">
                concierge services<br />
                every need effortlessly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Inspired by Reference 5 */}
      <section 
        id="vision-section"
        ref={el => sectionsRef.current[2] = el}
        className="min-h-screen relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src="/2.jpg" 
            alt="Industrial Vision" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className={`max-w-2xl transition-all duration-1200 ${
              visibleSections.has('vision-section') ? 'opacity-100 translate-x-0 animate-elegant-slide' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="text-sm font-medium tracking-wider text-[#F37E3A] uppercase mb-8">
                (OUR BELIEFS)
              </div>
              <h2 className="text-5xl lg:text-7xl font-light leading-tight text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
                A VISION OF<br />
                INSPIRED<br />
                INDUSTRY
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-lg">
                To inspire and nurture an enriched lifestyle that harmonizes modern conveniences with cultural well-being, creating spaces that feel like home.
              </p>
              <button className="bg-white text-black px-8 py-3 font-medium rounded-full hover:bg-gray-200 transition-colors">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid - Inspired by Reference 6 */}
      <section 
        id="values-section"
        ref={el => sectionsRef.current[3] = el}
        className="min-h-screen bg-black text-white relative"
      >
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className={`grid lg:grid-cols-3 gap-8 h-full transition-all duration-1000 ${
              visibleSections.has('values-section') ? 'opacity-100 scale-100 animate-staggered-fade' : 'opacity-0 scale-95'
            }`}>
              
              {/* Row 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{color: '#F37E3A'}}>(1)</div>
                <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  HOLISTIC<br />
                  WELL-BEING
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Spaces designed to enhance both physical and mental wellness.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{color: '#288EC2'}}>(2)</div>
                <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  DISCRETION &<br />
                  EXCLUSIVITY
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Privacy and exclusivity that respects your lifestyle.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{color: '#6EBD49'}}>(3)</div>
                <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  CULTURAL<br />
                  ENRICHMENT
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Spaces that inspire creativity and cultural dialogue.
                </p>
              </div>

              {/* Row 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{color: '#F37E3A'}}>(4)</div>
                <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  COMMUNITY &<br />
                  CONNECTION
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Thoughtful environments that foster meaningful connections.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{color: '#288EC2'}}>(5)</div>
                <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  SUSTAINABLE<br />
                  ELEGANCE
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Luxury that respects the environment and future generations.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section - Inspired by Reference 7 */}
      <section 
        id="amenities-section"
        ref={el => sectionsRef.current[4] = el}
        className="min-h-screen bg-black text-white"
      >
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Content */}
          <div className={`flex flex-col justify-center px-8 lg:px-16 py-20 transition-all duration-1200 ${
            visibleSections.has('amenities-section') ? 'opacity-100 translate-x-0 animate-luxury-fade' : 'opacity-0 -translate-x-20'
          }`}>
            <h2 className="text-5xl lg:text-6xl font-light leading-tight mb-8" style={{fontFamily: 'Georgia, serif'}}>
              INDUSTRY-<br />
              CENTERED<br />
              <em>AMENITIES</em>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              From private fitness studios to guided meditation sessions, our amenities are designed to elevate your lifestyle and foster a sense of harmony.
            </p>
            <button className="bg-white text-black px-8 py-3 font-medium rounded-full hover:bg-gray-200 transition-colors self-start">
              LEARN MORE
            </button>
          </div>
          
          {/* Right Image */}
          <div className={`relative transition-all duration-1200 delay-300 ${
            visibleSections.has('amenities-section') ? 'opacity-100 translate-x-0 animate-sophisticated-zoom' : 'opacity-0 translate-x-20'
          }`}>
            <div className="absolute inset-8 rounded-2xl overflow-hidden">
              <img 
                src="/2.jpg" 
                alt="Amenities" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features