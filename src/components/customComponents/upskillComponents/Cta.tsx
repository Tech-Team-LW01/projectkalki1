import React from "react";
import { Button } from "@/components/ui/button";
const Cta = () => {
  return (
<>
{/* todo give bg black to all the component not just p tag , postion text in center increase the font side  */}
<div className="w-full mx-auto bg-black p-8">
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
      <p className="text-center  text-2xl text-white mb-8">
      India is gearing up for an AI-powered future—are you? 🔥 Register now for Free AI Enablement Training and take the first step towards transformation
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
        <a href="https://forms.gle/qwzu4w367nP59mgU6" target="blank">
        <Button className="bg-[#000080] hover:bg-white text-white hover:text-black rounded-full px-8">Join Free AI Enablement Training</Button>
        </a>
      </div>
    </div>
</div>
</>  
  )



}

export default Cta;