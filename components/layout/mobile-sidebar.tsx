"use client";

import { X } from "lucide-react";
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

type MenuItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
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

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[220px] bg-white text-black flex flex-col border-r border-gray-300 z-40 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="p-6 border-b border-gray-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-black">Compass</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`mx-3 px-3 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                          active
                            ? "bg-gray-300 font-semibold"
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

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-300">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-black hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5 text-black" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
