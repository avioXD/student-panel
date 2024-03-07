import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GradientText = ({
  children,
  className,
  ...props
}: GradientTextProps) => {
  return (
    <div
      className={cn(
        "bg-gradient text-[#0C0C0C] px-[40px] py-[8px] text-[20px] font-medium  rounded-lg w-max",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
