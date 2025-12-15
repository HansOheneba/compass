"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const journey = [
  {
    title: "Clarity",
    subtitle: "Understand your position",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  {
    title: "Direction",
    subtitle: "Identify viable paths",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Preparation",
    subtitle: "Build leverage",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    title: "Transition",
    subtitle: "Move with intent",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "Positioning",
    subtitle: "Access better rooms",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    title: "Advisory",
    subtitle: "Decisions, refined",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

export default function JourneyPage() {
  return (
    <main className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Focused professional"
          fill
          priority
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A structured path to
              <span className="block">better career decisions</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Compass guides high-intent professionals from clarity to strategic
              positioning.
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY GRID ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {journey.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-cover   transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start with clarity</h2>
          <p className="text-gray-600 mb-8">
            Every engagement begins with understanding where you stand.
          </p>

          <Link
            href="/career-scan"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Begin Career Scan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
