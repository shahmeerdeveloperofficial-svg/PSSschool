import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const TeacherTraining = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Excellence in Science Pedagogy & Faculty Development",
      },
      {
        type: "p",
        text: "The Pakistan School of Science invests deeply in its faculty. Exceptional education requires instructors who master modern instructional design, inquiry-based scientific exploration, and high-engagement classroom dynamics.",
      },
      {
        type: "p",
        text: "Our ongoing Continuous Professional Development (CPD) programs equip teachers with smart classroom technologies, lab safety protocols, Olympiad mentorship skills, and differentiated learning strategies.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Core Training Modules",
      },
      {
        type: "p",
        text: "Faculty participate in periodic workshops covering STEM Curriculum Alignment, Digital Laboratory Simulation, Formative Assessment Techniques, and Student Mental Wellness First Aid.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Teacher Training & Faculty Excellence"}
        description="Continuous Professional Development for 21st-Century Science Educators"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default TeacherTraining;
