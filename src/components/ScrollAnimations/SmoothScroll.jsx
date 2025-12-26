import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * SmoothScroll - Wraps content with smooth scroll behavior
 * Adds premium momentum-based scrolling
 */
const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();

  // Spring physics for smooth momentum
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div ref={scrollRef}>
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
