export const multiplyOfNumbers = (numbers: number[]): number => {
  // Returns multiply of given numbers
  return numbers.reduce((prev: number, curr: number) => prev * curr);
};
