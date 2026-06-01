import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/cn";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ className, children }: CardProps) => {
  return (
    <section
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-white/86 p-4 shadow-xl shadow-slate-900/6 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </section>
  );
};
