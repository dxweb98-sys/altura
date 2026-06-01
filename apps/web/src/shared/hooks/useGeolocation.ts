import { useCallback, useMemo, useState } from "react";

type GeolocationState = {
  latitude: number | null;
  longitude: number | null;
  altitude: number | null;
  accuracy: number | null;
  isLoading: boolean;
  error: string | null;
  requested: boolean;
};

const initialState: GeolocationState = {
  latitude: null,
  longitude: null,
  altitude: null,
  accuracy: null,
  isLoading: false,
  error: null,
  requested: false,
};

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>(initialState);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setState((currentState) => ({
        ...currentState,
        requested: true,
        error: "GPS is not supported on this device",
      }));
      return;
    }

    setState((currentState) => ({ ...currentState, isLoading: true, error: null, requested: true }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          altitude: position.coords.altitude,
          accuracy: position.coords.accuracy,
          isLoading: false,
          error: null,
          requested: true,
        });
      },
      (error) => {
        setState((currentState) => ({
          ...currentState,
          isLoading: false,
          error: error.message || "Unable to read GPS location",
        }));
      },
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 },
    );
  }, []);

  const coordinatesLabel = useMemo(() => {
    if (state.latitude === null || state.longitude === null) return "GPS inactive";
    return `${state.latitude.toFixed(4)}, ${state.longitude.toFixed(4)}`;
  }, [state.latitude, state.longitude]);

  const altitudeLabel = useMemo(() => {
    if (state.altitude === null) return "-- m";
    return `${Math.round(state.altitude)} m`;
  }, [state.altitude]);

  return {
    ...state,
    coordinatesLabel,
    altitudeLabel,
    requestLocation,
  };
};
