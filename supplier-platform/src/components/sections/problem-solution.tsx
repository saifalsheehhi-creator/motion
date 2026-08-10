import { CircleCheck, Compass, Search } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";

const reasons = [
  "لا يحتاج مخزوناً أو مستودعاً في البداية",
  "تدخّل بشري في الحالات الحساسة فقط",
  "دخل متكرر من الاشتراكات + طلبات خاصة",
  "قابل للاختبار بعدد محدود من التجار",
];

export function ProblemSolution() {
  return (
    <section id="problem" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="01 — المشكلة والحل"
          title="التاجر يضيع وقتاً، ونحن نُنظّمه في طلب واحد"
          note="بلا مخزون، بلا شحن باسم المنصة — خدمة بحث وتحليل أولي فقط."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal className="rounded-md border border-border/70 bg-card p-6">
            <Search className="mb-3.5 size-6 text-primary" strokeWidth={1.75} />
            <h3 className="mb-2 text-lg">المشكلة</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              التاجر يُضيّع وقتاً بين المواقع والموردين، والأسعار الظاهرة لا تشمل دائماً الشحن أو
              الحد الأدنى للطلب، كما يصعب فرز المورد الحقيقي من النتيجة الضعيفة.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-md border border-border/70 bg-card p-6">
            <Compass className="mb-3.5 size-6 text-primary" strokeWidth={1.75} />
            <h3 className="mb-2 text-lg">الحل</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              طلب واحد يدخل للمنصة، ثم يحصل العميل على موردين مرتبين حسب السعر والثقة والملاءمة،
              مع ملاحظات المخاطر والتكلفة التقريبية حتى الإمارات.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="relative mt-6 rounded-md border border-dashed border-border bg-card px-6 py-6 sm:px-7"
        >
          <span className="absolute -top-2.5 end-6 rounded-full bg-primary px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-primary-foreground">
            مثال طلب عميل
          </span>
          <p className="text-[1.02rem] leading-relaxed">
            «أريد 500 زوج أحذية Hoka أصلية، من أوروبا أو أمريكا أو آسيا، بسعر جملة، مع بيان الحد
            الأدنى للطلب، والتوفر، والشحن التقريبي إلى الإمارات.»
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <p className="mb-3 text-sm text-muted-foreground">لماذا يمكن أن يكون مشروعاً جانبياً جيداً؟</p>
          <ul className="flex flex-wrap gap-2.5">
            {reasons.map((r) => (
              <li
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-sm text-muted-foreground"
              >
                <CircleCheck className="size-3.5 text-primary" strokeWidth={2} />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
