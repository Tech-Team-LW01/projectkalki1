import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, GraduationCap, Briefcase, Code } from 'lucide-react'

export default function ProgramDetails() {
  return (
    // todo change the bg color from #181A1B to white and change text color from white to black
    <div className="bg-white pt-4" id="programcohorts">

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Headers */}
      
        {/* Cohort Card */}
        <Card className="p-6 bg-white">
          <div className="space-y-6">

            {/* Card Header */}
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-sm sm:text-lg text-black">
              Training details
              </h3>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                Limited Seats available
              </span>
            </div>

            {/* Schedule Table */}
            <div className="space-y-4">
              {/* Header row - hidden on mobile, visible on desktop */}
              <div className="hidden sm:grid sm:grid-cols-4 text-sm text-gray-500 pb-2">
                <div className="flex items-center text-sm text-black gap-2">Date</div>
                <div className="flex text-black items-center gap-2">Time</div>
                <div className="text-black text-sm">Mode</div>
                <div className="text-black text-sm">Action</div>
              </div>

              {/* Program Induction Rows with different date ranges */}
              {[
                {
                  date: "26th Dec, 2024 - 1st Jan, 2025",
                  time: "02:00 pm - 08:00 pm IST",
                },
                
              ].map((program, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:grid sm:grid-cols-4 text-sm border-b pb-4 gap-y-2 sm:gap-y-0"
                >
                  {/* Mobile: Stacked layout */}
                  <div className="flex flex-col sm:hidden">
                    <div className="font-medium text-sm text-black">Duration</div>
                    <div className="text-black text-sm mb-2">{program.date}</div>
                    
                    <div className="font-medium text-sm text-black">Time</div>
                    <div className="text-black text-sm mb-2">{program.time}</div>
                    
                    <div className="font-medium text-sm text-black">Location</div>
                    <div className="text-black text-sm mb-2">Online</div>
                  </div>

                  {/* Desktop: Grid layout (unchanged) */}
                  <div className="hidden sm:block">
                    <div className="font-medium text-sm text-black">{program.date}</div>
                  </div>
                  <div className="hidden sm:block text-black text-sm">{program.time}</div>
                  <div className="hidden sm:block text-black text-sm">Online</div>
                  
                  {/* Action button - same for both mobile and desktop */}
                  <div>
                    <a href="#bookyourseat">
                   
                      <Button className="w-full sm:w-auto bg-[#000080]  hover:bg-[#000080] ">
                        Book your Seat 
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

     
      </div>
    </div>
  );
}
