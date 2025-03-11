import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Circle, Play } from "lucide-react"

export default function VideoCourseCard() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
      {/* Header - Outside the card */}
      <div className="text-center">
        <h2 className="text-xl font-medium">
          Become An <span className="text-[#000080] font-semibold">Multi-Agent Expert</span> in Hours
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
          <img
            src="/assets/video-thumbnail.jpg"
            alt="Video thumbnail showing course instructors"
            className="w-full h-full object-cover"
          />

          {/* todo , add video /asstes/video.mp4 when click on play button then hide tuhumnail and start playing video, and when click on paush button hide vide and show tuumbnail */}

          {/* Small red label in top left */}
          <div className="absolute top-2 left-2 bg-[#000080] text-white text-xs px-2 py-1 rounded">DeepLearning.AI</div>

          {/* Red text in the middle */}
          <div className="absolute top-1/4 left-0 right-0 text-center">
            <div className="text-[#000080] font-medium">AI Agent Workflows with KalkiAI</div>
            <div className="text-sm">João Moura</div>
          </div>

          {/* CrewAI logo */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded">KalkiAI</div>
            <div className="bg-[#000080] rounded-full w-4 h-4"></div>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-2 cursor-pointer">
              <Play className="h-6 w-6 fill-[#000080] text-[#000080]" />
            </div>
          </div>

          {/* Instructor labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between">
            <div className="bg-[#000080] text-white p-2 max-w-[180px]">
              <div className="text-sm font-medium">João Moura</div>
              <div className="text-xs">Co-Founder and CEO, KalkiAI</div>
            </div>
            <div className="bg-[#000080] text-white p-2 max-w-[180px]">
              <div className="text-sm font-medium">Andrew Ng</div>
              <div className="text-xs">Founder, DeepLearning.AI</div>
            </div>
          </div>

          {/* Quote overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-2 px-4">
            <p className="text-sm">I'm excited to introduce "Multi-AI Agent Systems with KalkiAI"</p>
          </div>
        </div>
      </Card>

      {/* Button - Outside the card */}
      <Button className="bg-[000080] hover:bg-[#000080] text-white rounded-full px-6">Take the Course for Free</Button>
    </div>
  )
}

