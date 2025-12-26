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

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');
      `}</style>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-8 md:left-12 lg:left-16 z-20"
      >
        <img
          src="/logo/COZ_COMFORT_WHITE.png"
          alt="COZ COMFORT Logo"
          className="h-12 md:h-14 lg:h-16 w-auto"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center">

          {/* Industry Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 md:mb-6 lg:mb-8"
          >
            <span
              className="inline-block text-[#F37E3A] text-md md:text-lg lg:text-4xl xl:text-4xl font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Industry 360°
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-4 md:mb-6 lg:mb-8 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Produce to Prosper
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-md md:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-7xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Complete industrial infrastructure solutions tailored for modern businesses
          </motion.p>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F37E3A]" />
    </div>
  );
};

export default Hero;
