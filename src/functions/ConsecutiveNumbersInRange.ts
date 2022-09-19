export const consecutiveNumbersInRange = (
  min: number,
  max: number
): number[] => {
  /**
   * Returns an array with consecutive numbers in given range.
   * @param min A number that will be the minimum.
   * @param max A number that will be the maximum.
   */

  const array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array;
};
