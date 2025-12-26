import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollBackground - Creates animated background based on scroll position
 * Adds premium depth and movement to the page
 */
const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll to gradient position
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "100% 100%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.05, 0.1, 0.05]
  );

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity,
        background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(243, 126, 58, 0.1), transparent 50%)",
        backgroundPosition
      }}
    />
  );
};

export default ScrollBackground;
