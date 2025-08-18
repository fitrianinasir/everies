import { cn } from "@/lib/utils";

const ProductLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main
      className={cn("p-8 lg:p-16 w-screen h-screen bg-white", className)}
      {...props}
    >
      {children}
    </main>
  );
};

export default ProductLayout;
