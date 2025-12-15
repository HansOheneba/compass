"use client";

import Link from "next/link";
import Image from "next/image";

export default function CareerScanHome() {
  const tools = [
    {
      name: "Interest & Passion Profiler",
      path: "/career-scan/interests",
      img: "https://images.unsplash.com/photo-1599488059966-a42a2ab36991?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Skills & Capability Inventory",
      path: "/career-scan/skills",
      img: "https://images.unsplash.com/photo-1629721671030-a83edbb11211?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Career Alignment Checker",
      path: "/career-scan/alignment",
      img: "https://plus.unsplash.com/premium_photo-1693671725924-302f7a2c450b?q=80&w=660&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="w-full bg-gray-50 flex flex-col items-center py-20 px-6">
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
            className="relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer flex flex-col justify-end h-64"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src={tool.img}
                alt={tool.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative p-6 text-white">
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="text-sm mt-1">Start →</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
