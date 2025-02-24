

// components/Collaborator.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { profileData } from "../../../data/profileData";

export function Collaborator() {
  const firstRowData = profileData.slice(0, Math.floor(profileData.length / 3));
  const secondRowData = profileData.slice(Math.floor(profileData.length / 3), Math.floor(2 * profileData.length / 3));
  const thirdRowData = profileData.slice(Math.floor(2 * profileData.length / 3));

  return (
    <div className="max-w-6xl px-4 md:py-4 lg:py-4 py-2 mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl text-[#000080] lg:text-4xl md:text-4xl inline-block">
          Collaborator Section
        </h2>
        <p className="text-black mt-2 text-base sm:text-lg">
          With our DevOps Expert Program, IT professionals have transformed their careers and achieved their goals!
        </p>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-0">
        {/* First Row */}
        <div className="relative flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/4 pr-0 md:pr-4 z-30 mb-4 md:mb-0">
            <div className="md:sticky md:top-0">
              <h3 className="text-2xl font-bold text-[#ff6820] mb-2 md:mb-3 text-center md:text-left">
                Industry Experts
              </h3>
              <p className="text-gray-700 hidden md:block">
                Learn from professionals with years of experience in leading tech companies.
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/4 overflow-hidden">
            <InfiniteMovingCards
              items={firstRowData}
              direction="right"
              speed="slow"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="relative flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/4 pr-0 md:pr-4 z-30 mb-4 md:mb-0">
            <div className="md:sticky md:top-0">
              <h3 className="text-2xl font-bold text-[#07038d] mb-2 md:mb-3 text-center md:text-left">
                Technical Leaders
              </h3>
              <p className="text-gray-700 hidden md:block">
                Connect with technical leaders who shape 
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/4 overflow-hidden">
            <InfiniteMovingCards
              items={secondRowData}
              direction="left"
              speed="slow"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="relative flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/4 pr-0 md:pr-4 z-30 mb-4 md:mb-0">
            <div className="md:sticky md:top-0">
              <h3 className="text-2xl font-bold text-[#046a38] mb-2 md:mb-3 text-center md:text-left">
                Innovation Leaders
              </h3>
              <p className="text-gray-700 hidden md:block">
                Meet the innovators who drive technological advancement.
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/4 overflow-hidden">
            <InfiniteMovingCards
              items={thirdRowData}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}