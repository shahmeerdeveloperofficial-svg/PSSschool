import dynamic from "next/dynamic";

import HeroHeader from "../components/HeroHeader";
import Bento from "../components/Bento";
import Team from "@/components/Team";
import About from "@/components/About";

const Pipeline = dynamic(() => import("../components/Pipeline"));
const Marquee = dynamic(() => import("../components/Marquee"), { ssr: false });
const SuccessStories = dynamic(() => import("../components/SuccessStories"));
const Clubs = dynamic(() => import("../components/Clubs"));
const VideoSec = dynamic(() => import("../components/VideoSec"));
const PhotoGallery = dynamic(() => import("../components/PhotoGallery"));
const AccessLMS = dynamic(() => import("../components/AccessLMS"));
const Stats2 = dynamic(() => import("../components/Stats2"));

export default function Home() {
  return (
    <main className="bg-amber-50/20">
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
      <Marquee />
      <Pipeline />
      <About />
      <SuccessStories />
      <Clubs direction={"right"} speed={0.2} />
      <VideoSec />
      <PhotoGallery />
      <Team />
      <AccessLMS />
      <Stats2 />
    </main>
  );
}
