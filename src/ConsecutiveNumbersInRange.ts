export const consecutiveNumbersInRange = (
  min: number,
  max: number
): number[] => {
  // Returns an array of all numbers between the input parameters, including
  const array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array;
};
