"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { GlobeIcon, MailIcon, MessageCircleIcon } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "المنتج",
    links: [
      { title: "المشكلة والحل", href: "#problem" },
      { title: "كيف تعمل الآلية", href: "#how" },
      { title: "الباقات والأسعار", href: "#pricing" },
      { title: "داخل التقرير", href: "#report" },
    ],
  },
  {
    label: "المشروع",
    links: [
      { title: "الملخص التنفيذي", href: "#top" },
      { title: "نموذج الإيرادات", href: "#revenue" },
      { title: "خطة الإطلاق التجريبي", href: "#pilot" },
      { title: "المخاطر والضوابط", href: "#risk" },
    ],
  },
  {
    label: "الحوكمة",
    links: [
      { title: "سياسة الاستخدام العادلة", href: "#pricing" },
      { title: "قاعدة الشفافية", href: "#report" },
      { title: "تنويه مهم", href: "#conclusion" },
      { title: "سياسة الخصوصية", href: "/privacy" },
      { title: "الشروط والأحكام", href: "/terms" },
    ],
  },
  {
    label: "تواصل",
    links: [
      { title: "لينكدإن", href: "#", icon: LinkedinGlyph },
      { title: "بريد إلكتروني", href: "#", icon: MailIcon },
      { title: "واتساب", href: "#", icon: MessageCircleIcon },
      { title: "الموقع الإلكتروني", href: "#", icon: GlobeIcon },
    ],
  },
];

function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="footerBrandGradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5fd0ea" />
          <stop offset="1" stopColor="#2f6fd1" />
        </linearGradient>
      </defs>
      <path d="M16 2 28 9v14l-12 7-12-7V9Z" fill="url(#footerBrandGradient)" />
      <path d="M16 2v14L4 9Z" fill="#ffffff" fillOpacity="0.22" />
      <path d="M16 16 4 23l12 7 12-7Z" fill="#04101f" fillOpacity="0.18" />
    </svg>
  );
}

// lucide-react no longer ships brand/logo icons, so LinkedIn is drawn locally.
function LinkedinGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A5.98 5.98 0 0 1 16 8Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl bg-deep text-deep-foreground relative w-full rounded-t-4xl border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(colors.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-deep-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <a href="#top" className="inline-flex items-center gap-2">
            <BrandMark className="size-10" />
            <span className="flex flex-col items-start leading-none">
              <span className="text-2xl font-bold">مورد</span>
              <span className="mt-0.5 font-mono text-xs tracking-wide text-deep-muted">
                Maward
              </span>
            </span>
          </a>
          <p className="text-deep-muted mt-8 max-w-[30ch] text-sm md:mt-4">
            منصة رقمية تساعد التجار على الوصول إلى موردين مناسبين — بتقرير واحد منظم، بدل أيام من
            البحث المتفرق.
          </p>
          <p className="text-deep-muted/80 text-xs">
            © {new Date().getFullYear()} مورد. تصوّر أولي للنقاش.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-deep-muted text-xs font-medium">{section.label}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-primary inline-flex items-center gap-1.5 text-deep-foreground/85 transition-all duration-300 active:scale-[0.97]"
                      >
                        {link.icon && <link.icon className="size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6">
        <p className="text-deep-muted/80 max-w-[64ch] text-xs leading-relaxed">
          وثيقة تصوّر أولي للنقاش ودراسة الجدوى. الأرقام والأسعار افتراضية وقابلة للتعديل بعد
          اختبار السوق. لا تمثل الوثيقة ضماناً للدخول أو اعتماداً قانونياً أو تجارياً للموردين.
        </p>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
