import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const StudentCounselling = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Scientific Mentoring & Career Advisory",
      },
      {
        type: "p",
        text: "At The Pakistan School of Science, individual student guidance is woven directly into our academic ethos. We recognize that true scholarly excellence stems from emotional wellness, intellectual resilience, and proactive career pathway planning.",
      },
      {
        type: "p",
        text: "Our specialized counsellors and faculty mentors provide one-on-one academic roadmaps, university entrance guidance (Medical, Engineering, Computer Science, and Pure Sciences), time management workshops, and mental wellness support.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Career Pathways & Global University Readiness",
      },
      {
        type: "p",
        text: "We prepare senior scholars for top-tier national and international university admissions, scholarship applications, and standardized examination readiness with structured counseling milestones.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Student Counselling & Mentoring"}
        description="Empowering Scholars with Academic Guidance & Career Clarity"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default StudentCounselling;
