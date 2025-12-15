"use client";

import { useSearchParams } from "next/navigation";
import { useInterestsStore } from "@/lib/store/interestsStore";
import { useSkillsStore } from "@/lib/store/skillsStore";
import { useAlignmentStore } from "@/lib/store/alignmentStore";

interface Role {
  title: string;
  level: string;
  matchScore?: number;
}

interface SkillRequirement {
  name: string;
  importance: "Critical" | "Important" | "Nice-to-have";
  userHas: boolean;
}

export default function CareerExplorerPage() {
  const params = useSearchParams();
  const industry = params.get("industry") || "Career Explorer";

  // Pull user data from your stores
  const { profile: interests } = useInterestsStore();
  const { inventory: skills } = useSkillsStore();
  const { check: alignment } = useAlignmentStore();

  // Get user's skill names for matching
  const userSkillNames = skills?.skills?.map((s) => s.name.toLowerCase()) || [];

  // Industry-specific data with roles, skills, and alignment criteria
  const industryData: Record<
    string,
    {
      roles: Role[];
      requiredSkills: SkillRequirement[];
      alignmentCriteria: Record<string, string>;
    }
  > = {
    "Consulting & Technology": {
      roles: [
        { title: "Business Analyst", level: "Entry" },
        { title: "Product Manager", level: "Mid" },
        { title: "Technology Consultant", level: "Mid" },
        { title: "Solutions Architect", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Problem Solving",
          importance: "Critical",
          userHas: userSkillNames.some(
            (s) => s.includes("problem") || s.includes("solving")
          ),
        },
        {
          name: "Strategic Thinking",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("strategic")),
        },
        {
          name: "Communication",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("communication")),
        },
        {
          name: "Data Analysis",
          importance: "Important",
          userHas: userSkillNames.some(
            (s) => s.includes("data") || s.includes("analysis")
          ),
        },
        {
          name: "Project Management",
          importance: "Important",
          userHas: userSkillNames.some(
            (s) => s.includes("project") || s.includes("management")
          ),
        },
        {
          name: "Technical Literacy",
          importance: "Important",
          userHas: userSkillNames.some(
            (s) => s.includes("technical") || s.includes("technology")
          ),
        },
      ],
      alignmentCriteria: {
        business: "Business acumen is essential for consulting success",
        analytical:
          "Strong analytical skills drive problem-solving capabilities",
        people: "People skills are crucial for client relationships",
        technical: "Technical knowledge supports technology consulting",
      },
    },
    "Data Science & Analytics": {
      roles: [
        { title: "Data Analyst", level: "Entry" },
        { title: "Machine Learning Engineer", level: "Mid" },
        { title: "Data Scientist", level: "Mid" },
        { title: "Analytics Manager", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Statistical Analysis",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("statistic")),
        },
        {
          name: "Python",
          importance: "Critical",
          userHas: userSkillNames.some(
            (s) => s.includes("python") || s.includes("coding")
          ),
        },
        {
          name: "Data Visualization",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("visualization")),
        },
        {
          name: "SQL",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("sql")),
        },
        {
          name: "Machine Learning",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("machine learning")),
        },
        {
          name: "Business Acumen",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("business")),
        },
      ],
      alignmentCriteria: {
        analytical: "Analytical thinking is core to data science",
        technical: "Technical skills are essential for coding and modeling",
        business: "Business context ensures actionable insights",
        impact: "Desire to create impact through data-driven decisions",
      },
    },
    Healthcare: {
      roles: [
        { title: "Health Data Analyst", level: "Entry" },
        { title: "Clinical Research Coordinator", level: "Mid" },
        { title: "Healthcare Operations Manager", level: "Mid" },
        { title: "Medical Affairs Manager", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Healthcare Knowledge",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("healthcare")),
        },
        {
          name: "Research Skills",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("research")),
        },
        {
          name: "Attention to Detail",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("detail")),
        },
        {
          name: "Compliance Knowledge",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("compliance")),
        },
        {
          name: "Data Management",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("data")),
        },
        {
          name: "Communication",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("communication")),
        },
      ],
      alignmentCriteria: {
        impact: "Strong desire to make a positive impact on healthcare",
        people: "Caring for and helping others is important",
        analytical: "Data-driven decision making in healthcare",
        values: "Commitment to patient care and safety",
      },
    },
    "Finance & Accounting": {
      roles: [
        { title: "Junior Accountant", level: "Entry" },
        { title: "Financial Analyst", level: "Mid" },
        { title: "Investment Manager", level: "Mid" },
        { title: "Chief Financial Officer", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Accounting",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("accounting")),
        },
        {
          name: "Financial Modeling",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("financial")),
        },
        {
          name: "Analytical Thinking",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("analytical")),
        },
        {
          name: "Excel",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("excel")),
        },
        {
          name: "Attention to Detail",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("detail")),
        },
        {
          name: "Compliance",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("compliance")),
        },
      ],
      alignmentCriteria: {
        analytical: "Strong analytical capability for complex financial data",
        business: "Business acumen drives financial decision-making excellence",
        values: "Ethics and integrity in financial management",
        growth: "Continuous learning in finance and markets",
      },
    },
    "Marketing & Sales": {
      roles: [
        { title: "Marketing Coordinator", level: "Entry" },
        { title: "Sales Manager", level: "Mid" },
        { title: "Marketing Manager", level: "Mid" },
        { title: "Chief Marketing Officer", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Communication",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("communication")),
        },
        {
          name: "Persuasion",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("persuasion")),
        },
        {
          name: "Creativity",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("creativity")),
        },
        {
          name: "Data Analysis",
          importance: "Important",
          userHas: userSkillNames.some(
            (s) => s.includes("data") || s.includes("analysis")
          ),
        },
        {
          name: "Digital Marketing",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("digital")),
        },
        {
          name: "Relationship Building",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("relationship")),
        },
      ],
      alignmentCriteria: {
        people: "Strong interpersonal skills and people focus",
        creativity: "Creative approach to problem-solving and campaigns",
        impact: "Desire to influence and drive business growth",
        business: "Understanding of market and customer needs",
      },
    },
    "Creative & Design": {
      roles: [
        { title: "Graphic Designer", level: "Entry" },
        { title: "UX/UI Designer", level: "Mid" },
        { title: "Creative Director", level: "Mid" },
        { title: "Design Lead", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Visual Design",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("design")),
        },
        {
          name: "Creativity",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("creativity")),
        },
        {
          name: "Software Proficiency",
          importance: "Critical",
          userHas: userSkillNames.some(
            (s) => s.includes("software") || s.includes("adobe")
          ),
        },
        {
          name: "Communication",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("communication")),
        },
        {
          name: "User Research",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("research")),
        },
        {
          name: "Problem Solving",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("problem")),
        },
      ],
      alignmentCriteria: {
        creativity: "Passion for creative expression and innovation",
        impact: "Desire to create visually impactful solutions",
        people: "User-centered design and empathy",
        technical: "Technical skills in design tools and technology",
      },
    },
    "Engineering & Science": {
      roles: [
        { title: "Junior Engineer", level: "Entry" },
        { title: "Software Engineer", level: "Mid" },
        { title: "Research Scientist", level: "Mid" },
        { title: "Engineering Manager", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Programming",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("programming")),
        },
        {
          name: "Problem Solving",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("problem")),
        },
        {
          name: "Technical Knowledge",
          importance: "Critical",
          userHas: userSkillNames.some(
            (s) => s.includes("technical") || s.includes("engineering")
          ),
        },
        {
          name: "Mathematics",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("math")),
        },
        {
          name: "System Design",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("design")),
        },
        {
          name: "Collaboration",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("collaboration")),
        },
      ],
      alignmentCriteria: {
        technical: "Deep technical interest and expertise",
        analytical: "Analytical approach to complex engineering problems",
        impact: "Building solutions that solve real-world problems",
        growth: "Continuous learning and staying current",
      },
    },
    "Education & Research": {
      roles: [
        { title: "Research Associate", level: "Entry" },
        { title: "Academic Instructor", level: "Mid" },
        { title: "Research Manager", level: "Mid" },
        { title: "Department Head", level: "Senior" },
      ],
      requiredSkills: [
        {
          name: "Research Methods",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("research")),
        },
        {
          name: "Teaching",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("teaching")),
        },
        {
          name: "Communication",
          importance: "Critical",
          userHas: userSkillNames.some((s) => s.includes("communication")),
        },
        {
          name: "Analytical Thinking",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("analytical")),
        },
        {
          name: "Writing",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("writing")),
        },
        {
          name: "Mentoring",
          importance: "Important",
          userHas: userSkillNames.some((s) => s.includes("mentoring")),
        },
      ],
      alignmentCriteria: {
        impact: "Making a meaningful impact through education",
        people: "Passion for teaching and mentoring others",
        analytical: "Rigorous thinking and research methodology",
        growth: "Lifelong learning and intellectual growth",
      },
    },
  };

  const currentIndustry =
    industryData[industry] || industryData["Education & Research"];
  const roles = currentIndustry.roles;
  const requiredSkills = currentIndustry.requiredSkills;

  // Calculate match scores for roles based on user skills
  const rolesWithScores = roles.map((role) => {
    const matchedSkills = requiredSkills.filter(
      (skill) => skill.userHas
    ).length;
    const matchScore = Math.round(
      (matchedSkills / requiredSkills.length) * 100
    );
    return { ...role, matchScore };
  });

  return (
    <main className="w-full min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* ================= INDUSTRY HEADER ================= */}
        <div>
          <h1 className="text-4xl font-bold text-black mb-2">{industry}</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore opportunities, required skills, and your alignment with this
            industry.
          </p>
        </div>

        <hr className="border-gray-300" />

        {/* ================= POPULAR ROLES ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Roles</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {rolesWithScores.map((role, i) => (
              <div
                key={i}
                className="p-5 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{role.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Level: {role.level}
                    </p>
                  </div>
                  {role.matchScore !== undefined && (
                    <div className="text-right">
                      <span className="text-sm font-bold text-green-600">
                        {role.matchScore}% Match
                      </span>
                    </div>
                  )}
                </div>
                {role.matchScore !== undefined && (
                  <div className="w-full h-1.5 bg-gray-300 rounded-full mt-3">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${role.matchScore}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= REQUIRED SKILLS ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Key Skills Needed</h2>

          <div className="space-y-3">
            {requiredSkills.map((skill, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border ${
                  skill.userHas
                    ? "bg-green-50 border-green-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{skill.name}</h4>
                    <span
                      className={`text-xs mt-1 inline-block px-2 py-1 rounded ${
                        skill.importance === "Critical"
                          ? "bg-red-100 text-red-800"
                          : skill.importance === "Important"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {skill.importance}
                    </span>
                  </div>
                  {skill.userHas && (
                    <span className="text-green-600 font-bold text-xl">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ALIGNMENT ANALYSIS ================= */}
        <section className="bg-gray-100 border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Your Alignment</h2>
          <p className="text-gray-600 mb-6">
            This section compares your personal data with what this industry
            typically requires.
          </p>

          <div className="space-y-6">
            {/* Skills alignment */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Skills Fit</span>
                <span>
                  {skills?.skills && skills.skills.length > 0
                    ? "✓ Completed"
                    : "Not Completed"}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{
                    width:
                      skills?.skills && skills.skills.length > 0
                        ? `${Math.min((skills.skills.length / 10) * 100, 100)}%`
                        : "15%",
                  }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">
                {skills?.skills?.length || 0} of 10 recommended skills added
              </p>
            </div>

            {/* Interests alignment */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Interests Fit</span>
                <span>{interests ? "✓ Completed" : "Not Completed"}</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{
                    width: interests
                      ? `${Math.round(
                          ((interests.creativity +
                            interests.analytical +
                            interests.business +
                            interests.people +
                            interests.technical +
                            interests.impact) /
                            30) *
                            100
                        )}%`
                      : "15%",
                  }}
                />
              </div>
              {interests && (
                <div className="text-xs text-gray-600 mt-2">
                  <p>
                    Strongest interests: Business ({interests.business}/5),
                    Analytical ({interests.analytical}/5)
                  </p>
                </div>
              )}
            </div>

            {/* Career Alignment Score */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Career Alignment Score</span>
                <span>
                  {alignment
                    ? Math.round((alignment.total / 30) * 100) + "%"
                    : "Not Completed"}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{
                    width: alignment
                      ? `${Math.round((alignment.total / 30) * 100)}%`
                      : "15%",
                  }}
                />
              </div>
              {alignment && (
                <div className="text-xs text-gray-600 mt-2">
                  <p>
                    Top matches: {alignment.values}/5 (Values),{" "}
                    {alignment.growth}/5 (Growth)
                  </p>
                </div>
              )}
            </div>

            {/* Alignment criteria for this industry */}
            <div className="bg-white rounded-lg p-4 mt-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Why this industry fits:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {Object.entries(currentIndustry.alignmentCriteria).map(
                  ([key, value]) => (
                    <li key={key} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{value}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= NEXT STEPS ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recommended Next Steps</h2>

          <ul className="space-y-3 text-gray-700">
            <li>
              • Complete your full Career Scan to get personalized matches
            </li>
            <li>• Compare roles inside this industry to see which fits best</li>
            <li>• Review required skills and check how your profile matches</li>
            <li>• Explore learning resources to fill any skill gaps</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
