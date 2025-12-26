import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ScaleOnScroll - Scales content as it scrolls into view
 * Creates a premium zoom effect
 */
const ScaleOnScroll = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to scale
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleOnScroll;
