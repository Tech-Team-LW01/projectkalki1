"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function DeveloperCommunity() {
  return (
    <div className="bg-white text-black py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-3xl text-[#000080] font-bold mb-6 max-w-xl">

        
       Join India’s AI Revolution{" "}
        <span className="relative">
          :
          {/* <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#000080]"></span> */}
        </span>{" "}
        Project KALKI
      </h2>

      <p className="text-gray-800 max-w-xl mb-8">
      Join 200+ passionate AI enthusiasts, collaborate on real-world projects, and contribute to India’s First Indigenous AI Foundation Model—shaping the future of AI while supporting the IndiaAI Mission. 🚀 AI from India, for the World!

      </p>
{/* todo get  */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
        <Button className="bg-[#000080] hover:bg-white text-white hover:text-black rounded-full px-8">Join Project KALKI Team</Button>
        </Link>
        {/* <Button variant="outline" className="border-gray-600 text-black hover:bg-[#000080] hover:text-white rounded-full px-8">
        Join Free AI Enablement Training

        </Button> */}
      </div>


      <div className="w-full mx-auto">
        <img src="/assets/courseCommunity.jpg" className="w-full h-full"></img>
      </div>




      <div>
      <p className="text-gray-800 max-w-xl mb-8">
      India is gearing up for an AI-powered future—are you? 🔥 Register now for Free AI Enablement Training and take the first step towards transformation

      </p>

      {/*  */}

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
        <a href="https://forms.gle/qwzu4w367nP59mgU6" target="blank">
        <Button className="bg-[#000080] hover:bg-white text-white hover:text-black rounded-full px-8">Join Free AI Enablement Training</Button>
        </a>
      </div>
      </div>
    </div>
  )
}

