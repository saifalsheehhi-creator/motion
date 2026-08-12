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
import { cn } from "@/lib/utils";

const rows = [
  { plan: "الأساسية", count: "20 عميلاً", calc: "99 × 20", revenue: "1,980 درهم" },
  { plan: "المتقدمة", count: "15 عميلاً", calc: "249 × 15", revenue: "3,735 درهم" },
  { plan: "الأعمال", count: "4 عملاء", calc: "499 × 4", revenue: "1,996 درهم" },
  { plan: "بحث خاص", count: "طلبان", calc: "500 × 2", revenue: "1,000 درهم" },
];

const opsTags = [
  "استضافة وقاعدة بيانات",
  "بوابة دفع",
  "بريد ودعم",
  "تسويق",
  "ذكاء اصطناعي: بحث وتحليل وترجمة",
];

export function Revenue() {
  return (
    <section id="revenue" className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="06 — النموذج المالي"
          title="نموذج الإيرادات والتكاليف"
          note="مثال إيراد شهري عند الوصول إلى مجموعة عملاء صغيرة."
        />

        <Reveal>
          <Table>
            <TableHeader>
              <TableRow className="border-t-0 hover:bg-transparent even:bg-transparent">
                <TableHead>الباقة</TableHead>
                <TableHead>العدد</TableHead>
                <TableHead>الحساب</TableHead>
                <TableHead>الإيراد</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.plan}>
                  <TableCell>{r.plan}</TableCell>
                  <TableCell className="font-mono tabular-nums">{r.count}</TableCell>
                  <TableCell className="font-mono tabular-nums">{r.calc}</TableCell>
                  <TableCell className="font-mono tabular-nums">{r.revenue}</TableCell>
                </TableRow>
              ))}
              <TableRow className={cn("border-t-2 border-t-primary font-semibold text-foreground")}>
                <TableCell colSpan={3} className="font-semibold text-foreground">
                  الإجمالي الشهري الافتراضي
                </TableCell>
                <TableCell className="font-mono font-semibold tabular-nums text-foreground">
                  8,711 درهم
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-6 glass rounded-2xl px-6 py-5 border-s-[3px] border-s-destructive"
        >
          <p className="text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">هذا إيراد وليس ربحاً صافياً.</strong>{" "}
            الربح الحقيقي = الإيراد ناقص تكلفة البحث لكل طلب، الاشتراكات التقنية، بوابة الدفع،
            التسويق، والمراجعة البشرية.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-5 flex flex-wrap gap-2.5">
          {opsTags.map((t) => (
            <span
              key={t}
              className="glass rounded-full px-3.5 py-2 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-5 text-sm text-muted-foreground">
          المقياس الأهم قبل التوسّع: تكلفة تنفيذ التقرير مقابل سعره — تُقاس بدقة في أول 20 طلباً.
        </Reveal>
      </div>
    </section>
  );
}
