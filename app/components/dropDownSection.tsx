'use client'

import { VehicleMaker } from "@/types/VehicleMaker";
import { MakersDropdown } from "./MakersDropdown";
import Link from "next/link";
import { useState } from "react";
import { YearsDropDown } from "./YearsDropdown";

export const DropDownSection = ({vehicleMakers}: {vehicleMakers: VehicleMaker[]}) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [vehicleMaker, setVehicleMaker] = useState(0);
  const chooseYear = (year: number) => {
    setSelectedYear(year);
  }
  const chooseVehicleMaker = (makerID: number) => {
    setVehicleMaker(makerID);
  }
  
  return (
    <section className="flex flex-col md:flex-row gap-5">
      <MakersDropdown vehicleMakers={vehicleMakers} selectedMaker={vehicleMaker} chooseVehicleMaker={chooseVehicleMaker}  />
      <YearsDropDown selectedYear={selectedYear} chooseYear={chooseYear} />
      <Link href='' className={`${selectedYear === 0 && vehicleMaker === 0} ? 'disabled' : ''`}>Next</Link>
    </section>
  )
}