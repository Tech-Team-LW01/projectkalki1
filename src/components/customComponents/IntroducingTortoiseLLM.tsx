import StickyContent from "../ui/StickyContent";

type ContentItem = {
    title: string;
    description: React.ReactNode;
    content:string;
    image: string;
  };
  

  const content: ContentItem[] = [
    {
      title: "Aligned with India's National AI Strategy (NITI Aayog)",
      content:"The Government of India’s National Strategy for AI (#AIforAll) envisions India as an AI powerhouse. Project Kalki directly contributes to this vision by:",
      description: (
        <ul>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Developing an AI ecosystem that is self-reliant and sustainable</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Boosting AI adoption across key sectors like healthcare, education, and governance</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Enhancing India's AI research capabilities and bridging the talent gap</span>
          </li>
        </ul>
      ),
      image: "/assets/1.webp",
    },
    {
      title: "Supporting Aatmanirbhar Bharat (Self-Reliant India Mission)",
      content:"By building India’s first indigenous AI LLM without any hardware imports, Project Kalki is a true embodiment of Aatmanirbhar Bharat. We achieve this by:",
      description: (
        <ul>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Using repurposed and refurbished computing devices to create high-performance AI clusters</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Eliminating dependence on foreign AI infrastructure while fostering in-house innovation</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Creating AI solutions specifically tailored for Indian languages, industries, and governance needs</span>
          </li>
        </ul>
      ),
      image: "/assets/2.webp",
    },
    {
      title: "Green AI: In Line with India's Renewable Energy Goals",
      content:"AI models traditionally require massive computing power, leading to high energy consumption. Project Kalki ensures AI development without harming the environment, aligned with:",
      description: (
        <ul>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>National Solar Mission – Our AI data centers are powered by solar energy</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>National Wind-Solar Hybrid Policy – We integrate multiple renewable energy sources</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Sustainable Development Goals (SDGs) – Reducing e-waste through refurbished hardware</span>
          </li>
        </ul>
      ),
      image: "/assets/3.webp",
    },
    {
      title: "Strengthening Digital India and Data Sovereignty",
      content:"With India prioritizing data localization and security, Project Kalki ensures that India’s AI future remains in India’s hands.",
      description: (
        <ul>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Aligned with the Digital India Initiative – Making AI accessible across sectors</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Supporting India's Personal Data Protection Bill – Ensuring ethical and secure AI development</span>
          </li>
          <li className="flex items-start">
            <img className="w-4 h-4 mt-1 mr-2" src="/assets/checkMark.png" alt="checkmark"/>
            <span>Fostering Open-Source AI Innovation – Encouraging collaboration across academic, industry, and government bodies</span>
          </li>
        </ul>
      ),
      image:"/assets/2.webp",
    },
  ];

const IntroducingTortoiseLLM = () => {
  return (
    <div className="p-10">
        <div className="text-center max-w-5xl mx-auto">
    <h1 className="text-[#ff0000] text-2xl font-bold mb-4">
        Introducing Tortoise LLM: India's First Energy and Cost-Efficient AI Model
    </h1>
    <p className="text-black font-bold text-lg">
        We have developed our own LLM architecture – the Tortoise LLM Model, specifically designed to sustain and operate efficiently in limited-resource environments. This breakthrough reduces power consumption and costs, making AI more affordable and accessible.
    </p>
</div>

      <StickyContent content={content} />
    </div>
  );
};

export default IntroducingTortoiseLLM;