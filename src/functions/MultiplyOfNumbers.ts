export const multiplyOfNumbers = (numbers: number[]): number => {
  /**
   *  Returns multiply of given numbers.
   * @param numbers An array with numbers in it.
   */

  return numbers.reduce((prev: number, curr: number) => prev * curr);
};
