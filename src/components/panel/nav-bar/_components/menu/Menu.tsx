"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { options } from "./content";

export const Menu: React.FC<any> = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className={cn("flex text-stone-700")}>
        {options.map((option, index) => (
          <li
            key={index}
            className={cn("mx-4", {
              "text-blue-500 font-medium": pathname === option.path,
            })}
          >
            <a href={option.path}>{option.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
