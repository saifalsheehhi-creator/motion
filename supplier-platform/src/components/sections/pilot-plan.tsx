import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const phases = [
  {
    phase: "فهم السوق",
    duration: "أسبوع",
    output: "مقابلة 10–15 تاجراً",
    success: "5 على الأقل يؤكدون المشكلة والسعر المقبول",
  },
  {
    phase: "تجربة يدوية ذكية",
    duration: "أسبوعان",
    output: "تنفيذ 10 تقارير دون بناء منصة كاملة",
    success: "جودة مفيدة ووقت تنفيذ معلوم",
  },
  {
    phase: "نسخة أولية",
    duration: "2–4 أسابيع",
    output: "أول 5 عملاء مدفوعين، طلب، دفع، وتقرير آلي",
    success: "أول 5 عملاء مدفوعين",
  },
  {
    phase: "تحسين",
    duration: "شهر",
    output: "تعديل الباقات والمصادر والتقييم",
    success: "تجديد أو طلب ثانٍ من العملاء",
  },
];

const questions = [
  "كيف تبحث حالياً عن الموردين؟ وكم يستغرق ذلك؟",
  "ما أكثر معلومة ناقصة تمنعك من اتخاذ القرار؟",
  "هل تفضّل اشتراكاً شهرياً أم الدفع لكل بحث؟",
  "هل 5 موردين موثوقين أفضل من 20 رابطاً عادياً؟",
  "ما السعر المقبول لتقرير يوفّر عليك الوقت ويكشف المخاطر الأولية؟",
];

export function PilotPlan() {
  return (
    <section id="pilot" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="07 — التجربة"
          title="خطة الإطلاق التجريبي"
          note="لا نبني نظاماً كبيراً الآن — نختبر الفكرة بأقل تكلفة ممكنة."
        />

        <Reveal>
          <Table>
            <TableHeader>
              <TableRow className="border-t-0 hover:bg-transparent even:bg-transparent">
                <TableHead>المرحلة</TableHead>
                <TableHead>المدة</TableHead>
                <TableHead>المخرجات</TableHead>
                <TableHead>معيار النجاح</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {phases.map((p) => (
                <TableRow key={p.phase}>
                  <TableCell>{p.phase}</TableCell>
                  <TableCell className="font-mono tabular-nums">{p.duration}</TableCell>
                  <TableCell>{p.output}</TableCell>
                  <TableCell>{p.success}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Reveal>

        <div className="mt-9 grid items-start gap-6 sm:grid-cols-2">
          <Reveal>
            <p className="mb-3.5 text-sm text-muted-foreground">أسئلة تُطرح على التجار</p>
            <ol className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              {questions.map((q, i) => (
                <li key={q} className="flex gap-2.5">
                  <span className="font-mono text-primary">{i + 1}.</span>
                  {q}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal
            delay={0.15}
            className="rounded-md border border-border bg-card px-6 py-5 border-s-[3px] border-s-primary text-sm text-muted-foreground"
          >
            <strong className="font-semibold text-foreground">قرار البداية المقترح:</strong>{" "}
            نعرض نموذج تقرير واحد، نجمع طلبات حقيقية من التجار، ننفذها شبه يدوياً بمساعدة الذكاء
            الاصطناعي، ثم نبني فقط ما ثبت أن العملاء يحتاجونه ويدفعون مقابله.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
