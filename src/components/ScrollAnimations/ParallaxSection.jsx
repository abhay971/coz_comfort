import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ParallaxSection - Creates smooth parallax scrolling effect
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} props.speed - Parallax speed multiplier (0.5 = slower, 2 = faster)
 * @param {string} props.className - Additional CSS classes
 */
const ParallaxSection = ({ children, speed = 0.5, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
