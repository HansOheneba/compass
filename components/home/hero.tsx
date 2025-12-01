"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Category {
  label: string;
  sub: string;
  img: string;
}


export default function CompassHero({
  categories,
}: {
  categories: Category[];
}) {
  const [active, setActive] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [categories.length]);

  return (
    <section className="w-full text-black px-6">
      {/* Hero Text */}
      <div className="my-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Find Clarity. Shape Your Future.
        </h1>
        <p className="text-slate-800 text-lg mt-4 max-w-2xl mx-auto">
          Compass helps you uncover the career path aligned with your skills,
          values, and ambitions — guided by data and expert insight.
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        {/* Category Bar */}
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar mx-auto justify-center">
          {categories.map((cat, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`
                  relative h-72 w-28 md:w-32 rounded-xl overflow-hidden 
                  bg-black/30 shrink-0 cursor-pointer transition-all duration-300
                  ${isActive ? "md:w-60 shadow-xl" : ""}
                `}
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover opacity-80"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Vertical text (stable position) */}
                <div className="absolute inset-0 flex items-center justify-start pl-3">
                  <span
                    className={`text-white text-sm font-semibold tracking-wide transition-all duration-300 
    ${isActive ? "opacity-0" : "opacity-100 rotate-90 origin-left pb-5"}`}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Horizontal expanded text */}
                <div
                  className={`
                    absolute left-4 bottom-4 transition-all duration-300 text-white
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }
                  `}
                >
                  <h3 className="text-lg font-semibold leading-tight">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-slate-200 mt-1">{cat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href={"#"}>
        <div className="flex items-center justify-center space-x-2 mt-8 border border-black w-fit mx-auto overflow-hidden  rounded-full pl-4 cursor-pointer text-slate-500 hover:text-slate-600 transition ">
          <p className="text-sm">Start your journey</p>
          <div className="bg-black  py-3 rounded-full px-7">
            <ArrowRight />
          </div>
        </div>
      </Link>
    </section>
  );
}