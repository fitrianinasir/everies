import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

type Input = {
  leftNode?: React.ReactNode;
};

const inputVariants = cva("text-xs px-2 py-1 rounded-md", {
  variants: {
    variant: {
      primary:
        "bg-everies-primary-10 text-everies-light-10 shadow-xs hover:bg-everies-primary-10/90",
      secondary:
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface InputProps extends React.ComponentProps<"input"> {
  leftNode?: React.ReactNode;
}

function Input({
  className,
  type,
  leftNode,
  variant,
  ...props
}: InputProps & VariantProps<typeof inputVariants>) {
  return (
    <div className={cn(inputVariants({ variant, className }))}>
      {leftNode}
      <input type={type} data-slot="input" style={{ outline: 0 }} {...props} />
    </div>
  );
}

export { Input };
