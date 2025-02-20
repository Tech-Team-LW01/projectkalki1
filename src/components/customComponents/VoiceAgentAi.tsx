// components/VoiceAgentAI.tsx
import React from 'react';

const VoiceAgentAI = () => {
  const integrations = [
    {
      title: "Voice Call Integration",
      description: "Elevate call experiences with AI that not just speaks the language of users, but also gets work done!",
      image: "/voice-call.png",
      learnMore: "Learn More"
    },
    {
      title: "Whatsapp Integration",
      description: "Build powerful next generation agents for 500M Indians on Whatsapp. Multilingual, voice enabled, and action-driven.",
      image: "/whatsapp-ai.png",
      learnMore: "Learn More"
    },
    {
      title: "In App AI Integration",
      description: "Reimagine and personalise new user journeys with Generative UI.",
      image: "/in-app-ai.png",
      learnMore: "Learn More"
    }
  ];

  return (
    <div className="bg-[#FAF9F6]   p-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">Sarvam Agents</p>
            <h1 className="text-3xl font-medium text-gray-800">Voice first agentic AI</h1>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
              →
            </button>
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