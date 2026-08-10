import type { Metadata } from "next";
import { reemKufi, plexArabic, plexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصّة البحث الذكي عن الموردين والصفقات",
  description:
    "خدمة رقمية تساعد التجار على الوصول إلى موردين مناسبين، مقارنة التكلفة الفعلية، وتقييم المخاطر الأولية في تقرير واحد منظم.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${reemKufi.variable} ${plexArabic.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
