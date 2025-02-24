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
import WhyHybridAITraining from "@/components/customComponents/WhyHybridAITraining/WhyHybridAITraining";
import GovernmentAndPrivateSector from "@/components/customComponents/GovernmentAndPrivateSector/GovernmentAndPrivateSector";
import GlobalAILandscape from "@/components/customComponents/GlobalAILandscape";
import { Collaborator } from "@/components/customComponents/collaborator/Collaborator";
import JoinSection from "@/components/customComponents/Join/Join";
export default function Home() {
  return (
    <>
  <div id="hero">
  <Hero />
</div>
<div id="language-model">
  <OurLargeLanguage />
</div>
<div id="india-ai">
  <EmpoweringIndia />
</div>


<div id="challenges">
  <IndiasAIChallenge />
</div>


<div id="infrastructure">
  <AIInfrastructure />
</div>


<div id="global-ai">
  <GlobalAILandscape />
</div>

<div id="voice-agent">
  <VoiceAgentAI />
</div>

<div id="roadmap">
  <RoadmapProcess />
</div>

<div id="hybrid-ai">
  <WhyHybridAITraining />
</div>
{/* why data first approach need to be here */}

<div id="products">
  <KalkiProducts />
</div>


<div id="goverment">
  <GovernmentAndPrivateSector />
</div>
<div id="join">
  <JoinSection />
</div>
{/* ============================== */}



<div id="collaborator">
  <Collaborator />
</div>
<div id="tortoise">
  <IntroducingTortoiseLLM />
</div>








   </>
  );
}
