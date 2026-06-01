import { PropsWithChildren } from "react";

type PageHeaderProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description?: string;
}>;

export const PageHeader = ({ eyebrow, title, description, children }: PageHeaderProps) => {
  return (
    <header className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        {eyebrow ? <p className="text-sm font-semibold text-[#36b89c]">{eyebrow}</p> : null}
        <h1 className="mt-1 text-[2rem] font-black leading-[1.05] tracking-tight text-[#101817]">{title}</h1>
        {description ? <p className="mt-2 text-sm leading-6 text-[#7a8782]">{description}</p> : null}
      </div>
      {children}
    </header>
  );
};
