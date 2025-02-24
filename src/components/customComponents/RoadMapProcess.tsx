import React from 'react';
import { Database, TrendingUp, Cpu } from 'lucide-react';

interface RoadmapItem {
  icon: React.ReactNode;
  title: string;
  title2:string;
  description: string;
  color: string;
  subPoints: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    icon: <Database className="w-6 h-6 text-gray-800" />,
    title: "Phase 1 (0-3 Months):",
    title2:"Research & Infrastructure Setup",
    description: "Establish AI infrastructure and research foundations",
    color: "bg-[#FFF9C4]",
    subPoints: [
      "Identify key AI research institutions & computing resources",
      "Establish collaborations with AI4Bharat, universities, & private-sector players",
      "Launch National AI Data Collection Program"
    ]
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-gray-200" />,
    title: "Phase 2 (3-7 Months):",
    title2:" AI Model Training & Optimization",
    description: "Scale AI infrastructure and expand capabilities",
    color: "bg-[#2196F3]",
    subPoints: [
      "Deploy Hybrid CPU-GPU AI models across HPC clusters",
      "Develop multilingual AI models using collected datasets"
    ]
  },
  {
    icon: <Cpu className="w-6 h-6 text-gray-200" />,
    title: "Phase 3 (7-10 Months):",
    title2:" Deployment & Scaling",
    description: "Implement and scale AI solutions nationwide",
    color: "bg-[#4A148C]",
    subPoints: [
      "Implement AI solutions in governance, security, and smart city initiatives",
      "Scale training infrastructure for future AI expansion"
    ]
  }
];

const RoadmapProcess = () => {
  return (
<<<<<<< HEAD
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl text-[#000080] md:text-4xl font-bold mb-8 text-center max-w-4xl mx-auto">
        Implementation Roadmap (10-Month Plan)
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-8">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className="group transform transition-all duration-300 hover:scale-102"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${item.color} p-3 rounded-full flex items-center justify-center relative animate-glow border-4 border-transparent bg-clip-padding before:content-[""] before:absolute before:inset-[-2px] before:rounded-full before:p-1 before:bg-gradient-to-b before:from-[#FF9933] before:via-white before:to-[#138808] before:animate-spin-slow before:z-[-1]`}>
                    {item.icon}
=======
    <section className="py-6">
      {/* Heading Section - Separated from main content */}
      <h2 className="text-2xl text-[#07038d] md:text-4xl font-bold mb-2 text-center max-w-4xl mx-auto">
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
                      <h3 className="font-semibold text-[#07038d] text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
>>>>>>> 210686d6e8694dd5396bda8c067129d87f71f48b
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#000080] text-lg mb-2">
                      {item.title} <span className='text-black'>{item.title2}</span>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.subPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-500 mt-1">🔹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block flex-1 relative">
            <img 
              src="/assets/roadmap/roadmap.jpeg" 
              alt="Roadmap visualization" 
              className="w-full h-auto rounded-lg shadow-md"
            />
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

        <div className="text-center p-2 bg-[#000080] mt-8">
        <p className="text-2xl text-center item-center font-semibold text-white">
          🚀 Outcome: AI-powered governance, national security, and self-reliance
        </p>
      </div>
      </div>
      
    {/*  */}
    </section>
  );
};

export default RoadmapProcess;