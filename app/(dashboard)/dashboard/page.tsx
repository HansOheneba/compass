"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useOnboardingStore,
  type OnboardData,
} from "@/lib/store/onboardingStore";
import {
  CheckCircle2,
  Circle,
  BookOpen,
  Zap,
  Target,
  Code,
  Briefcase,
  BarChart3,
  ArrowRight,
} from "lucide-react";

type DashboardData = {
  onboarding: OnboardData | null;
  interestsProfile: Record<string, number> | null;
  skillsInventory: {
    skills: Array<{ name: string; rating: number; category: string }>;
  } | null;
  alignmentCheck: ({ total: number } & Record<string, number>) | null;
};

const careerPathRecommendations = [
  {
    title: "Product Design",
    description: "Blend creativity with user empathy to solve real problems.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Software Engineering",
    description: "Build scalable solutions and lead technical innovation.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Business Analysis",
    description: "Bridge technology and business to drive strategic value.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Data Analyst",
    description: "Turn data into insights and inform better decisions.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

export default function CompassDashboard() {
  const router = useRouter();
  const { data: onboardingData, isHydrated } = useOnboardingStore();
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    onboarding: null,
    interestsProfile: null,
    skillsInventory: null,
    alignmentCheck: null,
  });
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Check if onboarding is completed and redirect if not
  useEffect(() => {
    if (!isHydrated) return;

    // Check if user has completed onboarding
    const onboardingCompleted =
      onboardingData?.name && onboardingData?.name.trim().length > 0;

    if (!onboardingCompleted) {
      router.push("/onboarding");
    }
  }, [isHydrated, onboardingData, router]);

  // Determine incomplete next steps based on what's been completed
  const getNextSteps = (): Array<{
    label: string;
    href: string;
    id: string;
  }> => {
    const steps: Array<{ label: string; href: string; id: string }> = [];

    // Check what's incomplete
    if (!dashboardData.interestsProfile) {
      steps.push({
        label: "Complete your Interests Profiler",
        href: "/career-scan/interests",
        id: "interests",
      });
    }

    if (!dashboardData.skillsInventory) {
      steps.push({
        label: "Review your Skills Inventory",
        href: "/career-scan/skills",
        id: "skills",
      });
    }

    if (!dashboardData.alignmentCheck) {
      steps.push({
        label: "Take the Career Alignment Checker",
        href: "/career-scan/alignment",
        id: "alignment",
      });
    }

    // Always show these
    if (steps.length === 0) {
      // All assessments done
      steps.push({
        label: "Explore recommended career paths",
        href: "#",
        id: "paths",
      });
    }

    steps.push({
      label: "Update your profile information",
      href: "/onboarding",
      id: "profile",
    });

    return steps;
  };

  const nextSteps = getNextSteps();

  useEffect(() => {
    if (!isHydrated) return;

    // Load data from localStorage
    const loadData = () => {
      const data: DashboardData = {
        onboarding: onboardingData || null,
        interestsProfile: null,
        skillsInventory: null,
        alignmentCheck: null,
      };

      // Try to load tool data
      try {
        const interests = localStorage.getItem("compass_interests_profile");
        if (interests) data.interestsProfile = JSON.parse(interests);

        const skills = localStorage.getItem("compass_skills_inventory");
        if (skills) data.skillsInventory = JSON.parse(skills);

        const alignment = localStorage.getItem("compass_alignment_check");
        if (alignment) data.alignmentCheck = JSON.parse(alignment);
      } catch (e) {
        console.warn("Error loading tool data from localStorage", e);
      }

      setDashboardData(data);
    };

    loadData();
  }, [isHydrated, onboardingData]);

  const toolsCompleted = [
    !!dashboardData.interestsProfile,
    !!dashboardData.skillsInventory,
    !!dashboardData.alignmentCheck,
  ];
  const completionPercentage = Math.round(
    (toolsCompleted.filter(Boolean).length / 3) * 100
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Welcome Summary Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome back, {dashboardData.onboarding?.name || "Compass User"}
              </h1>
              <p className="text-lg text-gray-600">
                Your current focus:{" "}
                <span className="font-semibold text-gray-800">
                  {dashboardData.onboarding?.primaryGoal?.replace(/_/g, " ") ||
                    "Career Exploration"}
                </span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-2">Completion</div>
              <div className="text-3xl font-bold text-gray-800">
                {completionPercentage}%
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Assessment Progress
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "Interests Profiler", completed: toolsCompleted[0] },
              { name: "Skills Inventory", completed: toolsCompleted[1] },
              { name: "Alignment Check", completed: toolsCompleted[2] },
            ].map((tool, i) => (
              <div key={i} className="flex items-center gap-3">
                {tool.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-gray-800 shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300 shrink-0" />
                )}
                <span
                  className={`text-sm font-medium ${
                    tool.completed ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-800 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Insights Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Interests Insight */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Your Interests</h3>
            </div>
            {dashboardData.interestsProfile ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Top interests:</p>
                <ul className="text-sm space-y-1">
                  {Object.entries(dashboardData.interestsProfile)
                    .sort((a, b) => (b[1] as number) - (a[1] as number))
                    .slice(0, 3)
                    .map(([key, value]) => (
                      <li
                        key={key}
                        className="text-gray-700 capitalize flex justify-between"
                      >
                        <span>{key}</span>
                        <span className="text-gray-800 font-medium">
                          {(((value as number) / 30) * 100) | 0}%
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  Complete your Interests Profiler to see results.
                </p>
                <Link
                  href="/career-scan/interests"
                  className="text-sm text-gray-800 hover:text-gray-900 font-medium flex items-center gap-1 group"
                >
                  Start Assessment
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>

          {/* Skills Insight */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Your Skills</h3>
            </div>
            {dashboardData.skillsInventory?.skills ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Top strengths:</p>
                <ul className="text-sm space-y-1">
                  {dashboardData.skillsInventory?.skills
                    .sort(
                      (a: { rating: number }, b: { rating: number }) =>
                        b.rating - a.rating
                    )
                    .slice(0, 3)
                    .map(
                      (skill: { name: string; rating: number }, i: number) => (
                        <li
                          key={i}
                          className="text-gray-700 flex justify-between"
                        >
                          <span>{skill.name}</span>
                          <span className="text-gray-800 font-medium">
                            {skill.rating}/5
                          </span>
                        </li>
                      )
                    )}
                </ul>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  Complete your Skills Inventory to see results.
                </p>
                <Link
                  href="/career-scan/skills"
                  className="text-sm text-gray-800 hover:text-gray-900 font-medium flex items-center gap-1 group"
                >
                  Start Assessment
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>

          {/* Alignment Insight */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Alignment Score</h3>
            </div>
            {dashboardData.alignmentCheck?.total ? (
              <div className="space-y-3">
                <div>
                  <p className="text-3xl font-bold text-gray-800">
                    {Math.round(
                      (dashboardData.alignmentCheck.total / 30) * 100
                    )}
                    %
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Career alignment score
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  {dashboardData.alignmentCheck.total >= 22
                    ? "You're well aligned with your path"
                    : dashboardData.alignmentCheck.total >= 16
                    ? "Moderate alignment — room to grow"
                    : "Consider exploring new directions"}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  Complete the Alignment Check to see your score.
                </p>
                <Link
                  href="/career-scan/alignment"
                  className="text-sm text-gray-800 hover:text-gray-900 font-medium flex items-center gap-1 group"
                >
                  Start Assessment
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Career Paths */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recommended Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerPathRecommendations.map((path, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg text-gray-800">
                    {path.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{path.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{path.description}</p>
                <button className="text-sm text-gray-800 hover:text-gray-900 font-medium flex items-center gap-1 group">
                  Learn more
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Recommendations To-Do List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
          {nextSteps.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-gray-800 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">
                Great job! You&apos;ve completed all assessments.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Keep exploring to refine your career path.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {nextSteps.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      checkedItems[item.id]
                        ? "bg-gray-800 border-gray-800"
                        : "border-gray-300"
                    }`}
                    onClick={() => {
                      setCheckedItems((prev) => ({
                        ...prev,
                        [item.id]: !prev[item.id],
                      }));
                    }}
                  >
                    {checkedItems[item.id] && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <Link
                    href={item.href}
                    className={`flex-1 text-gray-700 font-medium group-hover:text-gray-900 transition-colors ${
                      checkedItems[item.id] ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
