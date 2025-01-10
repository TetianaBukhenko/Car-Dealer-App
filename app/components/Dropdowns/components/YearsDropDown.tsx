'use client';

import React from "react";
import { useMemo, useState } from 'react';
import { Input } from '../../components/Input';
import { filterYears } from '@/utils/filterYears';
type Props = {
  selectedYear: number;
  chooseYear: (year: number) => void;
};

export const YearsDropDown: React.FC<Props> = ({
  selectedYear,
  chooseYear,
}) => {
  const [yearQuerty, setYearQuerty] = useState('');
  const [isShown, setIsShown] = useState(false);
  const years = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => 2015 + i);
  function handleValueChange(newValue: string) {
    setYearQuerty(newValue);
  }
  const sortedYears = useMemo(() => {
    return filterYears(years, yearQuerty);
  }, [yearQuerty]);
  return (
    <section
      className="flex flex-col gap-2 justify-between"
      onClick={() => setIsShown((prev) => !prev)}
    >
      <p className="">
        {selectedYear ? 'Selected year:' : 'Please select year:'}{' '}
        {selectedYear > 0 && (
          <>
            <br /> {selectedYear}
          </>
        )}
      </p>
      <div>
        <Input value={yearQuerty} handleValueChange={handleValueChange} />
        <div className="relative pt-3">
          <div
            className={`z-10 ${isShown ? '' : 'hidden'} w-full absolute p-2 bg-white divide-y divide-gray-100 rounded-lg  shadow-lg w-50 dark:bg-gray-700 w-100 border-solid `}
            onMouseLeave={() => setIsShown(false)}
          >
            {sortedYears.length > 0 ? (
              <ul className="  py-2 text-sm text-gray-700 dark:text-gray-200  max-h-48 overflow-y-scroll">
                {sortedYears.map((year) => (
                  <li
                    key={year}
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${year === selectedYear ? 'bg-gray-600 text-white' : ''}`}
                    onClick={() => {
                      chooseYear(year);
                      setIsShown(false);
                    }}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Unfortunately there is no such year</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
