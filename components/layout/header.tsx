"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Journey", href: "/journey" },
    { label: "Career Scan", href: "/career-scan" },
    { label: "Advisors", href: "/advisors" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <header className="w-full border-b border-[#1C2A2B] bg-black text-[#E9F0EE]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          THE <span className="text-white">COMPASS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium hover:text-[#2AB57A] transition text-white"
            >
              <p className="text-white">{link.label}</p>
            </Link>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden md:block">
          <Button variant="outline" className="text-black cursor-pointer">
            Enter Portal
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-[#122423] transition"
        >
          <Menu className="h-6 w-6 text-[#E9F0EE]" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1C2A2B] bg-[#0F1A1C] px-6 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-medium hover:text-[#2AB57A] transition"
              onClick={() => setMenuOpen(false)}
            >
              <p className="text-white">{link.label}</p>
            </Link>
          ))}

          <Button variant="outline" className="text-black">
            Enter Portal
          </Button>
        </div>
      )}
    </header>
  );
}
