import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { sanitizeUrl, escapeHtml, isValidReactComponent } from "@/utils/security";

export function Features({
  features,
  primaryColor = "sky-500",
  progressGradientLight = "bg-gradient-to-r from-sky-400 to-sky-500",
  progressGradientDark = "bg-gradient-to-r from-sky-300 to-sky-400",
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef([]);
  const containerRef = useRef(null);

  // Validation effect
  useEffect(() => {
    if (!features || !Array.isArray(features) || features.length === 0) {
      console.error('Features prop must be a non-empty array');
      return;
    }

    // Validate each feature
    features.forEach((feature, index) => {
      if (!feature) {
        console.error(`Feature at index ${index} is null or undefined`);
        return;
      }
      if (!feature.image || typeof feature.image !== 'string') {
        console.warn(`Invalid or missing image URL at feature index ${index}`);
      }
      if (!feature.title || typeof feature.title !== 'string') {
        console.warn(`Invalid or missing title at feature index ${index}`);
      }
      if (feature.icon && !isValidReactComponent(feature.icon)) {
        console.warn(`Invalid icon component at feature index ${index}`);
      }
    });
  }, [features]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#288EC2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F37E3A]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#F37E3A] to-transparent" />
            <span className="text-sm tracking-widest uppercase text-gray-500 font-medium">
              Our Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Operational{" "}
            <span className="text-[#F37E3A]">Excellence</span>
          </motion.h2>
        </div>

        {/* Main Content - Mobile: Vertical Stack, Desktop: Side by Side */}
        <div className="space-y-8">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {/* Image Display - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
            >
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  {features?.[currentFeature]?.image && (
                    <img
                      className="w-full h-[250px] object-cover"
                      src={sanitizeUrl(features[currentFeature].image)}
                      alt={escapeHtml(features[currentFeature].title || 'Project image')}
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Project Number Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-[#F37E3A]">
                        {String(currentFeature + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Features Selector - Mobile Horizontal Scroll */}
            <div
              ref={containerRef}
              className="overflow-x-auto pb-4 -mx-4 px-4"
            >
              <div className="flex gap-3 min-w-max">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = currentFeature === index;

                  return (
                    <div
                      key={feature.id}
                      ref={(el) => {
                        featureRefs.current[index] = el;
                      }}
                      className="cursor-pointer flex-shrink-0 w-[280px]"
                      onClick={() => handleFeatureClick(index)}
                    >
                      <div
                        className={`
                        flex flex-col gap-3 p-4 h-full transition-all duration-300 rounded-xl
                        ${
                          isActive
                            ? "bg-white shadow-lg border-2 border-[#F37E3A]"
                            : "bg-white/60 border-2 border-transparent"
                        }
                      `}
                      >
                        <div
                          className={`
                          p-2.5 rounded-lg w-fit transition-all duration-300
                          ${
                            isActive
                              ? "bg-[#F37E3A] text-white"
                              : "bg-[#F37E3A]/10 text-[#F37E3A]"
                          }
                        `}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>
                          <h3
                            className={`
                            text-sm font-semibold mb-1.5 transition-colors
                            ${isActive ? "text-gray-900" : "text-gray-700"}
                          `}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`
                            text-xs leading-relaxed transition-colors line-clamp-2
                            ${isActive ? "text-gray-600" : "text-gray-500"}
                          `}
                          >
                            {feature.description}
                          </p>
                        </div>

                        <div className="mt-auto pt-2 bg-gray-100 rounded-full h-1 overflow-hidden">
                          {isActive && (
                            <motion.div
                              className={`h-full ${progressGradientLight}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.1, ease: "linear" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Side by Side */}
          <div className="hidden md:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Features List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 lg:space-y-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = currentFeature === index;

                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="cursor-pointer"
                    onClick={() => handleFeatureClick(index)}
                  >
                    <div
                      className={`
                      flex items-start gap-4 p-4 lg:p-5 transition-all duration-500 rounded-2xl
                      ${
                        isActive
                          ? "bg-white shadow-xl border border-gray-200 scale-[1.02]"
                          : "bg-white/50 border border-transparent hover:border-gray-200 hover:shadow-md"
                      }
                    `}
                    >
                      <div
                        className={`
                        p-3 lg:p-4 rounded-xl transition-all duration-500 flex-shrink-0
                        ${
                          isActive
                            ? "bg-[#F37E3A] text-white shadow-lg shadow-[#F37E3A]/30"
                            : "bg-[#F37E3A]/10 text-[#F37E3A]"
                        }
                      `}
                      >
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className={`
                          text-lg lg:text-xl font-semibold mb-2 transition-colors duration-300
                          ${isActive ? "text-gray-900" : "text-gray-700"}
                        `}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`
                          text-sm lg:text-base leading-relaxed transition-colors duration-300
                          ${isActive ? "text-gray-600" : "text-gray-500"}
                        `}
                        >
                          {feature.description}
                        </p>
                        <div className="mt-4 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          {isActive && (
                            <motion.div
                              className={`h-full ${progressGradientLight}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.1, ease: "linear" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right Side - Image Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {features?.[currentFeature]?.image && (
                    <img
                      className="w-full h-[400px] lg:h-[550px] object-cover"
                      src={sanitizeUrl(features[currentFeature].image)}
                      alt={escapeHtml(features[currentFeature].title || 'Project image')}
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Project Number Badge */}
                  <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <span className="text-2xl lg:text-3xl font-bold text-[#F37E3A]">
                        {String(currentFeature + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F37E3A] rounded-full opacity-20 blur-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PropTypes validation
Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  primaryColor: PropTypes.string,
  progressGradientLight: PropTypes.string,
  progressGradientDark: PropTypes.string,
};
