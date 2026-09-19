import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Whittle & Carve",
  description:
    "Privacy Policy for Whittle & Carve. Learn how we handle visitor data, analytics, and cookies.",
  alternates: {
    canonical: "https://whittleandcarve.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Whittle & Carve",
    description: "Privacy practices and data policies at Whittle & Carve.",
    url: "https://whittleandcarve.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <header className="space-y-4 mb-10 pb-8 border-b border-[#e7e1d6]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eae0] border border-[#e2d7c5] text-xs font-semibold uppercase tracking-wider text-[#736c63]">
          Legal &amp; Data Standards
        </div>
        <h1 className="font-editorial text-3xl sm:text-5xl font-semibold tracking-tight text-[#22201d] leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#736c63]">Last updated: September 19, 2026</p>
      </header>

      <div className="prose-whittle">
        <h2>Introduction</h2>
        <p>
          Whittle &amp; Carve (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates https://whittleandcarve.com. We respect your privacy and are committed to protecting it through transparent, minimal data practices.
        </p>

        <h2>Information We Do Not Collect</h2>
        <p>
          Whittle &amp; Carve does not require user accounts, user logins, comment submissions, or newsletters. We do not collect names, phone numbers, credit card numbers, or physical addresses on this website.
        </p>

        <h2>Website Analytics</h2>
        <p>
          We use lightweight, privacy-focused analytics (such as Vercel Analytics and Google Search Console) to understand broad trends—such as which guides are most popular, what search terms lead visitors to our articles, and approximate geographical regions.
        </p>
        <p>
          These tools collect non-personally identifiable metrics such as browser type, operating system, and page view timestamps to help us improve site performance and editorial content.
        </p>

        <h2>Cookies and Affiliate Links</h2>
        <p>
          Our site does not set third-party tracking or advertising cookies. If you click on an external affiliate link to a retailer (such as a woodworking supplier or online bookstore), that third-party website may place a cookie on your device according to their own privacy policies to attribute referral credit.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </div>
    </article>
  );
}
