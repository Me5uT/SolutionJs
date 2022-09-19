const heapify = (arr: number[], length: number, i: number) => {
  let largest = i;
  const left = i * 2 + 1;
  const right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }

  return arr;
};

export const heapSort = (numbers: number[]): number[] => {
  // Returns a sorted array with Heap Sort Method
  const length = numbers.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;

  while (i >= 0) {
    heapify(numbers, length, i);
    i--;
  }

  while (k >= 0) {
    [numbers[0], numbers[k]] = [numbers[k], numbers[0]];
    heapify(numbers, k, 0);
    k--;
  }

  return numbers;
};
