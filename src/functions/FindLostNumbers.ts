import { findMax } from './FindMax';
import { findMin } from './FindMin';

export const findLostNumbers = (numbers: number[]): number[] => {
  // Returns an array with lost numbers by given numbers
  const lostNumbers: number[] = [];

  for (let i = findMin(numbers); i < findMax(numbers); i++) {
    if (!numbers.includes(i)) {
      lostNumbers.push(i);
    }
  }

  return lostNumbers;
};
