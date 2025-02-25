


// components/Collaborator.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { categorizedProfiles } from "../../../data/profileData";

export function Collaborator() {
  return (
    <div className="max-w-6xl px-4 md:py-4 lg:py-4 py-2 mx-auto" id="collaborator">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl text-[#000080] lg:text-4xl md:text-4xl inline-block">
          Collaborator Section
        </h2>
        <p className="text-black mt-2 text-base sm:text-lg">
          With our DevOps Expert Program, IT professionals have transformed their careers and achieved their goals!
        </p>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-12">
        {categorizedProfiles.map((category, index) => (
          <div 
            key={category.id}
            className="relative flex flex-col md:flex-row md:items-center"
          >
            <div className="w-full md:w-1/4 pr-0 md:pr-4 z-30 mb-4 md:mb-0">
              <div className="md:sticky md:top-0">
                <h3 
                  className="text-2xl font-bold mb-2 md:mb-3 text-center md:text-left"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                <p className="text-gray-700 hidden md:block">
                  {category.description}
                </p>
              </div>
            </div>
            <div className="w-full md:w-3/4 overflow-hidden">
              <InfiniteMovingCards
                items={category.profiles}
                direction={index % 2 === 0 ? "right" : "left"}
                speed="slow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}