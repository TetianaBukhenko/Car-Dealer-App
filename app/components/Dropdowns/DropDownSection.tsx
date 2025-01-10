'use client';

import React from "react";
import Link from 'next/link';
import { useState } from 'react';
import { VehicleMaker } from '@/types/VehicleMaker';
import { MakersDropDown } from './components/MakersDropDown';
import { YearsDropDown } from './components/YearsDropDown';

export const DropDownSection = ({
  vehicleMakers,
}: {
  vehicleMakers: VehicleMaker[];
}) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [vehicleMaker, setVehicleMaker] = useState(0);
  const chooseYear = (year: number) => {
    setSelectedYear(year);
  };
  const chooseVehicleMaker = (makerID: number) => {
    setVehicleMaker(makerID);
  };

  return (
    <>
      <section className="flex flex-col md:flex-row gap-5">
        <MakersDropDown
          vehicleMakers={vehicleMakers}
          selectedMaker={vehicleMaker}
          chooseVehicleMaker={chooseVehicleMaker}
        />
        <YearsDropDown selectedYear={selectedYear} chooseYear={chooseYear} />
      </section>
      <Link
        href={`result/${vehicleMaker}/${selectedYear}`}
        className={` bg-blue-700 mt-3 p-2 rounded text-white ${selectedYear == 0 || vehicleMaker == 0 ? 'disabled pointer-events-none  bg-blue-500 text-gray-500 ' : ''}`}
      >
        Next
      </Link>
    </>
  );
};
