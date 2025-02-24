"use client"
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Cpu, MemoryStick , Brain } from "lucide-react";

const cardData = [
  {
    title: "Supercomputing Optimization",
    description: "Optimizes India's existing supercomputing resources (PARAM, AUM, NEC HPCs) for maximum efficiency and performance.",
    icon: Cpu,
  },
  {
    title: "Workload Balancing",
    description: "Balances CPU & GPU workloads strategically to achieve optimal cost efficiency and resource utilization.",
    icon: MemoryStick ,
  },
  {
    title: "Advanced AI Models",
    description: "Leverages Mixture of Experts (MoE) models to deliver enhanced performance and adaptability.",
    icon: Brain,
  },
];

const cardData2 = [
  {
    title: "Supercomputing Optimization",
    description: "Optimizes India's existing supercomputing resources (PARAM, AUM, NEC HPCs) for maximum efficiency and performance.",
    icon: Cpu,
  },
  {
    title: "Workload Balancing",
    description: "Balances CPU & GPU workloads strategically to achieve optimal cost efficiency and resource utilization.",
    icon: MemoryStick ,
  },

];


const CardComponent = ({ title, description, icon: Icon, index }:any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full md:w-[calc(33.33%-1rem)] mb-6 md:mb-0"
    >
      <Card className="h-full bg-[#07038d] backdrop-blur-sm border-white/20 text-white hover:bg-[#07038d] transition-all duration-300">
        <CardHeader className="flex flex-col items-center space-y-4 text-center">
          <div className="p-3 rounded-full bg-gray-400">
            <Icon className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </CardHeader>
        <CardContent className="text-center text-gray-200">
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function WhyHybridAITraining() {
  return (
    <section className="w-full  mx-auto overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full relative rounded-xl h-full md:h-full bg-fixed bg-cover bg-center min-h-full overflow-hidden bg-[url(/assets/TheGlobalAILandscape/1.jpeg)]">
          <div className="absolute inset-0 bg-white  opacity-80"></div>
          
          <div className="flex flex-col items-center justify-center py-4 md:py-8 relative z-10">
            <div className="relative mb-12 md:mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-4xl text-[#07038d] font-bold text-inter-var text-center px-4"
              >
                Why Hybrid AI Training?
              </motion.h2>
            </div>

            {/* Cards Container */}
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row md:space-x-6 justify-center">
                {cardData.map((card, index) => (
                  <CardComponent key={index} {...card} index={index} />
                ))}
              </div>

              <div className="flex mt-4 flex-col md:flex-row md:space-x-6 justify-center">
                {cardData2.map((card, index) => (
                  <CardComponent key={index} {...card} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes arrowPulse {
          0% { transform: translateY(0); }
          50% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }

        .arrow-animation {
          animation: arrowPulse 2s infinite;
        }
      `}</style>
    </section>
  );
}

export default WhyHybridAITraining;