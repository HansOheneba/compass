"use client";

import { useState } from "react";

export default function InterestProfiler() {
  const questions = [
    {
      text: "I enjoy creating visual art, music, writing or creative content.",
      type: "creativity",
    },
    {
      text: "I am energized by solving difficult problems or exploring new ideas.",
      type: "analytical",
    },
    {
      text: "I like planning, managing teams, organizing resources or leading projects.",
      type: "business",
    },
    {
      text: "Helping, connecting, teaching, or supporting others brings me joy.",
      type: "people",
    },
    {
      text: "I enjoy building things — software, hardware, systems or tools.",
      type: "technical",
    },
    {
      text: "I care deeply about community, social change or making impact.",
      type: "impact",
    },
  ];

  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(3)
  );
  const [results, setResults] = useState<{
    creativity: number;
    analytical: number;
    business: number;
    people: number;
    technical: number;
    impact: number;
  } | null>(null);

  const submitAssessment = () => {
    const score = {
      creativity: 0,
      analytical: 0,
      business: 0,
      people: 0,
      technical: 0,
      impact: 0,
    };

    answers.forEach((value, index) => {
      const type = questions[index].type as keyof typeof score;
      score[type] += value;
    });

    setResults(score);
  };

  return (
    <main className="min-h-screen w-full flex justify-center items-start py-16 bg-white px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">Interest & Passion Profiler</h1>
        <p className="text-gray-600 mb-8">
          Rate each statement below from 1–5 based on how much it resonates with
          you. Your final profile will reveal where your strongest passions
          naturally fall.
        </p>

        {/* ===================== QUESTIONS ===================== */}
        {!results && (
          <div className="space-y-6">
            {questions.map((q, i) => (
              <div
                key={i}
                className="bg-gray-50 p-5 rounded-xl shadow-sm border"
              >
                <p className="text-gray-800 font-medium mb-3">{q.text}</p>

                <input
                  type="range"
                  min={1}
                  max={5}
                  value={answers[i]}
                  onChange={(e) => {
                    const newAns = [...answers];
                    newAns[i] = Number(e.target.value);
                    setAnswers(newAns);
                  }}
                  className="w-full"
                />

                <p className="text-sm text-gray-500 mt-1">
                  Interest Level:{" "}
                  <span className="font-semibold">{answers[i]}</span>
                </p>
              </div>
            ))}

            <button
              onClick={submitAssessment}
              className="w-full mt-6 py-3 bg-black text-white rounded-xl text-lg font-semibold hover:opacity-90"
            >
              Generate My Passion Profile
            </button>
          </div>
        )}

        {/* ===================== RESULTS SECTION ===================== */}
        {results && (
          <div className="mt-12 bg-gray-100 p-7 rounded-xl shadow-md border">
            <h2 className="text-2xl font-bold mb-5">Your Passion Overview</h2>

            {Object.entries(results)
              .sort((a, b) => b[1] - a[1])
              .map(([key, value]) => {
                const percent = (value / (questions.length * 5)) * 100;
                return (
                  <div key={key} className="mb-5">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="capitalize">{key}</span>
                      <span>{percent.toFixed(0)}%</span>
                    </div>
                    <div className="h-2 bg-gray-300 rounded-full">
                      <div
                        className="h-full bg-black rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}

            <p className="mt-6 text-gray-800 text-lg">
              Your strongest area of passion is:
              <br />
              <span className="text-2xl font-bold capitalize block mt-1">
                {Object.entries(results).sort((a, b) => b[1] - a[1])[0][0]}
              </span>
            </p>

            <button
              onClick={() => setResults(null)}
              className="w-full mt-8 py-2 border rounded-lg font-medium hover:bg-white"
            >
              Retake Assessment
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
