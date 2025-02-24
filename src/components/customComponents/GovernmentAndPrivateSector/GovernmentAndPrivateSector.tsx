"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Landmark , Building2 } from 'lucide-react'; // Add icons

const GovernmentAndPrivateSector = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-6 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="max-w-6xl mx-auto px-2  relative">
        {/* Header Section */}
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#07038d] mb-2"
          >
            Government & Private-Sector Role
          </motion.h2>
          <p className="text-black leading-relaxed max-w-2xl mx-auto">
            Collaborative efforts driving India&apos;s AI innovation ecosystem
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Government Support */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Landmark  className="w-8 h-8 text-[#07038d] mr-3" />
                  <h3 className="text-xl font-bold text-[#07038d]">Government Support Needed</h3>
                </div>
                <ul className="space-y-4">
                  {/* List items with enhanced styling */}
                  <li className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 p-0 rounded-lg transition-colors">
                    <span className="text-blue-500 text-xl">✅</span>
                    <p className="text-black leading-relaxed">Policy incentives for hybrid CPU-GPU AI training</p>
                  </li>
                  <li className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 p-0 rounded-lg transition-colors">
                    <span className="text-blue-500 text-xl">✅</span>
                    <p className="text-black leading-relaxed">Launch of a National AI Data Repository</p>
                  </li>
                  <li className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 p-0 rounded-lg transition-colors">
                    <span className="text-blue-500 text-xl">✅</span>
                    <p className="text-black leading-relaxed">Integration of AI4Bharat and NSM supercomputers</p>
                  </li>
                  <li className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 p-0 rounded-lg transition-colors">
                    <span className="text-blue-500 text-xl">✅</span>
                    <p className="text-black leading-relaxed">Public-sector funding under IndiaAI Mission</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Private Sector */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Building2 className="w-8 h-8 text-[#07038d] mr-3" />
                  <h3 className="text-xl font-bold text-[#07038d]">Private Sector Collaboration</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 p-0 rounded-lg transition-colors">
                    <span className="text-purple-500 text-xl">✅</span>
                    <p className="text-black leading-relaxed">IT Giants (Reliance, Tata, Infosys) to support AI R&D</p>
                  </li>
                  <li className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 p-0 rounded-lg transition-colors">
                    <span className="text-purple-500 text-xl">✅</span>
                    <p className="text-black leading-relaxed">Cloud AI providers to enhance infrastructure scaling</p>
                  </li>
                  <li className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 p-0 rounded-lg transition-colors">
                    <span className="text-purple-500 text-xl">✅</span>
                    <p className="text-black leading-relaxed">Startup incubation programs to accelerate AI entrepreneurship</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentAndPrivateSector;