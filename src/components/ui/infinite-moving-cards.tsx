// components/ui/infinite-moving-cards.tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ProfileCard } from "../customComponents/collaborator/ProfileCard";

interface ProfileData {
  name: string;
  profilePicture: string;
  company: string;
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
      // Create duplicate items for seamless loop
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Add duplicates multiple times to ensure continuous flow
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
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 w-max flex-nowrap",
          start && (direction === "left" ? "animate-scroll" : "animate-scroll-reverse"),
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          "--animation-duration": speed === "fast" ? "80s" : speed === "normal" ? "120s" : "160s"
        } as React.CSSProperties}
      >
        {/* Original items */}
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative flex-shrink-0 px-2"
          >
            <ProfileCard profile={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;