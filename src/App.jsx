import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import Properties from "./components/Properties/Properties";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollReveal from "./components/ScrollAnimations/ScrollReveal";
import ParallaxSection from "./components/ScrollAnimations/ParallaxSection";
import ScrollBackground from "./components/ScrollAnimations/ScrollBackground";

function App() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 relative">
      <ScrollBackground />
      <div className="relative z-10">
        <Header />
        <Hero />

      {/* Decorative Section Divider */}
      {/* <div className="relative flex items-center justify-center py-8 sm:py-10 md:py-12">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
              <div className="w-3 h-3 bg-[#F37E3A] rounded-full shadow-lg shadow-[#F37E3A]/30"></div>
              <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
            </div>
          </div>
        </div>
      </div> */}

      <ScrollReveal animation="slideUp" duration={0.8}>
        <About />
      </ScrollReveal>

      {/* Decorative Section Divider */}
      <ScrollReveal animation="scale" duration={0.5}>
        <div className="relative flex items-center justify-center py-8 sm:py-10 md:py-12">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
                <div className="w-3 h-3 bg-[#F37E3A] rounded-full shadow-lg shadow-[#F37E3A]/30"></div>
                <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ParallaxSection speed={0.3}>
        <ScrollReveal animation="slideUp" duration={0.8} delay={0.1}>
          <Process />
        </ScrollReveal>
      </ParallaxSection>

      {/* Decorative Section Divider */}
      <ScrollReveal animation="scale" duration={0.5}>
        <div className="relative flex items-center justify-center py-8 sm:py-10 md:py-12">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
                <div className="w-3 h-3 bg-[#F37E3A] rounded-full shadow-lg shadow-[#F37E3A]/30"></div>
                <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* <Offerings /> */}
      {/* <Features /> */}
      <ParallaxSection speed={0.4}>
        <ScrollReveal animation="slideUp" duration={0.8} delay={0.15}>
          <Properties />
        </ScrollReveal>
      </ParallaxSection>

      {/* Decorative Section Divider */}
      <ScrollReveal animation="scale" duration={0.5}>
        <div className="relative flex items-center justify-center py-8 sm:py-10 md:py-12">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
                <div className="w-3 h-3 bg-[#F37E3A] rounded-full shadow-lg shadow-[#F37E3A]/30"></div>
                <div className="w-2 h-2 bg-[#F37E3A]/30 rounded-full"></div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ParallaxSection speed={0.5}>
        <ScrollReveal animation="slideUp" duration={0.8} delay={0.2}>
          <Contact />
        </ScrollReveal>
      </ParallaxSection>

      <ScrollReveal animation="fade" duration={0.6}>
        <Footer />
      </ScrollReveal>
      </div>
    </div>
  );
}

export default App;
