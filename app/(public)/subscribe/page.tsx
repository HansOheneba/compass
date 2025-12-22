"use client";

import Link from "next/link";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "₵0",
    period: "forever",
    description: "Get started with career discovery tools and basic insights.",
    features: [
      "Career explorer access",
      "Basic role recommendations",
      "Skill & interest assessment",
      "Dashboard overview",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "₵99",
    period: "per month",
    description: "For individuals serious about career clarity and growth.",
    features: [
      "Everything in Free",
      "Advanced career matching",
      "Personalized skill gap analysis",
      "Career path recommendations",
      "Priority insights & updates",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₵299",
    period: "per month",
    description: "Hands-on, tailored guidance for decisive career moves.",
    features: [
      "Everything in Pro",
      "1-on-1 career guidance",
      "Custom career roadmap",
      "CV & profile optimization insights",
      "Direct support access",
    ],
    cta: "Go Premium",
  },
];

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you’re exploring options or ready to take decisive steps,
            Compass has a plan designed to support your career journey.
          </p>
        </header>

        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border p-6 shadow-sm transition ${
                plan.highlighted ? "border-black shadow-lg" : "hover:shadow-md"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>

              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-500 ml-1">
                  / {plan.period}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-black">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/dashboard"
                className={`block w-full text-center rounded-lg py-2 text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </section>

        {/* Footer Note */}
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-sm">
            Not sure which plan fits your situation? You can start free and
            upgrade anytime. If your needs don’t fit a standard plan, our team
            can help tailor an approach for you.
          </p>

          <Link
            href="https://celereyv2.vercel.app/contact"
            className="inline-block mt-4 text-sm font-medium text-black underline hover:opacity-80"
          >
            Contact us to discuss your needs
          </Link>
        </section>
      </div>
    </main>
  );
}
