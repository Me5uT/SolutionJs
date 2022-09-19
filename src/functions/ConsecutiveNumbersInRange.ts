export const consecutiveNumbersInRange = (
  min: number,
  max: number
): number[] => {
  // Returns an array with consecutive numbers in given range
  const array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array;
};
