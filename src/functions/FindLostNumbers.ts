import { findMax } from './FindMax';
import { findMin } from './FindMin';

export const findLostNumbers = (numbers: number[]): number[] => {
  /**
   *  Returns an array with lost numbers by given numbers
   * @param numbers An array with numbers in it.
   */

  const lostNumbers: number[] = [];

  for (let i = findMin(numbers); i < findMax(numbers); i++) {
    if (!numbers.includes(i)) {
      lostNumbers.push(i);
    }
  }

  return lostNumbers;
};
