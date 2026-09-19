import React from "react";

interface ProductRecommendationProps {
  category: string;
  recommendedType: string;
  whyItFits: string;
  keySpecsToLookFor: string[];
  productName?: string;
  retailer?: string;
  affiliateUrl?: string;
  isPlaceholder?: boolean;
}

export function ProductRecommendation({
  category,
  recommendedType,
  whyItFits,
  keySpecsToLookFor,
  productName,
  retailer = "Verified Retailer",
  affiliateUrl,
  isPlaceholder = true,
}: ProductRecommendationProps) {
  return (
    <div className="my-8 rounded-xl border border-[#d5cbbe] bg-[#ffffff] p-6 shadow-xs notebook-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#e7e1d6]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#a05a2c]">
            {category}
          </span>
          <h3 className="font-editorial text-xl font-semibold text-[#22201d] mt-0.5">
            {isPlaceholder ? recommendedType : productName}
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f5f1ea] border border-[#e2d8ca] text-xs text-[#736c63]">
          <svg
            className="w-3.5 h-3.5 text-[#a05a2c]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Recommended Specification</span>
        </div>
      </div>

      <div className="py-4 space-y-3">
        <p className="text-sm text-[#4a453e] leading-relaxed">
          <strong className="text-[#22201d]">Why it fits a beginner: </strong>
          {whyItFits}
        </p>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#736c63] block mb-1.5">
            Key Characteristics to Look For:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5e584f]">
            {keySpecsToLookFor.map((spec, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-[#a05a2c] font-bold mt-0.5">•</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-[#f0eae0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#faf7f2] -mx-6 -mb-6 p-4 sm:px-6 rounded-b-xl">
        {isPlaceholder || !affiliateUrl ? (
          <div className="text-xs text-[#736c63] italic">
            [Product Recommendation Slot]: Verified brand recommendation and active link will be added here following supplier verification.
          </div>
        ) : (
          <a
            href={affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#22201d] text-[#fbf9f5] text-xs font-semibold hover:bg-[#383430] transition-colors"
          >
            <span>View at {retailer}</span>
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
        <div className="text-[11px] text-[#8a8174]">
          Independent recommendation · Future link may earn commission
        </div>
      </div>
    </div>
  );
}
