export const sortWithShell = (arr: number[]) => {
  // Returns a sorted array with Quick Sort Method
  let length = arr.length;

  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < length; i += 1) {
      let temp = arr[i];

      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];

      arr[j] = temp;
    }
  }
  return arr;
};
