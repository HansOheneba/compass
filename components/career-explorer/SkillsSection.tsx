import SkillCard from "./SkillCard";

interface Skill {
  name: string;
  importance: string;
  userHas: boolean;
}

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-3">
      {skills.map((skill, i) => (
        <SkillCard key={i} {...skill} />
      ))}
    </div>
  );
}
