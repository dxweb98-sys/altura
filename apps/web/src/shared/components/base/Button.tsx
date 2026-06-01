import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#2fbea4] text-white shadow-[0_16px_35px_rgba(47,190,164,0.28)] hover:-translate-y-0.5 hover:bg-[#27aa92]",
  secondary: "border border-white/80 bg-white text-[#101817] shadow-[0_16px_35px_rgba(13,75,62,0.08)] hover:-translate-y-0.5 hover:bg-[#f7fffc]",
  ghost: "bg-transparent text-[#66736f] hover:bg-white/70",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-2 text-sm font-black transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
