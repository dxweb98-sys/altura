import { ArrowRight, Compass, Mountain, Navigation, ThermometerSun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SplashScreen } from "../components/SplashScreen";

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

const slides = [
  {
    key: "summit",
    title: "Out there, go prepared",
    subtitle: "Plan routes, prepare gear, track budget, and keep every field note in one calm outdoor companion.",
    image: "data:image/webp;base64,UklGRtgLAABXRUJQVlA4IMwLAADwXgGdASrwAZwAPp1InEwmI6GhISgJQAQwEhtSqcb7rjzZoOPx4vcCuVnf38rgd49E8Zks/43H8u+zy5XNn8E6rr0+b+gfg++p0faiEJRFBE/cun1Ggm4btMx6f9KME+f5pG8P/hnP+bfZ/E+p/TH5P27t+CC/1ljf+c3HBvr1u+n/n+rvp/f8B4v5d2d1/HLnUe8yspZ6u2ZdT1WYa4NNUVgiqLdErX7j84lUtYrq9Km9mZCElkC2qrJpo2Khc4GCpV/8hWSZG5yXvTSQoLwMCV+klKZKPbLEApAEmSbdgCZGgBWSGw+I4tN0IAAA/vzl0e4B1w/5BW19DIH4ah5H0I6901RwdMNOXkWR+fO/suz5dOvP0/xv79Dvtzm+Ih8//a3x8U+/3+T4z1H9/s++8PD7/0k+40s/8g/Yf7X1H9s8/3d1R+g+d/f89hD++S6gxP7f/ZnxP4U/8SgPmfb+fZ/7/H7F9SP+tT/+4Yc9H9jP6H++v9R+d0Pn/lD9nf+9hJov/s33p/zvH/hvdPuP/3VH66gf3/yD53/o+L+zfNfWf2+Mfz/1Iv1P+PIPj/lH88fzb83xj/0nB/zv71GwaH2/4MB6f/rj/0vP+E/39EJ/t+P+b/2P6J/7aPwD9s/+/sP9/ff7+f4eD8P8Pn3n/4/f++R//+7f/0//0OAGx67LOy1djp64rPpv16uhpihghAB0lWRxK8PaULsdyp9XXJcD0C3B4+rk9+Ar1qd4fFz3ek/WDj69h+Z6YChL3xFJqjzFoTTd4MAAAAA==",
  },
  {
    key: "camp",
    title: "Camp with intention",
    subtitle: "Turn your next escape into a clear checklist, timeline, and trip memory.",
    image: "data:image/webp;base64,UklGRsgLAABXRUJQVlA4ILwLAADwXQGdASrwAZwAPp1InEwmI6GhISgJQAQwEhtSqcb7rjzZoOPx4vcCuVnf38rgd49E8Zks/43H8u+zy5XNn8E6rr0+b+gfg++p0faiEJRFBE/cun1Ggm4btMx6f9KME+f5pG8P/hnP+bfZ/E+p/TH5P27t+CC/1ljf+c3HBvr1u+n/n+rvp/f8B4v5d2d1/HLnUe8yspZ6u2ZdT1WYa4NNUVgiqLdErX7j84lUtYrq9Km9mZCElkC2qrJpo2Khc4GCpV/8hWSZG5yXvTSQoLwMCV+klKZKPbLEApAEmSbdgCZGgBWSGw+I4tN0IAAA/vzl0e4B1w/5BW19DIH4ah5H0I6901RwdMNOXkWR+fO/suz5dOvP0/xv79Dvtzm+Ih8//a3x8U+/3+T4z1H9/s++8PD7/0k+40s/8g/Yf7X1H9s8/3d1R+g+d/f89hD++S6gxP7f/ZnxP4U/8SgPmfb+fZ/7/H7F9SP+tT/+4Yc9H9jP6H++v9R+d0Pn/lD9nf+9hJov/s33p/zvH/hvdPuP/3VH66gf3/yD53/o+L+zfNfWf2+Mfz/1Iv1P+PIPj/lH88fzb83xj/0nB/zv71GwaH2/4MB6f/rj/0vP+E/39EJ/t+P+b/2P6J/7aPwD9s/+/sP9/ff7+f4eD8P8Pn3n/4/f++R//+7f/0//0OAGx67LOy1djp64rPpv16uhpihghAB0lWRxK8PaULsdyp9XXJcD0C3B4+rk9+Ar1qd4fFz3ek/WDj69h+Z6YChL3xFJqjzFoTTd4MAAAAA==",
  },
  {
    key: "trail",
    title: "Know the trail ahead",
    subtitle: "Keep route decisions, pace, altitude, and notes close before the first step.",
    image: "data:image/webp;base64,UklGRsALAABXRUJQVlA4ILQIAADwXgGdASrwAZwAPp1InEwmI6GhISgJQAQwEhtSqcb7rjzZoOPx4vcCuVnf38rgd49E8Zks/43H8u+zy5XNn8E6rr0+b+gfg++p0faiEJRFBE/cun1Ggm4btMx6f9KME+f5pG8P/hnP+bfZ/E+p/TH5P27t+CC/1ljf+c3HBvr1u+n/n+rvp/f8B4v5d2d1/HLnUe8yspZ6u2ZdT1WYa4NNUVgiqLdErX7j84lUtYrq9Km9mZCElkC2qrJpo2Khc4GCpV/8hWSZG5yXvTSQoLwMCV+klKZKPbLEApAEmSbdgCZGgBWSGw+I4tN0IAAA/vzl0e4B1w/5BW19DIH4ah5H0I6901RwdMNOXkWR+fO/suz5dOvP0/xv79Dvtzm+Ih8//a3x8U+/3+T4z1H9/s++8PD7/0k+40s/8g/Yf7X1H9s8/3d1R+g+d/f89hD++S6gxP7f/ZnxP4U/8SgPmfb+fZ/7/H7F9SP+tT/+4Yc9H9jP6H++v9R+d0Pn/lD9nf+9hJov/s33p/zvH/hvdPuP/3VH66gf3/yD53/o+L+zfNfWf2+Mfz/1Iv1P+PIPj/lH88fzb83xj/0nB/zv71GwaH2/4MB6f/rj/0vP+E/39EJ/t+P+b/2P6J/7aPwD9s/+/sP9/ff7+f4eD8P8Pn3n/4/f++R//+7f/0//0OAGx67LOy1djp64rPpv16uhpihghAB0lWRxK8PaULsdyp9XXJcD0C3B4+rk9+Ar1qd4fFz3ek/WDj69h+Z6YChL3xFJqjzFoTTd4MAAAAA==",
  },
];

