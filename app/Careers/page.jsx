import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Careers = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Join Our Faculty of Distinguished Science Educators",
      },
      {
        type: "p",
        text: "The Pakistan School of Science invites ambitious educators, science lab specialists, mathematics mentors, and administrative professionals who are committed to nurturing the next generation of innovators under the motto 'Knowledge is Power'.",
      },
      {
        type: "p",
        text: "We offer competitive remuneration packages, ongoing professional development certifications, state-of-the-art laboratory environments, and a collaborative scholastic culture.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Open Positions & Application Process",
      },
      {
        type: "p",
        text: "We routinely recruit for Senior Physics, Chemistry, Biology, and Computer Science Instructors, STEM Lab Technicians, Early Childhood Science Educators, and Career Guidance Counsellors.\n\nPlease submit your updated resume and statement of intent to careers@thepakistanschoolofscience.edu.pk or visit our Campus Admissions & HR office.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Academic & Administrative Careers"}
        description="Inspire the Future at The Pakistan School of Science"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Careers;
