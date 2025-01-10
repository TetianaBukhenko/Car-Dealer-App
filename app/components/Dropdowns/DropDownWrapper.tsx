import React from "react";
import { VehicleMaker } from '@/types/VehicleMaker';
import { DropDownSection } from './DropDownSection';

export async function DropDownWrapper() {
  const response = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json',
  );

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle data.');
  }

  const data = await response.json();

  const vehicleMakers: VehicleMaker[] = data.Results;

  return <DropDownSection vehicleMakers={vehicleMakers} />;
}
