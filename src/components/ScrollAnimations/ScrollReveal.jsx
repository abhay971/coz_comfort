import { motion } from "framer-motion";

/**
 * ScrollReveal - A reusable component that animates children on scroll
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'} props.animation - Animation type
 * @param {number} props.delay - Delay before animation starts (seconds)
 * @param {number} props.duration - Animation duration (seconds)
 * @param {string} props.className - Additional CSS classes
 */
const ScrollReveal = ({
  children,
  animation = "slideUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true
}) => {
  // Animation variants for different effects
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    rotate: {
      hidden: { opacity: 0, scale: 0.8, rotate: -10 },
      visible: { opacity: 1, scale: 1, rotate: 0 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Premium easing curve
      }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
