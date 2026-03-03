"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function TOC({ contentRef }: { contentRef?: React.RefObject<HTMLElement> }) {
  const pathname = usePathname();
  const [sections, setSections] = React.useState<HTMLHeadingElement[]>([]);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const normalizeId = (value: string) =>
      value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-_]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

    const root = contentRef?.current;
    if (!root) {
      setSections([]);
      return;
    }

    const headings = Array.from(
      root.querySelectorAll<HTMLHeadingElement>("h1, h2, h3"),
    );

    const usedIds = new Set<string>();

    headings.forEach((heading, index) => {
      if (heading.id) {
        usedIds.add(heading.id);
      }

      const rawText = heading.textContent?.trim() || `section-${index + 1}`;
      const fallback = `section-${index + 1}`;
      const baseId = normalizeId(rawText) || fallback;

      let uniqueId = baseId;
      let duplicateCount = 2;
      while (usedIds.has(uniqueId)) {
        uniqueId = `${baseId}-${duplicateCount}`;
        duplicateCount += 1;
      }

      heading.id = uniqueId;
      usedIds.add(uniqueId);
    });

    setSections(
      headings.filter((heading) => ["H2", "H3"].includes(heading.tagName)),
    );
  }, [contentRef, pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      const targetRoot = contentRef?.current;
      if (!targetRoot) {
        setActiveSection(null);
        return;
      }

      const headingElements = targetRoot.querySelectorAll("h2, h3");
      let currentActive: string | null = null;

      headingElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentActive = section.id;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentRef, sections, pathname]);

  return (
    <div
      className={clsx(
        "w-full flex-1 px-4 py-10",
        sections.length === 0 && "hidden",
      )}
    >
      <h1 className="text-base font-semibold">Table of Contents</h1>
      <nav className="mt-4 flex flex-col gap-2">
        {sections.map((section, index) => (
          <Link
            key={`toc-${index}`}
            href={`#${section.id}`}
            className={clsx(
              "text-sm hover:text-foreground/90",
              activeSection === section.id
                ? "text-foreground font-medium"
                : "text-foreground/70",
              section.tagName === "H3" ? "ml-4" : "",
            )}
          >
            {section.textContent}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default TOC;
