import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/cn";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ className, children }: CardProps) => {
  return <section className={cn("rounded-3xl border border-slate-200 bg-white p-4 shadow-sm", className)}>{children}</section>;
};
