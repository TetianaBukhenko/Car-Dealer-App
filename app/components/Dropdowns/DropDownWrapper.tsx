'use client';

import React, { useEffect, useState } from "react";
import { VehicleMaker } from '@/types/VehicleMaker';
import { DropDownSection } from './DropDownSection';
import { Loader } from "../Loader/Loader";

export function DropDownWrapper() {
  const [vehicleModels, setVehicleModels] = useState < VehicleMaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicleModels = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch vehicle models.');
        }

        const data = await response.json();
        setVehicleModels(data.Results);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleModels();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const vehicleMakers: VehicleMaker[] = vehicleModels;

  return <DropDownSection vehicleMakers={vehicleMakers} />;
}
