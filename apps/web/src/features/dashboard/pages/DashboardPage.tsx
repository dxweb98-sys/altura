import { ArrowRight, CalendarDays, CheckCircle2, Compass, MapPin, Search, SlidersHorizontal, Star, TentTree } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/base/Button";
import { Card } from "@/shared/components/base/Card";
import { TravelHeroIllustration } from "@/shared/components/illustrations/TravelHeroIllustration";

const categories = [
  { label: "Mountains", icon: "⛰️" },
  { label: "Camp", icon: "🏕️" },
  { label: "Budget", icon: "💸" },
  { label: "Journal", icon: "📓" },
];

const companionCards = [
  {
    title: "Merbabu Route",
    location: "Suwanting plan",
    rating: "4.8",
    gradient: "from-[#b8f3e2] via-[#8fd8cf] to-[#2d7a54]",
  },
  {
    title: "Prau Sunrise",
    location: "Dieng escape",
    rating: "4.7",
    gradient: "from-[#ffe4a8] via-[#f6b66a] to-[#3f6f47]",
  },
];

export const DashboardPage = () => {
  return (
    <div className="space-y-6 text-[#101817]">
      <section className="relative min-h-[540px] overflow-hidden rounded-[2.6rem] bg-[#dff8ef] p-6 shadow-[0_30px_75px_rgba(13,75,62,0.12)]">
        <TravelHeroIllustration />

        <div className="relative z-10 flex h-[492px] flex-col justify-between">
          <div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2fbea4]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#2fbea4]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#2fbea4]" />
              <span className="ml-1 h-1.5 w-7 rounded-full bg-[#2fbea4]" />
            </div>

            <div className="mt-12 max-w-[260px]">
              <p className="text-lg font-medium tracking-tight text-[#101817]">It's a Big World</p>
              <h1 className="mt-1 text-[3.15rem] font-black leading-[0.93] tracking-[-0.08em] text-[#050807]">
                Out There, Go Explore
              </h1>
            </div>
          </div>

          <div className="space-y-3">
            <Link to="/trips/create">
              <Button className="w-full text-base">
                Get Started
                <ArrowRight className="ml-3" size={19} />
              </Button>
            </Link>
            <p className="text-center text-xs font-semibold text-white/90 drop-shadow">Your private trip companion</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#7a8782]">Hi Dicky,</p>
            <h2 className="mt-1 max-w-[260px] text-3xl font-black leading-tight tracking-[-0.04em]">Where do you want to go?</h2>
          </div>
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ffd15c] text-xl shadow-[0_12px_26px_rgba(255,209,92,0.28)]">🧭</div>
        </div>

        <div className="flex items-center gap-3 rounded-[1.35rem] bg-white px-4 py-3 shadow-[0_16px_35px_rgba(13,75,62,0.07)]">
          <Search size={18} className="text-[#7a8782]" />
          <span className="flex-1 text-sm font-medium text-[#a2aaa6]">Search destination, route, or plan</span>
          <SlidersHorizontal size={17} className="text-[#7a8782]" />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black tracking-tight">Explore Plans</h2>
          <Link to="/trips" className="text-xs font-black text-[#2fbea4]">See all</Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hidden">
          {companionCards.map((card) => (
            <Link key={card.title} to="/trips" className="min-w-[188px]">
              <div className={`relative h-[154px] overflow-hidden rounded-[1.55rem] bg-gradient-to-br ${card.gradient} p-3 shadow-[0_20px_40px_rgba(13,75,62,0.13)]`}>
                <div className="absolute right-3 top-3 rounded-full bg-white/75 px-2 py-1 text-[11px] font-black text-[#101817] backdrop-blur">
                  <Star className="mr-1 inline" size={11} fill="currentColor" />
                  {card.rating}
                </div>
                <svg className="absolute bottom-0 left-0 h-[76px] w-full" viewBox="0 0 188 80" preserveAspectRatio="none">
                  <path d="M0 52 L24 36 L46 45 L72 22 L102 50 L132 28 L188 44 L188 80 L0 80 Z" fill="rgba(6,43,28,0.86)" />
                  <path d="M0 66 L32 54 L70 62 L106 44 L148 60 L188 50 L188 80 L0 80 Z" fill="rgba(68,140,82,0.75)" />
                </svg>
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <p className="text-xs font-bold text-white/85">{card.location}</p>
                  <h3 className="mt-1 text-lg font-black leading-tight text-white drop-shadow">{card.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black tracking-tight">Categories</h2>
          <Link to="/destinations" className="text-xs font-black text-[#2fbea4]">See all</Link>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {categories.map((category) => (
            <Card key={category.label} className="p-2 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-[1.1rem] bg-[#ecfbf6] text-xl">{category.icon}</div>
              <p className="mt-2 text-[11px] font-black text-[#66736f]">{category.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_22px_55px_rgba(13,75,62,0.08)]">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#dff8ef]" />
        <div className="relative flex items-center gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[1.35rem] bg-[#2fbea4] text-white shadow-[0_16px_35px_rgba(47,190,164,0.3)]">
            <TentTree size={27} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-black uppercase tracking-wide text-[#2fbea4]">Trip Companion</p>
            <h3 className="mt-1 text-xl font-black leading-tight">Before, during, after.</h3>
            <p className="mt-1 text-sm leading-5 text-[#7a8782]">Checklist, timeline, budget, and journal will follow your trip flow.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
