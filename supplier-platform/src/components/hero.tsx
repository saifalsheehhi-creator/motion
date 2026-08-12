import { ArrowLeft, Compass, LineChart, Search, Truck } from "lucide-react";

import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

// DOM order is right-to-left on screen (RTL): first item renders rightmost,
// last item renders leftmost. Reading right -> left: quick search action,
// then the three feature cards (Search / Risk / Logistics).
const boxes = [
  {
    kind: "action" as const,
    icon: Search,
    badge: "bg-primary/15 text-primary",
    titleEn: "Quick Search",
    title: "ابحث الآن",
  },
  {
    kind: "feature" as const,
    icon: Compass,
    badge: "bg-primary/15 text-primary",
    titleEn: "Comprehensive Search",
    title: "بحث شامل",
    body: "بحث منظّم يغطي المصادر المناسبة لكل فئة ومنطقة.",
  },
  {
    kind: "feature" as const,
    icon: LineChart,
    badge: "bg-accent-cyan/15 text-accent-cyan",
    titleEn: "Risk Assessment",
    title: "تقييم المخاطر",
    body: "تحقق أولي ومؤشرات خطر قبل ما تتواصل مع أي مورد.",
  },
  {
    kind: "feature" as const,
    icon: Truck,
    badge: "bg-white/10 text-foreground",
    titleEn: "Logistics Facilitation",
    title: "تسهيل لوجستي",
    body: "مقارنة الشحن والحد الأدنى للطلب حتى الإمارات.",
  },
];

function YoutubeGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="m10.5 9 5 3-5 3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 45% at 50% 0%, color-mix(in srgb, var(--accent-cyan) 18%, transparent), transparent 70%), linear-gradient(180deg, var(--bg-alt), var(--background) 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(60% 60% at 50% 20%, black, transparent)",
        }}
      />
      <div
        className="ambient-blob pointer-events-none -top-16 start-[8%] size-72 bg-accent-cyan/20"
        aria-hidden
      />
      <div
        className="ambient-blob pointer-events-none top-40 end-[6%] size-64 bg-primary/15"
        style={{ animationDelay: "-7s", animationDuration: "26s" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-5 pt-14 pb-10 text-center sm:px-8 sm:pt-20">
        <Reveal className="glass-panel mx-auto rounded-[2rem] p-6 sm:p-10">
          <h1 className="text-[2.5rem] leading-[1.25] sm:text-6xl lg:text-[4.1rem] lg:leading-[1.18]">
            الخطوة الصحيحة تبدأ
            <br />
            مع المورد الصحيح
          </h1>

          <p className="mx-auto mt-5 max-w-[46ch] text-base text-muted-foreground sm:text-lg">
            خدمة رقمية تساعد التجار على الوصول إلى موردين مناسبين، مقارنة التكلفة الفعلية، وتقييم
            المخاطر الأولية — في تقرير واحد منظم.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {boxes.map((b, i) => (
              <Reveal
                key={b.title}
                delay={0.2 + 0.08 * i}
                className="glass card-hover flex flex-col items-center gap-2.5 rounded-2xl px-5 py-6 text-center"
              >
                <span className={`card-hover-icon flex size-14 items-center justify-center rounded-full ${b.badge}`}>
                  <b.icon className="size-6" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-[0.68rem] tracking-wide text-muted-foreground uppercase">
                  {b.titleEn}
                </span>
                <h3 className="text-base">{b.title}</h3>

                {b.kind === "action" ? (
                  <a
                    href="#pilot"
                    className="mt-1 flex w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-start text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <span className="flex-1">صف المنتج اللي تدور عليه...</span>
                    <ArrowLeft className="size-3.5 shrink-0" strokeWidth={2} />
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{b.body}</p>
                )}
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.68} className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <Button asChild size="lg">
            <a href="#pilot">اطلب شراكة أعمال</a>
          </Button>
          <div className="glass flex h-[3.25rem] items-center gap-1.5 rounded-full px-2.5">
            <a href="#" aria-label="يوتيوب" className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
              <YoutubeGlyph className="size-5" />
            </a>
            <a href="#" aria-label="إكس" className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
              <XGlyph className="size-5" />
            </a>
            <a href="#" aria-label="إنستغرام" className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
              <InstagramGlyph className="size-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.78} className="glass mx-auto mt-10 flex max-w-lg items-center justify-center divide-x divide-white/10 rounded-full py-4">
          <div className="flex-1 px-4 text-center">
            <div className="font-mono text-xl font-semibold text-primary">
              <Counter to={99} /> د.إ
            </div>
            <div className="mt-1 text-xs text-muted-foreground">بداية الاشتراك</div>
          </div>
          <div className="flex-1 px-4 text-center">
            <div className="font-mono text-xl font-semibold text-primary">
              80–<Counter to={90} />%
            </div>
            <div className="mt-1 text-xs text-muted-foreground">قابل للأتمتة</div>
          </div>
          <div className="flex-1 px-4 text-center">
            <div className="font-mono text-xl font-semibold text-primary">
              <Counter to={8711} format /> د.إ
            </div>
            <div className="mt-1 text-xs text-muted-foreground">إيراد شهري افتراضي</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
