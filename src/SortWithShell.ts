export const sortWithShell = (numbers: number[]): number[] => {
  // Returns a sorted array with Quick Sort Method
  let length = numbers.length;

  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < length; i += 1) {
      let temp = numbers[i];

      let j;

      for (j = i; j >= gap && numbers[j - gap] > temp; j -= gap)
        numbers[j] = numbers[j - gap];

      numbers[j] = temp;
    }
  }
  return numbers;
};
