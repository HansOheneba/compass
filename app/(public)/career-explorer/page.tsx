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
    /* ...same as your original industryData */
  };

  const currentIndustry =
    industryData[industry] || industryData["Education & Research"];
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
