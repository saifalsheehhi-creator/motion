import { Bot, UserRound } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { title: "التسجيل والدفع", body: "يختار العميل الباقة ويدخل بياناته الأساسية." },
  {
    title: "تحديد الطلب",
    body: "المنتج، الماركة، الكمية، الميزانية، الدول المقبولة، وموعد التسليم.",
  },
  { title: "البحث المنظم", body: "جمع النتائج من المصادر والأسواق المناسبة لكل منطقة." },
  { title: "التنظيف والفرز", body: "حذف التكرار والنتائج القديمة أو غير المناسبة." },
  {
    title: "التحقق الأولي",
    body: "فحص بيانات الموقع، وسائل التواصل، العمر الرقمي، والمؤشرات التحذيرية.",
  },
  {
    title: "حساب التكلفة",
    body: "مقارنة سعر الوحدة والحد الأدنى والشحن التقريبي عند توفر البيانات.",
  },
  {
    title: "التقرير والمتابعة",
    body: "تقرير ثنائي اللغة مرتّب، ثم تحديث النتيجة أو التواصل مع المورد حسب الباقة وموافقة العميل.",
  },
];

const aiWork = [
  "استقبال الطلبات وتصنيفها",
  "تجميع البيانات وإزالة التكرار",
  "الترجمة والترتيب والمقارنة",
  "إنشاء التقرير والفاتورة والتنبيهات",
  "الأسئلة المتكررة ودعم المستوى الأول",
];

const humanWork = [
  "الطلبات الغامضة أو عالية القيمة",
  "المورد الذي تظهر حوله إشارات متضاربة",
  "التفاوض أو الالتزامات الرسمية",
  "أي دفع أو اتفاق باسم العميل",
  "الشكاوى والنزاعات والحالات الاستثنائية",
];

export function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="03 — الآلية"
          title="من الطلب إلى التقرير"
          note="سبع خطوات، من التسجيل حتى تسليم تقرير ثنائي اللغة جاهز للمقارنة."
        />

        <Reveal className="flex flex-col">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="grid grid-cols-[auto_1fr] gap-5 border-t border-border/70 py-4 first:border-t-0"
            >
              <div className="pt-0.5 font-mono text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 className="mb-1 text-base">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          <Reveal className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 bg-accent-cyan/15 px-5 py-3.5 text-sm font-semibold text-accent-cyan">
              <Bot className="size-4" strokeWidth={1.9} />
              يقوم به النظام الذكي
            </div>
            <ul className="flex flex-col gap-2.5 p-5">
              {aiWork.map((w) => (
                <li key={w} className="ps-4 text-sm text-muted-foreground relative before:absolute before:start-0 before:content-['—'] before:text-primary">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 bg-primary/15 px-5 py-3.5 text-sm font-semibold text-primary">
              <UserRound className="size-4" strokeWidth={1.9} />
              يحتاج مراجعة بشرية
            </div>
            <ul className="flex flex-col gap-2.5 p-5">
              {humanWork.map((w) => (
                <li key={w} className="ps-4 text-sm text-muted-foreground relative before:absolute before:start-0 before:content-['—'] before:text-primary">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
