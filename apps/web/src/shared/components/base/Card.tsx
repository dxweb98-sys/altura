import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/cn";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ className, children }: CardProps) => {
  return (
    <section
      className={cn(
        "rounded-[1.75rem] border border-[#efe6d8] bg-[#fffbf4] p-4 shadow-[0_18px_45px_rgba(98,83,61,0.08)]",
        className,
      )}
    >
      {children}
    </section>
  );
};
