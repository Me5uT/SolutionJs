export const divisibleBy = (numbers: number[], divisor: number): number[] => {
  /**
   * Returns an array with divisible numbers by given number.
   * @param numbers An array with numbers in it.
   * @param divisor A number that will be the divisor.
   */
  return numbers.filter((num: number) => num % divisor === 0);
};
