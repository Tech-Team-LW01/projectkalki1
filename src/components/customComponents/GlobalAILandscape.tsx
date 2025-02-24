// components/GlobalAILandscape.tsx
import React from 'react';
import Image from 'next/image';

const values = [
  {
    icon: "/assets/TheGlobalAILandscape/1.jpeg",
    title: " Technological Dependence on foreign AI models.",
    description: "India's heavy reliance on foreign AI models limits innovation, threatens data security, and hinders technological self-reliance"
  },
  {
    icon: "/assets/TheGlobalAILandscape/2.jpeg",
    title: " Data Privacy & Security Threats with sensitive data processed abroad.",
    description: "Foreign processing of India's sensitive data creates significant privacy risks and potential national security vulnerabilities."
  },
  {
    icon: "/assets/TheGlobalAILandscape/3.jpeg",
    title: " Limited Economic Competitiveness as AI-driven economies demand local innovation.",
    description: "Without indigenous AI capabilities, India risks falling behind in the global economy where AI drives growth and innovation."
  } 
];

const GlobalAILandscape = () => {
  return (
    <div className="bg-white py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Heading, Description, and Image */}
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07038d]">
              The Global AI Landscape <br/> & India&apos;s Position
            </h2>
            <p className="text-black leading-relaxed">
              AI is redefining global economies. While the U.S. leads with 43 foundation models and China with 19, India has none. Without strategic intervention, India risks:
            </p>
            {/* Added main image */}
            <div className="w-full relative h-[320px] mt-6">
              <Image
                src="/assets/TheGlobalAILandscape/3.jpeg" // Replace with your main image path
                alt="Global AI Landscape"
                fill
                className="rounded-2xl object-fit shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
              key={index} 
              className="flex items-start gap-6 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300" />
                <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-semibold">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalAILandscape;