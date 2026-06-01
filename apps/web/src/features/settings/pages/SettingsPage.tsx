import { Card } from "@/shared/components/base/Card";

export const SettingsPage = () => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-slate-500">System</p>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <Card>
        <h2 className="font-semibold">Personal setup</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Preferences, pace profile, and account settings will be added here.</p>
      </Card>
    </div>
  );
};
