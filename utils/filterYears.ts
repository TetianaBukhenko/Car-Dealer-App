export const filterYears = (years: number[], query: string) => {
  return years.filter((year) => {
    const normalizedYear = year + '';

    return normalizedYear.includes(query);
  });
};
