"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutCompass() {
  return (
    <main className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b"
          alt="Executive meeting"
          fill
          priority
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Direction, access, and execution <br /> For people who take their
              careers seriously.
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Compass is a private career intelligence platform combining
              structured self-assessment, expert guidance, and strategic
              industry access.
            </p>
          </div>
        </div>
      </section>

      {/* ================= POSITIONING ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              More than guidance. Strategic positioning.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Compass is built for individuals navigating high-impact career
              decisions, role transitions, industry shifts, leadership growth,
              and access to competitive opportunities.
              <br />
              <br />
              We combine clarity tools with real-world advisory and partner
              networks across critical industries.
            </p>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Professional discussion"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES IT DIFFERENT ================= */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            What Sets Compass Apart
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Expert-Led Advisory",
                text: "Work with experienced advisors who understand senior hiring, industry dynamics, and long-term positioning.",
                img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
              },
              {
                title: "Strategic Industry Access",
                text: "Through trusted partners, Compass connects qualified individuals to opportunities within highly competitive sectors.",
                img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
              },
              {
                title: "Signal Over Noise",
                text: "We prioritize clarity, discretion, and outcomes — not volume, virality, or generic advice.",
                img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="overflow-hidden border bg-white p-0"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO IT’S FOR ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Who Compass Is Designed For
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Compass is designed for professionals who value intentional growth,
            strategic moves, and long-term career leverage.
            <br />
            <br />
            If you’re optimizing for clarity, access, and outcomes, Compass
            aligns with how you think.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Begin with clarity.</h2>
          <p className="text-white/70 mb-8">
            Every engagement starts with understanding where you stand.
          </p>

          <a
            href="/career-scan"
            className="inline-block px-8 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition"
          >
            Start Career Scan →
          </a>
        </div>
      </section>
    </main>
  );
}
