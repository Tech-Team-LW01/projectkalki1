// // components/ui/infinite-moving-cards.tsx
// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";
// import { ProfileCard } from "../customComponents/collaborator/ProfileCard";

// interface ProfileData {
//   name: string;
//   profilePicture: string;
//   company: string;
// }

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "slow",
//   pauseOnHover = true,
//   className,
// }: {
//   items: ProfileData[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     addAnimation();
//   }, []);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       // Create duplicate items for seamless loop
//       const scrollerContent = Array.from(scrollerRef.current.children);
      
//       // Add duplicates multiple times to ensure continuous flow
//       for (let i = 0; i < 3; i++) {
//         scrollerContent.forEach((item) => {
//           const duplicatedItem = item.cloneNode(true);
//           if (scrollerRef.current) {
//             scrollerRef.current.appendChild(duplicatedItem);
//           }
//         });
//       }

//       setStart(true);
//     }
//   }

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex min-w-full gap-4 py-4 w-max flex-nowrap",
//           start && (direction === "left" ? "animate-scroll" : "animate-scroll-reverse"),
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//         style={{
//           "--animation-duration": speed === "fast" ? "80s" : speed === "normal" ? "120s" : "160s"
//         } as React.CSSProperties}
//       >
//         {/* Original items */}
//         {items.map((item, idx) => (
//           <li
//             key={idx}
//             className="relative flex-shrink-0 px-2"
//           >
//             <ProfileCard profile={item} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InfiniteMovingCards;



// components/ui/infinite-moving-cards.tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface ProfileData {
  name: string;
  profilePicture: string;
  company: string;
  role?: string;
  tags?: string[];
  status?: "online" | "offline";
  stats?: {
    projects?: number;
    followers?: number;
  };
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: ProfileData[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      for (let i = 0; i < 3; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent",
        "after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-white after:to-transparent",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-6 w-max flex-nowrap",
          start && (direction === "left" ? "animate-scroll" : "animate-scroll-reverse"),
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          "--animation-duration": speed === "fast" ? "80s" : speed === "normal" ? "120s" : "160s"
        } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative flex-shrink-0 px-2 transition-transform hover:scale-105"
          >
            <ProfileCard profile={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProfileCard = ({ profile }: { profile: ProfileData }) => {
  return (
    <div className="w-full backdrop-blur-md bg-white/90 rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center">
        {/* Profile Image with Gradient Ring */}
        <div className="relative mb-3 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300" />
          <div className="relative">
            <img
              src={profile.profilePicture}
              alt={profile.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
            />
            {profile.status && (
              <div className={cn(
                "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
                profile.status === "online" ? "bg-green-500" : "bg-gray-400"
              )} />
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-1">
          <h3 className="text-lg font-bold text-gray-800">{profile.name}</h3>
          <p className="text-xs text-gray-500">{profile.company}</p>
          {profile.role && (
            <p className="text-xs font-medium text-green-600">{profile.role}</p>
          )}
        </div>

        {/* Tags */}
        {profile.tags && profile.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1 justify-center">
            {profile.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-orange-50 text-orange-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        {profile.stats && (
          <div className="mt-4 flex justify-center space-x-4 border-t border-gray-100 pt-3 w-full">
            {profile.stats.projects !== undefined && (
              <div className="text-center">
                <span className="block text-lg font-bold text-green-600">
                  {profile.stats.projects}
                </span>
                <span className="text-xs text-gray-500">Projects</span>
              </div>
            )}
            {profile.stats.followers !== undefined && (
              <div className="text-center">
                <span className="block text-lg font-bold text-orange-500">
                  {profile.stats.followers}
                </span>
                <span className="text-xs text-gray-500">Followers</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;