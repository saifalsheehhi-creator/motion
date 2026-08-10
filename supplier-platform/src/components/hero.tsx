import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep text-deep-foreground">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 55% at 18% -10%, color-mix(in srgb, var(--primary) 22%, transparent), transparent 70%), repeating-linear-gradient(0deg, rgba(238,240,230,.035) 0 1px, transparent 1px 42px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl border-b border-white/10 px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="relative border border-white/20 p-6 sm:p-10 lg:p-14">
          <span
            className="absolute -top-px left-1/2 h-0.5 w-1/3 min-w-[120px] -translate-x-1/2 bg-primary"
            aria-hidden
          />

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/50 px-3 py-1.5 font-mono text-[0.68rem] tracking-wide text-primary uppercase">
            <span className="size-1.5 rounded-full bg-primary" />
            AI Supplier Discovery &amp; Sourcing Platform
          </span>

          <h1 className="max-w-[16ch] text-[2.1rem] leading-[1.18] sm:text-5xl lg:text-6xl">
            منصّة البحث الذكي
            <br />
            عن الموردين والصفقات
          </h1>

          <p className="mt-5 max-w-[46ch] text-lg text-deep-muted">
            خدمة رقمية تساعد التجار على الوصول إلى موردين مناسبين، مقارنة التكلفة الفعلية، وتقييم
            المخاطر الأولية — في تقرير واحد منظم، بدل أيام من البحث المتفرق.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button asChild size="lg">
              <a href="#pilot">ابدأ التجربة المدفوعة الأولى</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#how">شاهد آلية العمل</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-3 sm:mt-16">
            <div className="bg-deep px-4 py-5 text-center">
              <div className="font-mono text-2xl font-semibold text-primary sm:text-3xl">
                <Counter to={99} /> درهم
              </div>
              <div className="mt-1.5 text-sm text-deep-muted">بداية الاشتراك الشهري</div>
            </div>
            <div className="bg-deep px-4 py-5 text-center">
              <div className="font-mono text-2xl font-semibold text-primary sm:text-3xl">
                80–<Counter to={90} />%
              </div>
              <div className="mt-1.5 text-sm text-deep-muted">من العمل قابل للأتمتة</div>
            </div>
            <div className="bg-deep px-4 py-5 text-center">
              <div className="font-mono text-2xl font-semibold text-primary sm:text-3xl">
                <Counter to={8711} format /> درهم
              </div>
              <div className="mt-1.5 text-sm text-deep-muted">مثال إيراد شهري افتراضي</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
