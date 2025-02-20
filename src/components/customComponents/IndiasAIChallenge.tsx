"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const IndiasAIChallenge = () => {
  const cards = [
    {
      title: 'Computational Limitations',
      subtitle: " India has only 18,000–19,000 GPUs, compared to AI leaders using millions.",
      icon: '🔸 LLM',
      buttonText: 'View Model'
    },
    {
      title: 'Krutrim-2',
      subtitle: 'SoTA Indic LLM outperforming 5x-10x bigger models on Indic tasks',
      icon: '🔸 LLM',
      buttonText: 'View Model'
    },
    {
      title: 'Chitrarth 1',
      subtitle: 'SoTA VLM trained with Krutrim-11 on Indic tasks',
      icon: '💠 Vision Language Model',
      buttonText: 'View Model'
    },
    {
      title: 'Vyakyarth 1 - Indic Embedding',
      subtitle: 'SoTA Indic text embedding model to help usecsses like RAG',
      icon: '🔤 Multi-lingual Encoder',
      buttonText: 'View Model'
    },
    {
      title: 'Dhwani 1',
      subtitle: 'SoTA Speech LLM (trained with Krutrim-1)',
      icon: '🎙️ Speech Language Model',
      buttonText: 'View Model'
    },
    {
      title: 'Krutrim Translate',
      subtitle: 'Low latency SoTA Text to Text Translation',
      icon: '🔄 Translation Model',
      buttonText: 'View Model'
    },
    {
      title: 'IndicST Dataset',
      subtitle: 'Large Indian Multilingual Translation Corpus for Speech Large Language Models',
      icon: '📊 Dataset',
      buttonText: 'View Dataset'
    }
  ];

  return (
    <div className="min-h-screen bg-[#001F1F] px-8 py-16 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto"
      >
        {/* Header Section */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#00FF9A] text-5xl font-bold mb-8"
        >
          Overview: India’s AI Challenge

        </motion.h1>
        
        <div className="text-white space-y-6 mb-24 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
          >
India is at a critical juncture in the global AI race. While countries like the U.S. and China have built robust AI ecosystems, India faces major challenges:

          </motion.p>
          {/* <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed"
          >
            At Krutrim AI Labs, we believe open-source AI is key to accelerating innovation and making AI more accessible. By sharing our breakthroughs, we foster a thriving AI ecosystem while setting new global benchmarks for Indic AI.
          </motion.p> */}
        </div>

        {/* Libraries Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#00FF9A] text-4xl font-bold mb-12"
        >
          Key Challenges

        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <Card className="bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-[#1C1C1C] text-xl font-bold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#666666] text-sm mb-4 min-h-[40px] leading-relaxed">
                    {card.subtitle}
                  </p>
                  <div className="flex items-center mb-6">
                    <span className="text-sm text-[#666666] bg-[#F5F5F5] px-4 py-1.5 rounded-full">
                      {card.icon}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center text-[#1C1C1C] font-medium group"
                  >
                    {card.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IndiasAIChallenge;