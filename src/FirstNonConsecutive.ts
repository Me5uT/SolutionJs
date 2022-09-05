export const firstNonConsecutive = (arr: number[]): null | number => {
  // Returns first non consecutive number or null
  let result: number | null = null;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      result = arr[i + 1];
      break;
    }
  }

  return result;
};
