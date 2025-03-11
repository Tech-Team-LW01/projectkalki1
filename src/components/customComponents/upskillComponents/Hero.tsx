
"use client"
import React from "react";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FloatingLogos } from "./FloatingLogos"
const Hero = () => {

    return (
        <div className="max-w-6xl mt-16  mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              The Leading{" "}
              <span className="text-[#000080] relative">
                Multi-Agent
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#000080]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </span>{" "}
              Platform
            </h1>
            <p className="text-lg text-gray-600">
              Streamline workflows across industries with powerful AI agents. Build and deploy automated workflows using
              any LLM and cloud platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#046a38] to-[#ff6820] hover:opacity-90 transition-opacity text-white">Start Free Trial</Button>
              <Button variant="outline" className="hover:bg-gradient-to-r from-[#046a38] to-[#ff6820]" >I Want A Demo</Button>
            </div>
            <div className="pt-8">
              <p className="text-5xl font-bold text-[#ff6820]">2,500,000</p>
              <p className="text-lg text-gray-600">Multi-Agent Crews run using CrewAI</p>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Card className="absolute inset-0 overflow-hidden">
              <FloatingLogos />
            </Card>
          </div>
        </div>
      </div>
    )
}

export default Hero;