"use client";

export default function CareerAlignmentChecker() {
  return (
    <main className="min-h-screen w-full flex justify-center items-start py-16 bg-white px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">Career Alignment Checker</h1>
        <p className="text-gray-600 mb-8">
          Check how well your current career direction matches your skills,
          interests and long-term goals.
        </p>

        <div className="p-6 rounded-xl border shadow-sm bg-gray-50">
          <p className="text-gray-800 font-medium">
            Questions + career-fit scoring will go here...
          </p>
        </div>
      </div>
    </main>
  );
}
