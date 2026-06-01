import { Card } from "@/shared/components/base/Card";

export const DestinationListPage = () => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-slate-500">Master data</p>
        <h1 className="text-2xl font-bold">Destinations</h1>
      </div>
      <Card>
        <h2 className="font-semibold">Destination data</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Mountains and travel destinations will be managed here.</p>
      </Card>
    </div>
  );
};
