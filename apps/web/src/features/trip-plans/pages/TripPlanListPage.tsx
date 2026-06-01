import { Link } from "react-router-dom";
import { Button } from "@/shared/components/base/Button";
import { Card } from "@/shared/components/base/Card";

export const TripPlanListPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500">Planner</p>
          <h1 className="text-2xl font-bold">Trip Plans</h1>
        </div>
        <Link to="/trips/create">
          <Button>Create</Button>
        </Link>
      </div>
      <Card>
        <h2 className="font-semibold">No trip plan yet</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Create your first trip plan and keep the route, budget, pace, and notes in one place.</p>
      </Card>
    </div>
  );
};
