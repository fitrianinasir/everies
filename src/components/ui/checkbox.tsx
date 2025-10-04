import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label?: string;
}
function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <div className="flex flex-row gap-1 items-center justify-center">
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          " border-everies-primary-10 data-[state=checked]:bg-everies-primary-10 data-[state=checked]:text-everies-light-10 data-[state=checked]:border-everies-primary-10 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon className="size-3.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span className="text-xs text-everies-primary-10">{label}</span>
    </div>
  );
}

export { Checkbox };
