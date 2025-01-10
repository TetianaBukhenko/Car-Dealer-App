'use client';

import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader } from "@/app/components/Loader/Loader";
import { log } from "console";

interface VehicleModel {
  Model_Name: string;
}

export default function ResultPage() {
  const params = useParams();
  const { vehicleMaker, year } = params as {
    vehicleMaker: string;
    year: string;
  };

  const [vehicleModels, setVehicleModels] = useState<VehicleModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicleModels = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${vehicleMaker}/modelyear/${year}?format=json`,
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
  }, [vehicleMaker, year]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(vehicleModels);
  
  return (
    <main className="  flex flex-col  min-h-screen bg-slate-400 p-5">
      <section className="bg-white p-5 m-auto rounded-md md:py-7">
        <h1 className="text-2xl font-bold">
          Vehicle Models for {vehicleMaker} ({year})
        </h1>
        {vehicleModels.length > 0 ? (
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 max-h-48  overflow-x-hidden overflow-y-scroll">
                  {vehicleModels.map((model) => (
                    <li
                      key={model.Model_Name}
                      className="block px-4 py-2"
                    >
                      {model.Model_Name}
                    </li>
                  ))}
                </ul>
        ) : <p>Unfortunately, there are no models</p>
}
      </section>
    </main>
  );
}
