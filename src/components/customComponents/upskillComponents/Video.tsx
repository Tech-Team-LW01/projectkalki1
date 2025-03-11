import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Circle, Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

export default function VideoCourseCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
      {/* Header - Outside the card */}
      <div className="text-center">
        <h2 className="text-3xl font-medium">
          Become An <span className="text-[#000080]  font-bold">Multi-Agent Expert</span> in Hours
        </h2>
      </div>

      {/* Bullet points - Outside the card */}
      <div className="flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Circle className="h-3 w-3 fill-[#000080] text-[#000080]" />
          <span>Designing Multi-Agent Systems</span>
        </div>
        <div className="flex items-center gap-1">
          <Circle className="h-3 w-3 fill-[#000080] text-[#000080]" />
          <span>Tool Integration</span>
        </div>
        <div className="flex items-center gap-1">
          <Circle className="h-3 w-3 fill-[#000080] text-[#000080]" />
          <span>Real-World Applications</span>
        </div>
      </div>

      {/* Video Card */}
      <Card className="w-full overflow-hidden">
        <div className="relative aspect-video bg-gray-200">
          {!isPlaying && (
            <img
              src="/assets/kalki.jpg"
              alt="Video thumbnail showing course instructors"
              className="w-full h-full object-cover"
            />
          )}

          <video
            ref={videoRef}
            src="/assets/video.mp4"
            className={`w-full h-full object-cover ${!isPlaying ? 'hidden' : ''}`}
          />

          {/* Small red label in top left */}
          <div className="absolute top-2 left-2 bg-[#000080] text-white text-xs px-2 py-1 rounded">
            DeepLearning.AI
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="bg-white rounded-full p-2 cursor-pointer"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 fill-[#000080] text-[#000080]" />
              ) : (
                <Play className="h-6 w-6 fill-[#000080] text-[#000080]" />
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Button - Outside the card */}
      <Button className="bg-[#000080] hover:bg-[#000080] text-white rounded-full px-6">
        Take the Course for Free
      </Button>
    </div>
  )
}