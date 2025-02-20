// components/RoadmapProcess.tsx
import React from 'react';

interface RoadmapItem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    icon: "💡",
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    color: "bg-[#FF8C69]", // Coral color
  },
  {
    icon: "🎯",
    title: "Progress",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    color: "bg-[#FFD700]", // Gold color
  },
  {
    icon: "🔄",
    title: "Communication",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    color: "bg-[#50C878]", // Emerald color
  },
  {
    icon: "💼",
    title: "Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    color: "bg-[#4169E1]", // Royal Blue color
  },
];

const RoadmapProcess = () => {
  return (
    <div className="bg-[#FF7F50]  py-8 flex items-center justify-center max-w-6xl mx-auto">
      <div className="bg-white rounded-lg p-8 w-full max-w-5xl shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Roadmap Process Infographic</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Roadmap items */}
          <div className="flex-1">
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`${item.color} p-3 rounded-full`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Road image */}
          <div className="flex-1 relative">
            <img 
              src="/road-path.png" 
              alt="Roadmap Path" 
              className="w-full h-auto"
            />
            
            {/* Markers on the road */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapProcess;