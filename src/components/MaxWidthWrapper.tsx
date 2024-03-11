import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto px-4 w-full md:max-w-[1400px] lg:max-w-screen-xxl md:px-8 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
