"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, BarChart2, Users } from "lucide-react";

const tools = [
  {
    title: "Skill Assessment",
    description:
      "Evaluate your strengths and areas for improvement to understand your professional profile.",
    icon: <ClipboardCheck className="w-6 h-6 text-[#D4AF37]" />,
  },
  {
    title: "Career Interests",
    description:
      "Discover which industries and roles align with your passions and values.",
    icon: <BarChart2 className="w-6 h-6 text-[#D4AF37]" />,
  },
  {
    title: "Personality Insights",
    description:
      "Identify your working style and how you interact in teams and professional environments.",
    icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
  },
  {
    title: "Goal Alignment",
    description:
      "Map your short-term and long-term goals to actionable career strategies.",
    icon: <ArrowRight className="w-6 h-6 text-[#D4AF37]" />,
  },
];

export default function CareerScanPage() {
  return (
    <>


      {/* Hero */}
      <section className="w-full px-6 py-20 bg-linear-to-b from-white to-slate-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B1856]">
          Career Scan
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Review your skills, interests, and goals to gain clarity and plan your
          next steps with confidence.
        </p>
      </section>

      {/* Tools Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-start justify-between hover:shadow-lg transition"
          >
            <div className="mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold text-[#1B1856] mb-2">
              {tool.title}
            </h3>
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <Link href="#" className="mt-auto">
              <button className="text-[#1B1856] font-semibold hover:text-[#D4AF37] transition flex items-center gap-1">
                Start Tool <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mb-32 px-6">
        <h2 className="text-3xl font-semibold text-[#1B1856] mb-4">
          Take Control of Your Career
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Use these tools to gain insights, plan actionable steps, and move
          confidently toward your professional goals.
        </p>
        <Link href="/pricing">
          <div className="inline-flex items-center space-x-3 bg-[#1B1856] hover:bg-[#1B1856]/90 text-white px-8 py-3 rounded-full cursor-pointer transition">
            <span>Book an Advisory Session</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </section>
    </>
  );
}
