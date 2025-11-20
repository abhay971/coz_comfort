/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video - Full visibility */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Minimal gradient - only edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      {/* White Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 z-20"
      >
        <img
          src="/logo/COZ_COMFORT_WHITE.png"
          alt="COZ COMFORT Logo"
          className="h-10 md:h-12 lg:h-14 w-auto"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-28">

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column - Main Content */}
            <div className="xl:col-span-7">
              {/* Small label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 md:mb-8"
              >
                <span className="text-xs md:text-sm tracking-widest uppercase text-white/60 font-light">
                  Industry 360°
                </span>
              </motion.div>

              {/* Massive Headline - Responsive Sizes */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 md:mb-8 leading-[0.9] tracking-tight"
              >
                Build
                <br />
                Where You
                <br />
                Grow
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 mb-8 md:mb-10 max-w-xl font-light leading-relaxed"
              >
                Complete industrial infrastructure solutions tailored for modern businesses.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {/* <button
                  onClick={() => scrollToSection("contact")}
                  className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] text-white font-semibold text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(243,126,58,0.6)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2 md:gap-3">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e66a2b] to-[#F37E3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button> */}
              </motion.div>
            </div>

            {/* Right Column - Stats - 2x2 Grid */}
            <div className="xl:col-span-5 flex xl:justify-end mt-8 xl:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid grid-cols-2 gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-2.5 w-full md:max-w-sm"
              >
                {[
                  { number: "500+", label: "Projects" },
                  { number: "15Y", label: "Experience" },
                  { number: "98%", label: "Success" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                   className="aspect-square flex flex-col items-center justify-center p-3
           +   rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F37E3A]/30 hover:bg-white/10 transition-all 
           +  duration-300"
                  >
                    <div className="text-2xl md:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-[10px] md:text-sm tracking-widest uppercase text-white/50 font-light">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Dot */}
      <div className="absolute top-8 right-8 lg:top-12 lg:right-12 w-2 h-2 bg-[#F37E3A] rounded-full opacity-60" />
    </div>
  );
};

export default Hero;
