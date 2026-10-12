import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import React from "react";

const FAQs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Frequently Asked Questions",
      },
      {
        type: "p",
        text: "Here are common answers regarding admissions, academic tracks, lab facilities, and campus life at The Pakistan School of Science.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "1. What makes The Pakistan School of Science curriculum unique?",
      },
      {
        type: "p",
        text: "Our curriculum integrates rigorous STEM inquiry, hands-on laboratory experiments, robotic engineering, and mathematical problem-solving with comprehensive language and humanities education under our motto 'Knowledge is Power'.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "2. How does the admission process work?",
      },
      {
        type: "p",
        text: "Parents can apply online through our Admission Portal or visit the campus admissions office. After submitting basic applicant credentials, students complete an age-appropriate aptitude evaluation followed by a parent interaction.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "3. Are merit scholarships available?",
      },
      {
        type: "p",
        text: "Yes, PSS provides merit scholarships for students demonstrating exceptional aptitude in science, mathematics, and academic olympiads, as well as sports achievements.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "4. What laboratory facilities are available on campus?",
      },
      {
        type: "p",
        text: "PSS features dedicated Physics, Chemistry, and Biology laboratories, alongside high-speed AI & Robotics Computer Labs equipped with modern measurement apparatus and smart interactive displays.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Frequently Asked Questions"}
        description="The Pakistan School of Science — Answers to Your Queries"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default FAQs;
