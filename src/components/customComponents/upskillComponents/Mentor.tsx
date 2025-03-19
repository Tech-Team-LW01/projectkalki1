
"use client"
import React from 'react';
import { Card } from "@/components/ui/card";
import { Check, Globe, User, Flag, Award, Mic2, Briefcase,

  Youtube, Instagram ,Linkedin  ,Cpu ,KeyRound,BriefcaseBusiness 
 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Inter,Poppins } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})
const Mentor = () => {
  const achievements = [
    { icon: Globe, text: "The World Record Holder" },
    { icon: Mic2, text: "2 Times TEDx Speaker" },
    { icon: Flag, text: "Sr. Principal IT Consultant " },
    { icon: Award, text: "Known as “Integration Guru”" },
  ];

  const transfers = [
    { amount: " subscribers", position: "lg:top-[10%] lg:left-[5%] top-[10%] left-[5%]", plateform: "300k+", logo: Youtube },
    { amount: "followers", position: "lg:top-[50%] lg:left-[12%] top-[50%] left-[12%]",plateform: "1.1M+" , logo: Instagram },
    { amount: "followers", position: "lg:bottom-[20%] lg:left-[8%] bottom-[20%] left-[8%]",plateform: "62K+",logo: Linkedin },
    { amount: "years Experience ", position: "lg:top-[15%] lg:right-[3%] top-[15%] right-[3%]",plateform: "22+",logo: BriefcaseBusiness  },
    { amount: " tools & technologies", position: "lg:bottom-[30%] lg:right-[10%] bottom-[30%] right-[10%]" ,plateform: "152+ ",logo:Cpu},
    { amount: " lives Changed ", position: "lg:top-[40%] lg:right-[3%] top-[40%] right-[3%]",plateform: "1M+",logo: Globe }
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="prose prose-invert max-w-none">
              {/* this is for desktop */}
              <h1 className="text-3xl hidden md:block md:text-4xl lg:text-4xl text-center md:text-left font-bold mb-3">
             {/* . Vimal Daga –  */}
              
                <p className="text-[#000080]">  Mr Vimal Daga Driving AI Transformation for India</p>
              </h1>

              {/* for mobile  */}

              <h1 className="text-3xl sm:block md:hidden md:text-4xl lg:text-4xl text-center md:text-left font-bold mb-3">
              
                <p className="text-[#000080]">Mr Vimal Daga Driving AI Transformation for India</p>
              </h1>
              
              <p className="text-md md:text-xl text-center md:text-left text-black mb-6">
              A visionary mentor and tech innovator, Mr. Vimal Daga has been instrumental in AI and Cloud adoption, empowering India’s youth with cutting-edge skills to make them industry and future-ready. His past contributions supported India’s Cloud First Policy, and now, through this Free AI Enablement Training, he aligns with the IndiaAI Mission to democratize AI education.

                {/* Visionary Leader Committed to &quot;Making India Future-Ready&quot; */}
              </p>
              <div className="grid gap-4">
                {achievements.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-3 bg-gradient-to-r from-[#000080] to-black/80 
                      border-[#f0c8c8] hover:bg-[#000080] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-white" />
                      <span className={`text-sm sm:text-base font-medium ${poppins.className} text-white`}>
                        {item.text}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              <blockquote className="text-base sm:text-lg italic mt-8 
                pl-4 border-l-4 border-[#000080] text-black">

With a mission to bridge the gap between learning and real-world applications, he continues to mentor young minds, fostering AI-driven innovation, entrepreneurship, and national growth.



               <br/>
                {/* <span className="text-[#000080] font-medium"> C-level technologists</span> 
                {" "}across cutting-edge domains. */}
              </blockquote>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group">
              <img 
                src="/assets/vimalsir.png"
                alt="Mentor Profile"
                className="w-full h-full object-cover object-center transform 
                  group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Animated Badges - Visible on all screens */}
              <div className="block">
                {transfers.map((transfer, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20 
                    }}
                    className={`absolute ${transfer.position}`}
                  >
                    <Card className="bg-black/90 backdrop-blur-sm p-2 
                      rounded-lg flex items-center gap-2 
                      border-[#000080] shadow-xl transform hover:scale-105 
                      transition-transform">
                      <div className="bg-white p-1.5 rounded-full">
                        <transfer.logo className="w-3 h-3 sm:w-4 sm:h-4 text-[#000080]" />
                      </div>
                      <div className="text-white">
                        <div className="text-xs sm:text-sm font-medium text-white">
                          {transfer.plateform}
                        </div>
                        <div className="text-[10px] sm:text-xs font-semibold">
                          {transfer.amount}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;