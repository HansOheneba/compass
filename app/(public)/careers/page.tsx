"use client";

import Link from "next/link";

interface Career {
  industry: string;
  description: string;
  roles: string[];
}

const careers: Career[] = [
  {
    industry: "Finance & Accounting",
    description:
      "Finance and accounting professionals help organizations manage money, assess financial health, and make informed business decisions.",
    roles: ["Accountant", "Financial Analyst", "Auditor"],
  },
  {
    industry: "Education & Research",
    description:
      "This field focuses on knowledge creation, teaching, and research that drives innovation and develops future professionals.",
    roles: ["Professor", "Research Analyst", "Instructional Designer"],
  },
  {
    industry: "Technology & Innovation",
    description:
      "Technology careers involve building digital products, solving technical problems, and creating innovative solutions for modern challenges.",
    roles: ["Software Engineer", "Product Manager", "UX Designer"],
  },
  {
    industry: "Healthcare & Medicine",
    description:
      "Healthcare professionals work to improve patient outcomes, support wellbeing, and advance medical knowledge.",
    roles: ["Nurse", "Clinical Researcher", "Healthcare Administrator"],
  },
  {
    industry: "Consulting & Technology",
    description:
      "Consultants help organizations solve complex problems, improve performance, and implement technology-driven strategies.",
    roles: ["Management Consultant", "IT Consultant", "Business Analyst"],
  },
  {
    industry: "Data Science & Analytics",
    description:
      "Data professionals analyze information, build models, and turn data into insights that guide decision-making.",
    roles: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
  },
  {
    industry: "Marketing & Sales",
    description:
      "Marketing and sales teams connect products to customers, drive revenue, and build strong brand relationships.",
    roles: [
      "Marketing Manager",
      "Sales Executive",
      "Digital Marketing Specialist",
    ],
  },
  {
    industry: "Creative & Design",
    description:
      "Creative careers focus on visual storytelling, user experience, and shaping how brands and products are perceived.",
    roles: ["Graphic Designer", "Creative Director", "UI/UX Designer"],
  },
  {
    industry: "Engineering & Science",
    description:
      "Engineers and scientists apply technical and scientific principles to build, test, and improve real-world solutions.",
    roles: [
      "Mechanical Engineer",
      "Research Scientist",
      "Biomedical Engineer",
    ],
  },
  {
    industry: "Healthcare",
    description:
      "This path emphasizes patient care, medical leadership, and managing healthcare systems efficiently.",
    roles: ["Physician", "Physical Therapist", "Healthcare Manager"],
  },
];

export default function CareersPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Explore Career Paths
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about different career fields, the roles within them, and
            discover which path aligns best with your skills and interests.
          </p>
        </header>

        {/* Career Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career) => (
            <div
              key={career.industry}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{career.industry}</h2>

              <p className="text-gray-600 mb-4 text-sm">{career.description}</p>

              <ul className="text-sm text-gray-700 mb-6 list-disc list-inside">
                {career.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>

              <Link
                href={`/career-explorer?industry=${encodeURIComponent(
                  career.industry
                )}`}
                className="inline-block w-full text-center rounded-lg bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition"
              >
                Explore This Career
              </Link>
            </div>
          ))}

          {/* Not Seeing Your Path */}
          <section className="bg-white border rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-3">
              Don’t See Your Career Path?
            </h3>
            <p className="text-gray-600 mb-6">
              Not every career fits neatly into a category. If your path isn’t
              listed here, we still encourage you to reach out. Our platform is
              designed to adapt to diverse backgrounds, emerging roles, and
              unconventional career journeys.
            </p>

            <p className="text-gray-600 mb-6">
              Whether you’re exploring a niche field, a hybrid role, or
              something entirely new, we likely have insights and tools that can
              support your direction.
            </p>

            <a
              href="https://celereyv2.vercel.app/contact"
              className="inline-block rounded-lg bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition"
            >
              Get in Touch
            </a>
          </section>
        </section>
      </div>
    </main>
  );
}

