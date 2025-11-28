"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const assessments = [
  {
    title: "Technical Skills",
    description: "Evaluate your technical proficiency and readiness",
  },
  {
    title: "Leadership Style",
    description: "Discover your unique leadership approach",
  },
  {
    title: "Career Readiness",
    description: "Assess your preparation for your next role",
  },
  {
    title: "Industry Match",
    description: "Find industries aligned with your profile",
  },
];

export default function Assessments() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % assessments.length);
  const prev = () =>
    setCurrent((current - 1 + assessments.length) % assessments.length);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Measure Your Abilities Scientifically
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our scientifically-backed assessments reveal your true potential
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {assessments.map((assessment, i) => (
              <Card
                key={i}
                className={`p-6 border transition-all cursor-pointer ${
                  i === current
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="h-16 w-16 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {assessment.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {assessment.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
