"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

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
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/compwhite.png" alt="Compass Logo" width={30} height={30} />
              <span className="text-xl font-semibold tracking-tight">
                Compass
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Strategic career guidance for professionals seeking clarity,
              access, and long-term positioning.
            </p>

            <div className="flex gap-4 mt-6">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-white/60 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4 tracking-wide text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition"
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
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Celerey. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Part of the Celerey Ecosystem</p>
        </div>
      </div>
    </footer>
  );
}
