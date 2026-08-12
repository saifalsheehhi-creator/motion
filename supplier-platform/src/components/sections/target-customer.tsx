import { MapPin, Package } from "lucide-react";

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

const rows = [
  {
    segment: "تجار الجملة",
    need: "مصادر جديدة وأسعار أقل",
    offer: "قائمة موردين مرتّبة ومقارنة التكلفة",
  },
  {
    segment: "أصحاب المحلات",
    need: "منتجات مطلوبة أو تصفيات",
    offer: "بحث حسب الماركة والكمية والميزانية",
  },
  {
    segment: "المستوردون الصغار",
    need: "تقليل مخاطر المورد لأول مرة",
    offer: "تحقق أوّلي ومؤشرات خطر قبل التواصل",
  },
  {
    segment: "شركات المشتريات",
    need: "توفير الوقت وتوحيد العروض",
    offer: "تقرير مقارن قابل للمراجعة والمشاركة",
  },
];

const geography = ["الإمارات والمناطق الحرة", "أوروبا", "الولايات المتحدة", "آسيا والصين"];
const categories = [
  "الأحذية والملابس",
  "التصفيات والمخزون الفائض",
  "بضائع موجودة داخل الإمارات",
  "طلبات محددة قابلة للتحقق",
];

export function TargetCustomer() {
  return (
    <section id="customer" className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="02 — العميل المستهدف"
          title="لمن هذه المنصة"
          note="التخصص في البداية بفئة أو اثنتين يرفع جودة النتائج ويوضّح التسويق."
        />

        <Reveal>
          <Table>
            <TableHeader>
              <TableRow className="border-t-0 hover:bg-transparent even:bg-transparent">
                <TableHead>الفئة</TableHead>
                <TableHead>تحتاج إلى</TableHead>
                <TableHead>ما تقدّمه المنصة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.segment}>
                  <TableCell>{r.segment}</TableCell>
                  <TableCell>{r.need}</TableCell>
                  <TableCell>{r.offer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <p className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-accent-cyan" strokeWidth={1.75} />
              النطاق الجغرافي
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {geography.map((g) => (
                <li
                  key={g}
                  className="glass rounded-full px-3.5 py-2 text-sm text-muted-foreground"
                >
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Package className="size-4 text-accent-cyan" strokeWidth={1.75} />
              فئات بداية مقترحة
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {categories.map((c) => (
                <li
                  key={c}
                  className="glass rounded-full px-3.5 py-2 text-sm text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
