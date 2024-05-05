import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const typographyVariants = cva("leading-normal", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-bold tracking-tight",
      h6: "scroll-m-20 text-base font-bold tracking-tight",
      body: "text-base",
      small: "text-sm",
      caption: "text-xs",
      p: "text-base",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(({ className, variant, ...props }, ref) => {
  return (
    <p
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
Typography.displayName = "Typography";

export { Typography, typographyVariants };
