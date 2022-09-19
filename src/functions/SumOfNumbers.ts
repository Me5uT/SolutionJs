export const sumOfNumbers = (numbers: number[]): number => {
  /**
   *  Returns sum of numbers in array.
   * @param numbers An array with numbers in it.
   */

  return numbers.reduce((partialSum, a) => partialSum + a, 0);
};
