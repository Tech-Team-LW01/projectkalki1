"use client" // This tells Next.js this is a client-side component

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurLargeLanguage = () => {
  // Create a reference to track our component's position on the page
  const containerRef = useRef(null);
  
  // Track how far the user has scrolled through our component
  // 'start end' means start tracking when component's top reaches viewport bottom
  // 'end start' means stop tracking when component's bottom reaches viewport top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Our text content that will be animated
  const text = `Our Large Language Model (LLM) named Tortoise LLM model  is designed to be multilingual, culturally aware, and optimized for India-specific use cases. It will serve industries including education, healthcare, finance, and governance, enhancing accessibility to AI-driven solutions for all.
`;
  
  // Split our text into individual words so we can animate each one
  const words = text.split(' ');

  return (
    // Container div that spans full viewport height and centers content
    <div className="h-full mt-2 flex items-center justify-center p-4" ref={containerRef}>
      {/* Wrapper div that sets maximum width and text size */}
      <div className="max-w-3xl mx-auto text-4xl">
        {/* Loop through each word in our text */}
        {words.map((word, i) => {
          // Calculate when this specific word should start and finish animating
          // Example: if we have 100 words, first word is 0/100 to 1/100
          const start = i / words.length;
          const end = (i + 1) / words.length;
          
          // Create smooth color transition for this word
          // Changes from light gray (180) to medium gray (100) to dark gray (30)
          // This happens as user scrolls through the calculated range
          const color = useTransform(
            scrollYProgress,
            [start, (start + end) / 2, end],
            ["rgb(180, 180, 180)", "rgb(100, 100, 100)", "rgb(30, 30, 30)"]
          );
          
          // Create smooth font weight transition for this word
          // Changes from normal (400) to medium (500) to semi-bold (600)
          const weight = useTransform(
            scrollYProgress,
            [start, (start + end) / 2, end],
            ["400", "500", "600"]
          );

          // Render each word as a motion.span element that can be animated
          return (
            <motion.span
              key={i} // Unique key for React to track this element
              style={{
                color, // Apply our color animation
                fontWeight: weight, // Apply our font weight animation
                display: 'inline-block' // Make sure words stay on same line
              }}
              className="mr-1" // Add small right margin between words
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default OurLargeLanguage;