import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ParentingWorkshop = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Parent-School Synergy & Developmental Workshops",
      },
      {
        type: "p",
        text: "The Pakistan School of Science views parents as vital partners in nurturing the intellectual and moral fiber of our youth. Our regular workshops provide practical frameworks for fostering curiosity, digital discipline, scientific exploration, and balanced emotional growth at home.",
      },
      {
        type: "p",
        text: "Led by renowned educational psychologists and seasoned academic directors, these seminars build harmonious home-school collaboration, ensuring students thrive both academically and socially.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Parenting Workshops"}
        description="Fostering Strong Family-School Alliances for Student Success"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ParentingWorkshop;
