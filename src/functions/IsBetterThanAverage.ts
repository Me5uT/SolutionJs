export const isBetterThanAverage = (
  otherPoints: number[],
  yourPoint: number
): boolean => {
  /**
   *  Returns true if your point greater than average of otherPoints, otherwise false.
   * @param otherPoints An array with numbers in it.
   * @param yourPoint A number.
   */

  let allPoints: number[] = [...otherPoints, yourPoint];

  const total: number = allPoints.reduce((acc: number, val: number) => {
    return acc + val;
  }, 0);

  const average: number = total / allPoints.length;

  return yourPoint > average;
};
