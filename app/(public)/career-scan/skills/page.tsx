"use client";
import { useState } from "react";

export default function SkillsInventory() {
  interface Skill {
    name: string;
    rating: number;
    category: "soft" | "technical";
  }

  const [skills, setSkills] = useState<Skill[]>([
    { name: "Communication", rating: 3, category: "soft" },
    { name: "Problem Solving", rating: 4, category: "soft" },
    { name: "Teamwork", rating: 3, category: "soft" },
    { name: "Time Management", rating: 2, category: "soft" },

    { name: "Data Analysis", rating: 3, category: "technical" },
    { name: "Project Management", rating: 4, category: "technical" },
    { name: "Software Literacy", rating: 2, category: "technical" },
    { name: "Research Skills", rating: 3, category: "technical" },
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [newCategory, setNewCategory] = useState<"soft" | "technical">("soft");

  const updateRating = (index: number, value: number) => {
    const updated = [...skills];
    updated[index].rating = value;
    setSkills(updated);
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    setSkills([
      ...skills,
      { name: newSkill.trim(), rating: 1, category: newCategory },
    ]);
    setNewSkill("");
  };

  const strongSkills = skills.filter((s) => s.rating >= 4);
  const growthAreas = skills.filter((s) => s.rating <= 2);

  return (
    <main className="min-h-screen w-full flex justify-center py-16 bg-white px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">
          Skills & Capability Inventory
        </h1>
        <p className="text-gray-600 mb-8">
          Evaluate what you are good at — both technical and soft skills. Rate
          yourself and discover where you shine and where you can grow.
        </p>

        <div className="p-6 rounded-xl border shadow-sm bg-gray-50 space-y-8">
          {/* Skill List */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>

                <input
                  type="range"
                  min="1"
                  max="5"
                  value={skill.rating}
                  onChange={(e) => updateRating(i, Number(e.target.value))}
                  className="w-40"
                />

                <span className="text-sm text-gray-600">{skill.rating}/5</span>
              </div>
            ))}
          </div>

          {/* Add Skill */}
          <div className="border-t pt-6">
            <p className="font-semibold mb-3">Add a new skill</p>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="e.g. Public Speaking"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="border px-3 py-2 rounded w-full"
              />

              <select
                value={newCategory}
                onChange={(e) =>
                  setNewCategory(e.target.value as "soft" | "technical")
                }
                className="border px-2 rounded"
              >
                <option value="soft">Soft</option>
                <option value="technical">Technical</option>
              </select>

              <button
                onClick={addSkill}
                className="px-4 py-2 bg-black text-white rounded hover:opacity-75 transition"
              >
                Add
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h2 className="font-bold mb-3 text-lg">Your Results</h2>

            <p className="font-semibold">Strong Skills</p>
            {strongSkills.length > 0 ? (
              <ul className="text-sm text-green-700 mb-4 list-disc pl-5">
                {strongSkills.map((s, i) => (
                  <li key={i}>{s.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 mb-4">
                None yet — keep building.
              </p>
            )}

            <p className="font-semibold">Growth Opportunities</p>
            {growthAreas.length > 0 ? (
              <ul className="text-sm text-red-700 list-disc pl-5">
                {growthAreas.map((s, i) => (
                  <li key={i}>{s.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                No weak areas detected — impressive!
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
