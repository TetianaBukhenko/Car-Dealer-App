'use client'

import { VehicleMaker } from "@/types/VehicleMaker";
import { filterValue } from "@/utils/filterValue";
import { useMemo, useState } from "react";
import { Input } from "./components/Input";

type Props = {
  vehicleMakers: VehicleMaker[],
  selectedMaker: number,
  chooseVehicleMaker: (id: number) => void,
}

export const MakersDropdown: React.FC<Props> = ({
  vehicleMakers,
  selectedMaker,
  chooseVehicleMaker,
}) => {

  const [vehicleMaker, setVehicleMaker] = useState('');
  const [isShown, setIsShown] = useState(false);
  const sortedVehicles = useMemo(() => {
    return filterValue<VehicleMaker>({
      elements: vehicleMakers,
      key: 'Make_Name',
      query: vehicleMaker,
    })
  }, [vehicleMakers, vehicleMaker]);

  function handleValueChange(newValue: string) {
    setVehicleMaker(newValue);
    setIsShown(true);
  }

  function getSelectedMakerName(makerID: number) {
    const maker: VehicleMaker[] = vehicleMakers.filter((maker) => maker.Make_ID === makerID);

    return maker[0].Make_Name;
  }



  return (
    <section className="flex flex-col gap-2 justify-between">
      <p className="">{selectedMaker ? 'Selected maker:' : 'Please select vehicle maker:'}
        {selectedMaker > 0 && <p>{getSelectedMakerName(selectedMaker)}</p>}
      </p>

      <div>
        <Input
          value={vehicleMaker}
          handleValueChange={handleValueChange}
        />
        <div className="relative">
          <div className={`z-10 ${isShown ? '' : 'hidden'} w-full absolute p-2 bg-white divide-y divide-gray-100 rounded-lg  shadow-lg w-50 dark:bg-gray-700 w-100 border-solid `}>
            {sortedVehicles.length > 0 ? (
              <ul className='  py-2 text-sm text-gray-700 dark:text-gray-200  max-h-48 overflow-scroll'>
                {sortedVehicles.map((vehicle) => (
                  <li key={vehicle.Make_ID}
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${vehicle.Make_ID === selectedMaker ? 'bg-gray-600 text-white' : ''}`}
                    onClick={() => {
                      chooseVehicleMaker(vehicle.Make_ID);
                      setIsShown(false);
                    }}
                  >{vehicle.Make_Name}</li>
                ))}
              </ul>
            ) : (
              <p>Unfortunately there is no elements with such name</p>
            )
            }
          </div>
        </div>

      </div>


    </section>
  )
}