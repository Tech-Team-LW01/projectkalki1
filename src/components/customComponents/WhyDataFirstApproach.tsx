"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Database, GitBranch, Globe, Server } from 'lucide-react';

const DataFirstApproach = () => {
  const dataPoints = [
    {
      icon: Database,
      title: "70% Development Focus",
      description: "AI model development is primarily data collection & processing.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: GitBranch,
      title: "Open Source Foundation",
      description: "Leverage open-source datasets while building structured Indian datasets.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "AI4Bharat Collaboration",
      description: "Use IndicNLP & IndicTrans models for Indian language AI.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Server,
      title: "National Repository",
      description: "National AI Data Repository to provide structured, high-quality datasets.",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#07038d] mb-4">
            Why a Data-First Approach?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"/>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Icon with gradient background */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-300" />
                    <div className="relative p-3 rounded-lg bg-white border-2 border-white">
                      <point.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-gradient-to-br opacity-10 rounded-full blur-xl transition-all duration-300 group-hover:opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-4 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-700">
              Our data-first strategy ensures robust foundation for India&apos;s AI ecosystem
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataFirstApproach;