export const selectionSort = (numbers: number[]): number[] => {
  // Returns a sorted array with Selection Sort Method

  for (let firstIndex = 0; firstIndex < numbers.length; firstIndex++) {
    let lowestNumberIndex = firstIndex;

    for (
      let secondIndex = firstIndex + 1;
      secondIndex < numbers.length;
      secondIndex++
    ) {
      if (numbers[secondIndex] < numbers[lowestNumberIndex]) {
        lowestNumberIndex = secondIndex;
      }
    }

    if (lowestNumberIndex !== firstIndex) {
      let temp = numbers[firstIndex];
      numbers[firstIndex] = numbers[lowestNumberIndex];
      numbers[lowestNumberIndex] = temp;
    }
  }

  return numbers;
};
