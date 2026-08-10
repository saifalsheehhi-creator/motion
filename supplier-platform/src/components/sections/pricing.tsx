import { CircleCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "الأساسية",
    price: "99",
    unit: "درهم / شهرياً",
    features: ["طلب بحث واحد", "حتى 5 موردين", "تقرير مختصر ومنظم"],
    featured: false,
  },
  {
    name: "المتقدمة",
    price: "249",
    unit: "درهم / شهرياً",
    features: ["حتى 4 طلبات", "10 موردين لكل طلب", "مقارنة السعر والشحن والتحقق الأولي"],
    featured: false,
  },
  {
    name: "الأعمال",
    price: "499",
    unit: "درهم / شهرياً",
    features: ["حتى 10 طلبات", "نطاق أوسع وأولوية تنفيذ", "تحديث دوري للنتائج"],
    featured: true,
  },
  {
    name: "بحث خاص",
    price: "300–1,000",
    unit: "درهم / طلب",
    features: ["حسب التعقيد", "بحث صعب أو عاجل", "لدول متعددة في طلب واحد"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="04 — الاشتراك"
          title="باقات الاشتراك والخدمات"
          note="التسعير أولي — يُعاد ضبطه بعد التجربة الحقيقية مع التجار."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={0.08 * i}
              className={cn(
                "flex flex-col gap-3.5 rounded-md border bg-card p-6",
                plan.featured ? "border-primary ring-1 ring-primary" : "border-border/70"
              )}
            >
              <div className="text-sm text-muted-foreground">{plan.name}</div>
              <div className="font-mono text-2xl font-semibold">
                {plan.price} <small className="font-body text-sm font-normal text-muted-foreground">{plan.unit}</small>
              </div>
              <hr className="border-border/70" />
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CircleCheck className="mt-0.5 size-3.5 shrink-0 text-status-good" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-7 rounded-md border border-border bg-card px-6 py-5 border-s-[3px] border-s-primary">
          <p className="text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">التسعير النهائي لا يُعتمد قبل التجربة.</strong>{" "}
            الأسئلة المهمة للتجار: هل سيدفعون؟ وكم؟ وما عدد الموردين أو التقارير الذي يعتبرونه
            كافياً؟ ثم نُعدّل الباقات بناءً على الاستخدام الحقيقي.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-4 text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground/80">سياسة استخدام عادلة:</strong> يجب
          تعريف «طلب البحث» بدقة — منتج واحد، مواصفات واحدة، نطاق دول محدد، وكمية واضحة. تغيير
          المنتج أو توسيع الدول جذرياً يُعدّ طلباً جديداً.
        </Reveal>
      </div>
    </section>
  );
}
