// components/AIInfrastructure.tsx
import React from 'react';

const AIInfrastructure = () => {
  const components = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title:  ( <div><span className='font-bold'>Leverage India’s Supercomputing Resources (PARAM, AI4Bharat) </span> for AI training.</div>),
      description: ""
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title:  ( <div><span className='font-bold'>Build India’s First National AI Data Repository </span> for foundational model training.</div>),
      
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title:  ( <div><span className='font-bold'>Develop Indigenous AI Models </span> for governance, finance, healthcare, and national security.</div>),
      
    
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: ( <span className='font-bold'>Scale AI Infrastructure with Renewable Energy-Powered HPC Clusters.</span>),
      
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black to-black p-8 min-h-[400px]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Proposed Solution: AI Self-Reliance Through Compute <br/>&  Data Infrastructure
          </h1>
          <p className="text-blue-100 text-lg">
            Our Approach to Overcome India&apos;s AI Limitations
          </p>
        </div>

        {/* Components Grid */} 
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8">
          {components.map((component, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-64">
                <div className="bg-white p-4 rounded-lg mb-4 w-20 h-20 flex items-center justify-center">
                  {component.icon}
                </div>
                <div className=" rounded-lg p-3 mb-2">
                  <h3 className="font-medium text-white text-lg">
                    {component.title}
                  </h3>
                </div>
                <p className="text-blue-100 text-sm">
                  {component.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInfrastructure;