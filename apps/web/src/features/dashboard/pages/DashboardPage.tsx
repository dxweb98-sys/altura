import { Link } from "react-router-dom";
import { Button } from "@/shared/components/base/Button";
import { Card } from "@/shared/components/base/Card";

export const DashboardPage = () => {
  return (
    <div className="space-y-5">
      <section className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-sm">
        <p className="text-sm text-slate-300">Altura</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Plan the route. Know the risk.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Personal trip planning system for hiking and intentional travel.
        </p>
        <Link to="/trips/create">
          <Button className="mt-5 w-full bg-white text-slate-950 hover:bg-slate-100">Create trip plan</Button>
        </Link>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <p className="text-sm text-slate-500">Planned trips</p>
          <p className="mt-2 text-2xl font-bold">0</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Trip logs</p>
          <p className="mt-2 text-2xl font-bold">0</p>
        </Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">MVP focus</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Start with destinations, routes, gear checklist, trip plan, and trip log. AI module can be added later without changing the main structure.
        </p>
      </Card>
    </div>
  );
};
