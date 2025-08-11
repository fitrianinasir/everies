import { cn } from "@/lib/utils";
import React from "react";

const Layout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className={cn("flex-center", className)} {...props}>
      <div className="w-[1440px]">{children}</div>
    </main>
  );
};

export default Layout;
