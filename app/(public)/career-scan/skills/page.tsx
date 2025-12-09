"use client";

export default function SkillsInventory() {
  return (
    <main className="min-h-screen w-full flex justify-center items-start py-16 bg-white px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">
          Skills & Capability Inventory
        </h1>
        <p className="text-gray-600 mb-8">
          Evaluate what you are good at — both your technical & soft skills.
          This will help you see where you shine and where you can grow.
        </p>

        <div className="p-6 rounded-xl border shadow-sm bg-gray-50">
          <p className="text-gray-800 font-medium">
            Skill rating inputs will be placed here...
          </p>
        </div>
      </div>
    </main>
  );
}
