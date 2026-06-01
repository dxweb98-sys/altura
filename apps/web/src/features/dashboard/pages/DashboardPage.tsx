import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Compass, MapPin, Mountain, NotebookPen, Plus, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/base/Button";
import { Card } from "@/shared/components/base/Card";

const companionStats = [
  { label: "Checklist", value: "0 ready", icon: CheckCircle2 },
  { label: "Budget", value: "Rp0", icon: WalletCards },
  { label: "Timeline", value: "Draft", icon: Clock3 },
];

const travelSteps = [
  { title: "Choose the route", caption: "Destination, trail, pace, and dates.", icon: Compass },
  { title: "Pack with intention", caption: "Personal and group checklist.", icon: CheckCircle2 },
  { title: "Write the memory", caption: "Notes, costs, and reflections.", icon: NotebookPen },
];

export const DashboardPage = () => {
  return (
    <div className="space-y-6 text-[#182b22]">
      <header className="flex items-center justify-between pt-1">
        <div>
          <p className="text-sm font-bold text-[#8f7d62]">Good afternoon</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight">Where to next?</h1>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fffbf4] shadow-[0_12px_28px_rgba(98,83,61,0.12)]">
          <Mountain size={23} />
        </div>
      </header>

      <section className="relative overflow-hidden rounded-[2.5rem] bg-[#182b22] p-4 text-[#fff8ec] shadow-[0_28px_70px_rgba(24,43,34,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,206,125,0.32),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(125,211,252,0.22),transparent_28%)]" />
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#8ed5df] via-[#f7d69b] to-[#6b8d71] p-4">
          <div className="absolute left-7 top-8 h-16 w-16 rounded-full bg-[#ffd07d] shadow-[0_0_50px_rgba(255,207,125,0.72)]" />
          <div className="absolute right-5 top-9 rounded-full bg-white/60 px-3 py-1 text-xs font-black text-[#3c5b50] backdrop-blur">Personal trip</div>

          <svg className="absolute bottom-0 left-0 h-44 w-full" viewBox="0 0 390 180" preserveAspectRatio="none" role="img" aria-hidden="true">
            <path d="M0 128 L54 90 L94 112 L148 58 L207 118 L264 50 L320 110 L390 78 L390 180 L0 180 Z" fill="#183529" />
            <path d="M148 58 L168 92 L192 102 L170 104 Z M264 50 L284 88 L308 98 L284 100 Z" fill="rgba(255,248,236,0.78)" />
            <path d="M0 150 L64 122 L118 142 L184 100 L245 144 L304 104 L390 134 L390 180 L0 180 Z" fill="rgba(68,103,82,0.88)" />
            <path d="M0 168 L72 148 L138 160 L205 132 L272 160 L336 142 L390 152 L390 180 L0 180 Z" fill="rgba(199,160,93,0.7)" />
          </svg>

          <div className="relative z-10 flex h-[288px] flex-col justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/55 px-3 py-1 text-xs font-black text-[#27483b] backdrop-blur">
                <MapPin size={14} />
                Altura Companion
              </p>
            </div>
            <div>
              <h2 className="max-w-[270px] text-4xl font-black leading-[0.96] tracking-tight text-white drop-shadow-md">Plan the trip, keep the story.</h2>
              <p className="mt-3 max-w-[260px] text-sm font-medium leading-6 text-white/88 drop-shadow">A calm planner for routes, gear, budget, notes, and the little details before you go.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 grid grid-cols-[1fr_auto] gap-3">
          <Link to="/trips/create">
            <Button className="w-full bg-[#fff8ec] text-[#182b22] hover:bg-white">
              <Plus className="mr-2" size={17} />
              New trip
            </Button>
          </Link>
          <Link to="/trips" className="grid h-11 w-12 place-items-center rounded-2xl bg-white/12 text-white backdrop-blur transition hover:bg-white/18">
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        {companionStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#efe4d2] text-[#27483b]">
                <Icon size={17} />
              </div>
              <p className="mt-3 text-[10px] font-black uppercase tracking-wide text-[#9a8469]">{stat.label}</p>
              <p className="mt-1 text-sm font-black text-[#182b22]">{stat.value}</p>
            </Card>
          );
        })}
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-[#9a8469]">Upcoming</p>
            <h2 className="text-2xl font-black tracking-tight">Your next escape</h2>
          </div>
          <Link to="/trips" className="text-sm font-black text-[#315946]">View all</Link>
        </div>

        <Card className="p-4">
          <div className="flex gap-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#a7d8d1] via-[#f2cf92] to-[#446752]">
              <div className="absolute left-4 top-4 h-7 w-7 rounded-full bg-[#ffd27d]" />
              <svg className="absolute bottom-0 left-0 h-16 w-full" viewBox="0 0 100 70" preserveAspectRatio="none">
                <path d="M0 48 L18 32 L35 42 L54 20 L75 44 L100 30 L100 70 L0 70 Z" fill="#183529" />
                <path d="M0 60 L22 50 L44 58 L66 42 L100 54 L100 70 L0 70 Z" fill="#6f8f70" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wide text-[#a0825c]"><CalendarDays size={14} /> Draft mode</p>
              <h3 className="mt-1 text-xl font-black leading-tight text-[#182b22]">No active trip yet</h3>
              <p className="mt-2 text-sm leading-5 text-[#766b5d]">Create a plan and Altura will become your packing list, timeline, budget tracker, and travel journal.</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-3">
        <div>
          <p className="text-sm font-bold text-[#9a8469]">Companion flow</p>
          <h2 className="text-2xl font-black tracking-tight">Before, during, after</h2>
        </div>

        <div className="space-y-3">
          {travelSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="flex items-center gap-4 p-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[1.25rem] bg-[#182b22] text-[#fff8ec]">
                  <Icon size={19} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-black text-[#182b22]">{step.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#766b5d]">{step.caption}</p>
                </div>
                <span className="rounded-full bg-[#efe4d2] px-2.5 py-1 text-xs font-black text-[#9a8469]">0{index + 1}</span>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};
