import type { ReactNode } from "react";

import { Footer } from "@/components/ui/footer-section";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col">
      <SiteHeader />
      <main id="main" className="relative flex-1">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12">
            <h1 className="text-2xl sm:text-3xl">{title}</h1>
            <div className="prose-legal mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
