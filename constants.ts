export const makersURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";
export const getModelsURL = (vehicleMaker: string, year: string) => {
  return `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${vehicleMaker}/modelyear/${year}?format=json`;
}