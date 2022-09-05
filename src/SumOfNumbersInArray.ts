export const sumOfNumbersInArray = (numbers: number[]): number => {
  // Returns sum of numbers in array
  return numbers.reduce((partialSum, a) => partialSum + a, 0);
};
