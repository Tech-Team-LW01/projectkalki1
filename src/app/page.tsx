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
export default function Home() {
  return (
    <>
   <Hero/>
    <OurLargeLanguage/>
    <IntroducingTortoiseLLM/>
    <EmpoweringIndia/>
    <IndiasAIChallenge/>
    <AIInfrastructure/>
    <VoiceAgentAI />
    <RoadmapProcess />
    <KalkiProducts />
    </>
   
  );
}
