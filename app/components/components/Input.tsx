import React from "react"; 

type Props = {
  value: string;
  handleValueChange: (v: string) => void;
};

export const Input: React.FC<Props> = ({ value, handleValueChange }) => {
  return (
    <div className="flex flex-col gap-3 text-lg">
      <input
        type="text"
        placeholder="Search..."
        autoComplete="off"
        value={value}
        aria-placeholder="Search..."
        id="name"
        onChange={(e) => {
          handleValueChange(e.target.value);
        }}
        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      />
    </div>
  );
};
