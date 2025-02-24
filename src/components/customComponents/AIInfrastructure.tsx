"use client"
// components/AIInfrastructure.tsx
import React from 'react';
import { 
  ServerIcon, 
  CircleStackIcon,  // Changed from DatabaseIcon
  CpuChipIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline';

const AIInfrastructure = () => {
  const components = [
    {
      icon: (
        <ServerIcon className="h-12 w-12 text-gray-800" />
      ),
      title: (<div><span className='font-bold'>Leverage India&apos;s Supercomputing Resources (PARAM, AI4Bharat) </span> for AI training.</div>),
      description: ""
    },
    {
      icon: (
        <CircleStackIcon className="h-12 w-12 text-gray-800" />
      ),
      title: (<div><span className='font-bold'>Build India&apos;s First National AI Data Repository </span> for foundational model training.</div>),
      description: ""
    },
    {
      icon: (
        <CpuChipIcon className="h-12 w-12 text-gray-800" />
      ),
      title: (<div><span className='font-bold'>Develop Indigenous AI Models </span> for governance, finance, healthcare, and national security.</div>),
      description: ""
    },
    {
      icon: (
        <BoltIcon className="h-12 w-12 text-gray-800" />
      ),
      title: (<span className='font-bold'>Scale AI Infrastructure with Renewable Energy-Powered HPC Clusters.</span>),
      description: ""
    },
  ];

  return (
    <div className="bg-[#07038d] p-8 min-h-[400px] py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Proposed Solution: AI Self-Reliance Through Compute <br/>&  Data Infrastructure
          </h1>
          <p className="text-blue-100 text-lg">
            Our Approach to Overcome India&apos;s AI Limitations
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((component, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white p-4 rounded-lg mb-4 w-20 h-20 flex items-center justify-center shadow-lg">
                {component.icon}
              </div>
              <div className="rounded-lg p-3">
                <h3 className="font-medium text-white text-lg">
                  {component.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInfrastructure;