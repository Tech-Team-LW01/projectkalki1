import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"





interface VideoData {
  id: string;
  title: string;
}

export default function VideoCourseCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState<VideoData>({
    id: 'gtcAmtPnjBw',
    title: 'Default Video'
  });

  const videos: VideoData[] = [
    { id: 'gtcAmtPnjBw', title: 'Video 1' },
    { id: 'xkmOvydcWSY', title: 'Video 2' },
    { id: 'UQ3PcWOI2DY', title: 'Video 3' },
    { id: '9M-wOFpCja4', title: 'Video 4' },
    
  ];

  const handleVideoSelect = (video: VideoData) => {
    setCurrentVideo(video);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-5xl mb-6 mx-auto flex flex-col items-center space-y-4">
      {/* Header - Outside the card */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#000080] ">
  {/* some of the  */}

  What Leaders Say About AI & Its Future in India

        </h2>

        {/*   */}
      </div>

    

      {/* Video Card */}
      {/* todo this is make video frame make vidoe section should be auto play */}
      {/* todo billow make video from we have 4 more video frame , video should be paush when user click on these card that perticular vidoe should play in make video sectoin  */}
      {/* // video url

// 1)  https://www.youtube.com/watch?v=gtcAmtPnjBw -> default video in make vidoe frame
// 2)  https://www.youtube.com/watch?v=xkmOvydcWSY 
// 3)  https://www.youtube.com/watch?v=UQ3PcWOI2DY 
// 4)  https://www.youtube.com/watch?v=9M-wOFpCja4
// 5)  https://www.youtube.com/watch?v=l7zBE-3cH5g */}
      <Card className="w-full overflow-hidden">
        <div className="relative aspect-video bg-gray-200">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=1&enablejsapi=1&controls=1&modestbranding=1&playsinline=1&rel=0${isPlaying ? '' : '&pause=1'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />

          {/* Small label in top left */}
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

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`relative aspect-video cursor-pointer overflow-hidden rounded-lg ${currentVideo.id === video.id ? 'ring-2 ring-[#000080]' : ''}`}
              onClick={() => handleVideoSelect(video)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Button - Outside the card */}
      <a href="https://forms.gle/qwzu4w367nP59mgU6" target="blank">
      <Button className="bg-[#000080] hover:bg-[#000080] text-white rounded-full px-6">
        Take the Course for Free
      </Button>
      </a>
    </div>
  )
}