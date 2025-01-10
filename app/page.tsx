import { VehicleMaker } from "@/types/VehicleMaker";
import { DropDown } from "./components/MakersDropdown";
import Link from "next/link";
import { createContext } from "react";
import { DropDownSection } from "./components/dropDownSection";

const initialCondext: VehicleMaker[] = [];

export default async function Home() {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
    {  cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch vehicle data.");
  }

  const data = await response.json();

  const vehicleMakers: VehicleMaker[] = data.Results;
  

  return (
    <main className="  flex flex-col  min-h-screen bg-slate-400 p-5">
      <section className="bg-white p-5 m-auto rounded-md md:py-7">
      <h1 className="pb-4 text-center text-xl font-bold">The Car Dealer App</h1>
        <DropDownSection vehicleMakers={vehicleMakers}/>
      </section>
    </main>
  );
}
