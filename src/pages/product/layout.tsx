import { cn } from "@/lib/utils";

const ProductLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className={cn("bg-white mt-8", className)} {...props}>
      {children}
    </main>
  );
};

export default ProductLayout;
