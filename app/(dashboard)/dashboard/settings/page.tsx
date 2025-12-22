"use client";

import { useEffect, useState } from "react";
import { useOnboardingStore } from "@/lib/store/onboardingStore";

export default function SettingsPage() {
  const { data, isHydrated, setData, setHydrated } = useOnboardingStore();

  const [saved, setSaved] = useState(true);

  useEffect(() => {
    setHydrated(true);
  }, [setHydrated]);

  const update = (patch: Partial<typeof data>) => {
    setData(patch);
    setSaved(false);
  };

  useEffect(() => {
    if (!isHydrated) return;

    const id = setTimeout(() => {
      setSaved(true);
    }, 400);

    return () => clearTimeout(id);
  }, [data, isHydrated]);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your profile and career preferences.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {saved ? "Changes saved" : "Saving changes…"}
          </p>
        </header>

        <div className="space-y-10">
          {/* Profile */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm mb-1">Full name</span>
                <input
                  value={data.name ?? ""}
                  onChange={(e) => update({ name: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Email</span>
                <input
                  type="email"
                  value={data.email ?? ""}
                  onChange={(e) => update({ email: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Phone</span>
                <input
                  value={data.phone ?? ""}
                  onChange={(e) => update({ phone: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Country / Region</span>
                <input
                  value={data.country ?? ""}
                  onChange={(e) => update({ country: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Age range</span>
                <select
                  value={data.ageRange ?? ""}
                  onChange={(e) => update({ ageRange: e.target.value })}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="18-24">18–24</option>
                  <option value="25-34">25–34</option>
                  <option value="35-44">35–44</option>
                  <option value="45+">45+</option>
                </select>
              </label>
            </div>
          </section>

          {/* Career */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Career Preferences</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm mb-1">Career status</span>
                <select
                  value={data.careerStatus ?? ""}
                  onChange={(e) => update({ careerStatus: e.target.value })}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="student">Student / Graduate</option>
                  <option value="early">Early-career (0–2 years)</option>
                  <option value="mid">Mid-career (3–7 years)</option>
                  <option value="established">Established (8+ years)</option>
                  <option value="pivot">Career-changing</option>
                  <option value="seeking">Job-seeking</option>
                </select>
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Experience level</span>
                <select
                  value={data.experienceLevel ?? ""}
                  onChange={(e) => update({ experienceLevel: e.target.value })}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="no_experience">No experience</option>
                  <option value="some_experience">Some experience</option>
                  <option value="experienced">Experienced</option>
                  <option value="very_experienced">Very experienced</option>
                </select>
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Current role / field</span>
                <input
                  value={data.currentRole ?? ""}
                  onChange={(e) => update({ currentRole: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Primary goal</span>
                <select
                  value={data.primaryGoal ?? ""}
                  onChange={(e) => update({ primaryGoal: e.target.value })}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="find_path">Find the right career path</option>
                  <option value="improve_skills">Improve my skills</option>
                  <option value="transition">Transition to a new field</option>
                  <option value="understand_strengths">
                    Understand my strengths
                  </option>
                  <option value="get_job_ready">Get job-ready</option>
                  <option value="self_discovery">Self-discovery</option>
                </select>
              </label>
            </div>
          </section>

          {/* Notes */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Additional Notes</h2>

            <textarea
              value={data.additionalNotes ?? ""}
              onChange={(e) => update({ additionalNotes: e.target.value })}
              className="w-full border rounded-md p-3 h-28 resize-none"
              placeholder="Optional notes, preferences, or constraints"
            />

            <p className="text-xs text-gray-400 mt-2">
              Stored locally in your browser.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
