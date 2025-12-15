"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Personalized Guidance",
    description: "Tailored advice for your unique career journey",
    img: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Clear Pathways",
    description: "Step-by-step strategies to reach your goals",
    img: "https://images.unsplash.com/photo-1617590228604-ed9e8d8d2aa1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Growth Tracking",
    description: "Visualize your development and milestones",
    img: "https://images.unsplash.com/photo-1630673215780-c30a75dd8a6e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Expert Support",
    description: "Connect with top mentors and advisors",
    img: "https://images.unsplash.com/photo-1512238972088-8acb84db0771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1B1856]">
            Why Choose Compass
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Career guidance made simple and visual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all h-64 flex flex-col justify-end"
            >
              <div className="absolute inset-0">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="relative p-6 text-white">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm mt-1">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
