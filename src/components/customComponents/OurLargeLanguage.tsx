"use client"

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const Word = ({ text, index, total }: { text: string; index: number; total: number }) => {
  return (
    <motion.span
      className="mr-1 inline-block"
      initial={{ opacity: 0.3 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: index * 0.02
        }
      }}
      style={{
        color: `rgb(${30 + (index / total) * 150}, ${30 + (index / total) * 150}, ${30 + (index / total) * 150})`,
        fontWeight: 400 + (index / total) * 200
      }}
    >
      {text}
    </motion.span>
  );
};

const OurLargeLanguage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const text = `Our Large Language Model (LLM) named Tortoise LLM model is designed to be multilingual, culturally aware, and optimized for India-specific use cases. It will serve industries including education, healthcare, finance, and governance, enhancing accessibility to AI-driven solutions for all.`;
  
  const words = text.split(' ');

  return (
    <div 
      className="h-full mt-2 flex items-center justify-center p-4" 
      ref={containerRef}
    >
      <motion.div 
        className="max-w-3xl mx-auto text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {words.map((word, i) => (
          <Word 
            key={i} 
            text={word} 
            index={i} 
            total={words.length} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OurLargeLanguage;