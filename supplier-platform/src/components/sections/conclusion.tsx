import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Conclusion() {
  return (
    <section id="conclusion" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading tab="09 — الخلاصة" title="الخطوة التالية" />

        <Reveal className="max-w-[60ch] text-[1.02rem] leading-relaxed text-muted-foreground">
          أفضل خطوة الآن هي عرض الفكرة ونموذج التقرير على تجار يعرفهم الشريك، جمع ملاحظاتهم
          واستعدادهم للدفع، ثم تنفيذ تجربة مدفوعة صغيرة. إذا عاد العملاء لطلب بحث ثانٍ أو جدّدوا
          الاشتراك، يكون لدينا دليل عملي قبل الاستثمار في منصة كاملة.
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Reveal className="rounded-md border border-border/70 bg-card p-6">
            <h3 className="mb-2 text-lg">الهدف الأول</h3>
            <p className="text-sm text-muted-foreground">5 عملاء مدفوعين وتجربة 10 طلبات حقيقية.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-md border border-border/70 bg-card p-6">
            <h3 className="mb-2 text-lg">شرط التوسّع</h3>
            <p className="text-sm text-muted-foreground">
              جودة ثابتة، تكلفة تنفيذ منضبطة، وطلب متكرر من العملاء.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-8">
          <Button asChild size="lg">
            <a href="#pilot">لنبدأ التجربة المدفوعة الأولى</a>
          </Button>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-10 rounded-md border border-border bg-card px-6 py-5 border-s-[3px] border-s-primary text-sm text-muted-foreground"
        >
          هذا المشروع خدمة بحث ومعلومات وتحليل أولي، وليس ضماناً للمورد أو للبضاعة أو لإتمام
          الصفقة. الفحص النهائي، العينات، العقود، الدفع والشحن تبقى مسؤولية الأطراف المختصة.
        </Reveal>
      </div>
    </section>
  );
}
