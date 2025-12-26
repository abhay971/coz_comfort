import { useEffect, useRef, useState } from 'react';
import { useScroll, useVelocity, useSpring } from 'framer-motion';

/**
 * useScrollVelocity - Hook to track scroll velocity for premium effects
 * Returns smooth scroll velocity for dynamic animations
 */
export const useScrollVelocity = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  return smoothVelocity;
};

/**
 * useScrollDirection - Hook to detect scroll direction
 * Returns 'up' or 'down'
 */
export const useScrollDirection = () => {
  const [direction, setDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setDirection('up');
      }

      lastScrollY.current = currentScrollY;
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return direction;
};
