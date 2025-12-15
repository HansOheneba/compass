"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const assessments = [
  {
    title: "Career Alignment",
    description:
      "Understand how connected you are to your current or future path.",
    href: "/career-scan/alignment",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    title: "Interests",
    description: "Explore areas you're naturally drawn to and energized by.",
    href: "/career-scan/interests",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    title: "Skills",
    description: "Identify your strengths and areas you can grow.",
    href: "/career-scan/skills",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Assessments() {
  return (
    <section className="py-20 bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Explore Your Career Profile
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Three powerful tools to help you understand yourself and make better
            career decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {assessments.map((a) => (
            <Link key={a.title} href={a.href} className="h-full">
              <Card className="group h-full overflow-hidden border rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer bg-white p-0 flex flex-col">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-xl shrink-0">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-600">{a.description}</p>
                  </div>

                  {/* CTA pinned to bottom */}
                  <div className="mt-auto pt-4 text-sm font-medium text-black group-hover:underline">
                    Start assessment →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
