// components/RoadmapProcess.tsx
import React from 'react';
import { Database, TrendingUp, Cpu } from 'react-feather';

interface RoadmapItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    icon: <Database className="w-6 h-6 text-gray-800" />,
    title: "Short-Term (0-3 Months):",
    description: "Establish AI dataset frameworks, deploy initial models.",
    color: "bg-[#FFF9C4]",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-gray-800" />,
    title: "Medium-Term (4-8 Months):",
    description: "Scale AI infrastructure, expand model capabilities.",
    color: "bg-[#2196F3]",
  },
  {
    icon: <Cpu className="w-6 h-6 text-gray-800" />,
    title: "Long-Term (8+ Months):",
    description: "Develop India's first fully trained foundational AI model.",
    color: "bg-[#4A148C]",
  },
];

const RoadmapProcess = () => {
  return (
    <section className="py-6">
      {/* Heading Section - Separated from main content */}
      <h2 className="text-2xl text-[#000080] md:text-4xl font-bold mb-2 text-center max-w-4xl mx-auto">
        Scope of Implementation: 10-Month AI Roadmap
      </h2>

      {/* Main Content */}
      <div className="bg-white py-8 flex items-center justify-center max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-8 w-full max-w-5xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Roadmap items */}
            <div className="flex-1">
              <div className="space-y-6">
                {roadmapItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105"
                  >
                    <div 
                      className={`${item.color} p-3 rounded-full flex items-center justify-center shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#000080] text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Road image */}
            <div className="flex-1 relative">
              <img 
                src="/assets/roadmap/roadmap.jpeg" 
                alt="Roadmap Path" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              
              {/* Timeline markers */}
              <div className="absolute inset-0 flex flex-col justify-between py-8">
                {roadmapItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`${item.color} w-4 h-4 rounded-full shadow-lg transform -translate-x-2`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapProcess;