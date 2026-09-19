import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Whittle & Carve",
  description: "The requested carving guide or project could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md space-y-4">
        <div className="w-12 h-12 rounded-lg bg-[#f4eee4] border border-[#d9cdbd] flex items-center justify-center text-[#a05a2c] mx-auto">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#22201d]">
          Carving Not Found
        </h1>

        <p className="text-sm text-[#5e584f] leading-relaxed">
          Looks like this page slipped away like a stray wood shaving. The link you followed might have moved or doesn&apos;t exist.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-md bg-[#22201d] text-[#fbf9f5] text-sm font-medium hover:bg-[#3d3832] transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/start-whittling"
            className="px-5 py-2.5 rounded-md border border-[#d5cbbe] bg-[#ffffff] text-[#22201d] text-sm font-medium hover:bg-[#f5f1ea] transition-colors"
          >
            Read Beginner Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
