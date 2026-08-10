"use client";

import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#problem", label: "المشكلة والحل" },
  { href: "#how", label: "كيف تعمل" },
  { href: "#pricing", label: "الباقات" },
  { href: "#report", label: "التقرير" },
  { href: "#pilot", label: "خطة الإطلاق" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/85 backdrop-blur transition-colors duration-300",
        scrolled && "border-border shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="#top" className="inline-flex items-center gap-2">
          <BrandMark className="size-[26px] text-primary" />
          <span className="font-kufi text-base">منصّة الموردين</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild size="sm">
          <a href="#pilot">ابدأ التجربة الأولى</a>
        </Button>
      </div>
    </header>
  );
}
