"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Add Question", href: "/add" },
  { label: "History", href: "/history" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 min-h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col px-3 py-6">

      {/* App Title */}
      <div className="px-3 mb-6">
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          DSA Tracker
        </h1>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-4" />

      {/* Navigation Links */}
      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors duration-150
                ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-normal"
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}