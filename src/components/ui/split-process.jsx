import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Building, Pencil, ClipboardList, Settings, CheckCircle2, ChevronDown, Globe, Shield, Package, Sparkles } from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Real Estate Acquisition",
    description: "Securing optimal industrial land parcels aligned with your growth strategy",
    step: "01",
    stepLabel: "Foundation",
    image: "/Real-Estate .png",
    icon: Building,
    features: [
      "Research",
      "Zoning & compliance verification",
      "Site identification & due diligence",
      "Negotiation & acquisition support",
    ],
    detailedOffering: {
      title: "Global Business Expansion",
      icon: Globe,
      description: "Expand your industrial footprint across borders with strategic real estate acquisition. We combine international market expertise with local knowledge to secure premium industrial sites in India.",
      detailedFeatures: [
        "Market analysis and site identification",
        "Regulatory compliance and permissions",
        "Cross-border property acquisition support",
        "Strategic partnerships and joint ventures"
      ]
    }
  },
  {
    id: 2,
    title: "Design & Development",
    description: "Intelligent industrial layouts optimized for maximum efficiency and productivity",
    step: "02",
    stepLabel: "Conceptualization",
    image: "/Design-Development.png",
    icon: Pencil,
    features: [
      "3D visualization & modeling",
      "Structural & MEP engineering",
      "Custom architectural planning",
    ],
    detailedOffering: {
      title: "Design Compliance & Approvals",
      icon: Shield,
      description: "Ensure your designs meet all regulatory requirements from start to finish. We integrate compliance into every stage of design and development, securing necessary approvals and certifications efficiently.",
      detailedFeatures: [
        "Building compliance and approvals",
        "Environmental impact clearances",
        "Safety standards integration in design",
        "Accessibility and structural certifications"
      ]
    }
  },
  {
    id: 3,
    title: "Planning & Procurement",
    description: "Strategic coordination ensuring seamless project execution with optimized resource management",
    step: "03",
    stepLabel: "Optimization",
    image: "/Planning-Procurement.png",
    icon: ClipboardList,
    features: [
      "Quality assurance protocols",
      "Project timeline development",
      "Vendor selection & management",
    ],
    detailedOffering: {
      title: "Supply Chain Planning",
      icon: Package,
      description: "Optimize your industrial project with strategic logistics planning. We design efficient material flow systems, warehousing layouts, and distribution networks integrated into your procurement strategy.",
      detailedFeatures: [
        "Cost Negotiation",
        "Inventory Planning",
        "Quality Control and Assurance",
        "Warehousing and Transportation"
      ]
    }
  },
  {
    id: 4,
    title: "Operations Management",
    description: "Complete oversight from construction to long-term operational excellence",
    step: "04",
    stepLabel: "Execution",
    image: "/Operations-Management.png",
    icon: Settings,
    features: [
      "Preventive maintenance programs",
      "24/7 facility optimization services",
      "Construction supervision & commissioning",
    ],
    detailedOffering: {
      title: "Workplace Amenities Management",
      icon: Sparkles,
      description: "Integrate premium workplace amenities during construction operations. We oversee the implementation of cafeterias, recreational facilities, and green spaces that enhance employee satisfaction and operational efficiency.",
      detailedFeatures: [
        "Cafeteria and Catering",
        "Recreation and Wellness Center",
        "Parking Infrastructure and Management",
        "Landscaping, Green Spaces and Amenities"
      ]
    }
  },
  {
    id: 5,
    title: "Sales & Lease Management",
    description: "Maximizing asset value through strategic sales and leasing solutions",
    step: "05",
    stepLabel: "Monetization",
    image: "/Sales_Lease.png",
    icon: Building,
    features: [
      "Property valuation & marketing",
      "Tenant acquisition & screening",
      "Lease negotiation & management",
    ],
    detailedOffering: {
      title: "Asset Monetization Services",
      icon: Building,
      description: "Transform your industrial real estate into revenue-generating assets. Our comprehensive sales and leasing services connect you with qualified buyers and tenants, ensuring optimal returns on your investment.",
      detailedFeatures: [
        "Market Analysis and Competitive Pricing",
        "Professional Marketing and Tenant Outreach",
        "Due Diligence Support and Legalities",
        "Lease Management and Tenant Relationship"
      ]
    }
  },
]

