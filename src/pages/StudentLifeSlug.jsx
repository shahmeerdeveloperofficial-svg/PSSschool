import React from "react";
import RichTextRenderer from "@/components/RichTextRenderer";
import HeroHeader from "@/components/HeroHeader";
import Link from "../compat/Link";
import { useParams, Navigate } from "react-router-dom";

const studentLifeData = [
  { title: "Registration Process", slug: "OLevel" },
  { title: "Withdrawals and Transfers", slug: "ALevel" },
  { title: "Primary & Middle Science Years", slug: "Primary" },
];

const cmsContentBySlug = {
  OLevel: [
    {
      type: "h2",
      text: "Admissions & Registration Protocol",
    },
    {
      type: "p",
      text: "The admission process at The Pakistan School of Science is structured to identify scholastic enthusiasm, scientific curiosity, and moral aptitude. Families are welcomed to register online or visit our Admissions Secretariat for syllabus review and grade level guidance.",
    },
    {
      type: "p",
      text: "A diagnostic cognitive and aptitude assessment is conducted to establish student competencies in mathematics, scientific reasoning, and language, ensuring individualized academic pacing.",
    },
  ],

  ALevel: [
    {
      type: "h2",
      text: "Withdrawals and Transfer Policy",
    },
    {
      type: "p",
      text: "Should a family relocate or request a formal school clearance transfer, our academic registrar ensures a streamlined, transparent administrative process with complete documentation of academic transcripts and laboratory credentials.",
    },
    {
      type: "p",
      text: "Parents are requested to submit written notice as per institutional guidelines to facilitate prompt issuance of school leaving certificates and clearance verifications.",
    },
  ],

  Primary: [
    {
      type: "h2",
      text: "Primary & Middle Years Science Immersion",
    },
    {
      type: "p",
      text: "In the foundational primary years, The Pakistan School of Science ignites genuine curiosity through experiential learning, discovery-based mathematics, and environmental observation.",
    },
    {
      type: "p",
      text: "Students develop strong analytical literacy, ethical empathy, teamwork, and scientific experimentation in a vibrant, safe, and supportive academic community.",
    },
    {
      type: "p",
      text: "Our holistic curriculum nurtures each scholar's unique talents, balancing intensive academic mastery with physical sports and creative expression.",
    },
  ],
};

export default function StudentLifeSlug() {
  const { slug } = useParams();
  const studentLife = studentLifeData.find((item) => item.slug === slug);

  if (!studentLife) {
    return <Navigate to="/404" replace />;
  }

  const cmsData = {
    content: cmsContentBySlug[slug] || [],
  };

  return (
    <main>
      <HeroHeader title={studentLife.title} description="The Pakistan School of Science — Knowledge is Power" />
      <div className="flex flex-col gap-4 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />

        {slug === "OLevel" && (
          <Link href="/OnlineAdmission">
            <button className="mt-4 w-fit rounded-full bg-gold-gradient hover:bg-gold-shimmer px-8 py-3 text-pss-dark font-bold shadow-lg transition-all transform hover:-translate-y-0.5">
              Register Online Now
            </button>
          </Link>
        )}
      </div>
    </main>
  );
}
