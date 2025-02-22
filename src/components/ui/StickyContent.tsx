"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

type ContentItem = {
  title: string;
  description: React.ReactNode;
  content: string;
  image: string;
};

type StickyContentProps = {
  content: ContentItem[];
};

const StickyContent: React.FC<StickyContentProps> = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardLength = content.length;
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="relative mx-auto max-w-7xl  flex flex-col md:flex-row md:justify-center md:space-x-6 lg:space-x-10 rounded-md p-4 md:p-6 lg:p-10"
      ref={ref}
    >
      {/* Mobile indicator - only visible on small screens */}
      <div className="md:hidden flex justify-center mb-4">
        <div className="flex space-x-2">
          {content.map((_, index) => (
            <div
              key={`indicator-${index}`}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                activeCard === index ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content column - full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2">
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            className="min-h-[12rem] md:min-h-[16rem] lg:min-h-[20rem] relative p-4 md:p-6 rounded-lg mb-6 md:mb-0"
            animate={{
              backgroundColor:
                activeCard === index ? "rgba(255, 255, 255, 0.05)" : "transparent",
              boxShadow:
                activeCard === index ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
              scale: activeCard === index ? 1.02 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Glowing border effect for active card */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                opacity: activeCard === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                background:
                  activeCard === index
                    ? "linear-gradient(145deg, rgba(66, 153, 225, 0.1), rgba(129, 140, 248, 0.1))"
                    : "none",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <h2
                className={`text-xl md:text-2xl font-bold ${
                  activeCard === index ? "text-[#000080]" : "text-black"
                }`}
              >
                {item.title}
              </h2>

              <div className="text-black text-sm md:text-base max-w-full md:max-w-sm mt-4 md:mt-10">
                {item.content}
              </div>

              <div className="text-black text-sm md:text-base max-w-full md:max-w-sm mt-4 md:mt-10">
                {item.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image column - separate for mobile, sticky side-by-side for desktop */}
      <div className="md:hidden my-8">
        <div className="relative h-64 w-full">
          <Image
            src={content[activeCard].image}
            alt={`Image for ${content[activeCard].title}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Desktop sticky image - hidden on mobile */}
      <div className="hidden md:block md:w-1/2">
        <div className="sticky top-10 h-60 sm:h-80 md:h-96 lg:h-[30rem] relative">
          <Image
            src={content[activeCard].image}
            alt={`Image for ${content[activeCard].title}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Mobile navigation controls */}
      <div className="md:hidden flex justify-between mt-4">
        <button
          onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
          className={`px-3 py-1 rounded ${
            activeCard === 0
              ? "bg-gray-100 text-gray-400"
              : "bg-gray-200 text-gray-700"
          }`}
          disabled={activeCard === 0}
        >
          Previous
        </button>
        <span className="text-sm text-gray-500">
          {activeCard + 1} / {content.length}
        </span>
        <button
          onClick={() => setActiveCard(Math.min(content.length - 1, activeCard + 1))}
          className={`px-3 py-1 rounded ${
            activeCard === content.length - 1
              ? "bg-gray-100 text-gray-400"
              : "bg-gray-200 text-gray-700"
          }`}
          disabled={activeCard === content.length - 1}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default StickyContent;