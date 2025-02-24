// components/VoiceAgentAI.tsx
import React from 'react';
import Image from 'next/image';

const VoiceAgentAI = () => {
  const integrations = [
    {
      title: "Hybrid AI Training",
      description: "Balance CPU & GPU workloads for cost-effective AI development.",
      image: "/assets/KrutrimProducts/1.jpeg"
    },
    {
      title: "National AI Data Repository",
      description: "Efficiently structure and manage large-scale AI datasets.",
      image: "/assets/KrutrimProducts/2.jpeg"
    },
    {
      title: "Indigenous AI Model Development",
      description: "Build AI solutions tailored for Indian governance & industries.",
      image: "/assets/KrutrimProducts/3.jpeg"
    },
    {
      title: "Multilingual AI Ecosystem",
      description: "Collaborate with AI4Bharat to develop Indic AI models.",
      image: "/assets/KrutrimProducts/4.jpeg"
    },
    {
      title: "AI Accessibility:",
      description: "Empower MSMEs, startups, and research labs with AI infrastructure",
      image: "/assets/KrutrimProducts/5.jpeg"
    }
  ];

  return (
    <div className="bg-white p-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-6">
          <p className="text-md sm:text-lg text-black mb-">
            Project Kalki
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#07038d] leading-tight">
            Key Objectives of Project Kalki
          </h1>
        </div>
          {/* <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
              →
            </button> */}
          {/* </div> */}
        </div>

        {/* Warning Message */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-red-500 text-xl">📢</span>
            </div>
            <div className="ml-3">
              <p className="text-red-700 font-medium">
                Without urgent intervention, India risks falling behind in AI innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-medium text-gray-800">
                  {integration.title}
                </h2>
                <span className="text-gray-400">↗</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-6">
                {integration.description}
              </p>

              <div className="rounded-xl overflow-hidden bg-gray-50 h-48">
                <img 
                  src={integration.image}
                  alt={integration.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceAgentAI;