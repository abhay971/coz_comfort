import React, { useState, useEffect, useRef } from 'react'

const Properties = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
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

  const properties = [
    {
      id: 1,
      title: "LUMIERE DUPLEX RESIDENCES",
      subtitle: "Premium Manufacturing Hub",
      location: "Industrial District A",
      size: "50,000 sq ft",
      type: "manufacturing",
      price: "$2.5M",
      features: ["Heavy machinery ready", "Quality control lab", "Loading docks", "24/7 security"],
      number: "(1)",
      description: "Designing luxury apartments that features spacious layouts with quality amenities.",
      color: "#F37E3A"
    },
    {
      id: 2,
      title: "MODERN WAREHOUSE COMPLEX",
      subtitle: "Strategic Storage Solutions",
      location: "Logistics Zone B", 
      size: "75,000 sq ft",
      type: "warehouse",
      price: "$3.2M",
      features: ["Climate controlled", "Automated systems", "Multi-level storage", "Rail access"],
      number: "(2)",
      description: "State-of-the-art facilities with advanced technology and efficient workflows.",
      color: "#288EC2"
    },
    {
      id: 3,
      title: "DISTRIBUTION CENTER",
      subtitle: "Multi-Modal Transport Hub",
      location: "Transport Hub C",
      size: "100,000 sq ft", 
      type: "distribution",
      price: "$4.1M",
      features: ["Multi-modal transport", "Cross-docking", "Cold storage", "IT infrastructure"],
      number: "(3)",
      description: "Premium distribution facilities with excellent connectivity and logistics.",
      color: "#6EBD49"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', color: '#F37E3A' },
    { id: 'manufacturing', label: 'Manufacturing', color: '#F37E3A' },
    { id: 'warehouse', label: 'Warehouse', color: '#288EC2' },
    { id: 'distribution', label: 'Distribution', color: '#6EBD49' }
  ]

  const filteredProperties = activeCategory === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeCategory)

  return (
    <>
      {/* Projects Gallery Section - Inspired by Reference 4 */}
      <section 
        id="projects-section"
        ref={el => sectionsRef.current[0] = el}
        className="min-h-screen bg-black text-white relative overflow-hidden"
        style={{overflowX: 'hidden'}}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #0d1117 50%, #161b22 75%, #0f0f0f 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite'
        }}></div>

        {/* Sophisticated decorative elements */}
        <div className="absolute top-32 right-20 w-24 h-24 border border-[#288EC2]/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-2 h-20 bg-gradient-to-t from-[#F37E3A]/30 to-transparent animate-pulse"></div>
        
        <div className="relative z-10 flex items-center py-10 lg:py-20" style={{overflowX: 'hidden'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
            
            {/* Header */}
            <div className={`mb-8 lg:mb-16 transition-all duration-1000 ${
              visibleSections.has('projects-section') ? 'opacity-100 translate-y-0 animate-properties-slide' : 'opacity-0 translate-y-20'
            }`}>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-sm font-medium tracking-wider text-[#F37E3A] uppercase mb-4">
                    (OUR PROJECTS)
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                    FEATURED<br />
                    INDUSTRIAL<br />
                    <em>PROPERTIES</em>
                  </h2>
                </div>
                
                {/* Navigation Numbers */}
                <div className="flex space-x-4">
                  <div className="text-2xl font-light">(1)</div>
                  <div className="text-2xl font-light text-gray-500">(2)</div>
                  <div className="text-2xl font-light text-gray-500">(3)</div>
                </div>
              </div>
              
              {/* Elegant line */}
              <div className="w-32 h-0.5 bg-gradient-to-r from-[#F37E3A] to-[#288EC2] mb-8"></div>
            </div>

            {/* Properties Grid - Reference 4 Style */}
            <div className="grid lg:grid-cols-3 gap-4 sm:gap-8 mb-8 lg:mb-16 w-full" style={{maxWidth: '100%'}}>
              
              {/* Main Featured Property */}
              <div className={`lg:col-span-2 relative group cursor-pointer transition-all duration-1000 delay-200 w-full ${
                visibleSections.has('projects-section') ? 'opacity-100 translate-x-0 animate-card-flip' : 'opacity-0 -translate-x-5'
              }`} style={{maxWidth: '100%'}}>
                <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/1.jpg" 
                    alt="Featured Property" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Property Details Overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="mb-4">
                      <div className="text-4xl font-bold mb-2" style={{color: '#F37E3A'}}>(1)</div>
                      <h3 className="text-3xl lg:text-4xl font-light mb-2" style={{fontFamily: 'Georgia, serif'}}>
                        LUMIERE DUPLEX<br />
                        RESIDENCES
                      </h3>
                      <p className="text-white/80 text-sm mb-4 max-w-md">
                        Designing luxury apartments that features spacious layouts with quality amenities.
                      </p>
                    </div>
                    
                    <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
                      VIEW PROJECT
                    </button>
                  </div>
                </div>
              </div>

              {/* Side Properties */}
              <div className="space-y-6 w-full" style={{maxWidth: '100%'}}>
                {filteredProperties.slice(1, 3).map((property, index) => (
                  <div 
                    key={property.id}
                    className={`relative group cursor-pointer h-[180px] sm:h-[220px] lg:h-[240px] rounded-2xl overflow-hidden transition-all duration-1000 w-full ${
                      visibleSections.has('projects-section') ? 'opacity-100 translate-x-0 animate-staggered-fade' : 'opacity-0 translate-x-5'
                    }`}
                    style={{animationDelay: `${(index + 1) * 300}ms`, maxWidth: '100%'}}
                  >
                    <img 
                      src="/2.jpg" 
                      alt={property.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    {/* Property Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-lg font-bold mb-1" style={{color: property.color}}>
                        {property.number}
                      </div>
                      <h4 className="text-lg font-light mb-2" style={{fontFamily: 'Georgia, serif'}}>
                        {property.title.split(' ').slice(0, 2).join(' ')}<br />
                        {property.title.split(' ').slice(2).join(' ')}
                      </h4>
                      <p className="text-white/70 text-xs">
                        {property.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter Categories - Responsive Style */}
            <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 delay-600 ${
              visibleSections.has('projects-section') ? 'opacity-100 translate-y-0 animate-luxury-pulse' : 'opacity-0 translate-y-10'
            }`}>
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative text-xs sm:text-sm font-light tracking-wider uppercase transition-all duration-300 px-2 py-1 ${
                    activeCategory === category.id 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {category.label}
                  {activeCategory === category.id && (
                    <div 
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                      style={{backgroundColor: category.color}}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Matching luxury style */}
      <section 
        id="cta-section"
        ref={el => sectionsRef.current[1] = el}
        className="min-h-screen bg-black text-white relative overflow-hidden flex items-center"
      >
        <div className="absolute inset-0">
          <img 
            src="/2.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <div className={`transition-all duration-1000 ${
            visibleSections.has('cta-section') ? 'opacity-100 translate-y-0 animate-cta-zoom' : 'opacity-0 translate-y-20'
          }`}>
            <div className="text-sm font-medium tracking-wider text-[#F37E3A] uppercase mb-8">
              (READY TO BEGIN?)
            </div>
            <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8" style={{fontFamily: 'Georgia, serif'}}>
              READY TO FIND<br />
              YOUR PERFECT<br />
              <em>INDUSTRIAL SPACE</em>?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Let our experts help you discover the ideal industrial property that aligns with your business vision and operational requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] text-white px-12 py-4 rounded-full font-medium tracking-wider uppercase hover:shadow-2xl hover:shadow-[#F37E3A]/25 transition-all duration-300 transform hover:scale-105 hover:from-[#e66a2b] hover:to-[#d4581f]">
                SCHEDULE CONSULTATION
              </button>
              <button className="border border-white/30 text-white px-12 py-4 rounded-full font-medium tracking-wider uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                VIEW ALL PROPERTIES
              </button>
            </div>
            
            {/* Added sophisticated decorative element */}
            <div className="mt-16 flex justify-center">
              <div className="w-1 h-16 bg-gradient-to-b from-[#F37E3A]/50 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Properties