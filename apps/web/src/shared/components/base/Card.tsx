import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/cn";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ className, children }: CardProps) => {
  return (
    <section
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-white p-4 shadow-[0_22px_55px_rgba(13,75,62,0.08)]",
        className,
      )}
    >
      {children}
    </section>
  );
};
