import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { DestinationListPage } from "@/features/destinations/pages/DestinationListPage";
import { GearListPage } from "@/features/gear/pages/GearListPage";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";
import { TripLogListPage } from "@/features/trip-logs/pages/TripLogListPage";
import { TripPlanCreatePage } from "@/features/trip-plans/pages/TripPlanCreatePage";
import { TripPlanListPage } from "@/features/trip-plans/pages/TripPlanListPage";
import { WelcomePage } from "@/features/welcome/pages/WelcomePage";
import { MobileAppShell } from "@/shared/components/layout/MobileAppShell";

export const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  {
    path: "/dashboard",
    element: <MobileAppShell />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
  {
    path: "/",
    element: <MobileAppShell />,
    children: [
      { path: "trips", element: <TripPlanListPage /> },
      { path: "trips/create", element: <TripPlanCreatePage /> },
      { path: "destinations", element: <DestinationListPage /> },
      { path: "gear", element: <GearListPage /> },
      { path: "logs", element: <TripLogListPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
