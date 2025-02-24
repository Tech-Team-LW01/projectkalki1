"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, Database, Cloud, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const IndiasAIChallenge = () => {
  const cards = [
    {
      title: 'Computational Limitations',
      subtitle: "India has only 18,000–19,000 GPUs, compared to AI leaders using millions.",
      icon: AlertTriangle,
      description: 'Critical infrastructure gap affecting AI development capacity',
    },
    {
      title: 'Data Deficiency',
      subtitle: 'India lacks structured, AI-ready datasets required for LLMs.',
      icon: Database,
      description: 'Limited high-quality training data for AI models',
    },
    {
      title: 'Foreign Dependence',
      subtitle: '95% of India\'s AI solutions rely on foreign cloud services.',
      icon: Cloud,
      description: 'Significant security and sovereignty concerns',
    },
    {
      title: 'High Energy Costs',
      subtitle: 'AI training requires massive computational power.',
      icon: Zap,
      description: 'Need for sustainable AI infrastructure',
    },
  ];

  return (
    <div className="relative bg-white px-8 py-6 md:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjVsNiA2LTYgNk01MCAzN2w2LTYtNi02IiBzdHJva2U9IiMwMEZGOUEyMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=')] opacity-10"/>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#07038d] text-3xl lg:text-4xl md:text-4xl font-bold mb-2 tracking-tight"
          >
            India&apos;s AI Challenge
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black leading-relaxed max-w-2xl mx-auto"
          >
            India stands at a crucial point in the global AI race. Unlike the U.S. and China with robust AI ecosystems, India faces significant challenges:
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-[#00FF9A]/20 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,154,0.1)] transition-all duration-300 h-[200px]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="relative group">
                      {/* Gradient effect from ProfileCard */}
                      <div 
                        className="absolute -inset-1 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-300"
                      />
                      
                      {/* Icon container */}
                      <div className="relative p-3 rounded-lg bg-gray-200 border-2 border-white">
                        {React.createElement(card.icon, {
                          className: "w-6 h-6 text-black",
                          strokeWidth: 2
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-[#07038d] text-xl font-bold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-black leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 pl-16">
                    <div className="flex items-center justify-center w-5 h-5 border-2 border-[#046a38] rounded">
                      <svg 
                        className="w-3 h-3 text-[#046a38]" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-black leading-relaxed">
                      {card.description}
                    </p>
                  </div>
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