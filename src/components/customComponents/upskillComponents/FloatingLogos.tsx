"use client"
import { motion } from "framer-motion"

const logos = [
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
]

export function FloatingLogos() {
  return (
    <div className="relative w-full h-full">
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          className="absolute w-16 h-16 rounded-lg shadow-md"
          initial={{
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 + 100,
            opacity: 0,
          }}
          animate={{
            y: [null, -400],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