export function SplitProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const modalScrollRef = useRef(null)

  const active = processSteps[activeIndex]
  const IconComponent = active.icon
  const DetailedIcon = active.detailedOffering.icon

  const nextProcess = () => {
    setActiveIndex((prev) => (prev + 1) % processSteps.length)
    setIsExpanded(false)
  }

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  // Close expanded section when active index changes
  useEffect(() => {
    setIsExpanded(false)
  }, [activeIndex])

  // Scroll modal to top when it opens and lock body scroll
  useEffect(() => {
    if (isExpanded) {
      // Lock body scroll
      document.body.style.overflow = 'hidden'

      // Scroll modal to top after animation completes
      if (modalScrollRef.current) {
        // Delay to allow Framer Motion animation to complete (duration is 0.5s)
        setTimeout(() => {
          if (modalScrollRef.current) {
            modalScrollRef.current.scrollTo({
              top: 0,
              behavior: 'instant'
            })
          }
        }, 100)
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset'
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isExpanded])

  // Auto-advance functionality - pauses on hover or when modal is open
  useEffect(() => {
    if (isHovering || isExpanded) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isHovering, isExpanded])

  return (
    <div className="w-full bg-white">
      {/* Custom Scrollbar Styles */}
      <style>{`
        .modal-scrollbar {
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #F37E3A transparent;
        }

        .modal-scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .modal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin: 24px 0;
        }

        .modal-scrollbar::-webkit-scrollbar-thumb {
          background-color: #F37E3A;
          border-radius: 10px;
          border: 2px solid white;
        }

        .modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #e66a2b;
          border: 2px solid white;
        }

        .modal-scrollbar::-webkit-scrollbar-thumb:active {
          background-color: #d86020;
        }

        .modal-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }

        /* Hide scrollbar for process steps but keep scroll functionality */
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Progress Steps Header */}
        <div className="mb-10 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center justify-between max-w-4xl mx-auto min-w-max px-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                    index === activeIndex ? "scale-110" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-[#F37E3A] text-white shadow-lg shadow-[#F37E3A]/30"
                        : index < activeIndex
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {index < activeIndex ? <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" /> : step.step}
                  </div>
                  <span className="text-xs font-medium text-gray-600 hidden sm:block whitespace-nowrap">
                    {step.stepLabel}
                  </span>
                </button>
                {index < processSteps.length - 1 && (
                  <div
                    className={`w-8 sm:w-12 md:w-20 lg:w-32 h-0.5 mx-1 sm:mx-2 transition-all duration-500 ${
                      index < activeIndex ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group"
          onClick={nextProcess}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Progress Bar */}
          {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-20">
            <motion.div
              className="h-full bg-gradient-to-r from-[#F37E3A] to-[#ff8c4a]"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
            />
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left: Content */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-h-[400px] lg:min-h-[480px]">
              {/* Large Step Number Background */}
              <div className="absolute top-6 left-6 opacity-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.05, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-[140px] font-black text-gray-900"
                  >
                    {active.step}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative z-10 space-y-6">
                {/* Step Label */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-3"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#F37E3A]/10 rounded-full">
                      <span className="text-sm font-bold text-[#F37E3A]">STEP {active.step}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs uppercase tracking-wider text-gray-600">
                        {active.stepLabel}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Icon & Title */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F37E3A] to-[#e66a2b] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F37E3A]/30">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                          {active.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-gray-600 leading-relaxed">
                      {active.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Features */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-features"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    <div className="grid gap-2">
                      {active.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#F37E3A] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>


                {/* Action Buttons */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-buttons"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex flex-wrap gap-3"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpanded()
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F37E3A] text-white rounded-full font-medium hover:bg-[#e66a2b] transition-all duration-300 group/read cursor-pointer text-sm"
                    >
                      <span>{isExpanded ? "Show Less" : "View Details"}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextProcess()
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 group/btn cursor-pointer text-sm"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] min-h-[400px] lg:min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent lg:from-white/60" />

                    {/* Step Number Overlay */}
                    <div className="absolute bottom-6 right-6 text-white">
                      <div className="text-6xl font-black opacity-40">{active.step}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Hover Indicator */}
              <motion.div
                animate={{
                  opacity: isHovering ? 1 : 0,
                  y: isHovering ? 0 : 10,
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900"
              >
                Click to navigate
              </motion.div>
            </div>
          </div>
        </div>

        {/* Modal Overlay for Extended Services */}
        <AnimatePresence>
          {isExpanded && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={toggleExpanded}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="relative w-full max-w-5xl max-h-[90vh] z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute -top-20 -right-20 w-40 h-40 bg-[#F37E3A]/5 rounded-full blur-3xl"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F37E3A]/5 rounded-full blur-3xl"
                    />
                  </div>

                  <div
                    ref={modalScrollRef}
                    className="modal-scrollbar flex-1 overflow-y-auto relative z-10"
                    style={{ scrollBehavior: 'auto' }}
                  >
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 z-50 overflow-hidden">
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      <div className="flex items-start gap-3 flex-1">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#F37E3A] to-[#e66a2b] flex items-center justify-center flex-shrink-0"
                        >
                          <DetailedIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xs font-bold text-[#F37E3A] uppercase tracking-wider mb-1"
                          >
                            Extended Services • Step {active.step}
                          </motion.div>
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                          >
                            {active.detailedOffering.title}
                          </motion.h3>
                        </div>
                      </div>

                      {/* Close Button */}
                      <motion.button
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleExpanded}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F37E3A] hover:text-white flex items-center justify-center transition-all flex-shrink-0 group"
                      >
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="p-4 sm:p-6 md:p-8">
                    {/* Description Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-[#F37E3A] relative overflow-hidden"
                    >
                      {/* Animated quote decoration */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-0 right-0 text-[#F37E3A]/10 text-9xl font-serif leading-none"
                      >
                        "
                      </motion.div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic relative z-10">
                        "{active.detailedOffering.description}"
                      </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="mb-6">
                      <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-lg sm:text-xl font-bold text-gray-900 mb-4"
                      >
                        Key Capabilities
                      </motion.h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {active.detailedOffering.detailedFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.7 + index * 0.1,
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{
                              y: -5,
                              transition: { duration: 0.2 }
                            }}
                            className="group relative"
                          >
                            <motion.div
                              className="absolute -inset-1 bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
                              animate={{
                                opacity: [0, 0.1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3
                              }}
                            />
                            <div className="relative flex items-start gap-3 p-4 rounded-xl bg-gray-50 group-hover:bg-white border-2 border-gray-100 group-hover:border-[#F37E3A]/20 transition-all duration-300">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F37E3A] to-[#e66a2b] flex items-center justify-center flex-shrink-0 shadow-lg"
                              >
                                <span className="text-white text-sm font-bold">{index + 1}</span>
                              </motion.div>
                              <div className="flex-1">
                                <p className="text-gray-800 font-semibold leading-relaxed text-sm">
                                  {feature}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Related Process Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#F37E3A] to-[#e66a2b] flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#F37E3A] uppercase tracking-wider">
                            Related Process
                          </div>
                          <h5 className="text-base font-bold text-gray-900">
                            {active.title}
                          </h5>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {active.description}
                      </p>
                      <div className="space-y-1.5">
                        {active.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#F37E3A] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
