import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        googlesheets: "bg-[#0F9D58]/20 text-[#0F9D58] dark:bg-[#0F9D58]/30",
        nextjs: "bg-[#000000] text-[#FFF]",
        typescript: "bg-[#3178C6]/20 text-[#3178C6] dark:bg-[#3178C6]/30",
        tailwindcss: "bg-[#38BDF8]/20 text-[#38BDF8] dark:bg-[#38BDF8]/30",
        shadcnui: "bg-[#6466F1]/20 text-[#6466F1] dark:bg-[#6466F1]/30",
        react: "bg-[#61DAFB]/20 text-[#61DAFB] dark:bg-[#61DAFB]/30",
        supabase: "bg-[#3ECF8E]/20 text-[#3ECF8E] dark:bg-[#3ECF8E]/30",
        zustand: "bg-[#8D6E63]/20 text-[#8D6E63] dark:bg-[#8D6E63]/30",
        resend: "bg-[#FF0000]/20 text-[#FF0000] dark:bg-[#FF0000]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
