import { Compass, Home, ListChecks, Map, NotebookPen, Settings } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/shared/lib/cn";

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
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-slate-50">
      <main className="flex-1 px-4 pb-28 pt-5">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 border-t border-slate-200 bg-white/95 px-2 pb-3 pt-2 backdrop-blur">
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
                    "flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium text-slate-500",
                    isActive && "bg-slate-950 text-white",
                  )
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
