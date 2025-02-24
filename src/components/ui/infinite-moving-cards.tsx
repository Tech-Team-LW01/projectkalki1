
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
          "flex min-w-full gap-4 md:gap-4 sm:gap-2 py-6 sm:py-4 w-max flex-nowrap",
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
            className="relative flex-shrink-0 px-2 sm:px-1 transition-transform hover:scale-105"
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
    <div className="w-56 md:w-56 sm:w-32 backdrop-blur-md bg-white/90 rounded-2xl p-4 sm:p-2 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center">
        {/* Profile Image with Gradient Ring */}
        <div className="relative mb-3 sm:mb-2 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300" />
          <div className="relative">
            <img
              src={profile.profilePicture}
              alt={profile.name}
              className="w-16 h-16 md:w-16 md:h-16 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
            />
            {profile.status && (
              <div className={cn(
                "absolute bottom-0 right-0 w-3 h-3 sm:w-2 sm:h-2 rounded-full border-2 border-white",
                profile.status === "online" ? "bg-green-500" : "bg-gray-400"
              )} />
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-1 sm:space-y-0.5">
          <h3 className="text-lg md:text-lg sm:text-xs font-bold text-gray-800 truncate">{profile.name}</h3>
          <p className="text-xs md:text-xs sm:text-[8px] text-gray-500 truncate">{profile.company}</p>
          {profile.role && (
            <p className="text-xs md:text-xs sm:text-[8px] font-medium text-green-600 truncate">{profile.role}</p>
          )}
        </div>

        {/* Tags - Hidden on mobile */}
        {profile.tags && profile.tags.length > 0 && (
          <div className="mt-3 md:flex sm:hidden flex-wrap gap-1 justify-center">
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

        {/* Stats - Hidden on mobile */}
        {profile.stats && (
          <div className="mt-4 md:flex sm:hidden justify-center space-x-4 border-t border-gray-100 pt-3 w-full">
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