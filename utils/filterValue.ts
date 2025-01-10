import { VehicleMaker } from "@/types/VehicleMaker";

export const filterValue = <T>({
  elements,
  key,
  query,
}: {
  elements: T[];
  key: keyof T;
  query: string;
}): T[] => {
  return elements.filter((el) => {
    const normalizedName = el[key] + ''.toLowerCase();
    const normalizedQuery = query.toLowerCase();

    return normalizedName.includes(normalizedQuery);
  });
};


export const filterVehicles = (vehicles: VehicleMaker[], query: string) => {
  return vehicles.filter((el) => {
    const normalizedName = el.MakeName.toLowerCase();
    const normalizedQuery = query.toLowerCase().trim();

    return normalizedName.includes(normalizedQuery);
  });
};

