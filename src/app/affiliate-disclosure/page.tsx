import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Whittle & Carve",
  description:
    "Transparency and affiliate disclosure for Whittle & Carve. How we evaluate tools, earn referral commissions, and maintain editorial independence.",
  alternates: {
    canonical: "https://whittleandcarve.com/affiliate-disclosure",
  },
  openGraph: {
    title: "Affiliate Disclosure | Whittle & Carve",
    description: "Transparency and editorial standards at Whittle & Carve.",
    url: "https://whittleandcarve.com/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />

      <header className="space-y-4 mb-10 pb-8 border-b border-[#e7e1d6]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eae0] border border-[#e2d7c5] text-xs font-semibold uppercase tracking-wider text-[#736c63]">
          Transparency &amp; Ethics
        </div>
        <h1 className="font-editorial text-3xl sm:text-5xl font-semibold tracking-tight text-[#22201d] leading-tight">
          Affiliate Disclosure
        </h1>
        <p className="text-lg sm:text-xl text-[#4a453e] leading-relaxed max-w-2xl font-editorial italic">
          How we fund this website and maintain strict editorial independence.
        </p>
      </header>

      <div className="prose-whittle">
        <h2>FTC Disclosure Guidelines</h2>
        <p>
          In accordance with Federal Trade Commission (FTC) guidelines regarding endorsements and testimonials in advertising, Whittle &amp; Carve maintains full transparency regarding commercial relationships with retailers and manufacturers.
        </p>

        <h2>Affiliate Partnerships</h2>
        <p>
          Whittle &amp; Carve may participate in affiliate marketing programs. This means that when you click on certain links to products or services recommended on our website, we may earn a small referral commission at no additional cost to you.
        </p>
        <p>
          The price you pay for any product is identical whether you use our affiliate links or navigate directly to the vendor.
        </p>

        <h2>Editorial Independence &amp; Product Selection</h2>
        <p>
          Our mission is to help beginners start wood carving with simple, approachable tools. To uphold your trust:
        </p>
        <ul>
          <li>
            We never accept paid payments to endorse a product we believe is inappropriate for beginners.
          </li>
          <li>
            We do not publish fabricated laboratory tests, fake ratings, or invented user experiences.
          </li>
          <li>
            When recommending tools, we prioritize practicality, beginner safety, ergonomic comfort, and genuine value over commission potential.
          </li>
          <li>
            If a basic, budget-friendly tool is the best starting choice for a beginner, we will always state that clearly.
          </li>
        </ul>

        <h2>Questions or Feedback</h2>
        <p>
          If you have questions regarding any product mentioned on Whittle &amp; Carve or our editorial practices, please visit our{" "}
          <Link
            href="/about"
            className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
          >
            About page
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
