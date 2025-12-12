"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useOnboardingStore,
  type OnboardData,
} from "@/lib/store/onboardingStore";

export default function CompassOnboardingPage() {
  const router = useRouter();
  const {
    data,
    step,
    isHydrated,
    setData,
    nextStep,
    prevStep,
    reset,
    setHydrated,
  } = useOnboardingStore();
  const [saved, setSaved] = useState<boolean>(false);

  useEffect(() => {
    // Mark store as hydrated after mount
    setHydrated(true);
  }, [setHydrated]);

  useEffect(() => {
    // auto-save draft on changes (debounced)
    if (!isHydrated) return;

    const id = setTimeout(() => {
      setSaved(true);
    }, 400);

    return () => clearTimeout(id);
  }, [data, isHydrated]);

  const update = (patch: Partial<OnboardData>) => {
    setData(patch);
    setSaved(false);
  };

  const finish = () => {
    try {
      // mark completed state separately
      localStorage.setItem("compass_onboarding_completed", "true");
    } catch (e) {
      console.warn(e);
    }
    // navigate to dashboard
    router.push("/dashboard");
  };

  const clearDraft = () => {
    reset();
    setSaved(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white p-6 rounded-2xl shadow">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Welcome to Compass</h1>
              <p className="text-sm text-gray-600 mt-1">
                A quick setup to personalize your dashboard.
              </p>
            </div>

            <div className="text-right">
              <div className="text-xs text-gray-500">Progress</div>
              <div className="w-40 h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                <div
                  className="h-full bg-black rounded"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {saved ? "Draft saved" : "Saving..."}
              </div>
            </div>
          </div>

          <div className="mt-6">
            {/* Step Indicators */}
            <div className="flex gap-2 items-center mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    step === s
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {s === 1 ? "Bio" : s === 2 ? "Career" : "Goals"}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div>
              {step === 1 && (
                <section>
                  <h2 className="text-lg font-semibold mb-3">Basic Profile</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-700 mb-1">
                        Full name
                      </span>
                      <input
                        value={data.name}
                        onChange={(e) => update({ name: e.target.value })}
                        placeholder="e.g. Ama Mensah"
                        className="border px-3 py-2 rounded-md"
                      />
                    </label>

                    <label className="flex flex-col">
                      <span className="text-sm text-gray-700 mb-1">
                        Age range
                      </span>
                      <select
                        value={data.ageRange}
                        onChange={(e) => update({ ageRange: e.target.value })}
                        className="border px-3 py-2 rounded-md"
                      >
                        <option value="18-24">18–24</option>
                        <option value="25-34">25–34</option>
                        <option value="35-44">35–44</option>
                        <option value="45+">45+</option>
                      </select>
                    </label>

                    <label className="flex flex-col">
                      <span className="text-sm text-gray-700 mb-1">
                        Country / Region
                      </span>
                      <input
                        value={data.country}
                        onChange={(e) => update({ country: e.target.value })}
                        placeholder="e.g. Ghana"
                        className="border px-3 py-2 rounded-md"
                      />
                    </label>
                  </div>
                </section>
              )}

              {step === 2 && (
                <section>
                  <h2 className="text-lg font-semibold mb-3">Career Status</h2>

                  <div className="grid gap-4">
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-700 mb-1">
                        Where are you in your career?
                      </span>
                      <select
                        value={data.careerStatus}
                        onChange={(e) =>
                          update({ careerStatus: e.target.value })
                        }
                        className="border px-3 py-2 rounded-md"
                      >
                        <option value="student">Student / Graduate</option>
                        <option value="early">Early-career (0–2 years)</option>
                        <option value="mid">Mid-career (3–7 years)</option>
                        <option value="established">
                          Established (8+ years)
                        </option>
                        <option value="pivot">
                          Career-changing / exploring
                        </option>
                        <option value="seeking">
                          Unemployed / job-seeking
                        </option>
                      </select>
                    </label>

                    <label className="flex flex-col">
                      <span className="text-sm text-gray-700 mb-1">
                        Current role / field (optional)
                      </span>
                      <input
                        value={data.currentRole}
                        onChange={(e) =>
                          update({ currentRole: e.target.value })
                        }
                        placeholder="e.g. Software Engineer"
                        className="border px-3 py-2 rounded-md"
                      />
                      <span className="text-xs text-gray-500 mt-1">
                        This helps us tailor suggestions — you can skip.
                      </span>
                    </label>

                    <label className="flex flex-col">
                      <span className="text-sm text-gray-700 mb-1">
                        Experience level
                      </span>
                      <select
                        value={data.experienceLevel}
                        onChange={(e) =>
                          update({ experienceLevel: e.target.value })
                        }
                        className="border px-3 py-2 rounded-md"
                      >
                        <option value="no_experience">No experience</option>
                        <option value="some_experience">Some experience</option>
                        <option value="experienced">Experienced</option>
                        <option value="very_experienced">
                          Very experienced
                        </option>
                      </select>
                    </label>
                  </div>
                </section>
              )}

              {step === 3 && (
                <section>
                  <h2 className="text-lg font-semibold mb-3">Goals & Intent</h2>

                  <div className="grid gap-4">
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-700 mb-1">
                        Primary goal
                      </span>
                      <select
                        value={data.primaryGoal}
                        onChange={(e) =>
                          update({ primaryGoal: e.target.value })
                        }
                        className="border px-3 py-2 rounded-md"
                      >
                        <option value="find_path">
                          Find the right career path
                        </option>
                        <option value="improve_skills">
                          Improve my skills
                        </option>
                        <option value="transition">
                          Transition to a new field
                        </option>
                        <option value="understand_strengths">
                          Understand my strengths
                        </option>
                        <option value="get_job_ready">Get job-ready</option>
                        <option value="self_discovery">
                          General self-discovery
                        </option>
                      </select>
                    </label>

                    <div>
                      <span className="text-sm text-gray-700">
                        Anything else you&apos;d like us to know? (optional)
                      </span>
                      <textarea
                        placeholder="Optional notes — e.g. industries you like, constraints, preferred locations"
                        value={data.additionalNotes}
                        onChange={(e) => update({ additionalNotes: e.target.value })}
                        className="w-full mt-2 border rounded-md p-3 h-24 resize-none"
                      />
                      <p className="text-xs text-gray-400 mt-1">
                        Notes are saved to your browser automatically.
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  onClick={clearDraft}
                  className="px-3 py-2 text-sm rounded-md border text-gray-700 hover:bg-gray-50"
                >
                  Clear
                </button>
                <button
                  onClick={() => {
                    // quick save (Zustand handles persistence)
                    setSaved(true);
                  }}
                  className="px-3 py-2 text-sm rounded-md border text-gray-700 hover:bg-gray-50"
                >
                  Save Draft
                </button>
              </div>

              <div className="flex gap-3">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}

                {step < 3 ? (
                  <button
                    onClick={nextStep}
                    className="px-4 py-2 rounded-md bg-black text-white hover:opacity-90"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={finish}
                    className="px-4 py-2 rounded-md bg-black text-white hover:opacity-90"
                  >
                    Finish & Go to Dashboard
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-3 text-center">
          Your onboarding answers are stored locally in your browser. To reset,
          use the Clear button.
        </p>
      </div>
    </main>
  );
}
