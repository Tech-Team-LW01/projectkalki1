import React from "react";
import { Button } from "@/components/ui/button";
const Cta = () => {
  return (
<>
{/* todo give bg black to all the component not just p tag , postion text in center increase the font side  */}
<div className="w-full mx-auto bg-black p-8">
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
      <p className="text-center  text-white mb-8 ">
        <span className="font-bold text-3xl "> India is gearing up for an AI-powered future are you? 🔥</span>
     
      <span className="block text-2xl ">  Register now for Free AI Foundation Training and take the first step towards transformation</span>
     
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
        <a href="https://forms.gle/uQ2FaWd7EiFAKMK28" target="blank">
        <Button className="bg-[#ffffff] hover:bg-[#ffffff] hover:text-black  text-black  rounded-full px-8">Join Free AI Foundation Training</Button>
        </a>
      </div>
    </div>
</div>
</>  
  )



}

export default Cta;