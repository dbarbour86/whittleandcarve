import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whittle & Carve | Learn Wood Carving One Simple Project at a Time",
  description:
    "You don't need a workshop full of tools to start carving wood. A knife, a piece of soft wood, and a simple first project are enough.",
  alternates: {
    canonical: "https://whittleandcarve.com",
  },
  openGraph: {
    title: "Learn Wood Carving One Simple Project at a Time | Whittle & Carve",
    description:
      "A knife, a piece of soft wood, and a simple first project are enough to start whittling. Beginner guides and approachable projects.",
    url: "https://whittleandcarve.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://whittleandcarve.com/#website",
        url: "https://whittleandcarve.com",
        name: "Whittle & Carve",
        description:
          "Learn wood carving one simple project at a time with honest beginner guides and approachable projects.",
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://whittleandcarve.com/#organization",
        name: "Whittle & Carve",
        url: "https://whittleandcarve.com",
        logo: "https://whittleandcarve.com/images/logo.png",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#e7e1d6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Core Message & Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eae0] border border-[#e2d7c5] text-xs font-semibold uppercase tracking-wider text-[#736c63]">
                <span className="w-2 h-2 rounded-full bg-[#a05a2c]" />
                Beginner Woodcraft Field Guide
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#22201d] leading-[1.12]">
                Learn Wood Carving One Simple Project at a Time
              </h1>

              <p className="text-lg sm:text-xl text-[#4a453e] leading-relaxed max-w-xl">
                You don’t need a workshop full of tools to start carving wood. A knife, a piece of soft wood, and a simple first project are enough.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/start-whittling"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#22201d] text-[#fbf9f5] font-medium text-base hover:bg-[#3d3832] transition-colors shadow-xs"
                >
                  <span>Start Whittling</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/best-beginner-whittling-kit"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg border border-[#c9bea9] bg-[#fdfcf9] text-[#22201d] font-medium text-base hover:bg-[#f3ede1] transition-colors"
                >
                  What Tools Do I Need?
                </Link>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-[#4a453e]">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#a05a2c] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Zero prior experience needed
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#a05a2c] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  One single knife is enough
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Workshop Photography */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden notebook-border bg-[#efe8dc] shadow-md">
                <Image
                  src="/images/workshop-bench.jpg"
                  alt="A clean woodcarver's bench with a single carving knife, fresh basswood block, and clean curled wood shavings"
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="p-3.5 bg-[#fdfcf9] border-t border-[#e2d8ca] text-xs sm:text-sm text-[#5e584f] flex items-center justify-between">
                  <span>Traditional Bench Essentials</span>
                  <span className="italic">Knife · Basswood · Shavings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Beginner Paths */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#22201d]">
            Where Would You Like to Begin?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5e584f]">
            Pick the path that matches where you are right now. No complicated prerequisites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Path 1: New to Whittling */}
          <div className="rounded-xl border border-[#d5cbbe] bg-[#ffffff] p-6 sm:p-7 flex flex-col justify-between notebook-border hover:border-[#bdae9c] transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#f4eee4] border border-[#d9cdbd] flex items-center justify-center text-[#a05a2c]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#a05a2c]">
                  New to Whittling?
                </span>
                <h3 className="font-editorial text-2xl font-semibold text-[#22201d] mt-1">
                  Start Here Guide
                </h3>
              </div>

              <p className="text-sm text-[#5e584f] leading-relaxed">
                Understand the absolute essentials: what whittling actually is, the minimum gear you need, hand protection, and what expensive gear you can ignore.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#f0eae0]">
              <Link
                href="/start-whittling"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22201d] hover:text-[#a05a2c] transition-colors"
              >
                <span>Read the getting-started guide</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Path 2: Need Your First Tools? */}
          <div className="rounded-xl border border-[#d5cbbe] bg-[#ffffff] p-6 sm:p-7 flex flex-col justify-between notebook-border hover:border-[#bdae9c] transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#f4eee4] border border-[#d9cdbd] flex items-center justify-center text-[#a05a2c]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#a05a2c]">
                  Need Your First Tools?
                </span>
                <h3 className="font-editorial text-2xl font-semibold text-[#22201d] mt-1">
                  Starter Tool Guide
                </h3>
              </div>

              <p className="text-sm text-[#5e584f] leading-relaxed">
                An honest buyer’s guide on what a good starter kit should include: knife blade geometry, soft basswood, hand protection, and strops vs. cheap multi-piece sets.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#f0eae0]">
              <Link
                href="/best-beginner-whittling-kit"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22201d] hover:text-[#a05a2c] transition-colors"
              >
                <span>Explore beginner tool options</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Path 3: Want to Make Something? */}
          <div className="rounded-xl border border-[#d5cbbe] bg-[#ffffff] p-6 sm:p-7 flex flex-col justify-between notebook-border hover:border-[#bdae9c] transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#f4eee4] border border-[#d9cdbd] flex items-center justify-center text-[#a05a2c]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#a05a2c]">
                  Want to Make Something?
                </span>
                <h3 className="font-editorial text-2xl font-semibold text-[#22201d] mt-1">
                  Beginner Projects
                </h3>
              </div>

              <p className="text-sm text-[#5e584f] leading-relaxed">
                Jump straight into simple, proven first carvings with clear step-by-step instructions: the 45-minute wooden mushroom or the smooth comfort bird.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#f0eae0]">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22201d] hover:text-[#a05a2c] transition-colors"
              >
                <span>View the 2 beginner projects</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 bg-[#f7f3eb] border-y border-[#e7e1d6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a05a2c]">
                Hands-On Practice
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#22201d] mt-1">
                Two Approachable First Carvings
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#5e584f] max-w-sm">
              We recommend carving the mushroom first to practice stop cuts, then taking on the curves of the comfort bird.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: Mushroom */}
            <div className="rounded-xl border border-[#d5cbbe] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between notebook-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#5e584f]">
                  <span className="px-2.5 py-1 rounded bg-[#eee7da] font-medium text-[#22201d]">
                    Level 1 · Absolute Beginner
                  </span>
                  <span>Approx. 45–60 min</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#22201d]">
                  How to Whittle a Simple Wooden Mushroom
                </h3>

                <p className="text-sm sm:text-base text-[#4a453e] leading-relaxed">
                  The ideal first woodcarving project. You’ll learn how to establish a clean stop cut, carve away waste to reveal a stem, and round off a smooth cap.
                </p>

                <div className="pt-2 text-sm text-[#4a453e] space-y-1.5 border-t border-[#f2ede4]">
                  <div><strong className="text-[#22201d]">Wood needed:</strong> 1&quot; × 1&quot; × 3&quot; Basswood block</div>
                  <div><strong className="text-[#22201d]">Tools:</strong> 1 carving knife, cut-resistant glove, strop</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0eae0]">
                <Link
                  href="/projects/whittle-a-mushroom"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#22201d] text-[#fbf9f5] text-sm font-medium hover:bg-[#3d3832] transition-colors"
                >
                  <span>Read Mushroom Tutorial</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Project 2: Comfort Bird */}
            <div className="rounded-xl border border-[#d5cbbe] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between notebook-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#5e584f]">
                  <span className="px-2.5 py-1 rounded bg-[#eee7da] font-medium text-[#22201d]">
                    Beginner • Next Project
                  </span>
                  <span>Approx. 1.5–2 hours</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#22201d]">
                  How to Carve a Simple Comfort Bird
                </h3>

                <p className="text-sm sm:text-base text-[#4a453e] leading-relaxed">
                  A classic folk-art carving shaped to rest naturally in the palm of your hand. Teaches long sweeping cuts, graceful contouring, and smooth tactile finishing.
                </p>

                <div className="pt-2 text-sm text-[#4a453e] space-y-1.5 border-t border-[#f2ede4]">
                  <div><strong className="text-[#22201d]">Wood needed:</strong> 1.5&quot; × 1.5&quot; × 4&quot; Basswood blank</div>
                  <div><strong className="text-[#22201d]">Tools:</strong> 1 carving knife, cut-resistant glove, strop, fine sandpaper</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0eae0]">
                <Link
                  href="/projects/comfort-bird"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#22201d] text-[#fbf9f5] text-sm font-medium hover:bg-[#3d3832] transition-colors"
                >
                  <span>Read Comfort Bird Tutorial</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of Whittle & Carve */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden border border-[#d5cbbe] shadow-sm bg-[#ffffff] p-1">
          <img
            src="/images/favicon.png"
            alt="Whittle & Carve W&C Emblem"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#22201d]">
          The Philosophy of Whittle &amp; Carve
        </h2>

        <p className="font-editorial italic text-xl sm:text-2xl text-[#a05a2c]">
          Simple tools. Simple projects. Learn by making something.
        </p>

        <p className="text-base sm:text-lg text-[#5e584f] leading-relaxed max-w-2xl mx-auto">
          You don’t need an entire woodworking shop, expensive power tools, or dozens of specialty chisels to experience the joy of shaping wood with your own hands. Wood carving is accessible, quiet, and deeply satisfying when you start with modest expectations, safe technique, and one project at a time.
        </p>

        <div className="pt-4">
          <Link
            href="/start-whittling"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#22201d] hover:text-[#a05a2c] transition-colors underline underline-offset-4"
          >
            Ready to begin? Read the complete getting started guide →
          </Link>
        </div>
      </section>
    </>
  );
}
