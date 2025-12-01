"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface Plan {
  id: number;
  name: string;
  price: number;
  tagline: string;
  description: string;
  features: string[];
  popular?: boolean;
  button_text: string;
  payment_link: string;
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Essentials",
    price: 99.99,
    tagline: "Pay-As-You-Go",
    description: "Ideal for individuals seeking one-off career clarity.",
    features: [
      "One 45-min advisory call",
      "Post-session summary",
      "Action roadmap",
    ],
    button_text: "Book Session",
    payment_link: "#",
  },
  {
    id: 2,
    name: "Professional",
    price: 299.99,
    tagline: "Monthly Subscription",
    description:
      "For individuals who want ongoing guidance and skill tracking.",
    features: [
      "Up to 2 advisory calls per month",
      "Weekly progress check-ins",
      "Personalized skill roadmap",
      "Email support",
    ],
    popular: true,
    button_text: "Subscribe Now",
    payment_link: "#",
  },
  {
    id: 3,
    name: "Premium",
    price: 499.99,
    tagline: "Monthly Subscription",
    description:
      "Full career support with premium features for ambitious professionals.",
    features: [
      "Unlimited advisory calls",
      "Dedicated mentor",
      "Advanced skill tracking",
      "Exclusive webinars",
      "Priority email & chat support",
    ],
    button_text: "Subscribe Now",
    payment_link: "#",
  },
];

export default function PricingPage() {
  const formatPrice = (price: number) => (
    <span className="text-3xl font-bold text-[#1B1856]">
      ${price.toFixed(2)}
      <span className="text-base font-medium text-gray-600"> / session</span>
    </span>
  );

  return (
    <>

      {/* Hero */}
      <section className="w-full px-6 py-20 bg-linear-to-b from-white to-slate-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B1856]">
          Compass Plans & Pricing
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Choose a plan that fits your career journey — from one-off sessions to
          ongoing guidance and mentorship.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`rounded-3xl p-8 flex flex-col justify-between border ${
              plan.popular
                ? "border-[#D4AF37] shadow-lg bg-linear-to-b from-white via-amber-50/20 to-white"
                : "border-gray-200 bg-white"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-[#D4AF37] font-medium mb-3">{plan.tagline}</p>
              <div className="mb-6">{formatPrice(plan.price)}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8 text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37] mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href={plan.payment_link}>
              <button
                className={`w-full rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#1B1856] hover:bg-[#1B1856]/90 text-white"
                    : "border border-[#1B1856] text-[#1B1856] hover:bg-[#1B1856] hover:text-white"
                }`}
              >
                {plan.button_text}
              </button>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mb-32 px-6">
        <h2 className="text-3xl font-semibold text-[#1B1856] mb-4">
          Not Sure Which Plan to Choose?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Start with the Essentials session to uncover your career strengths and
          get a clear roadmap. Upgrade anytime as your goals grow.
        </p>
        <Link href="#">
          <div className="inline-flex items-center space-x-3 bg-[#1B1856] hover:bg-[#1B1856]/90 text-white px-8 py-3 rounded-full cursor-pointer transition">
            <span>Book Essentials Session</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </section>


    </>
  );
}
