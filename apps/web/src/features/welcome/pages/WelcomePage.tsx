import { ArrowRight, Compass, Map, Mountain, Navigation, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/base/Button";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 11) return "Good morning";
  if (hour < 15) return "Good afternoon";
  if (hour < 18) return "Good evening";
  return "Good night";
};

const previewMetrics = [
  { label: "Altitude", value: "1,428 m", icon: Mountain },
  { label: "Temp", value: "18°C", icon: ThermometerSun },
  { label: "Route", value: "Draft", icon: Navigation },
];

const slides = ["Route", "Gear", "Journal", "Safety"];

export const WelcomePage = () => {
  return (
    <main className="mx-auto grid h-screen max-h-screen w-full max-w-md overflow-hidden bg-[#f7fffc] p-5 text-[#101817] shadow-2xl shadow-teal-950/10">
      <section className="relative grid min-h-0 overflow-hidden rounded-[2.55rem] bg-[#dff8ef] p-6 shadow-[0_30px_75px_rgba(13,75,62,0.12)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,209,92,0.42),transparent_23%),radial-gradient(circle_at_86%_20%,rgba(47,190,164,0.28),transparent_30%)]" />

        <div className="relative z-10 flex min-h-0 flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-label={`Slide 1 of ${slides.length}`}>
              {slides.map((slide, index) => (
                <span
                  key={slide}
                  className={index === 0 ? "h-2 w-8 rounded-full bg-[#2fbea4]" : "h-2 w-2 rounded-full bg-[#2fbea4]"}
                />
              ))}
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white/72 text-[#101817] shadow-[0_12px_28px_rgba(13,75,62,0.1)] backdrop-blur">
              <Compass size={21} />
            </div>
          </div>

          <div className="mt-10 max-w-[300px]">
            <p className="text-base font-semibold text-[#20342f]">{getGreeting()}, Dicky</p>
            <h1 className="mt-3 text-[3.05rem] font-black leading-[0.9] tracking-[-0.08em] text-[#050807]">
              Your Outdoor Companion
            </h1>
            <p className="mt-5 max-w-[260px] text-sm font-medium leading-6 text-[#566660]">
              Plan your route, prepare your gear, track your budget, and keep the story from every trip.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {previewMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-[1.3rem] bg-white/72 p-3 shadow-[0_14px_34px_rgba(13,75,62,0.08)] backdrop-blur">
                  <Icon size={17} className="text-[#2fbea4]" />
                  <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-[#7a8782]">{metric.label}</p>
                  <p className="mt-1 text-sm font-black text-[#101817]">{metric.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-auto pt-5">
            <div className="relative mb-5 h-[24vh] min-h-[150px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#bfeee5] via-[#a8dfd0] to-[#4e9a68] shadow-[0_24px_55px_rgba(13,75,62,0.16)]">
              <div className="absolute left-8 top-8 h-14 w-14 rounded-full bg-[#ffd15c] shadow-[0_0_42px_rgba(255,209,92,0.55)]" />
              <div className="absolute right-8 top-10 h-7 w-24 rounded-full bg-white/35 blur-sm" />
              <svg className="absolute bottom-0 left-0 h-32 w-full" viewBox="0 0 340 150" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 98 L44 62 L82 82 L128 38 L184 88 L236 42 L340 86 L340 150 L0 150 Z" fill="#c2ddc7" />
                <path d="M0 118 L56 82 L108 104 L170 68 L234 108 L296 76 L340 94 L340 150 L0 150 Z" fill="#5aa565" />
                <path d="M0 136 L64 108 L130 128 L206 92 L280 122 L340 108 L340 150 L0 150 Z" fill="#165132" />
              </svg>
              <Map className="absolute -left-5 bottom-4 text-white/28" size={92} strokeWidth={1} />
            </div>

            <Link to="/dashboard">
              <Button className="w-full text-base">
                Start planning
                <ArrowRight className="ml-3" size={19} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
