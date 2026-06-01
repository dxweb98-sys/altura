import { ArrowUpRight, CalendarDays, CheckCircle2, Clock3, MapPin, Mountain, Plus, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/base/Button";
import { Card } from "@/shared/components/base/Card";

const quickStats = [
  { label: "Checklist", value: "0/0", icon: CheckCircle2 },
  { label: "Budget", value: "Rp0", icon: WalletCards },
  { label: "Timeline", value: "Draft", icon: Clock3 },
];

const inspirationCards = [
  {
    title: "Build your next escape",
    description: "Start from destination, route, budget, pace, and personal notes.",
  },
  {
    title: "Travel like a journal",
    description: "Keep plans, expenses, field notes, and reflections in one calm place.",
  },
];

export const DashboardPage = () => {
  return (
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/25">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-400/30 blur-2xl" />
        <div className="absolute -bottom-12 left-8 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-slate-300">Altura Companion</p>
              <h1 className="mt-2 max-w-[260px] text-4xl font-black tracking-tight">Plan softly. Move boldly.</h1>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-3xl bg-white/12 backdrop-blur">
              <Mountain size={28} />
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            A personal trip companion for your next hiking route, travel journal, checklist, and budget flow.
          </p>

          <Link to="/trips/create">
            <Button className="mt-6 w-full bg-white text-slate-950 shadow-white/10 hover:bg-slate-100">
              <Plus className="mr-2" size={18} />
              Create your next trip
            </Button>
          </Link>
        </div>
      </section>

      <Card className="overflow-hidden p-0">
        <div className="relative min-h-[190px] bg-gradient-to-br from-sky-100 via-orange-50 to-emerald-50 p-4">
          <div className="absolute right-4 top-4 rounded-full bg-white/75 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
            Upcoming trip
          </div>

          <div className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(135deg,transparent_18%,rgba(15,23,42,0.92)_18%,rgba(15,23,42,0.92)_38%,transparent_38%),linear-gradient(45deg,transparent_24%,rgba(51,65,85,0.68)_24%,rgba(51,65,85,0.68)_48%,transparent_48%)] bg-[length:180px_110px,210px_130px] bg-[position:-20px_20px,60px_30px]" />

          <div className="relative z-10 flex h-full min-h-[160px] flex-col justify-end">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <MapPin size={16} />
              No active route yet
            </p>
            <h2 className="mt-2 max-w-[260px] text-2xl font-black text-slate-950">Choose a place that feels worth the miles.</h2>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-3">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                <Icon size={17} />
              </div>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{stat.label}</p>
              <p className="mt-1 text-sm font-black text-slate-950">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">Today focus</p>
          <h2 className="text-xl font-black text-slate-950">Prepare your journey</h2>
        </div>
        <Link to="/trips" className="flex items-center gap-1 text-sm font-bold text-slate-700">
          View all <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hidden">
        {inspirationCards.map((item, index) => (
          <Card key={item.title} className="min-w-[245px]">
            <div className="flex items-start justify-between gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
                {index === 0 ? <CalendarDays size={19} /> : <MapPin size={19} />}
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">0{index + 1}</span>
            </div>
            <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
