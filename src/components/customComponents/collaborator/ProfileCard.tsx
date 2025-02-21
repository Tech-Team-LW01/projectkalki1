// components/ProfileCard.tsx
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ProfileCardProps {
  profile: {
    name: string;
    profilePicture: string;
    company: string;
  };
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const { name, profilePicture, company } = profile;

  return (
    <Card className="w-[180px] h-[220px] overflow-hidden bg-white border border-gray-200 shadow-lg hover:scale-105 transition-all duration-300 group">
      {/* Profile Image Container */}
      <div className="w-full h-[140px] relative bg-gradient-to-b from-blue-50 to-white group-hover:from-blue-100 transition-colors duration-300">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image 
              src={profilePicture} 
              alt={name} 
              width={96} 
              height={96} 
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4 text-center">
        <h3 className="font-medium text-gray-800 text-lg leading-snug mb-1 truncate group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-gray-600 truncate">
          {company}
        </p>
      </div>
    </Card>
  );
}