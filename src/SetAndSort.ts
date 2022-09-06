export const setAndSort = (
  arrayOne: number[],
  arrayTwo: number[]
): number[] => {
  // Returns an array of set and sorted given arrays
  const allNumbers: number[] = [...arrayOne, ...arrayTwo];

  return allNumbers
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);
};
