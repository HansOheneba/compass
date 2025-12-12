"use client";

import { Menu,  } from "lucide-react";
import { useOnboardingStore } from "@/lib/store/onboardingStore";
import { useEffect, useState } from "react";

type TopBarProps = {
  onMobileMenuClick: () => void;
};

export function TopBar({ onMobileMenuClick }: TopBarProps) {
  const { data: onboardingData, isHydrated } = useOnboardingStore();
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    if (!isHydrated) return;

    const calculateCompletion = () => {
      try {
        let completed = 0;
        const total = 3;

        if (localStorage.getItem("compass_interests_profile")) completed++;
        if (localStorage.getItem("compass_skills_inventory")) completed++;
        if (localStorage.getItem("compass_alignment_check")) completed++;

        setCompletionPercentage(Math.round((completed / total) * 100));
      } catch (e) {
        console.warn("Error calculating completion", e);
      }
    };

    calculateCompletion();
  }, [isHydrated]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-300 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={onMobileMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>

            {/* Page Title and Subtitle */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">
                Your focus:{" "}
                <span className="font-semibold text-gray-800">
                  {onboardingData?.primaryGoal?.replace(/_/g, " ") ||
                    "Career Exploration"}
                </span>
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 w-full max-w-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">
                Completion
              </span>
              <span className="text-xs font-medium text-gray-600">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-800 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {onboardingData?.name?.charAt(0)?.toUpperCase() || "H"}
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">
                {onboardingData?.name || "Hans"}
              </p>
              <p className="text-xs text-gray-600">Navigator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
