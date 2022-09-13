export const findUnique = (numbers: any[]): any[] => {
  // Returns an array with unique elements of given array

  let uniqueNumbers: any[] = [];

  uniqueNumbers.push(numbers[0]);

  for (let firstIndex = 1; firstIndex < numbers.length; firstIndex++) {
    let isUnique: boolean = false;

    for (
      let secondIndex = 0;
      secondIndex < uniqueNumbers.length;
      secondIndex++
    ) {
      if (numbers[firstIndex] !== uniqueNumbers[secondIndex]) {
        isUnique = true;
      } else {
        isUnique = false;
        break;
      }
    }

    if (isUnique) uniqueNumbers.push(numbers[firstIndex]);
  }

  return uniqueNumbers;
};
