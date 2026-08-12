import type { Metadata } from "next";
import { plexArabic, plexMono } from "./fonts";
import "./globals.css";

const title = "مورد | منصّة البحث الذكي عن الموردين والصفقات";
const description =
  "خدمة رقمية تساعد التجار على الوصول إلى موردين مناسبين، مقارنة التكلفة الفعلية، وتقييم المخاطر الأولية في تقرير واحد منظم.";

export const metadata: Metadata = {
  metadataBase: new URL("https://maward.example"),
  title,
  description,
  openGraph: { title, description, locale: "ar_AE", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${plexArabic.variable} ${plexMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="glass fixed start-4 top-4 z-[100] -translate-y-24 rounded-full px-4 py-2 text-sm text-foreground transition-transform focus-visible:translate-y-0"
        >
          تخطَّ إلى المحتوى
        </a>
        {children}
      </body>
    </html>
  );
}
