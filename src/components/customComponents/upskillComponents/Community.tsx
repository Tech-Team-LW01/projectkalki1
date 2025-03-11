"use client"
import React from "react"
import { Button } from "@/components/ui/button"

export default function DeveloperCommunity() {
  return (
    <div className="bg-white text-black py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6 max-w-xl">
        Be Part of a{" "}
        <span className="relative">
          Global
          <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#000080]"></span>
        </span>{" "}
        Developer Community
      </h2>

      <p className="text-gray-800 max-w-xl mb-8">
        Connect with like-minded developers in our forum, contribute to the open-source project on GitHub, and
        collaborate on exciting AI automation projects. Together, we can accelerate the development of cutting-edge AI
        solutions.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-[#000080] hover:bg-white text-white hover:text-black rounded-full px-8">Join Our Forum</Button>

        <Button variant="outline" className="border-gray-600 text-black hover:bg-[#000080] hover:text-white rounded-full px-8">
          Explore GitHub Discussions
        </Button>
      </div>


      <div className="w-full mx-auto">
        <img src="/assets/courseCommunity.jpg" className="w-full h-full"></img>
      </div>
    </div>
  )
}

