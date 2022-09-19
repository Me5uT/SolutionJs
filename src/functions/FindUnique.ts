export const findUnique = (elements: any[]): any[] => {
  /**
   * Returns an array with unique elements of given array.
   * @param elements An array with any type.
   */

  let uniqueNumbers: any[] = [];

  uniqueNumbers.push(elements[0]);

  for (let firstIndex = 1; firstIndex < elements.length; firstIndex++) {
    let isUnique: boolean = false;

    for (
      let secondIndex = 0;
      secondIndex < uniqueNumbers.length;
      secondIndex++
    ) {
      if (elements[firstIndex] !== uniqueNumbers[secondIndex]) {
        isUnique = true;
      } else {
        isUnique = false;
        break;
      }
    }

    if (isUnique) uniqueNumbers.push(elements[firstIndex]);
  }

  return uniqueNumbers;
};
