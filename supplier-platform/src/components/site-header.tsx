"use client";

import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#problem", label: "المشكلة والحل" },
  { href: "#pricing", label: "الباقات" },
  { href: "#how", label: "كيف تعمل" },
  { href: "#pilot", label: "تواصل معنا" },
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
        "glass sticky top-0 z-50 rounded-none border-x-0 border-t-0 transition-shadow duration-300",
        scrolled && "shadow-[0_8px_24px_-16px_rgba(28,18,6,0.6)]"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#top" className="inline-flex items-center gap-2.5">
          <BrandMark className="size-12" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[1.75rem] font-bold">مورد</span>
            <span className="mt-1 font-mono text-sm tracking-wide text-muted-foreground">
              Maward
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-base text-foreground/70 transition-[color,transform] hover:text-foreground active:scale-[0.97] inline-block"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild variant="ghost">
          <a href="#pilot">ابدأ المورد الصحيح</a>
        </Button>
      </div>
    </header>
  );
}
