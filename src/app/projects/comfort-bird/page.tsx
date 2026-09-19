import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InstructionalPlaceholder } from "@/components/ui/InstructionalPlaceholder";
import { SafetyNotice } from "@/components/ui/SafetyNotice";

export const metadata: Metadata = {
  title: "How to Carve a Simple Comfort Bird (Beginner Step-by-Step Tutorial)",
  description:
    "Learn how to carve a classic wooden comfort bird from a block of basswood. A calming beginner project focusing on gentle curves, grain flow, and tactile finishing.",
  alternates: {
    canonical: "https://whittleandcarve.com/projects/comfort-bird",
  },
  openGraph: {
    title: "How to Carve a Simple Comfort Bird | Whittle & Carve",
    description:
      "Carve a smooth, handheld wooden comfort bird designed to fit in the palm of your hand. Clear step-by-step beginner wood carving instructions.",
    url: "https://whittleandcarve.com/projects/comfort-bird",
  },
};

export default function ComfortBirdPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Carve a Simple Comfort Bird",
    description:
      "A step-by-step tutorial on whittling a smooth handheld wooden comfort bird from a basswood blank using simple hand tools.",
    totalTime: "PT1H45M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "6",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Basswood blank (approx. 1.5 inches x 1.5 inches x 4 inches)",
      },
      {
        "@type": "HowToSupply",
        name: "Pencil",
      },
      {
        "@type": "HowToSupply",
        name: "Sandpaper (150, 220, and 400 grit) or natural beeswax finish",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Carving / whittling knife (1.5 to 1.75 inch blade)",
      },
      {
        "@type": "HowToTool",
        name: "Cut-resistant glove (worn on holding hand)",
      },
      {
        "@type": "HowToTool",
        name: "Leather paddle strop and compound",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Draw the Profile Silhouette",
        text: "Sketch the side profile of the comfort bird onto the wood blank, marking the beak slope, rounded head, back crest, tail sweep, and full breast.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Rough Out the 2D Silhouette",
        text: "Make controlled stop cuts into the waste areas beneath the beak and above the tail, slicing away waste wood in gradual shavings to reveal the side profile.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Define the Head and Beak",
        text: "Narrow the head from top and front perspectives, shaping a sturdy triangular beak without cutting into delicate thin cross-sections.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Round the Body and Breast",
        text: "Chamfer the square edges of the main body into a smooth, egg-like contour that nestles comfortably into the palm of your hand.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Carve the Swept Tail",
        text: "Taper the tail upwards and thin it symmetrically from both sides, keeping supporting fingers safely behind the blade.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Tactile Smoothing & Oil Finish",
        text: "Progressively sand the carving through 150, 220, and 400 grit papers and rub with mineral oil or natural beeswax to highlight the grain.",
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
            { label: "Carve a Comfort Bird" },
          ]}
        />

        <header className="space-y-4 mb-8 pb-8 border-b border-[#e7e1d6]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eae0] border border-[#e2d7c5] text-xs font-semibold uppercase tracking-wider text-[#736c63]">
            Beginner Project 02
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-semibold tracking-tight text-[#22201d] leading-tight">
            How to Carve a Simple Comfort Bird
          </h1>
          <p className="text-lg sm:text-xl text-[#4a453e] leading-relaxed max-w-2xl font-editorial italic">
            A timeless folk carving shaped to fit snugly in the palm of your hand. Learn how to carve gentle sweeping curves, navigate grain direction, and achieve a silky finish.
          </p>

          {/* Project Quick Specs Box */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-[#d5cbbe] bg-[#ffffff] notebook-border not-prose">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Difficulty
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                Level 2 (Advancing)
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Time Needed
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                1.5–2.5 Hours
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Recommended Wood
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                1.5&quot; × 1.5&quot; × 4&quot; Basswood
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#736c63] block">
                Required Tools
              </span>
              <span className="font-editorial text-lg font-semibold text-[#22201d]">
                Knife, Glove, Strop, Sandpaper
              </span>
            </div>
          </div>
        </header>

        <div className="prose-whittle">
          <h2>What Is a Comfort Bird?</h2>
          <p>
            A comfort bird is a stylized, minimalist wooden bird carved without sharp edges or legs. Originally popular in Scandinavian folk woodcraft and hospital volunteer groups, it is designed with smooth ergonomic contours specifically to fit inside a closed hand or resting palm.
          </p>
          <p>
            People often hold them during quiet reading, meditation, or times of stress. For woodcarvers, it is widely considered the quintessential second or third project because it teaches you how to transition from straight geometric stop cuts (like the mushroom) into continuous, flowing organic curves.
          </p>

          <p>
            <em>Note: If you have never carved wood before, we recommend completing our{" "}
            <Link
              href="/projects/whittle-a-mushroom"
              className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
            >
              Wooden Mushroom project
            </Link>{" "}
            first to get comfortable with knife stop cuts and basswood grain.</em>
          </p>

          <SafetyNotice title="Safety Principles for Curved Carving">
            <ul className="space-y-2 mt-1">
              <li>
                <strong>Protect the Holding Hand:</strong> Always wear a cut-resistant glove on the hand securing the wood blank. Remember that cut-resistant does not mean cut-proof—it helps protect against incidental slips, but cannot stop heavy puncture force or aggressive uncontrolled cuts.
              </li>
              <li>
                <strong>Control the Blade Path:</strong> Keep body parts out of the projected blade path at all times. Never cut directly toward your holding fingers or chest. Reposition and rotate the wood blank whenever an angle feels awkward or difficult to control.
              </li>
              <li>
                <strong>Respond to Grain Direction:</strong> Concave curves like the dip along the bird’s back transition through changing wood grain. If the blade begins to bite, catch, or resist, stop immediately. Never force the blade through resistance—reverse direction and slice downhill with the grain.
              </li>
              <li>
                <strong>Take Small, Measured Shavings:</strong> Work slowly and remove wood in thin slices. If knife control becomes tiring or difficult, set the workpiece down and rest your hands.
              </li>
            </ul>
          </SafetyNotice>

          <h2>Materials and Setup</h2>
          <ul>
            <li>
              <strong>One Basswood blank:</strong> Roughly 1.5&quot; × 1.5&quot; thick by 4&quot; long.
            </li>
            <li>
              <strong>Detail carving knife:</strong> High-carbon steel with a straight or gentle drop-point blade.
            </li>
            <li>
              <strong>Cut-resistant glove:</strong> Worn on the holding hand (remember cut-resistant does not mean cut-proof).
            </li>
            <li>
              <strong>Leather strop:</strong> Keep nearby and strop whenever the blade begins to drag or require extra push force.
            </li>
            <li>
              <strong>Assorted sandpaper:</strong> 150-grit, 220-grit, and 400-grit sheets.
            </li>
            <li>
              <strong>Wood finish:</strong> Pure food-grade mineral oil, Danish oil, or paste beeswax.
            </li>
          </ul>

          <h2>Step-by-Step Instructions</h2>

          {/* STEP 1 */}
          <h3>Step 1: Drawing the Profile Silhouette</h3>
          <p>
            Begin by selecting the best face of your basswood block. The wood grain should run lengthwise down the length of the blank (from head to tail).
          </p>
          <p>
            With a pencil, draw the side silhouette of your bird onto one side of the block:
          </p>
          <ul>
            <li>A gentle angle for the front of the beak.</li>
            <li>A rounded crest for the top of the head.</li>
            <li>A smooth, dipping curve along the spine leading up into a gentle upturned tail.</li>
            <li>A full, deep belly curve under the breast.</li>
          </ul>

          <InstructionalPlaceholder
            stepNumber={1}
            title="Sketching the Side Profile"
            description="Side view schematic of 1.5x1.5x4 inch basswood block showing clean pencil silhouette of beak, head crown, back curve, and swept tail."
            aspectRatio="16/9"
          />

          {/* STEP 2 */}
          <h3>Step 2: Roughing Out the 2D Silhouette</h3>
          <p>
            Your goal in this step is to remove the large rectangular waste wood so your blank matches the drawn side silhouette.
          </p>
          <p>
            Make a controlled stop cut at the throat area beneath the beak and slice inward with shallow, measured passes from the front bottom to relieve waste beneath the chin. Next, make a stop cut where the tail meets the back, and slice waste away in gradual layers above the tail.
          </p>
          <p>
            Work slowly, slicing thin wood shavings rather than trying to wedge off large chunks at once. If the knife resists, shave off thinner layers rather than forcing the blade. When finished with this step, your blank will look like a flat 2D bird profile with squared sides.
          </p>

          <InstructionalPlaceholder
            stepNumber={2}
            title="Roughing Out the 2D Silhouette"
            description="Shows block with waste wood relieved beneath the beak and above the tail, leaving a clean flat 2D profile block."
            aspectRatio="16/9"
          />

          {/* STEP 3 */}
          <h3>Step 3: Defining the Head and Beak</h3>
          <p>
            Look at the blank from above (the top view). Currently, the head is as wide as the whole block (1.5 inches). A real bird’s head tapers gracefully toward the beak.
          </p>
          <p>
            Sketch a gentle taper from the top view, narrowing the front tip down toward where the beak will sit.
          </p>
          <p>
            Make light, controlled push cuts from behind the eye line toward the tip of the beak to taper both sides evenly. Keep the beak sturdy and slightly blunt during early shaping—thin, needle-like tips are fragile while you work on the rest of the body.
          </p>

          <InstructionalPlaceholder
            stepNumber={3}
            title="Tapering Head and Beak Symmetry"
            description="Top-down perspective showing the head narrowing symmetrically toward the beak centerline with controlled paring cuts."
            aspectRatio="16/9"
          />

          {/* STEP 4 */}
          <h3>Step 4: Rounding the Body and Breast</h3>
          <p>
            Now comes the most satisfying part: transforming the boxy body into a smooth, three-dimensional form.
          </p>
          <p>
            Chamfer off all remaining 90-degree corner edges along the back, flanks, and under the breast. Think of an egg: the breast should be the widest, fullest part of the bird, tapering gently toward the head in the front and narrowing toward the tail in the back.
          </p>
          <p>
            Hold the bird periodically in your bare hand (set the knife down first!) to test how it feels. Look for flat spots or high ridges and soften them with light shaving cuts.
          </p>

          <InstructionalPlaceholder
            stepNumber={4}
            title="Contouring the Rounded Breast"
            description="Gloved hand holding the bird, making controlled paring cuts around the breast to establish continuous egg-shaped curves with fingers safely behind the blade."
            aspectRatio="16/9"
          />

          {/* STEP 5 */}
          <h3>Step 5: Carving the Swept Tail</h3>
          <p>
            The tail should look light and graceful without becoming so thin that it snaps under pressure.
          </p>
          <p>
            Taper the sides of the tail so it narrows gently toward the tip. On the underside of the tail, slice upward toward the tip to create a crisp, bird-like silhouette. Keep your supporting fingers safely behind the blade at all times. If a cut feels awkward, rotate the piece so the blade travels away from your holding hand.
          </p>

          <InstructionalPlaceholder
            stepNumber={5}
            title="Shaping the Tail Profile"
            description="Detailed view showing controlled, thumb-supported cut tapering the tail upward into a smooth, balanced feather wedge with fingers safely behind the blade."
            aspectRatio="16/9"
          />

          {/* STEP 6 */}
          <h3>Step 6: Tactile Smoothing and Natural Finish</h3>
          <p>
            Because this carving is meant to be held in the hand, tactile smoothness is key.
          </p>
          <ol>
            <li>
              <strong>Initial Sanding (150-grit):</strong> Wrap a small strip of 150-grit sandpaper around your thumb and gently sand along the grain to erase any remaining sharp facet edges and knife chatter marks.
            </li>
            <li>
              <strong>Medium Sanding (220-grit):</strong> Sand the entire bird again to remove 150-grit scratch patterns.
            </li>
            <li>
              <strong>Polishing (400-grit):</strong> A quick pass with 400-grit paper will burnish the basswood fibers until the wood feels like soft silk.
            </li>
            <li>
              <strong>Applying the Finish:</strong> Wipe away all sanding dust. Apply a thin coat of food-grade mineral oil or natural beeswax with a soft cloth. Allow it to soak into the wood fibers, then buff dry with a clean rag. The finish will highlight the natural grain and protect the wood during handling.
            </li>
          </ol>

          <InstructionalPlaceholder
            stepNumber={6}
            title="Finished Handheld Comfort Bird"
            description="Finished basswood comfort bird resting comfortably in a relaxed palm, showing warm oiled wood grain and seamless tactile finish."
            aspectRatio="16/9"
          />

          <h2>Common Beginner Mistakes with Comfort Birds</h2>
          <ul>
            <li>
              <strong>Carving into the grain tearout on the spine:</strong> The dip along the bird’s back has grain running in two opposite directions. Carve downhill from the head into the valley, and downhill from the tail into the valley. Never try to carve uphill across grain changes in a single sweep.
            </li>
            <li>
              <strong>Making the beak too narrow early on:</strong> Always leave the beak slightly thick during roughing. Refine it in the final stages once all heavy wood removal is complete.
            </li>
            <li>
              <strong>Skipping progressive grits:</strong> Going directly from knife cuts to 400-grit sandpaper will leave deep scratches visible beneath the oil. Always use 150, then 220, then 400.
            </li>
          </ul>

          <h2>Where to Go From Here</h2>
          <p>
            Now that you have completed both a geometric carving (the mushroom) and an organic contour carving (the comfort bird), you have built a genuine foundation in beginner wood carving.
          </p>
          <p>
            Review our{" "}
            <Link
              href="/start-whittling"
              className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
            >
              Getting Started Guide
            </Link>{" "}
            for knife maintenance tips, or revisit the{" "}
            <Link
              href="/best-beginner-whittling-kit"
              className="text-[#a05a2c] font-medium underline underline-offset-4 hover:text-[#86471e]"
            >
              Beginner Tool Guide
            </Link>{" "}
            if you are looking to expand your kit.
          </p>
        </div>
      </article>
    </>
  );
}
