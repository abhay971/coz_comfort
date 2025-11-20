"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      // Calculate which card should be active based on scroll position
      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          const cardTop = cardRef.offsetTop - container.offsetTop;
          const cardBottom = cardTop + cardRef.clientHeight;
          const scrollMiddle = scrollTop + containerHeight / 2;

          if (scrollMiddle >= cardTop && scrollMiddle < cardBottom) {
            setActiveCard(index);
          }
        }
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [content.length]);

  return (
    <div
      className="h-[60rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 bg-white"
      ref={containerRef}
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="min-h-[30rem] py-20"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  color: activeCard === index ? "rgb(17, 24, 39)" : "rgb(107, 114, 128)",
                }}
                transition={{
                  duration: 0.2,
                }}
                className="text-4xl md:text-5xl font-bold"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  color: activeCard === index ? "rgb(55, 65, 81)" : "rgb(156, 163, 175)",
                }}
                transition={{
                  duration: 0.2,
                }}
                className="text-lg md:text-xl max-w-2xl mt-8 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-[20rem]" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-[600px] w-[800px] rounded-xl sticky top-10 overflow-hidden shadow-2xl",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </div>
  );
};
