import Image from "next/image";
import IntroducingTortoiseLLM from "./../components/customComponents/IntroducingTortoiseLLM"
import EmpoweringIndia from "@/components/customComponents/EmpoweringIndia";
import OurLargeLanguage from "@/components/customComponents/OurLargeLanguage";
import IndiasAIChallenge from "@/components/customComponents/IndiasAIChallenge"
import KalkiProducts from "@/components/customComponents/KalkiProducts";
import RoadmapProcess from "@/components/customComponents/RoadMapProcess";
import VoiceAgentAI from "@/components/customComponents/VoiceAgentAi";
import AIInfrastructure from "@/components/customComponents/AIInfrastructure";
import { Hero } from "@/components/customComponents/Hero/Hero";
<<<<<<< HEAD
import WhyHybridAITraining from "@/components/customComponents/WhyHybridAITraining/WhyHybridAITraining";
import GovernmentAndPrivateSector from "@/components/customComponents/GovernmentAndPrivateSector/GovernmentAndPrivateSector";
=======
import GlobalAILandscape from "@/components/customComponents/GlobalAILandscape";
>>>>>>> 31d9cda79422e9a1d19d2856947c7fa3153e04d3
export default function Home() {
  return (
    <>
   <Hero/>
   <GlobalAILandscape />
    <OurLargeLanguage/>

    <IntroducingTortoiseLLM/>
    <WhyHybridAITraining/>
    <EmpoweringIndia/>
    <IndiasAIChallenge/>
    <AIInfrastructure/>
    <VoiceAgentAI />
    <RoadmapProcess />
    <KalkiProducts />
    <GovernmentAndPrivateSector/>
    </>
   
  );
}
