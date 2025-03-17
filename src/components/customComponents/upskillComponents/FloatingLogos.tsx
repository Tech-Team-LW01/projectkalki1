"use client"
import { motion } from "framer-motion"

const logos = [
  "/assets/logo1.svg",
  "/assets/logo2.svg",
  "/assets/logo3.svg",
  "/assets/logo4.svg",
  "/assets/logo5.svg",
  "/assets/logo6.svg",
  "/assets/logo7.svg",
  "/assets/logo8.svg",
  "/assets/logo9.svg",
  "/assets/logo1.svg",
  "/assets/logo4.svg",
  "/assets/logo3.svg",
]

const LogoColumn = ({ startIndex }: { startIndex: number }) => {
  const columnLogos = logos.slice(startIndex, startIndex + 4)
  
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ y: 0 }}
      animate={{ y: ["-100%", "0%"] }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      {columnLogos.map((logo, index) => (
        <div key={index} className="w-32 h-32 p-4 bg-white rounded-lg shadow-md">
          <img src={logo} alt={`Logo ${startIndex + index + 1}`} className="w-full h-full object-contain" />
        </div>
      ))}
      {/* Duplicate logos for seamless loop */}
      {columnLogos.map((logo, index) => (
        <div key={`duplicate-${index}`} className="w-32 h-32 p-4 bg-white rounded-lg shadow-md">
          <img src={logo} alt={`Logo ${startIndex + index + 1}`} className="w-full h-full object-contain" />
        </div>
      ))}
    </motion.div>
  )
}

export function FloatingLogos() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex justify-between px-8">
        {[0, 4, 8].map((startIndex) => (
          <LogoColumn key={startIndex} startIndex={startIndex} />
        ))}
      </div>
    </div>
  )
}

