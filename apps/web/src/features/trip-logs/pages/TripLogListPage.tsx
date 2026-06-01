import { Card } from "@/shared/components/base/Card";

export const TripLogListPage = () => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-slate-500">Reality check</p>
        <h1 className="text-2xl font-bold">Trip Logs</h1>
      </div>
      <Card>
        <h2 className="font-semibold">Plan vs reality</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Record actual budget, duration, and notes after your trip.</p>
      </Card>
    </div>
  );
};
