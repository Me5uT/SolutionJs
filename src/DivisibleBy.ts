export const divisibleBy = (numbers: number[], divisor: number): number[] => {
  // Returns numbers which are divisible by given number in array
  return numbers.filter((num: number) => num % divisor === 0);
};
