"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Power } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 }
};

export default function JoinSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50">
      <div className="container max-w-6xl mx-auto px-4 py-6 md:py-6">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        {/* Hero Section */}
        <motion.div 
          className="mb-6 space-y-2 text-center"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h1 
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-[#07038d] bg-clip-text mx-auto"
          >
            Join the AI Revolution
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="max-w-3xl text-base lg:text-lg text-black leading-relaxed mx-auto"
          >
            With a team of 200+ AI experts, we are on a mission to create India's first Foundation AI Model that prioritizes sustainability sovereignty and inclusivity.
          </motion.p>
          
          <motion.p 
            variants={fadeIn}
            className="text-base lg:text-lg font-medium flex items-center justify-center gap-2"
          >
            <span className="animate-bounce">📢</span>
            The Future of AI is Here. The Future of AI is India.
          </motion.p>
          
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              variant="default"
              className="bg-gradient-to-r from-[#046a38] to-[#ff6820] hover:opacity-90 transition-opacity"
            >
              Get Involved
            </Button>
            <Button variant="outline" className="hover:bg-green-50 transition-colors">
              Partner With Us
            </Button>
            <Button variant="outline" className="hover:bg-green-50 transition-colors">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto"
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.3 } }
          }}
        >
          {/* First Card */}
          <motion.div
            variants={fadeIn}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow h-full">
              <CardContent className="space-y-2 p-6">
                <div className="relative group inline-flex">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300" />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border-2 border-white">
                    <Briefcase className="h-6 w-6 text-black" />
                  </div>
                </div>

                <h2 className="text-xl lg:text-2xl font-semibold tracking-tight">
                  The Future
                </h2>
                <p className="text-black text-base lg:text-lg leading-relaxed">
                  📢 The Future of AI is Here. The Future of AI is India.
                </p>
                <a target="blank" href="https://forms.gle/bCrh7DJSyvwE5ZmC7 ">
                <Button 
                  variant="outline" 
                  className="group hover:bg-green-600 hover:text-white transition-colors"
                >
                  Open Position
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second Card */}
          <motion.div
            variants={fadeIn}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow h-full">
              <CardContent className="space-y-2 p-6">
                <div className="relative group inline-flex">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300" />
                  <div className="relative inline-flex  h-12 w-12 items-center justify-center rounded-2xl bg-white border-2 border-white">
                    <Power className="h-6 w-6 text-black" />
                  </div>
                </div>

                <h2 className="text-xl lg:text-2xl font-semibold tracking-tight ">
                  Get Involved
                </h2>
                <p className="text-black text-base lg:text-lg leading-relaxed">
                  👉 Partner With Us - Contact Us
                </p>
                <a target="blank" href="https://forms.gle/Efamoe3Ec5R8AKRx5 ">
                <Button 
                  variant="outline" 
                  className="group hover:bg-green-600 hover:text-white transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}