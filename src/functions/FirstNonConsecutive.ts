export const firstNonConsecutive = (numbers: number[]): null | number => {
  // Returns first non consecutive number or null
  let result: number | null = null;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) {
      result = numbers[i + 1];
      break;
    }
  }

  return result;
};
