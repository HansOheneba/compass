"use client";

import Link from "next/link";
import { Compass, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Explore",
      links: [
        { label: "Assessments", href: "/assessments" },
        { label: "Career Paths", href: "/careers" },
        { label: "Roadmaps", href: "/roadmaps" },
        { label: "Learn", href: "/learn" },
      ],
    },
    {
      title: "Programs",
      links: [
        { label: "Scholarships", href: "/scholarships" },
        { label: "Courses", href: "/courses" },
        { label: "Internships", href: "/internships" },
        { label: "Bootcamps", href: "/bootcamps" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900 tracking-tight">
                Compass
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Find your direction. Discover your strengths. Build a life and
              career with purpose.
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-900 font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Celerey. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Part of the Celerey Ecosystem</p>
        </div>
      </div>
    </footer>
  );
}
