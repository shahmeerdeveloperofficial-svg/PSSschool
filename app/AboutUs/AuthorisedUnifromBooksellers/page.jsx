import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import React from "react";

const AuthorisedUnifromBooksellers = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Official Uniform & Academic Books Guidelines",
      },
      {
        type: "p",
        text: "All students of The Pakistan School of Science are required to acquire the official PSS uniform (featuring our signature royal purple blazer, white shirt, and gold-embroidered PSS heraldic crest) along with the authorized STEM course books and laboratory manuals.",
      },
      {
        type: "p",
        text: "To ensure color accuracy, quality embroidery, and the latest syllabus editions, parents are advised to obtain materials through authorized campus distribution centers or certified partner bookshops.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Authorized Vendors & Campus Supply Desk",
      },
      {
        type: "p",
        text: "The on-campus PSS Book & Uniform Store is open Monday through Saturday during school working hours. For list inquiries and sizing assistance, please contact the campus administrative desk.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Uniforms & Academic Textbooks"}
        description="The Pakistan School of Science — Authorized Supplies & Attire"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default AuthorisedUnifromBooksellers;
