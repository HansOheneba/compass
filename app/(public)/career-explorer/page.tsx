"use client";

import { useSearchParams } from "next/navigation";
import { useInterestsStore } from "@/lib/store/interestsStore";
import { useSkillsStore } from "@/lib/store/skillsStore";
import { useAlignmentStore } from "@/lib/store/alignmentStore";

import IndustryHeader from "@/components/career-explorer/IndustryHeader";
import RolesGrid from "@/components/career-explorer/RolesGrid";
import SkillsSection from "@/components/career-explorer/SkillsSection";
import AlignmentSection from "@/components/career-explorer/AlignmentSection";
import NextSteps from "@/components/career-explorer/NextSteps";

interface Role {
  title: string;
  level: string;
  matchScore?: number;
}

interface Skill {
  name: string;
  importance: string;
  userHas: boolean;
}

interface IndustryData {
  [key: string]: {
    roles: Role[];
    requiredSkills: Skill[];
    alignmentCriteria: Record<string, string>;
  };
}

export default function CareerExplorerPage() {
  const params = useSearchParams();
  const industry = params.get("industry") || "Career Explorer";

  const { profile: interests } = useInterestsStore();
  const { inventory: skills } = useSkillsStore();
  const { check: alignment } = useAlignmentStore();

  // industryData as before...
  const industryData: IndustryData = {
    "Finance & Accounting": {
      roles: [
        { title: "Accountant", level: "Mid-Level" },
        { title: "Financial Analyst", level: "Senior" },
        { title: "Auditor", level: "Mid-Level" },
      ],
      requiredSkills: [
        { name: "Excel", importance: "Critical", userHas: false },
        { name: "Financial Analysis", importance: "Critical", userHas: false },
        { name: "Attention to Detail", importance: "Important", userHas: true },
        { name: "Communication", importance: "Important", userHas: true },
      ],
      alignmentCriteria: {
        analytical: "Strong analytical skills for financial modeling",
        detail: "High attention to detail required for accuracy",
        impact:
          "Direct impact on business decisions through financial insights",
      },
    },
    "Education & Research": {
      roles: [
        { title: "Professor", level: "Senior" },
        { title: "Research Analyst", level: "Mid-Level" },
        { title: "Instructional Designer", level: "Mid-Level" },
      ],
      requiredSkills: [
        { name: "Research", importance: "Critical", userHas: false },
        { name: "Writing", importance: "Critical", userHas: true },
        { name: "Teaching", importance: "Important", userHas: false },
        { name: "Problem Solving", importance: "Important", userHas: true },
      ],
      alignmentCriteria: {
        impact: "Contribute to knowledge advancement and student growth",
        growth: "Continuous learning opportunities",
        people: "Mentoring and developing future leaders",
      },
    },
    "Technology & Innovation": {
      roles: [
        { title: "Software Engineer", level: "Mid-Level" },
        { title: "Product Manager", level: "Senior" },
        { title: "UX Designer", level: "Mid-Level" },
      ],
      requiredSkills: [
        { name: "Programming", importance: "Critical", userHas: false },
        { name: "Problem Solving", importance: "Critical", userHas: true },
        { name: "Collaboration", importance: "Important", userHas: true },
        { name: "System Design", importance: "Important", userHas: false },
      ],
      alignmentCriteria: {
        technical: "Build cutting-edge technology solutions",
        impact: "Innovate and solve complex problems",
        growth: "Work with latest tools and frameworks",
      },
    },
    "Healthcare & Medicine": {
      roles: [
        { title: "Nurse", level: "Mid-Level" },
        { title: "Clinical Researcher", level: "Senior" },
        { title: "Healthcare Administrator", level: "Mid-Level" },
      ],
      requiredSkills: [
        { name: "Empathy", importance: "Critical", userHas: true },
        { name: "Medical Knowledge", importance: "Critical", userHas: false },
        { name: "Attention to Detail", importance: "Important", userHas: true },
        { name: "Communication", importance: "Important", userHas: true },
      ],
      alignmentCriteria: {
        people: "Direct patient care and impact",
        impact: "Save lives and improve well-being",
        growth: "Continuous learning in medical field",
      },
    },
  };

  const currentIndustry = industryData[industry];

  if (!currentIndustry) {
    return (
      <main className="w-full min-h-screen bg-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
          <p className="text-gray-600">
            The industry "{industry}" is not available. Please select a
            different industry.
          </p>
        </div>
      </main>
    );
  }

  const roles = currentIndustry.roles.map((role: Role) => {
    const matchedSkills = currentIndustry.requiredSkills.filter(
      (skill: Skill) => skill.userHas
    ).length;
    return {
      ...role,
      matchScore: Math.round(
        (matchedSkills / currentIndustry.requiredSkills.length) * 100
      ),
    };
  });

  return (
    <main className="w-full min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <IndustryHeader
          industry={industry}
          description="Explore opportunities, required skills, and your alignment with this industry."
        />
        <hr className="border-gray-300" />
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Roles</h2>
          <RolesGrid roles={roles} />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Key Skills Needed</h2>
          <SkillsSection skills={currentIndustry.requiredSkills} />
        </section>
        <AlignmentSection
          skills={skills}
          interests={interests}
          alignment={alignment}
          criteria={currentIndustry.alignmentCriteria}
        />
        <NextSteps />
      </div>
    </main>
  );
}
