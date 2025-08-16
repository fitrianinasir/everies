import * as React from "react";

import { cn } from "@/lib/utils";

type Input = {
  leftNode?: React.ReactNode;
};
function Input({
  className,
  type,
  leftNode,
  ...props
}: React.ComponentProps<"input"> & { leftNode?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex gap-2 items-center h-9 w-full rounded-md bg-white px-3 py-1 text-sm shadow-xs",
        className
      )}
    >
      {leftNode}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "placeholder:text-muted-foreground transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-xs",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-0",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
