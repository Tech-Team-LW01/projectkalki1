"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

type ContentItem = {
  title: string;
  description: React.ReactNode;
  content:string;
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
      className="relative flex justify-center space-x-10 rounded-md p-10"
      ref={ref}
    >
      {/* Left content column */}
      <div className="w-1/2">
        {content.map((item, index) => (
          <motion.div 
            key={item.title + index} 
            className="min-h-[20rem] relative p-6 rounded-lg"
            animate={{
              backgroundColor: activeCard === index ? "rgba(255, 255, 255, 0.05)" : "transparent",
              boxShadow: activeCard === index 
                ? "0 4px 20px rgba(0, 0, 0, 0.1)" 
                : "none",
              scale: activeCard === index ? 1.02 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
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
                background: activeCard === index 
                  ? "linear-gradient(145deg, rgba(66, 153, 225, 0.1), rgba(129, 140, 248, 0.1))" 
                  : "none",
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className={`text-2xl font-bold ${activeCard === index?"text-[#ff0000]":"text-black"} `}>{item.title}</h2>

              <div className="text-black max-w-sm mt-10">
                {item.content}
              </div>

              <div className="text-black max-w-sm mt-10">
                
                {item.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right image column */}
      <div className="w-1/2">
        <div className="sticky top-10 h-[30rem] relative">
          <Image
            src={content[activeCard].image}
            alt="Sticky Image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StickyContent;