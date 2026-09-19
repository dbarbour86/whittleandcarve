import React from "react";
import Image from "next/image";

interface InstructionalPlaceholderProps {
  stepNumber?: number;
  title: string;
  description: string;
  aspectRatio?: "16/9" | "4/3" | "3/2";
  caption?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function InstructionalPlaceholder({
  stepNumber,
  title,
  description,
  aspectRatio = "16/9",
  caption,
  imageSrc,
  imageAlt,
}: InstructionalPlaceholderProps) {
  if (imageSrc) {
    return (
      <figure className="my-8">
        <div className="rounded-xl overflow-hidden notebook-border bg-[#efe8dc] border border-[#d5cbbe] shadow-xs">
          <Image
            src={imageSrc}
            alt={imageAlt || description}
            width={1536}
            height={1024}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <figcaption className="p-3.5 sm:p-4 bg-[#fdfcf9] border-t border-[#e2d8ca] text-xs sm:text-sm text-[#5e584f] leading-relaxed">
            {stepNumber && (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#f0eae0] text-[#736c63] text-xs font-semibold uppercase tracking-wider mr-2 align-middle">
                Step {stepNumber}
              </span>
            )}
            <strong className="text-[#22201d] font-semibold mr-1.5">{title}:</strong>
            <span>{caption || description}</span>
          </figcaption>
        </div>
      </figure>
    );
  }

  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-video"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : "aspect-[3/2]";

  return (
    <figure className="my-6">
      <div
        className={`w-full ${aspectClass} rounded-lg border-2 border-dashed border-[#d5cbbe] bg-[#f7f4ed] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-xs transition-colors hover:border-[#bdae9c]`}
      >
        {/* Subtle craftsman corner marks */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#b8ab9a]" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#b8ab9a]" />
        <div className="absolute bottom-2 left-2 w-3 h-2 border-b-2 border-l-2 border-[#b8ab9a]" />
        <div className="absolute bottom-2 right-2 w-3 h-2 border-b-2 border-r-2 border-[#b8ab9a]" />

        {/* Content Container */}
        <div className="max-w-md space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#eee7da] text-[#736c63] text-xs font-semibold uppercase tracking-wider">
            <svg
              className="w-3.5 h-3.5 text-[#a05a2c]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span>
              {stepNumber ? `Step ${stepNumber} Photo Slot` : "Technique Photo Slot"}
            </span>
          </div>

          <h4 className="font-editorial text-lg sm:text-xl font-semibold text-[#22201d]">
            {title}
          </h4>

          <p className="text-xs sm:text-sm text-[#5e584f] leading-relaxed">
            {description}
          </p>

          <div className="pt-2 text-[11px] text-[#857b6f] italic">
            Planned authentic workshop photography — reserved for verified safe hand &amp; knife positioning.
          </div>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-2 text-center text-xs text-[#736c63]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
