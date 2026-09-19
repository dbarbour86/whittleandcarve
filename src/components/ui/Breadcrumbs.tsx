import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://whittleandcarve.com",
      },
      ...items
        .filter((item) => !item.href?.includes("#"))
        .map((item, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: item.label,
          ...(item.href ? { item: `https://whittleandcarve.com${item.href}` } : {}),
        })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#736c63]">
          <li>
            <Link
              href="/"
              className="hover:text-[#22201d] transition-colors underline-offset-2 hover:underline"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <span className="text-[#a89d8f]" aria-hidden="true">
                  /
                </span>
                {isLast || !item.href ? (
                  <span
                    className="font-medium text-[#22201d] truncate max-w-[240px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#22201d] transition-colors underline-offset-2 hover:underline truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
