"use client";

import { useState } from "react";
import { useAlignmentStore } from "@/lib/store/alignmentStore";

export default function CareerAlignmentChecker() {
  const { setCheck } = useAlignmentStore();

  const questions = [
    {
      text: "My current career or path excites and energizes me regularly.",
      type: "interest",
    },
    {
      text: "I use my strongest skills and talents in what I do most of the time.",
      type: "skills",
    },
    {
      text: "My work aligns with my personal values and what I care about.",
      type: "values",
    },
    {
      text: "I feel like I am growing, learning, and progressing in my field.",
      type: "growth",
    },
    {
      text: "I can clearly see a future in this direction that I want for myself.",
      type: "future",
    },
    {
      text: "My work environment supports my well-being and motivation.",
      type: "environment",
    },
  ];

  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(3)
  );
  const [results, setResults] = useState<null | {
    interest: number;
    skills: number;
    values: number;
    growth: number;
    future: number;
    environment: number;
    total: number;
  }>(null);

  const submitAssessment = () => {
    const score = {
      interest: 0,
      skills: 0,
      values: 0,
      growth: 0,
      future: 0,
      environment: 0,
      total: 0,
    };

    answers.forEach((value, index) => {
      const type = questions[index].type as keyof typeof score;
      score[type] += value;
      score.total += value;
    });

    // Save to store
    setCheck(score);
    setResults(score);
  };

  return (
    <main className="min-h-screen w-full flex justify-center items-start py-16 bg-white px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">Career Alignment Checker</h1>
        <p className="text-gray-600 mb-8">
          Rate each statement from 1–5 based on your current career situation.
          Your result will reveal how aligned you are — and where improvement
          may be needed.
        </p>

        {/* ====================== QUESTION VIEW ====================== */}
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
                    const updated = [...answers];
                    updated[i] = Number(e.target.value);
                    setAnswers(updated);
                  }}
                  className="w-full"
                />

                <p className="text-sm text-gray-500 mt-1">
                  Alignment Score:{" "}
                  <span className="font-semibold">{answers[i]}</span>
                </p>
              </div>
            ))}

            <button
              onClick={submitAssessment}
              className="w-full mt-6 py-3 bg-black text-white rounded-xl text-lg font-semibold hover:opacity-90"
            >
              Calculate Alignment
            </button>
          </div>
        )}

        {/* ====================== RESULTS VIEW ====================== */}
        {results && (
          <div className="mt-12 bg-gray-100 p-7 rounded-xl shadow-md border">
            <h2 className="text-2xl font-bold mb-5">
              Career Alignment Results
            </h2>

            {Object.entries(results)
              .filter(([key]) => key !== "total")
              .map(([key, value]) => {
                const percent = (value / 5) * 20 * 1; // convert 6 categories * max score 5
                return (
                  <div key={key} className="mb-4">
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

            {/* Summary Insight */}
            <div className="mt-6 p-4 bg-white rounded-lg border">
              <p className="text-gray-800 text-lg font-medium">
                Overall Alignment:
              </p>
              <p className="text-3xl font-bold mt-1">
                {Math.round((results.total / (questions.length * 5)) * 100)}%
              </p>

              <p className="mt-3 text-gray-600">
                {results.total >= 22
                  ? "You seem well aligned — your path fits your strengths and values."
                  : results.total >= 16
                  ? "Moderate alignment — with growth or role adjustment, this could be a strong fit."
                  : "Low alignment — you may need a shift, new environment, or a career pivot to thrive."}
              </p>
            </div>

            <button
              onClick={() => setResults(null)}
              className="w-full mt-8 py-2 border rounded-lg font-medium hover:bg-white"
            >
              Retake Checker
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
