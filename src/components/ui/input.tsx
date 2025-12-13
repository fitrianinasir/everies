import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Input = {
  leftNode?: React.ReactNode;
};

const inputVariants = cva("text-sm p-3 rounded-md", {
  variants: {
    variant: {
      primary:
        "bg-everies-secondary-30 text-everies-primary-10 shadow-xs border border-everies-secondary-40 focus-within:border-everies-secondary-50",
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
  isError?: boolean;
  errorMessage?: string;
}

function Input({
  className,
  type,
  leftNode,
  variant,
  ...props
}: InputProps & VariantProps<typeof inputVariants>) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="flex flex-col w-full gap-1">
      <div
        className={cn(
          inputVariants({ variant, className }),
          "flex items-center gap-2",
          props.isError && "border border-red-800 focus-within:border-red-800"
        )}
      >
        {leftNode}
        <input
          className="autofill:bg-inherit w-full"
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          data-slot="input"
          style={{ outline: 0 }}
          {...props}
        />
        {type === "password" ? (
          showPassword ? (
            <FaEye
              className="cursor-pointer size-4"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaEyeSlash
              className="cursor-pointer size-4"
              onClick={() => setShowPassword(true)}
            />
          )
        ) : null}
      </div>
      {props.isError && props.errorMessage && (
        <p className="text-[10px] text-red-800">{props.errorMessage}</p>
      )}
    </div>
  );
}

export { Input };
