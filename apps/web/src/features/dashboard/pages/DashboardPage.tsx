import { Activity, CalendarDays, CheckCircle2, Clock3, Compass, Gauge, LocateFixed, Map, Mountain, Navigation, Route, ThermometerSun, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/shared/components/base/Card";
import { useGeolocation } from "@/shared/hooks/useGeolocation";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 11) return "Good morning";
  if (hour < 15) return "Good afternoon";
  if (hour < 18) return "Good evening";
  return "Good night";
};

const getCurrentTime = () => {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
};

const tripFocus = [
  { label: "Checklist", value: "0 ready", icon: CheckCircle2 },
  { label: "Budget", value: "Rp0", icon: WalletCards },
  { label: "Route", value: "Draft", icon: Route },
];

export const DashboardPage = () => {
  const { altitudeLabel, coordinatesLabel, isLoading, error, requested, requestLocation } = useGeolocation();

  const outdoorMetrics = [
    { label: "Time", value: getCurrentTime(), icon: Clock3 },
    { label: "Altitude", value: requested ? altitudeLabel : "-- m", icon: Mountain },
    { label: "Temp", value: "--°C", icon: ThermometerSun },
    { label: "Pace", value: "Normal", icon: Activity },
  ];

  return (
    <div className="space-y-5 text-[#101817]">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#5f716b]">{getGreeting()}, Dicky</p>
          <h1 className="mt-1 text-[2.05rem] font-black leading-[1.02] tracking-[-0.05em]">Outdoor Companion</h1>
        </div>
        <button
          type="button"
          onClick={requestLocation}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#2fbea4] shadow-[0_14px_34px_rgba(13,75,62,0.1)] transition hover:scale-105"
          aria-label="Enable GPS location"
        >
          <Compass size={23} />
        </button>
      </header>

      <section className="relative overflow-hidden rounded-[2.4rem] bg-[#101817] p-5 text-white shadow-[0_28px_70px_rgba(16,24,23,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(47,190,164,0.34),transparent_26%),radial-gradient(circle_at_88%_14%,rgba(255,209,92,0.22),transparent_23%)]" />
        <div className="absolute bottom-0 left-0 h-28 w-full opacity-70">
          <svg className="h-full w-full" viewBox="0 0 390 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 82 L54 48 L92 68 L150 34 L204 76 L266 30 L330 72 L390 48 L390 120 L0 120 Z" fill="rgba(47,190,164,0.2)" />
            <path d="M0 102 L66 72 L126 90 L190 58 L252 94 L318 68 L390 84 L390 120 L0 120 Z" fill="rgba(47,190,164,0.28)" />
          </svg>
        </div>

        <div className="relative z-10 space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white/65">Current readiness</p>
              <h2 className="mt-1 max-w-[250px] text-[2rem] font-black leading-[1.02] tracking-[-0.06em]">Ready for the next route?</h2>
            </div>
            <div className="grid h-13 w-13 shrink-0 place-items-center rounded-[1.25rem] bg-white/12 p-3 backdrop-blur">
              <Gauge size={25} />
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white/12 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-[#73e0cc]">
                  <LocateFixed size={13} />
                  Current location
                </p>
                <p className="mt-1 truncate text-sm font-bold text-white">{coordinatesLabel}</p>
                {error ? <p className="mt-1 text-xs font-medium text-amber-200">{error}</p> : null}
              </div>
              <button
                type="button"
                onClick={requestLocation}
                className="shrink-0 rounded-full bg-[#2fbea4] px-3 py-2 text-xs font-black text-white shadow-[0_12px_24px_rgba(47,190,164,0.28)]"
              >
                {isLoading ? "Reading" : requested ? "Refresh" : "Enable GPS"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {outdoorMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-[1.25rem] bg-[#182523]/92 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <Icon size={18} className="text-[#73e0cc]" />
                  <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-white/45">{metric.label}</p>
                  <p className="mt-1 text-lg font-black tracking-tight text-white">{metric.value}</p>
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
