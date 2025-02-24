import React from 'react';
import { Database, TrendingUp, Cpu } from 'lucide-react';

interface RoadmapItem {
  icon: React.ReactNode;
  title: string;
  title2: string;
  description: string;
  color: string;
  subPoints: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    icon: <Database className="w-6 h-6 text-black" />,
    title: "Phase 1 (0-3 Months):",
    title2: "Research & Infrastructure Setup",
    description: "Establish AI infrastructure and research foundations",
    color: "bg-gray-100",
    subPoints: [
      "Identify key AI research institutions & computing resources",
      "Establish collaborations with AI4Bharat, universities, & private-sector players",
      "Launch National AI Data Collection Program"
    ]
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-black" />,
    title: "Phase 2 (3-7 Months):",
    title2: " AI Model Training & Optimization",
    description: "Scale AI infrastructure and expand capabilities",
    color: "bg-gray-100",
    subPoints: [
      "Deploy Hybrid CPU-GPU AI models across HPC clusters",
      "Develop multilingual AI models using collected datasets"
    ]
  },
  {
    icon: <Cpu className="w-6 h-6 text-black" />,
    title: "Phase 3 (7-10 Months):",
    title2: " Deployment & Scaling",
    description: "Implement and scale AI solutions nationwide",
    color: "bg-gray-100",
    subPoints: [
      "Implement AI solutions in governance, security, and smart city initiatives",
      "Scale training infrastructure for future AI expansion"
    ]
  }
];

const RoadmapProcess = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl text-[#07038d] md:text-4xl font-bold mb-8 text-center max-w-4xl mx-auto">
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
                  {/* Updated Icon Container with Gradient */}
                  <div className="relative group">
                    {/* Gradient effect */}
                    <div className="absolute -inset-1  bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-300" />
                    
                    {/* Icon container */}
                    <div className={`relative p-3 rounded-lg ${item.color} border-2  border-white`}>
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex-1 pl-2">
                    <h3 className="font-bold text-[#07038d] text-lg mb-2 leading-relaxed ">
                      {item.title}
                      <br/> 
                      <span className='text-black leading-relaxed'>{item.title2}</span>
                    </h3>
                    <p className="text-black mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.subPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-black leading-relaxed">
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
    </section>
  );
};

export default RoadmapProcess;