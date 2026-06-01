import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTripPlanSchema, type CreateTripPlanInput } from "@altura/validation";
import { Button } from "@/shared/components/base/Button";
import { Card } from "@/shared/components/base/Card";

export const TripPlanCreatePage = () => {
  const form = useForm<CreateTripPlanInput>({
    resolver: zodResolver(createTripPlanSchema),
    defaultValues: {
      title: "",
      originCity: "Tangerang",
      peopleCount: 1,
      budgetPerPerson: 0,
      target: "CAMPING",
      pace: "NORMAL",
      startDate: new Date(),
      destinationId: "00000000-0000-0000-0000-000000000000",
      routeId: null,
      arrivalTime: null,
      startHikingTime: null,
      notes: null,
    },
  });

  const handleSubmit = (values: CreateTripPlanInput) => {
    console.log("Trip plan draft", values);
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-slate-500">New plan</p>
        <h1 className="text-2xl font-bold">Create Trip Plan</h1>
      </div>

      <Card>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <label className="block space-y-1">
            <span className="text-sm font-medium">Title</span>
            <input className="min-h-11 w-full rounded-2xl border border-slate-200 px-3 outline-none focus:border-slate-950" placeholder="Merbabu via Suwanting" {...form.register("title")} />
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium">Origin city</span>
            <input className="min-h-11 w-full rounded-2xl border border-slate-200 px-3 outline-none focus:border-slate-950" {...form.register("originCity")} />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block space-y-1">
              <span className="text-sm font-medium">People</span>
              <input type="number" className="min-h-11 w-full rounded-2xl border border-slate-200 px-3 outline-none focus:border-slate-950" {...form.register("peopleCount", { valueAsNumber: true })} />
            </label>

            <label className="block space-y-1">
              <span className="text-sm font-medium">Budget/person</span>
              <input type="number" className="min-h-11 w-full rounded-2xl border border-slate-200 px-3 outline-none focus:border-slate-950" {...form.register("budgetPerPerson", { valueAsNumber: true })} />
            </label>
          </div>

          <label className="block space-y-1">
            <span className="text-sm font-medium">Notes</span>
            <textarea rows={4} className="w-full rounded-2xl border border-slate-200 px-3 py-3 outline-none focus:border-slate-950" placeholder="Arrival time, route preference, transport notes..." {...form.register("notes")} />
          </label>

          <Button type="submit" className="w-full">Save draft</Button>
        </form>
      </Card>
    </div>
  );
};
