"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/lib/store/onboardingStore";

export default function Header() {
  const router = useRouter();
  const { data: onboardingData } = useOnboardingStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEnterPortal = () => {
    // Check if onboarding is complete
    const onboardingCompleted =
      onboardingData?.name && onboardingData?.name.trim().length > 0;

    if (onboardingCompleted) {
      router.push("/dashboard");
    } else {
      router.push("/onboarding");
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Journey", href: "/journey" },
    { label: "Career Scan", href: "/career-scan" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          THE <span className="text-[#1B1856]">COMPASS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-gray-700 hover:text-[#1B1856] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            onClick={handleEnterPortal}
            variant="outline"
            className="border-gray-300 text-gray-900 hover:bg-gray-50"
          >
            Enter Portal
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-medium text-gray-700 hover:text-[#1B1856] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              handleEnterPortal();
              setMenuOpen(false);
            }}
            className="block w-full"
          >
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-900 hover:bg-gray-50"
            >
              Enter Portal
            </Button>
          </button>
        </div>
      )}
    </header>
  );
}
