"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";


const journeySteps = [
  {
    title: "Discover Your Strengths",
    description:
      "Understand your unique skills, values, and interests to uncover career paths that align with your profile.",
    highlights: [
      "Complete skill and personality assessments",
      "Identify hidden strengths",
      "Map potential career directions",
    ],
  },
  {
    title: "Explore Career Options",
    description:
      "Dive into industries, roles, and opportunities that match your strengths and ambitions.",
    highlights: [
      "Compare career paths",
      "Understand required skills and growth potential",
      "Discover global opportunities",
    ],
  },
  {
    title: "Skill Development Plan",
    description:
      "Build a personalized plan to develop the skills needed for your chosen career path.",
    highlights: [
      "Structured learning roadmap",
      "Prioritize high-impact skills",
      "Track your progress",
    ],
  },
  {
    title: "Career Transition",
    description:
      "Pivot confidently into a new role or industry with actionable strategies.",
    highlights: [
      "Create a transition plan",
      "Update CV and LinkedIn",
      "Prepare for interviews",
    ],
  },
  {
    title: "Leadership & Growth",
    description:
      "Develop leadership capabilities and position yourself for career advancement.",
    highlights: [
      "Mentorship guidance",
      "Advanced career coaching",
      "Networking strategies",
    ],
  },
  {
    title: "Expert Advisory",
    description:
      "Receive one-on-one guidance to accelerate your career and make informed decisions.",
    highlights: [
      "Personalized consultations",
      "Actionable career roadmap",
      "Feedback and review sessions",
    ],
  },
];

export default function JourneyPage() {
  return (
    <>


      {/* Page Hero */}
      <section className="w-full px-6 py-20 bg-linear-to-b from-white to-slate-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B1856]">
          Your Career Journey
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Navigate your path from discovering strengths to achieving growth with
          structured guidance and actionable insights.
        </p>
      </section>

      {/* Journey Steps Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-[#1B1856] mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700 mb-4">{step.description}</p>
            <ul className="space-y-2 text-gray-700">
              {step.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] mt-1" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="text-center mb-32 px-6">
        <h2 className="text-3xl font-semibold text-[#1B1856] mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Schedule a personalized advisory session or start your skill
          assessment to uncover the career path that’s right for you.
        </p>
        <Link href="/pricing">
          <div className="inline-flex items-center space-x-3 bg-[#1B1856] hover:bg-[#1B1856]/90 text-white px-8 py-3 rounded-full cursor-pointer transition">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </section>


    </>
  );
}
