"use client";

import Link from "next/link";

export default function CareerScanHome() {
  const tools = [
    { name: "Interest & Passion Profiler", path: "/career-scan/interests" },
    { name: "Skills & Capability Inventory", path: "/career-scan/skills" },
    { name: "Career Alignment Checker", path: "/career-scan/alignment" },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Career Scan Tools</h1>
        <p className="text-gray-600 mb-10">
          Explore yourself, understand your strengths, and check if your career
          aligns with who you are.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            href={tool.path}
            className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition cursor-pointer text-center"
          >
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="text-sm text-gray-500 mt-2">Start</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
