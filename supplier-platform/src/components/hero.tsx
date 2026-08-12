import { BarChart3, Search, Truck } from "lucide-react";

import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const features = [
  {
    icon: Search,
    title: "بحث شامل",
    titleEn: "Comprehensive Search",
    body: "بحث منظّم يغطي المصادر المناسبة لكل فئة ومنطقة، بدل تصفح عشرات المواقع يدوياً.",
  },
  {
    icon: BarChart3,
    title: "تقارير تقييم المخاطر",
    titleEn: "Risk Assessment Reports",
    body: "تحقق أولي ومؤشرات خطر واضحة قبل ما تتواصل مع أي مورد أو تلتزم بشيء.",
  },
  {
    icon: Truck,
    title: "تسهيل لوجستي",
    titleEn: "Logistics Facilitation",
    body: "مقارنة الشحن والحد الأدنى للطلب والتكلفة التقريبية حتى وصولها للإمارات.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 45% at 50% 0%, color-mix(in srgb, var(--accent-cyan) 16%, transparent), transparent 70%), linear-gradient(180deg, var(--bg-alt), var(--background) 60%)",
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

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h1 className="text-[2.1rem] leading-[1.25] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.2]">
            منصّة البحث الذكي
            <br />
            عن الموردين والصفقات
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg text-muted-foreground">
            خدمة رقمية تساعد التجار على الوصول إلى موردين مناسبين، مقارنة التكلفة الفعلية، وتقييم
            المخاطر الأولية — في تقرير واحد منظم.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-9 max-w-xl">
          <div className="glass flex items-center gap-2 rounded-full p-2 pe-2 ps-5 backdrop-blur-xl">
            <span className="flex-1 text-start text-sm text-muted-foreground">
              صف لي المنتج اللي تدور عليه… أحذية، إلكترونيات، مخزون فائض
            </span>
            <Button asChild size="icon" className="shrink-0 rounded-full">
              <a href="#pilot" aria-label="ابدأ البحث">
                <Search className="size-4" strokeWidth={2} />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid gap-4 sm:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={0.1 * i}
              className="glass flex flex-col items-center gap-3 rounded-2xl px-5 py-7 text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-accent-cyan/15 text-accent-cyan">
                <f.icon className="size-6" strokeWidth={1.75} />
              </span>
              <span className="text-[0.7rem] tracking-wide text-muted-foreground uppercase font-mono">
                {f.titleEn}
              </span>
              <h3 className="text-base">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <Button asChild size="lg">
            <a href="#pilot">ابدأ التجربة المدفوعة الأولى</a>
          </Button>
        </Reveal>

        <Reveal delay={0.2} className="glass mx-auto mt-12 flex max-w-lg items-center justify-center divide-x divide-white/10 rounded-full py-4">
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
