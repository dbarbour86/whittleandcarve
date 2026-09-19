export const SITE_CONFIG = {
  name: "Whittle & Carve",
  tagline: "Learn Wood Carving One Simple Project at a Time",
  description:
    "A practical, beginner-friendly guide to wood whittling and carving. Learn the basics, choose safe tools, and carve your first project with minimal equipment.",
  url: "https://whittleandcarve.com",
  philosophy: "Simple tools. Simple projects. Learn by making something.",
  navLinks: [
    { label: "Start Here", href: "/start-whittling" },
    {
      label: "Projects",
      href: "/#projects",
      children: [
        { label: "Whittle a Mushroom", href: "/projects/whittle-a-mushroom" },
        { label: "Carve a Comfort Bird", href: "/projects/comfort-bird" },
      ],
    },
    { label: "Tools", href: "/best-beginner-whittling-kit" },
    { label: "About", href: "/about" },
  ],
  footerLinks: {
    guides: [
      { label: "Getting Started Guide", href: "/start-whittling" },
      { label: "Beginner Tool & Kit Guide", href: "/best-beginner-whittling-kit" },
    ],
    projects: [
      { label: "Whittle a Wooden Mushroom", href: "/projects/whittle-a-mushroom" },
      { label: "Carve a Comfort Bird", href: "/projects/comfort-bird" },
    ],
    legal: [
      { label: "About Whittle & Carve", href: "/about" },
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};
