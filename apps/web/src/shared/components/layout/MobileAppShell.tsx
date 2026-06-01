import { Compass, Home, ListChecks, Map, NotebookPen, Settings } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/shared/lib/cn";
import { AnimatedMountainBackdrop } from "./AnimatedMountainBackdrop";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Trips", href: "/trips", icon: Compass },
  { label: "Places", href: "/destinations", icon: Map },
  { label: "Gear", href: "/gear", icon: ListChecks },
  { label: "Logs", href: "/logs", icon: NotebookPen },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const MobileAppShell = () => {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-[#f7f3eb] shadow-2xl shadow-slate-900/10">
      <AnimatedMountainBackdrop />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(247,243,235,0)_0%,rgba(247,243,235,0.78)_280px,#f7f3eb_420px)]" />

      <main className="relative z-10 flex-1 px-5 pb-32 pt-6">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 px-5 pb-5 pt-2">
        <div className="rounded-[2rem] border border-white/80 bg-white/88 p-2 shadow-[0_22px_60px_rgba(79,70,54,0.16)] backdrop-blur-2xl">
          <div className="grid grid-cols-6 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-[1.35rem] px-1 text-[10px] font-bold text-[#8f8578] transition-all duration-300",
                      isActive && "-translate-y-1 bg-[#182b22] text-[#fff8ec] shadow-lg shadow-emerald-950/18",
                    )
                  }
                >
                  <Icon size={18} strokeWidth={2.35} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};
