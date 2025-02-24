
import React from 'react';
import StickyContent from "../ui/StickyContent";
import Image from 'next/image';

type ContentItem = {
  title: string;
  description: React.ReactNode;
  content: string;
  image: string;
};

const content: ContentItem[] = [
  {
    title: "Aligned with India's National AI Strategy (NITI Aayog)",
    content: "The Government of India's National Strategy for AI (#AIforAll) envisions India as an AI powerhouse. Project Kalki directly contributes to this vision by:",
    description: (
      <ul className="space-y-3">
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Developing an AI ecosystem that is self-reliant and sustainable</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Boosting AI adoption across key sectors like healthcare, education, and governance</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Enhancing India&apos;s AI research capabilities and bridging the talent gap</span>
        </li>
      </ul>
    ),
    image: "/assets/TortoiseLLM/1.jpeg",
  },
  {
    title: "Supporting Aatmanirbhar Bharat (Self-Reliant India Mission)",
    content: "By building India's first indigenous AI LLM without any hardware imports, Project Kalki is a true embodiment of Aatmanirbhar Bharat. We achieve this by:",
    description: (
      <ul className="space-y-3">
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Using repurposed and refurbished computing devices to create high-performance AI clusters</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Eliminating dependence on foreign AI infrastructure while fostering in-house innovation</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Creating AI solutions specifically tailored for Indian languages, industries, and governance needs</span>
        </li>
      </ul>
    ),
    image: "/assets/TortoiseLLM/2.jpeg",
  },
  {
    title: "Green AI: In Line with India's Renewable Energy Goals",
    content: "AI models traditionally require massive computing power, leading to high energy consumption. Project Kalki ensures AI development without harming the environment, aligned with:",
    description: (
      <ul className="space-y-3">
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">National Solar Mission – Our AI data centers are powered by solar energy</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">National Wind-Solar Hybrid Policy – We integrate multiple renewable energy sources</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Sustainable Development Goals (SDGs) – Reducing e-waste through refurbished hardware</span>
        </li>
      </ul>
    ),
    image: "/assets/TortoiseLLM/3.jpeg",
  },
  {
    title: "Strengthening Digital India and Data Sovereignty",
    content: "With India prioritizing data localization and security, Project Kalki ensures that India's AI future remains in India's hands.",
    description: (
      <ul className="space-y-3">
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Aligned with the Digital India Initiative – Making AI accessible across sectors</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Supporting India&apos;s Personal Data Protection Bill – Ensuring ethical and secure AI development</span>
        </li>
        <li className="flex items-start">
          <img className="w-4 h-4 mt-1 mr-2 flex-shrink-0" src="/assets/checkMark.png" alt="checkmark" />
          <span className="text-sm sm:text-base">Fostering Open-Source AI Innovation – Encouraging collaboration across academic, industry, and government bodies</span>
        </li>
      </ul>
    ),
    image: "/assets/2.webp",
  },
];

// Card component for mobile view
const MobileCard = ({ item }: { item: ContentItem }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6">
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-bold text-[#000080]">
          {item.title}
        </h3>
        <p className="text-gray-700 text-sm">
          {item.content}
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          {item.description}
        </div>
      </div>
    </div>
  );
};

const IntroducingTortoiseLLM = () => {
  return (
    <div className="px-4 py-4 sm:p-4">
      {/* Header Section */}
      <div className="text-center max-w-5xl mx-auto mb-8">
        <h1 className="text-[#07038d] text-3xl sm:text-4xl font-bold mb-4">
          Introducing Tortoise LLM: India&apos;s First Energy and Cost-Efficient AI Model
        </h1>
        <p className="text-black font-bold text-base sm:text-lg">
          We have developed our own LLM architecture – the Tortoise LLM Model, specifically designed to sustain and operate efficiently in limited-resource environments. This breakthrough reduces power consumption and costs, making AI more affordable and accessible.
        </p>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden">
        <div className="space-y-2">
          {content.map((item, index) => (
            <MobileCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <StickyContent content={content} />
      </div>
    </div>
  );
};

export default IntroducingTortoiseLLM;