export const WelcomePage = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const splashTimer = window.setTimeout(() => setShowSplash(false), 1450);
    return () => window.clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    if (showSplash) return undefined;

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 4800);

    return () => window.clearInterval(slideTimer);
  }, [showSplash]);

  const currentSlide = slides[activeSlide];
  const greeting = useMemo(() => getGreeting(), []);

  const handleGetStarted = () => {
    setIsLeaving(true);
    window.setTimeout(() => navigate("/dashboard"), 560);
  };

  return (
    <main
      className={`relative mx-auto h-screen max-h-screen w-full max-w-md overflow-hidden bg-[#071513] text-white shadow-2xl shadow-teal-950/20 transition-all duration-500 ${
        isLeaving ? "scale-[1.03] opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
      }`}
    >
      {!showSplash ? null : <SplashScreen />}

      <section
        className={`relative flex h-full min-h-0 flex-col overflow-hidden px-7 pb-8 pt-8 transition-all duration-700 ${
          showSplash ? "scale-105 opacity-0 blur-md" : "scale-100 opacity-100 blur-0"
        }`}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.key}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
              index === activeSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-white/16 via-white/0 to-[#061f15]/92" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.48)_36%,rgba(255,255,255,0.03)_70%)]" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}>
            {slides.map((slide, index) => (
              <button
                key={slide.key}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={index === activeSlide ? "h-2 w-9 rounded-full bg-[#2fbea4]" : "h-2 w-2 rounded-full bg-white/78"}
                aria-label={`Show ${slide.title}`}
              />
            ))}
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white/78 text-[#101817] shadow-[0_12px_28px_rgba(13,75,62,0.12)] backdrop-blur">
            <Compass size={21} />
          </div>
        </div>

        <div className="relative z-10 mt-14 max-w-[315px] text-[#050807] transition-all duration-700">
          <p className="text-lg font-medium tracking-tight">{greeting}, Dicky</p>
          <h1 className="mt-2 text-[3.35rem] font-black leading-[0.93] tracking-[-0.085em]">{currentSlide.title}</h1>
          <p className="mt-5 max-w-[270px] text-sm font-semibold leading-6 text-[#263c35]">{currentSlide.subtitle}</p>
        </div>

        <div className="relative z-10 mt-5 grid grid-cols-3 gap-2">
          {previewMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="rounded-[1.3rem] bg-white/74 p-3 text-[#101817] shadow-[0_14px_34px_rgba(13,75,62,0.1)] backdrop-blur-md">
                <Icon size={17} className="text-[#2fbea4]" />
                <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-[#6b7873]">{metric.label}</p>
                <p className="mt-1 text-sm font-black">{metric.value}</p>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-auto space-y-3">
          <button
            type="button"
            onClick={handleGetStarted}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#2fbea4] px-5 py-2 text-base font-black text-white shadow-[0_16px_35px_rgba(47,190,164,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#27aa92]"
          >
            Get Started
            <ArrowRight className="ml-3" size={19} />
          </button>
          <p className="text-center text-xs font-semibold text-white/82">Built for hiking, travel planning, and personal trip logs.</p>
        </div>
      </section>
    </main>
  );
};
