import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Sparkles, Wrench, Package, Globe } from "lucide-react";
import { useRef, useState } from "react";

export default function Offerings() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const offerings = [
    {
      id: 1,
      icon: Shield,
      title: "Compliance Management",
      description: "Navigate complex regulatory landscapes with confidence. We ensure your industrial operations meet all legal, environmental, and safety standards.",
      features: [
        "Regulatory compliance audits",
        "Environmental clearances",
        "Safety protocol implementation",
        "Documentation & reporting"
      ],
      color: "#F37E3A",
      gradient: "from-[#F37E3A] to-[#d86f33]",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Amenities Management",
      description: "Premium facility amenities that enhance workplace productivity and employee satisfaction. From cafeterias to recreational spaces.",
      features: [
        "Cafeteria & dining services",
        "Recreation & wellness facilities",
        "Parking management",
        "Green spaces & landscaping"
      ],
      color: "#288EC2",
      gradient: "from-[#288EC2] to-[#1f6f9e]",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 3,
      icon: Wrench,
      title: "Facilities Management",
      description: "Comprehensive facility operations ensuring optimal performance. Our integrated approach maximizes uptime and extends asset lifespan.",
      features: [
        "24/7 maintenance support",
        "HVAC & electrical systems",
        "Security & access control",
        "Housekeeping & sanitation"
      ],
      color: "#F37E3A",
      gradient: "from-[#F37E3A] to-[#d86f33]",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      icon: Package,
      title: "Warehousing & Distribution",
      description: "Strategic warehousing solutions with advanced logistics management. Streamline your supply chain with our state-of-the-art infrastructure.",
      features: [
        "Multi-temperature storage",
        "Inventory management systems",
        "Last-mile delivery support",
        "Custom distribution networks"
      ],
      color: "#288EC2",
      gradient: "from-[#288EC2] to-[#1f6f9e]",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Business Expansion",
      description: "Expand your industrial footprint across borders. We facilitate international growth with local expertise and global standards.",
      features: [
        "Market entry strategy",
        "Site selection & acquisition",
        "Local partnership development",
        "Cross-border compliance"
      ],
      color: "#F37E3A",
      gradient: "from-[#F37E3A] to-[#d86f33]",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} id="offerings" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F37E3A 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#F37E3A] to-transparent" />
            <span className="text-sm tracking-widest uppercase text-gray-500 font-medium">
              Our Offerings
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-[#F37E3A] to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Comprehensive{" "}
            <span className="text-[#F37E3A]">Industrial Solutions</span>
          </motion.h2>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            End-to-end services designed to streamline your operations and accelerate business growth
          </motion.p> */}
        </div>

        {/* Offerings - Staggered Layout */}
        <div className="space-y-32">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-3xl aspect-[4/3]"
                >
                  {/* Image */}
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-40 mix-blend-multiply`} />

                  {/* Floating Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                    className="absolute top-8 left-8 w-20 h-20 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                  >
                    <offering.icon
                      className="w-10 h-10"
                      style={{ color: offering.color }}
                    />
                  </motion.div>

                  {/* Number Badge */}
                  <div className="absolute bottom-8 right-8">
                    <div
                      className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg"
                    >
                      <span className="text-3xl font-bold" style={{ color: offering.color }}>
                        {String(offering.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`absolute ${index % 2 === 0 ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} w-24 h-24 rounded-full opacity-20 blur-2xl -z-10`}
                  style={{ backgroundColor: offering.color }}
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {offering.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {offering.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {offering.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${offering.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-white font-bold">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium text-lg group-hover/item:text-gray-900 transition-colors">
                            {feature}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="pt-6"
                  >
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-lg font-semibold group/link"
                      style={{ color: offering.color }}
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
