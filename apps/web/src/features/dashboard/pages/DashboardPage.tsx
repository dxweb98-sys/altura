import { Activity, CalendarDays, CheckCircle2, Clock3, Compass, Gauge, Map, Mountain, Navigation, Route, ThermometerSun, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/shared/components/base/Card";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 11) return "Good morning";
  if (hour < 15) return "Good afternoon";
  if (hour < 18) return "Good evening";
  return "Good night";
};

const outdoorMetrics = [
  { label: "Time", value: "13:08", icon: Clock3 },
  { label: "Altitude", value: "0 m", icon: Mountain },
  { label: "Temp", value: "--°C", icon: ThermometerSun },
  { label: "Pace", value: "Normal", icon: Activity },
];

const tripFocus = [
  { label: "Checklist", value: "0 ready", icon: CheckCircle2 },
  { label: "Budget", value: "Rp0", icon: WalletCards },
  { label: "Route", value: "Draft", icon: Route },
];

export const DashboardPage = () => {
  return (
    <div className="space-y-5 text-[#101817]">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#5f716b]">{getGreeting()}, Dicky</p>
          <h1 className="mt-1 text-[2.05rem] font-black leading-[1.02] tracking-[-0.05em]">Outdoor Companion</h1>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#2fbea4] shadow-[0_14px_34px_rgba(13,75,62,0.1)]">
          <Compass size={23} />
        </div>
      </header>

      <section className="relative overflow-hidden rounded-[2.4rem] bg-[#101817] p-5 text-white shadow-[0_28px_70px_rgba(16,24,23,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(47,190,164,0.38),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(255,209,92,0.28),transparent_24%)]" />
        <div className="absolute bottom-0 left-0 h-32 w-full">
          <svg className="h-full w-full" viewBox="0 0 390 140" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 92 L54 54 L92 75 L150 38 L204 86 L266 34 L330 82 L390 54 L390 140 L0 140 Z" fill="rgba(47,190,164,0.28)" />
            <path d="M0 112 L66 78 L126 98 L190 62 L252 104 L318 72 L390 92 L390 140 L0 140 Z" fill="rgba(47,190,164,0.36)" />
            <path d="M0 128 L70 104 L132 120 L202 90 L282 118 L390 104 L390 140 L0 140 Z" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white/65">Current readiness</p>
              <h2 className="mt-1 text-4xl font-black tracking-[-0.06em]">Ready for the next route?</h2>
            </div>
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.25rem] bg-white/12 backdrop-blur">
              <Gauge size={27} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {outdoorMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-[1.25rem] bg-white/10 p-3 backdrop-blur">
                  <Icon size={18} className="text-[#73e0cc]" />
                  <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-white/50">{metric.label}</p>
                  <p className="mt-1 text-lg font-black tracking-tight">{metric.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        {tripFocus.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="p-3">
              <div className="grid h-10 w-10 place-items-center rounded-[1.1rem] bg-[#ecfbf6] text-[#2fbea4]">
                <Icon size={18} />
              </div>
              <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-[#8a9691]">{item.label}</p>
              <p className="mt-1 text-sm font-black text-[#101817]">{item.value}</p>
            </Card>
          );
        })}
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-[#2fbea4]">Trip flow</p>
            <h2 className="text-2xl font-black tracking-[-0.04em]">Your next escape</h2>
          </div>
          <Link to="/trips" className="text-xs font-black text-[#2fbea4]">View all</Link>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="relative min-h-[168px] p-4">
            <div className="absolute right-0 top-0 h-full w-32 bg-[#dff8ef]" />
            <svg className="absolute bottom-0 right-0 h-28 w-40" viewBox="0 0 160 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 72 L30 44 L54 58 L88 28 L116 64 L160 42 L160 110 L0 110 Z" fill="#8bd8c8" />
              <path d="M0 88 L42 66 L78 82 L116 58 L160 74 L160 110 L0 110 Z" fill="#2fbea4" />
              <path d="M0 102 L50 84 L92 98 L132 82 L160 92 L160 110 L0 110 Z" fill="#147b69" />
            </svg>
            <div className="relative z-10 max-w-[230px]">
              <p className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wide text-[#2fbea4]"><CalendarDays size={14} /> Draft mode</p>
              <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-0.04em]">No active trip yet</h3>
              <p className="mt-2 text-sm leading-6 text-[#66736f]">Create a route plan and Altura will prepare checklist, timeline, budget, and field notes.</p>
              <Link to="/trips/create" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2fbea4] px-4 py-2 text-sm font-black text-white shadow-[0_14px_30px_rgba(47,190,164,0.28)]">
                Create trip
                <Navigation size={16} />
              </Link>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-3">
        <div>
          <p className="text-sm font-semibold text-[#2fbea4]">Companion tools</p>
          <h2 className="text-2xl font-black tracking-[-0.04em]">Before, during, after</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link to="/destinations">
            <Card className="min-h-[126px] p-4">
              <Map size={22} className="text-[#2fbea4]" />
              <h3 className="mt-4 text-base font-black">Destinations</h3>
              <p className="mt-1 text-xs leading-5 text-[#7a8782]">Routes and places to prepare.</p>
            </Card>
          </Link>
          <Link to="/gear">
            <Card className="min-h-[126px] p-4">
              <CheckCircle2 size={22} className="text-[#2fbea4]" />
              <h3 className="mt-4 text-base font-black">Gear</h3>
              <p className="mt-1 text-xs leading-5 text-[#7a8782]">Personal and group packing.</p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
};
