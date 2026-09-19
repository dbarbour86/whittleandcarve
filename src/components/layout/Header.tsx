"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-sm border-b border-[#e7e1d6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-[76px] sm:min-h-[84px] py-2 sm:py-2.5 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link
          href="/"
          className="group flex items-center transition-opacity hover:opacity-95 py-1"
          aria-label="Whittle & Carve Home"
        >
          <img
            src="/images/logo.png"
            alt="Whittle & Carve"
            className="h-13 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-150 group-hover:scale-[1.01]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 text-[15px] font-medium text-[#4a453e]">
          <Link
            href="/start-whittling"
            className={`px-3.5 py-2 rounded-md transition-colors hover:text-[#22201d] hover:bg-[#f0eae0] ${
              pathname === "/start-whittling"
                ? "text-[#22201d] bg-[#eee6d8] font-semibold"
                : ""
            }`}
          >
            Start Here
          </Link>

          {/* Projects Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProjectsDropdownOpen((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setProjectsDropdownOpen(false);
              }}
              aria-expanded={projectsDropdownOpen}
              className={`px-3.5 py-2 rounded-md inline-flex items-center gap-1.5 transition-colors hover:text-[#22201d] hover:bg-[#f0eae0] ${
                pathname.startsWith("/projects")
                  ? "text-[#22201d] bg-[#eee6d8] font-semibold"
                  : ""
              }`}
            >
              <span>Projects</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  projectsDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {projectsDropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-64 rounded-lg bg-[#ffffff] notebook-border p-2 shadow-lg z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#736c63] border-b border-[#e7e1d6] mb-1">
                  Beginner Projects
                </div>
                <Link
                  href="/projects/whittle-a-mushroom"
                  onClick={() => setProjectsDropdownOpen(false)}
                  className="block px-3 py-2 text-sm rounded hover:bg-[#f5f1ea] text-[#22201d] transition-colors"
                >
                  <span className="font-semibold block text-[#22201d]">
                    Whittle a Mushroom
                  </span>
                  <span className="text-xs text-[#736c63]">
                    45–60 min · Level 1 Beginner
                  </span>
                </Link>
                <Link
                  href="/projects/comfort-bird"
                  onClick={() => setProjectsDropdownOpen(false)}
                  className="block px-3 py-2 text-sm rounded hover:bg-[#f5f1ea] text-[#22201d] transition-colors"
                >
                  <span className="font-semibold block text-[#22201d]">
                    Carve a Comfort Bird
                  </span>
                  <span className="text-xs text-[#736c63]">
                    1.5–2 hours · Beginner • Next Project
                  </span>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/best-beginner-whittling-kit"
            className={`px-3.5 py-2 rounded-md transition-colors hover:text-[#22201d] hover:bg-[#f0eae0] ${
              pathname === "/best-beginner-whittling-kit"
                ? "text-[#22201d] bg-[#eee6d8] font-semibold"
                : ""
            }`}
          >
            Tools
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-md transition-colors hover:text-[#22201d] hover:bg-[#f0eae0] ${
              pathname === "/about"
                ? "text-[#22201d] bg-[#eee6d8] font-semibold"
                : ""
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#4a453e] hover:text-[#22201d] hover:bg-[#f0eae0] rounded-md transition-colors"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="17" x2="20" y2="17"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e7e1d6] bg-[#fbf9f5] px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/start-whittling"
            className="block py-2.5 px-3 rounded text-base font-medium text-[#22201d] hover:bg-[#f0eae0]"
          >
            Start Here (Beginner Guide)
          </Link>
          <div className="pt-2 pb-1 pl-3 text-xs font-semibold uppercase tracking-wider text-[#736c63]">
            Projects
          </div>
          <Link
            href="/projects/whittle-a-mushroom"
            className="block py-2 px-3 pl-6 rounded text-sm text-[#4a453e] hover:bg-[#f0eae0]"
          >
            Whittle a Mushroom <span className="text-xs text-[#736c63]">(Level 1)</span>
          </Link>
          <Link
            href="/projects/comfort-bird"
            className="block py-2 px-3 pl-6 rounded text-sm text-[#4a453e] hover:bg-[#f0eae0]"
          >
            Carve a Comfort Bird <span className="text-xs text-[#736c63]">(Next Project)</span>
          </Link>
          <Link
            href="/best-beginner-whittling-kit"
            className="block py-2.5 px-3 rounded text-base font-medium text-[#22201d] hover:bg-[#f0eae0]"
          >
            Tools &amp; Starter Kits
          </Link>
          <Link
            href="/about"
            className="block py-2.5 px-3 rounded text-base font-medium text-[#22201d] hover:bg-[#f0eae0]"
          >
            About Whittle &amp; Carve
          </Link>
        </div>
      )}
    </header>
  );
}
