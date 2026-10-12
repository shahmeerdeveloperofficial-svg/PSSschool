import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const OurPhilosophy = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "The PSS Educational Philosophy: Knowledge is Power",
      },
      {
        type: "p",
        text: "At The Pakistan School of Science, our educational philosophy is rooted in the conviction that genuine knowledge equips a human being with the power to understand the cosmos, cure disease, design technology, and lead society with moral integrity.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 1: Empirical Inquiry over Rote Learning",
      },
      {
        type: "p",
        text: "We replace blind cramming with laboratory discovery, mathematical derivations, and structured question-asking that develops deep conceptual mastery.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 2: The Torch of Enlightenment & STEM Innovation",
      },
      {
        type: "p",
        text: "Represented by the torch in our crest, we ignite student passion for artificial intelligence, computer programming, renewable energy, and modern biotechnology.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 3: The Victory Trophy — Championship & Sportsmanship",
      },
      {
        type: "p",
        text: "Represented by the victory cup in our crest, we teach students that rigorous discipline, athletic fitness, and teamwork are essential companions to intellectual brilliance.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 4: Character, Ethics & Civic Duty",
      },
      {
        type: "p",
        text: "Science without ethics is perilous. We instill honesty, empathy, humility, and patriotic dedication to uplifting Pakistan and humanity.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Our Philosophy"}
        description="Understanding our core philosophy of scientific inquiry, character, and excellence."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default OurPhilosophy;
