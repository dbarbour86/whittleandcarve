import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e7e1d6] bg-[#f5f1ea] text-[#4a453e] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12">
          {/* Brand Philosophy column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-[#22201d]">
              <img
                src="/images/favicon.png"
                alt="Whittle & Carve Emblem"
                className="w-10 h-10 rounded-lg border border-[#d5cbbe] shadow-xs object-contain bg-[#ffffff]"
              />
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-semibold tracking-tight text-[#22201d] leading-none">
                  Whittle &amp; Carve
                </span>
                <span className="text-[11px] tracking-wide text-[#736c63] uppercase font-medium mt-0.5">
                  Handmade Field Guide
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#5e584f] max-w-sm">
              {SITE_CONFIG.philosophy}
            </p>
            <p className="text-sm text-[#5e584f] leading-relaxed max-w-sm">
              We help beginners start wood carving with safe techniques, modest tools, and straightforward projects. No giant workshops or expensive setups required.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#22201d]">
              Guides &amp; Tools
            </div>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.footerLinks.guides.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#22201d] hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/best-beginner-whittling-kit"
                  className="hover:text-[#22201d] hover:underline underline-offset-4 transition-colors"
                >
                  Starter Tool Checklist
                </Link>
              </li>
            </ul>
          </div>

          {/* Beginner Projects Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#22201d]">
              Projects
            </div>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.footerLinks.projects.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#22201d] hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Legal Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#22201d]">
              About &amp; Site
            </div>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#22201d] hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#e2d9cc] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#5e584f]">
          <p className="max-w-2xl leading-relaxed">
            <strong className="text-[#22201d] font-semibold">Affiliate Notice:</strong> Whittle &amp; Carve is an independent instructional resource. In future articles, some tool links may earn a small referral commission at no additional cost to you. We only recommend practical, beginner-appropriate items.
          </p>
          <div className="whitespace-nowrap text-xs text-[#736c63]">
            &copy; {currentYear} Whittle &amp; Carve.
          </div>
        </div>
      </div>
    </footer>
  );
}
