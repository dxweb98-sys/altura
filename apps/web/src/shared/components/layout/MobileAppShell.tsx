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
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-slate-50 shadow-2xl shadow-slate-900/10">
      <AnimatedMountainBackdrop />

      <main className="relative z-10 flex-1 px-4 pb-28 pt-5">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 px-3 pb-4 pt-2">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/82 p-2 shadow-2xl shadow-slate-900/12 backdrop-blur-xl">
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
                      "flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl px-1 text-[10px] font-semibold text-slate-500 transition-all duration-300",
                      isActive && "-translate-y-1 bg-slate-950 text-white shadow-lg shadow-slate-950/20",
                    )
                  }
                >
                  <Icon size={18} strokeWidth={2.4} />
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
