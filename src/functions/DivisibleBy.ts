export const divisibleBy = (numbers: number[], divisor: number): number[] => {
  // Returns an array with divisible numbers by given number
  return numbers.filter((num: number) => num % divisor === 0);
};
