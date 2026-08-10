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

const risks = [
  {
    risk: "بيانات قديمة أو سعر غير مؤكد",
    impact: "قرار خاطئ",
    control: "تاريخ فحص وحالة ثقة لكل معلومة",
  },
  {
    risk: "مورد وهمي أو منتحل",
    impact: "خسارة مالية",
    control: "تحقق متعدد المصادر، وعدم ضمان المورد",
  },
  {
    risk: "فصل السعر المعلن عن التكلفة النهائية",
    impact: "هامش ربح أقل",
    control: "فصل التكلفة التقديرية عن السعر بعد الشحن والجمارك",
  },
  {
    risk: "طلبات واسعة تستهلك موارد كثيرة",
    impact: "خسارة تشغيلية",
    control: "حدود واضحة لكل باقة وسياسة استخدام عادلة",
  },
  {
    risk: "تواصل أو التزام دون تفويض",
    impact: "نزاع ومسؤولية",
    control: "موافقة العميل قبل أي تواصل أو تقديم التزام",
  },
];

export function Risk() {
  return (
    <section id="risk" className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tab="08 — الحوكمة"
          title="المخاطر والضوابط"
          note="قابل للاختبار بتكلفة محدودة — القوة الحقيقية في جودة الموردين وحداثة البيانات."
        />

        <Reveal>
          <Table>
            <TableHeader>
              <TableRow className="border-t-0 hover:bg-transparent even:bg-transparent">
                <TableHead>الخطر</TableHead>
                <TableHead>الأثر</TableHead>
                <TableHead>الضابط المقترح</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {risks.map((r) => (
                <TableRow key={r.risk}>
                  <TableCell>{r.risk}</TableCell>
                  <TableCell>{r.impact}</TableCell>
                  <TableCell>{r.control}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Reveal>
      </div>
    </section>
  );
}
