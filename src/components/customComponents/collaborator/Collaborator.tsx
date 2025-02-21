// components/Collaborator.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { profileData } from "../../../data/profileData";

export function Collaborator() {
  // Split data into three parts
  const firstRowData = profileData.slice(0, Math.floor(profileData.length / 3));
  const secondRowData = profileData.slice(Math.floor(profileData.length / 3), Math.floor(2 * profileData.length / 3));
  const thirdRowData = profileData.slice(Math.floor(2 * profileData.length / 3));

  return (
    <div className="max-w-7xl px-4 md:py-8 lg:py-8 py-2 mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl inline-block">
         
        <span className="text-[#ff0000]"> Collaborator</span> Section 
        </h2>
        <p className="text-gray-500 mt-">
          With our DevOps Expert Program, IT professionals have transformed their careers and achieved their goals!
        </p>
      </div>

      <div className="flex flex-col ">
        {/* First Row - Right */}
        <div className="w-full overflow-hidden">
          <InfiniteMovingCards
            items={firstRowData}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Second Row - Left */}
        <div className="w-full overflow-hidden">
          <InfiniteMovingCards
            items={secondRowData}
            direction="left"
            speed="slow"
          />
        </div>

        {/* Third Row - Right */}
        <div className="w-full overflow-hidden">
          <InfiniteMovingCards
            items={thirdRowData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}