import { Card } from "@/shared/components/base/Card";

export const GearListPage = () => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-slate-500">Checklist</p>
        <h1 className="text-2xl font-bold">Gear</h1>
      </div>
      <Card>
        <h2 className="font-semibold">Gear checklist</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Personal and group gear will be managed here.</p>
      </Card>
    </div>
  );
};
