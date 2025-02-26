
// components/ui/static-cards.tsx
"use client";

import { cn } from "@/lib/utils";
import React from "react";

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

export const StaticCards = ({
  items,
  className,
}: {
  items: ProfileData[];
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", className)}>
      {items.map((item, idx) => (
        <ProfileCard key={idx} profile={item} />
      ))}
    </div>
  );
};

const ProfileCard = ({ profile }: { profile: ProfileData }) => {
  return (
    <div className="backdrop-blur-md bg-white/90 rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
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
          <h3 className="text-lg font-bold text-gray-800 truncate">{profile.name}</h3>
          <p className="text-sm text-gray-500 truncate">{profile.company}</p>
          {profile.role && (
            <p className="text-sm font-medium text-green-600 truncate">{profile.role}</p>
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

export default StaticCards;