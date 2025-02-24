"use client"

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const OurLargeLanguage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <div className='w-full bg-white py-12 md:pt-8 md:pb-2 '>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8' ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-4'
        >
          <h2 className='text-3xl md:text-4xl font-bold  text-[#000080] mb-2'>
            
            Our Large Language Model (LLM) 
            <br />
            named <span className='text-[#ff6820]'>  Tortoise </span> LLM
          </h2>
          <p className='text-black max-w-3xl mx-auto text-lg'>
          model  is designed to be multilingual, culturally aware, and optimized for India-specific use cases. It will serve industries including education, healthcare, finance, and governance, enhancing accessibility to AI-driven solutions for all.

          </p>
        </motion.div>

       
      </div>
    </div>
  );
};

export default OurLargeLanguage;