export const quickSort = (numbers: number[]): number[] => {
  /**
   *  Returns a sorted array with Quick Sort Method.
   * @param numbers An array with numbers in it.
   */

  if (numbers.length === 1) return numbers;

  const pivot: number = numbers[numbers.length - 1];
  let leftArray: number[] = [];
  let rightArray: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < pivot) {
      leftArray.push(numbers[i]);
    } else {
      rightArray.push(numbers[i]);
    }
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot];
  } else {
    return [pivot, ...quickSort(rightArray)];
  }
};
