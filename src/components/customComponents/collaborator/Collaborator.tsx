// // components/Collaborator.tsx
// "use client";

// import React from "react";
// import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
// import { profileData } from "../../../data/profileData";

// export function Collaborator() {
//   // Split data into three parts
//   const firstRowData = profileData.slice(0, Math.floor(profileData.length / 3));
//   const secondRowData = profileData.slice(Math.floor(profileData.length / 3), Math.floor(2 * profileData.length / 3));
//   const thirdRowData = profileData.slice(Math.floor(2 * profileData.length / 3));


//   return (
//     <div className="max-w-7xl px-4 md:py-4 lg:py-4 py-2 mx-auto">
//       <div className="text-center mb-2">
//         <h2 className="font-bold text-3xl text-[#000080] lg:text-4xl md:text-4xl inline-block">
         
//          Collaborator Section 
//         </h2>
//         <p className="text-gray-500 mt-">
//           With our DevOps Expert Program, IT professionals have transformed their careers and achieved their goals!
//         </p>
//       </div>

//       <div className="flex flex-col ">
//         {/* First Row - Right */}
//         <div className="w-full overflow-hidden">
//           <InfiniteMovingCards
//             items={firstRowData}
//             direction="right"
//             speed="slow"
//           />
//         </div>

//         {/* Second Row - Left */}
//         <div className="w-full overflow-hidden">
//           <InfiniteMovingCards
//             items={secondRowData}
//             direction="left"
//             speed="slow"
//           />
//         </div>

//         {/* Third Row - Right */}
//         <div className="w-full overflow-hidden">
//           <InfiniteMovingCards
//             items={thirdRowData}
//             direction="right"
//             speed="slow"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }





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

      <div className="flex flex-col">
        {/* First Row */}
        <div className="relative flex items-center">
          <div className="w-1/4 pr-4 z-30">
            <div className="sticky top-0">
              <h3 className="text-2xl font-bold text-green-600 mb-3">
                Industry Experts
              </h3>
              <p className="text-gray-700">
                Learn from professionals with years of experience in leading tech companies.
              </p>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <InfiniteMovingCards
              items={firstRowData}
              direction="right"
              speed="slow"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="relative flex items-center">
          <div className="w-1/4 pr-4 z-30">
            <div className="sticky top-0">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Technical Leaders
              </h3>
              <p className="text-gray-700">
                Connect with technical leaders who shape 
              </p>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <InfiniteMovingCards
              items={secondRowData}
              direction="left"
              speed="slow"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="relative flex items-center">
          <div className="w-1/4 pr-4 z-30">
            <div className="sticky top-0">
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Innovation Leaders
              </h3>
              <p className="text-gray-700">
                Meet the innovators who drive technological advancement.
              </p>
            </div>
          </div>
          <div className="w-full overflow-hidden">
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