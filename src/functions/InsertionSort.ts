export const insertionSort = (numbers: number[]): number[] => {
  /**
   *  Returns a sorted array with Insertion Sort Method.
   * @param numbers An array with numbers in it.
   */

  let j;

  for (let i = 1; i < numbers.length; i++) {
    let value = numbers[i];
    j = i - 1;

    while (j >= 0 && numbers[j] > value) {
      numbers[j + 1] = numbers[j];
      j = j - 1;
    }
    numbers[j + 1] = value;
  }

  return numbers;
};
