import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Whittle & Carve | Simple, Approachable Wood Carving",
  description:
    "The story and philosophy behind Whittle & Carve: making wood carving accessible, safe, and enjoyable with minimal tools and straightforward beginner projects.",
  alternates: {
    canonical: "https://whittleandcarve.com/about",
  },
  openGraph: {
    title: "About Whittle & Carve",
    description:
      "Simple tools. Simple projects. Learn by making something. Discover the craft philosophy of Whittle & Carve.",
    url: "https://whittleandcarve.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Whittle & Carve",
    url: "https://whittleandcarve.com/about",
    description:
      "Whittle & Carve is an educational resource dedicated to helping beginners discover the craft of wood whittling with minimal, safe equipment.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={[{ label: "About Whittle & Carve" }]} />

        <header className="space-y-4 mb-10 pb-8 border-b border-[#e7e1d6]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eae0] border border-[#e2d7c5] text-xs font-semibold uppercase tracking-wider text-[#736c63]">
            Our Mission
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-semibold tracking-tight text-[#22201d] leading-tight">
            About Whittle &amp; Carve
          </h1>
          <p className="text-lg sm:text-xl text-[#4a453e] leading-relaxed max-w-2xl font-editorial italic">
            Simple tools. Simple projects. Learn by making something.
          </p>
        </header>

        <div className="mb-10 rounded-xl overflow-hidden notebook-border bg-[#efe8dc]">
          <Image
            src="/images/workshop-bench.jpg"
            alt="Traditional woodcraft workbench with clean shavings and hand carving tools"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose-whittle">
          <h2>Why Whittle &amp; Carve Exists</h2>
          <p>
            When most people consider trying wood carving, they encounter two extremes: either heavily commercialized websites trying to sell complex 20-piece chisel sets, or intimidating traditional woodworking forums filled with jargon, heavy machinery, and expensive hardwoods.
          </p>
          <p>
            Whittle &amp; Carve was created to offer a calmer, more realistic starting point.
          </p>
          <p>
            We believe that you do not need an entire woodworking workshop, thousands of dollars in machinery, or decades of apprenticeship to experience the quiet satisfaction of shaping a block of wood with your own hands.
          </p>

          <h2>Our Editorial Principles</h2>
          <ul>
            <li>
              <strong>Honest Advice:</strong> We never claim to have tested tools in fake laboratories or invent firsthand experiences. If a basic $15 knife and a block of basswood will do the job, that is exactly what we recommend.
            </li>
            <li>
              <strong>Uncompromising Safety:</strong> Wood carving involves razor-sharp edges. We emphasize cut-resistant hand protection, proper thumb pivots, and safe body posture before any wood is removed.
            </li>
            <li>
              <strong>One Project at a Time:</strong> The fastest way to learn is by making something. Our tutorials guide you through complete, satisfying items you can finish in a single afternoon.
            </li>
          </ul>

          <h2>Start Your Journey</h2>
          <p>
            If you’re ready to pick up your first knife, begin with our{" "}
            <Link
              href="/start-whittling"
              className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
            >
              Getting Started Guide
            </Link>{" "}
            or jump right into carving your first{" "}
            <Link
              href="/projects/whittle-a-mushroom"
              className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
            >
              Wooden Mushroom
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
