import React from "react";

interface SafetyNoticeProps {
  title?: string;
  points?: string[];
  children?: React.ReactNode;
}

export function SafetyNotice({
  title = "Beginner Workshop Safety Check",
  points,
  children,
}: SafetyNoticeProps) {
  return (
    <div className="my-8 rounded-xl border border-[#c4b5a0] bg-[#fcfaf6] p-6 text-[#22201d] notebook-border">
      <div className="flex items-center gap-2.5 text-[#a05a2c] mb-3">
        <div className="p-1 rounded bg-[#f2e9dc] border border-[#d9cdbc]">
          <svg
            className="w-5 h-5 text-[#a05a2c]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>
        <h3 className="font-editorial text-lg font-semibold text-[#22201d]">
          {title}
        </h3>
      </div>

      {children ? (
        <div className="text-sm text-[#4a453e] leading-relaxed">{children}</div>
      ) : (
        <ul className="space-y-2 text-sm text-[#4a453e]">
          {points ? (
            points.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#a05a2c] font-bold mt-0.5">•</span>
                <span>{p}</span>
              </li>
            ))
          ) : (
            <>
              <li className="flex items-start gap-2">
                <span className="text-[#a05a2c] font-bold mt-0.5">•</span>
                <span>
                  <strong>Cut-Resistant Hand Protection:</strong> Always wear an ANSI Level 5 or EN388 rated cut-resistant glove on your holding hand (the non-dominant hand that holds the wood).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#a05a2c] font-bold mt-0.5">•</span>
                <span>
                  <strong>Knife Trajectory:</strong> Never position your fingers, lap, or body in front of an active cutting edge. Cut away from yourself or use controlled thumb-pivot push cuts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#a05a2c] font-bold mt-0.5">•</span>
                <span>
                  <strong>A Sharp Tool is a Safe Tool:</strong> A dull blade slips under heavy pressure. Take small, controlled slices rather than forcing the blade through dense grain.
                </span>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}
