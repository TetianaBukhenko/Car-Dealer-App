'use client';

import React from "react";
import { VehicleMaker } from '@/types/VehicleMaker';
import { filterValue, filterVehicles } from '@/utils/filterValue';
import { useMemo, useState } from 'react';
import { Input } from '../../components/Input';

type Props = {
  vehicleMakers: VehicleMaker[];
  selectedMaker: number;
  chooseVehicleMaker: (id: number) => void;
};

export const MakersDropDown: React.FC<Props> = ({
  vehicleMakers,
  selectedMaker,
  chooseVehicleMaker,
}) => {
  const [vehicleMaker, setVehicleMaker] = useState('');
  const [isShown, setIsShown] = useState(false);

  const sortedVehicles = useMemo(() => {
    return filterVehicles(vehicleMakers, vehicleMaker);
  }, [vehicleMakers, vehicleMaker]);

  function handleValueChange(newValue: string) {
    setVehicleMaker(newValue);
    setIsShown(true);
  }

  function getSelectedMakerName(makerID: number) {
    const maker: VehicleMaker[] = vehicleMakers.filter(
      (maker) => maker.MakeId === makerID,
    );
    return maker[0]?.MakeName || '';
  }

  return (
    <section
      className="flex flex-col gap-2 justify-between"
      onClick={() => setIsShown((prev) => !prev)}
    >
      <p>
        {selectedMaker ? 'Selected maker:' : 'Please select vehicle maker:'}
        {selectedMaker > 0 ? (
          <>
            <br />
            {getSelectedMakerName(selectedMaker)}
          </>
        ) : (
          ''
        )}
      </p>

      <div>
        <Input value={vehicleMaker} handleValueChange={handleValueChange} />
        <div className="relative pt-3">
          <div
            className={`z-10 ${isShown ? '' : 'hidden'} w-full absolute p-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-50 dark:bg-gray-700 w-100 border-solid`}
            onMouseLeave={() => setIsShown(false)}
          >
            {sortedVehicles.length > 0 ? (
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 max-h-48  overflow-x-hidden overflow-y-auto">
                {sortedVehicles.map((vehicle) => (
                  <li
                    key={vehicle.MakeId}
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${vehicle.MakeId === selectedMaker ? 'bg-gray-600 text-white' : ''}`}
                    onClick={() => {
                      chooseVehicleMaker(vehicle.MakeId);
                      setIsShown(false);
                    }}
                  >
                    {vehicle.MakeName}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Unfortunately, there are no elements with such name</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
