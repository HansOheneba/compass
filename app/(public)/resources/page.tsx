"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, BookOpen, Video, Link as LinkIcon, ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Career Planning Guide",
    type: "Guide",
    description:
      "Step-by-step framework to map your skills, goals, and career trajectory.",
    icon: <BookOpen className="w-6 h-6 text-[#D4AF37]" />,
    link: "#",
  },
  {
    title: "Resume & Cover Letter Templates",
    type: "Template",
    description:
      "Downloadable templates to help you present your professional story effectively.",
    icon: <FileText className="w-6 h-6 text-[#D4AF37]" />,
    link: "#",
  },
  {
    title: "Video: Networking Strategies",
    type: "Video",
    description:
      "Learn actionable networking strategies to connect with the right people.",
    icon: <Video className="w-6 h-6 text-[#D4AF37]" />,
    link: "#",
  },
  {
    title: "Top Career Tools & Links",
    type: "Resource List",
    description:
      "Curated collection of online tools and platforms to accelerate your career growth.",
    icon: <LinkIcon className="w-6 h-6 text-[#D4AF37]" />,
    link: "#",
  },
];

export default function ResourcesPage() {
  return (
    <>


      {/* Hero */}
      <section className="w-full px-6 py-20 bg-linear-to-b from-white to-slate-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B1856]">
          Resources
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Discover curated resources, guides, templates, and tools to help you
          advance your career and financial confidence.
        </p>
      </section>

      {/* Resources Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {resources.map((res, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="mb-4">{res.icon}</div>
            <h3 className="text-xl font-semibold text-[#1B1856] mb-2">
              {res.title}
            </h3>
            <p className="text-gray-700 mb-4">{res.description}</p>
            <Link href={res.link} className="mt-auto">
              <button className="text-[#1B1856] font-semibold hover:text-[#D4AF37] transition flex items-center gap-1">
                Access {res.type}
              </button>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mb-32 px-6">
        <h2 className="text-3xl font-semibold text-[#1B1856] mb-4">
          Stay Updated & Grow
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Bookmark this page to keep learning and applying new strategies to
          advance your career. Check back regularly for updated resources.
        </p>
        <Link href="/career-scan">
          <div className="inline-flex items-center space-x-3 bg-[#1B1856] hover:bg-[#1B1856]/90 text-white px-8 py-3 rounded-full cursor-pointer transition">
            <span>Start Your Career Scan</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </section>


    </>
  );
}
