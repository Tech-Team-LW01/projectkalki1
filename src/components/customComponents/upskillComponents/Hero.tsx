
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
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
  

              
            Empower{" "}
              <span className="text-[#000080] relative">
              India's AI
              
<img src="/assets/CurlLine.svg" alt="curve line" className="absolute w-full bottom-[-2px] left-0    transform scale-x-105" />
              </span>{" "}
              Future
            </h1>
            <p className="text-lg text-gray-600">
            Join our Free AI Training to support the IndiaAI Mission and boost national upskilling efforts.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            {/* https://forms.gle/qwzu4w367nP59mgU6 */}
            <a href="https://forms.gle/qwzu4w367nP59mgU6" target="blank">
              <Button className="bg-gradient-to-r from-[#046a38] to-[#ff6820] hover:opacity-90 transition-opacity text-white">Join Now</Button></a>
              <a href="https://www.linkedin.com/in/vimaldaga/" target="blank">
              <Button variant="outline" className="hover:bg-gradient-to-r from-[#046a38] to-[#ff6820] hover:text-white" >
 By Mr Vimal Daga
</Button>
              </a>
        
            </div>
            <div className="pt-8">
              <p className="text-5xl font-bold text-[#ff6820]">23,00,000
              </p>
              <p className="text-lg text-gray-600">AI job openings projected in India by 2027.
              </p>
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