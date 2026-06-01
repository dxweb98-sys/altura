import { ArrowRight, Compass, Mountain, Navigation, ThermometerSun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/base/Button";
import { SplashScreen } from "../components/SplashScreen";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 11) return "Good morning";
  if (hour < 15) return "Good afternoon";
  if (hour < 18) return "Good evening";
  return "Good night";
};

const slides = ["Route", "Gear", "Journal", "Safety"];

const previewMetrics = [
  { label: "Altitude", value: "1,428 m", icon: Mountain },
  { label: "Temp", value: "18°C", icon: ThermometerSun },
  { label: "Route", value: "Draft", icon: Navigation },
];

export const WelcomePage = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <main className="mx-auto h-screen max-h-screen w-full max-w-md overflow-hidden bg-[#071513] text-white shadow-2xl shadow-teal-950/20">
      <section className="relative flex h-full min-h-0 flex-col overflow-hidden px-7 pb-8 pt-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#dff8ef] via-[#b7eadc] to-[#0b2f1f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(255,209,92,0.5),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.34),transparent_22%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[62%]">
          <svg className="h-full w-full" viewBox="0 0 390 520" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 160 L72 72 L118 138 L194 44 L260 132 L330 60 L390 126 L390 520 L0 520 Z" fill="rgba(223,248,239,0.54)" />
            <path d="M0 236 L78 146 L138 198 L214 110 L286 194 L390 126 L390 520 L0 520 Z" fill="rgba(117,184,126,0.78)" />
            <path d="M0 314 L92 220 L156 276 L238 190 L322 254 L390 226 L390 520 L0 520 Z" fill="rgba(45,126,65,0.9)" />
            <path d="M0 402 L88 330 L160 370 L252 286 L334 344 L390 318 L390 520 L0 520 Z" fill="#08351f" />
          </svg>
        </div>

        <div className="absolute bottom-[19%] right-9 h-52 w-24 rounded-t-full bg-[#0f3a27] shadow-[0_24px_55px_rgba(0,0,0,0.2)]">
          <div className="absolute -right-8 top-14 h-28 w-14 rounded-[1.5rem] bg-[#7ca841]" />
          <div className="absolute -right-3 top-2 h-12 w-10 rounded-full bg-[#f1c08a]" />
          <div className="absolute right-4 top-2 h-8 w-14 -rotate-12 rounded-full bg-[#173522]" />
          <div className="absolute -left-5 top-16 h-32 w-5 -rotate-12 rounded-full bg-[#25533a]" />
          <div className="absolute left-4 top-44 h-24 w-5 rounded-full bg-[#092817]" />
          <div className="absolute right-4 top-44 h-24 w-5 rounded-full bg-[#092817]" />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-label={`Slide 1 of ${slides.length}`}>
            {slides.map((slide, index) => (
              <span
                key={slide}
                className={index === 0 ? "h-2 w-9 rounded-full bg-[#2fbea4]" : "h-2 w-2 rounded-full bg-[#2fbea4]/70"}
              />
            ))}
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white/70 text-[#101817] shadow-[0_12px_28px_rgba(13,75,62,0.1)] backdrop-blur">
            <Compass size={21} />
          </div>
        </div>

        <div className="relative z-10 mt-12 max-w-[310px] text-[#050807]">
          <p className="text-lg font-medium tracking-tight">{getGreeting()}, Dicky</p>
          <h1 className="mt-2 text-[3.45rem] font-black leading-[0.92] tracking-[-0.085em]">
            Explore with direction
          </h1>
          <p className="mt-5 max-w-[260px] text-sm font-semibold leading-6 text-[#2d4840]">
            Plan routes, prepare gear, track budget, and keep every field note in one calm outdoor companion.
          </p>
        </div>

        <div className="relative z-10 mt-5 grid grid-cols-3 gap-2">
          {previewMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="rounded-[1.3rem] bg-white/70 p-3 text-[#101817] shadow-[0_14px_34px_rgba(13,75,62,0.08)] backdrop-blur">
                <Icon size={17} className="text-[#2fbea4]" />
                <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-[#7a8782]">{metric.label}</p>
                <p className="mt-1 text-sm font-black">{metric.value}</p>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-auto space-y-3">
          <Link to="/dashboard">
            <Button className="w-full text-base">
              Get Started
              <ArrowRight className="ml-3" size={19} />
            </Button>
          </Link>
          <p className="text-center text-xs font-semibold text-white/85">Built for hiking, travel planning, and personal trip logs.</p>
        </div>
      </section>
    </main>
  );
};
