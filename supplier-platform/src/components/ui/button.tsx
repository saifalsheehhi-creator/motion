import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_rgba(217,169,74,0.55)] hover:brightness-110",
        ghost: "border border-white/25 text-foreground hover:border-white/45 hover:bg-white/5",
        outline: "border border-border text-foreground hover:border-primary hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-[0.83rem]",
        lg: "h-[3.25rem] px-9 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  const shimmer = (variant ?? "default") === "default" && size !== "icon";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), shimmer && "cta-shimmer")}
      {...props}
    />
  );
}

export { Button, buttonVariants };
