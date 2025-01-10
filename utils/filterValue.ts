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
