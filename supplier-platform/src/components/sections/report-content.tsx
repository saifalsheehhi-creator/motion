import { Stamp } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
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

const dataGroups = [
  "هوية المورد",
  "العرض والمواصفات",
  "الأسعار",
  "اللوجستيات",
  "الشروط",
  "التحقق",
  "القرار المقترح",
];

const criteria = [
  { label: "موثوقية وهوية الشركة", weight: "30%", rating: "مرتفع", variant: "good" as const },
  { label: "ملاءمة المنتج والكمية", weight: "25%", rating: "مرتفع", variant: "good" as const },
  { label: "التكلفة الكلية التقريبية", weight: "25%", rating: "متوسط", variant: "mid" as const },
  { label: "الدفع والشحن والمدة", weight: "20%", rating: "يحتاج تحقق", variant: "warn" as const },
];

export function ReportContent() {
  return (
    <section id="report" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="05 — التقرير"
          title="داخل تقرير الموردين"
          note="كل مورد يظهر كسجل موحّد، وكل معلومة فيه مؤرخة بحسب آخر فحص."
        />

        <Reveal className="mb-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {dataGroups.map((g, i) => (
            <div
              key={g}
              className={cn(
                "flex items-center glass rounded-full px-4 py-2.5 text-sm text-muted-foreground",
                i === dataGroups.length - 1 && "border-dashed"
              )}
            >
              {g}
            </div>
          ))}
        </Reveal>

        <Reveal>
          <Table>
            <TableHeader>
              <TableRow className="border-t-0 hover:bg-transparent even:bg-transparent">
                <TableHead>المعيار</TableHead>
                <TableHead>الوزن</TableHead>
                <TableHead>مثال التقييم</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {criteria.map((c) => (
                <TableRow key={c.label}>
                  <TableCell>{c.label}</TableCell>
                  <TableCell className="font-mono tabular-nums">{c.weight}</TableCell>
                  <TableCell>
                    <Badge variant={c.variant}>{c.rating}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex items-start gap-5">
          <div className="relative flex size-[72px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-primary">
            <div className="absolute inset-1.5 rounded-full border border-dashed border-primary/60" />
            <Stamp className="size-6 text-accent-cyan" strokeWidth={1.75} />
          </div>
          <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">قاعدة شفافية:</strong> كل معلومة
            تحمل حالتها — «مؤكدة من المصدر»، «معلنة من المورد»، أو «تقديرية». لا يجوز خلطها أو عرض
            التقدير وكأنه ضمان.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
