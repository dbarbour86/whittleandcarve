import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InstructionalPlaceholder } from "@/components/ui/InstructionalPlaceholder";
import { SafetyNotice } from "@/components/ui/SafetyNotice";

export const metadata: Metadata = {
  title: "How to Whittle a Simple Wooden Mushroom (Step-by-Step Beginner Guide)",
  description:
    "Learn how to whittle a wooden mushroom in under an hour. An ideal first project for beginners teaching stop cuts, stem tapering, and a controlled approach to shaping the cap.",
  alternates: {
    canonical: "https://whittleandcarve.com/projects/whittle-a-mushroom",
  },
  openGraph: {
    title: "How to Whittle a Simple Wooden Mushroom | Whittle & Carve",
    description:
      "The perfect first wood carving project. Master stop cuts and simple curves with a single knife and a 1x1x3 inch block of basswood.",
    url: "https://whittleandcarve.com/projects/whittle-a-mushroom",
  },
};

export default function WhittleMushroomPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Whittle a Simple Wooden Mushroom",
    description:
      "A step-by-step beginner wood carving tutorial to whittle a classic wooden mushroom from a small block of basswood.",
    totalTime: "PT50M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "5",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Basswood block (approx. 1 inch x 1 inch x 3 inches)",
      },
      {
        "@type": "HowToSupply",
        name: "Pencil",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Carving knife with controllable short blade",
      },
      {
        "@type": "HowToTool",
        name: "Cut-resistant carving glove",
      },
      {
        "@type": "HowToTool",
        name: "Leather paddle strop with compound",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Mark the Cap Perimeter",
        text: "Draw a pencil reference line completely around the block, roughly 1 inch down from the top edge.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Establish the Cap Stop Cut",
        text: "Make a shallow, controlled incision into the wood along the pencil line to establish a distinct stop boundary.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Relieve Wood to Form the Stem",
        text: "Make light, controlled slicing cuts angled toward your stop cut to remove waste wood and create a shoulder beneath the cap.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Round the Mushroom Cap",
        text: "Chamfer the sharp corners and take light shaving cuts to shape a smooth, rounded cap.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Taper the Stem",
        text: "Take light passes down the stem to round its corners and gently narrow it toward the cap shoulder.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Clean Facets and Optional Finish",
        text: "Take light finishing passes across the wood, strop your knife edge, and optionally apply a natural wax or oil finish.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Projects", href: "/#projects" },
            { label: "Whittle a Wooden Mushroom" },
          ]}
        />

        <header className="space-y-4 mb-8 pb-8 border-b border-[#e7e1d6]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eae0] border border-[#e2d7c5] text-xs font-semibold uppercase tracking-wider text-[#736c63]">
            Beginner Project 01
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-semibold tracking-tight text-[#22201d] leading-tight">
            How to Whittle a Simple Wooden Mushroom
          </h1>
          <p className="text-lg sm:text-xl text-[#4a453e] leading-relaxed max-w-2xl font-editorial italic">
            The classic first woodcarving project. It teaches stop cuts, waste relief, and simple dome shaping without complicated carving geometry.
          </p>

          {/* Project Quick Specs Box */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-[#d5cbbe] bg-[#ffffff] notebook-border not-prose">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Difficulty
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                Level 1 (Beginner)
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Time Needed
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                45–60 Minutes
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Recommended Wood
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                1&quot; × 1&quot; × 3&quot; Basswood
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Required Tools
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                1 Knife, Glove, Strop
              </span>
            </div>
          </div>
        </header>

        <div className="prose-whittle">
          <h2>Overview: A Practical First Project</h2>
          <p>
            If you are new to wood carving, a simple wooden mushroom is an accessible first project. A mushroom has natural organic shape: if the cap is slightly asymmetrical or the stem tilts gently, it still looks natural and intentional.
          </p>
          <p>
            This project introduces two core cutting concepts that appear across nearly all whittling:
          </p>
          <ul>
            <li>
              <strong>The Stop Cut:</strong> A shallow, controlled incision that establishes a boundary line in the wood. Subsequent cuts meet this line, which helps stop material from splitting or peeling beyond where you intend.
            </li>
            <li>
              <strong>The Relief Cut:</strong> A controlled slicing cut angled toward your stop cut that removes waste wood up to the boundary, revealing depth and creating the cap ledge.
            </li>
          </ul>

          <SafetyNotice title="Essential Safety Check Before Starting">
            <ul className="space-y-2 mt-1">
              <li>
                <strong>Protect the hand holding the workpiece:</strong> Always wear a properly fitting cut-resistant carving or work glove on the hand securing the wood block. Cut-resistant does not mean cut-proof—protective equipment serves as a backup safeguard and never replaces proper blade control.
              </li>
              <li>
                <strong>Keep body parts out of the blade path:</strong> No hand, finger, thumb, leg, or other body part should ever be in the projected path of the blade. Plan every cut so that a sudden slip would travel safely into empty air.
              </li>
              <li>
                <strong>Maintain workpiece control:</strong> Keep a firm, comfortable grip on the wood. Reposition the block rather than contorting your cutting hand into awkward angles.
              </li>
              <li>
                <strong>Use manageable cuts without excessive force:</strong> Remove thin shavings. If a cut resists or requires heavy downward muscle force, stop. Forcing a dull or caught blade is the most common cause of slipping.
              </li>
            </ul>
          </SafetyNotice>

          <h2>Materials and Tools Needed</h2>
          <ul>
            <li>
              <strong>One Basswood blank:</strong> Approximately 1&quot; × 1&quot; wide by 3&quot; long as a practical starting size.
            </li>
            <li>
              <strong>One carving knife:</strong> A fixed blade with a relatively short, controllable cutting edge.
            </li>
            <li>
              <strong>A sharp pencil:</strong> For sketching guide lines around the block.
            </li>
            <li>
              <strong>Cut-resistant carving glove:</strong> Worn on the hand holding the workpiece.
            </li>
            <li>
              <strong>Leather strop and compound:</strong> For light, regular edge maintenance.
            </li>
          </ul>

          <p>
            If you need help selecting these items, review our{" "}
            <Link
              href="/best-beginner-whittling-kit"
              className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
            >
              Beginner Tool Kit Guide
            </Link>
            .
          </p>

          <h2>Step-by-Step Instructions</h2>

          {/* STEP 1 */}
          <h3>Step 1: Wood Prep &amp; Marking the Cap Baseline</h3>
          <p>
            Hold your basswood block vertically. With your pencil, draw a reference line around all four faces of the block, roughly <strong>1 inch down from the top edge</strong>.
          </p>
          <p>
            The wood above this pencil line will become your mushroom cap; the longer portion below will become the stem. Keeping this reference line reasonably level gives you a guide so the cap doesn&apos;t accidentally become crooked.
          </p>

          <InstructionalPlaceholder
            stepNumber={1}
            title="Marking the Cap Perimeter"
            description="Layout view showing a basswood block with a reference line marked around all four faces roughly one inch from the top."
            aspectRatio="16/9"
          />

          {/* STEP 2 */}
          <h3>Step 2: Establishing the Cap Stop Cut</h3>
          <p>
            Place the cutting edge of your knife directly onto the pencil line on one face of the block. With steady, controlled hand pressure, make a shallow incision into the wood along the line.
          </p>
          <p>
            You do not need to force the blade deeply—a controlled, shallow groove is all that is required to establish the boundary. Repeat this across all four sides of the block so the cuts meet cleanly at the corners, creating an unbroken boundary dividing the cap from the stem.
          </p>

          <InstructionalPlaceholder
            stepNumber={2}
            title="Establishing the Cap Stop Cut"
            description="Shows a shallow, controlled stop cut placed along the marked line with the holding hand positioned safely behind the blade."
            aspectRatio="16/9"
          />

          {/* STEP 3 */}
          <h3>Step 3: Relieving Wood to Form the Stem</h3>
          <p>
            Now, position your knife blade slightly below your stop cut on the stem section. Angle the cutting edge toward the incision and make a light, controlled slicing cut toward the boundary.
          </p>
          <p>
            When your knife reaches the stop cut, a small wood shaving will release cleanly, establishing an initial shoulder beneath the cap.
          </p>
          <p>
            Work your way around all four faces. If a chip does not release freely, <strong>never pry or twist the blade sideways</strong>, as knife tips can snap easily. Instead, re-score your stop cut with light, controlled pressure and take another shallow relief slice.
          </p>

          <InstructionalPlaceholder
            stepNumber={3}
            title="Relieving Wood to Form the Stem"
            description="Shows a controlled slicing cut angled toward the stop cut, releasing small wood shavings beneath the cap shoulder."
            aspectRatio="16/9"
          />

          {/* STEP 4 */}
          <h3>Step 4: Rounding the Mushroom Cap</h3>
          <p>
            With the underside of the cap defined, turn your attention to the top block. It currently has four sharp vertical corners.
          </p>
          <p>
            Begin by chamfering (slicing away) the four square corner edges to turn the cap into an eight-sided shape. Next, take light beveling cuts around the top outer rim to begin doming the peak.
          </p>
          <p>
            Take small, paper-thin shaving cuts from the peak toward the outer rim. Work around the perimeter with light passes until the block softens into a smooth, balanced dome.
          </p>

          <InstructionalPlaceholder
            stepNumber={4}
            title="Rounding the Mushroom Cap"
            description="Shows light, controlled cuts gently softening the sharp corners into a balanced, rounded mushroom cap."
            aspectRatio="16/9"
          />

          {/* STEP 5 */}
          <h3>Step 5: Tapering and Shaping the Stem</h3>
          <p>
            Return to the stem. Just like you did on the cap, soften the four square corners of the stem with light slicing cuts.
          </p>
          <p>
            Take controlled push cuts down the length of the stem, keeping your holding hand and fingers firmly behind the blade path. Gradually narrow the stem so it transitions gracefully toward the undercut cap shoulder.
          </p>
          <p>
            Keep your cuts light and measured. Removing too much wood quickly can weaken the stem where it joins the cap.
          </p>

          <InstructionalPlaceholder
            stepNumber={5}
            title="Tapering and Shaping the Stem"
            description="Illustrates controlled shaving cuts down the length of the stem, gently narrowing it toward the cap shoulder."
            aspectRatio="16/9"
          />

          {/* STEP 6 */}
          <h3>Step 6: Detailing, Strop Touch-Up &amp; Optional Finishing</h3>
          <p>
            Take a brief moment to give your knife blade a few light passes on your leather strop. A freshly stropped edge makes your final cleanup cuts clean and precise.
          </p>
          <p>
            Inspect the carving under good light. Slice away any fuzzy wood fibers or uneven steps under the cap ledge.
          </p>
          <p>
            You now have a few simple options for finishing, depending on what you prefer:
          </p>
          <ul>
            <li>
              <strong>Traditional Faceted Finish:</strong> Leave the clean, visible knife facets as they are. In folk whittling, crisp tool cuts are celebrated as the hallmark of handmade work.
            </li>
            <li>
              <strong>Smooth Sanded Finish:</strong> If you prefer a smoother surface, you can lightly sand the mushroom along the grain with fine-grit sandpaper (such as 220-grit).
            </li>
            <li>
              <strong>Optional Protective Coat:</strong> If desired, you can apply an optional finish—such as a small dab of food-grade mineral oil, paste beeswax, or cutting-board wax—to highlight the natural wood grain and protect it from handling.
            </li>
          </ul>

          <InstructionalPlaceholder
            stepNumber={6}
            title="Finished Hand-Carved Mushroom"
            description="Display of completed wooden mushroom with clean hand-carved facets and optional natural finish."
            aspectRatio="16/9"
          />

          <h2>Troubleshooting Common Beginner Difficulties</h2>
          <ul>
            <li>
              <strong>The wood split into the cap shoulder:</strong> This happens when a relief slice is taken before a clear stop cut boundary has been established, or when trying to remove too large a chip at once. Keep your cuts shallow and ensure your stop cut clearly defines the boundary line before slicing wood away.
            </li>
            <li>
              <strong>The knife resists or tears the wood:</strong> This indicates cutting against the grain. If wood fibers begin tearing, lifting, or splitting ahead of the blade, stop immediately rather than trying to force the cut through. Turn the block around and approach the area from the opposite direction with a light, controlled cut.
            </li>
            <li>
              <strong>Ragged cuts or excessive hand strain:</strong> Your blade likely needs stropping. A few light, trailing passes on your leather strop with polishing compound will quickly restore an easy, controlled slice.
            </li>
          </ul>

          <h2>What to Try Next</h2>
          <p>
            Congratulations on finishing your first whittling project! You have mastered the stop cut and basic 3D contouring.
          </p>
          <p>
            When you are ready for your next project, try our tutorial on carving a traditional wooden{" "}
            <Link
              href="/projects/comfort-bird"
              className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
            >
              Comfort Bird
            </Link>
            , which introduces gentle sweeping body curves and tactile ergonomics.
          </p>
        </div>
      </article>
    </>
  );
}
