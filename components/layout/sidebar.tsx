"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Lightbulb,
  Zap,
  Target,
  Settings,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";


type MenuSection = {
  title: string;
  items: MenuItem[];
};

type MenuItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const menuSections: MenuSection[] = [
  {
    title: "Main",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Career Tools",
    items: [
      {
        name: "Interests",
        href: "/career-scan/interests",
        icon: <Lightbulb className="w-5 h-5" />,
      },
      {
        name: "Skills",
        href: "/career-scan/skills",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        name: "Alignment",
        href: "/career-scan/alignment",
        icon: <Target className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        name: "Settings",
        href: "/settings",
        icon: <Settings className="w-5 h-5" />,
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
    const router = useRouter();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className="w-[230px] h-screen bg-white border-r border-gray-300 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">Compass</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`mx-3 px-3 py-2 rounded-lg flex items-center gap-3 transition-all ${
                        active
                          ? "bg-gray-200 text-black font-semibold border border-gray-300"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-gray-300">
        <button
          onClick={() => router.push("/")}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
        >
          <LogOut className="w-5 h-5 text-black" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
