import dynamic from "next/dynamic";

import HeroHeader from "../components/HeroHeader";
import Bento from "../components/Bento";
import Team from "@/components/Team";
import About from "@/components/About";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Pipeline = dynamic(() => import("../components/Pipeline"));
const Marquee = dynamic(() => import("../components/Marquee"), { ssr: false });
const SuccessStories = dynamic(() => import("../components/SuccessStories"));
const Clubs = dynamic(() => import("../components/Clubs"));
const VideoSec = dynamic(() => import("../components/VideoSec"));
const PhotoGallery = dynamic(() => import("../components/PhotoGallery"));

export default function Home() {
  return (
    <main className="bg-[#FCFAF7] overflow-x-hidden">
      <HeroHeader
        title={
          <>
            THE PAKISTAN <br />
            <span className="text-main">SCHOOL OF SCIENCE</span>
          </>
        }
        description="A premier institution of STEM innovation, concept-driven science pedagogy, Pre-Medical & Pre-Engineering mastery, and character excellence."
      />

      <Bento />

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <Marquee />
      </ScrollReveal>

      <Pipeline />

      <About />

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <SuccessStories />
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <Clubs direction={"right"} speed={0.2} />
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <VideoSec />
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <PhotoGallery />
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <Team />
      </ScrollReveal>
    </main>
  );
}
