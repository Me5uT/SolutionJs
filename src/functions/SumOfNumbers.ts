export const sumOfNumbers = (numbers: number[]): number => {
  // Returns sum of numbers in array
  return numbers.reduce((partialSum, a) => partialSum + a, 0);
};
