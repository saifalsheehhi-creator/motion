import { Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-5 text-center">
      <div className="glass-panel flex flex-col items-center gap-4 rounded-[2rem] p-10 sm:p-14">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Compass className="size-6" strokeWidth={1.75} />
        </span>
        <div className="font-mono text-xs tracking-wide text-primary">404</div>
        <h1 className="text-2xl sm:text-3xl">هذي الصفحة مو موجودة</h1>
        <p className="max-w-[42ch] text-sm text-muted-foreground sm:text-base">
          يمكن الرابط تغيّر أو الصفحة انتقلت. ارجع للصفحة الرئيسية وكمّل من هناك.
        </p>
        <Button asChild size="lg">
          <a href="/">الرجوع للصفحة الرئيسية</a>
        </Button>
      </div>
    </div>
  );
}
