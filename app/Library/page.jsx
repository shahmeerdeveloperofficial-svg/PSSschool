import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Library = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "The PSS Knowledge Commons & Research Library",
      },
      {
        type: "p",
        text: "In resonance with our motto 'Knowledge is Power', the Central Library at The Pakistan School of Science serves as an intellectual sanctuary. We house thousands of volumes across physical sciences, mathematics, technology, world literature, history, and academic research.",
      },
      {
        type: "p",
        text: "Complementing our physical collection is an advanced Digital Resource Center featuring subscriptions to scholarly databases, e-books, science journals, and interactive multimedia archives.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Library Features & Scholarly Amenities",
      },
      {
        type: "p",
        text: "• Extensive STEM & Medical / Engineering Entrance Archives\n• Dedicated Quiet Research Cubicles & Collaborative Study Pods\n• Automated RFID Book Tracking and Digital Catalog Access\n• Junior Science Discovery Corner for Early Years exploration",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Knowledge Commons & Central Library"}
        description="The Pakistan School of Science — Where Curiosity Meets Endless Discovery"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Library;
