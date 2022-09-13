export const sortWithBubble = (numbers: number[]) => {
  // Returns a sorted array with Bubble Sort Method
  for (let index = 0; index < numbers.length; index++) {
    let alreadySortedFlag: boolean = true;
    for (let secondIndex = 0; secondIndex < numbers.length - 1; secondIndex++) {
      if (numbers[secondIndex] > numbers[secondIndex + 1]) {
        alreadySortedFlag = false;

        const temp = numbers[secondIndex];
        numbers[secondIndex] = numbers[secondIndex + 1];
        numbers[secondIndex + 1] = temp;
      }
    }

    if (alreadySortedFlag) {
      break;
    }
  }

  return numbers;
};
