export const findDifferences = (
  firstArray: any[],
  secondArray: any[]
): [any[], any[], any[]] => {
  /**
   *  Returns an array with [ inJustFirstArray, sameElements, inJustSecondArray ]
   * @param firstArray An array.
   * @param secondArray An array
   */

  let sameElements: any[] = [];
  let inJustFirstArray: any[] = [];
  let inJustSecondArray: any[] = [];

  for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    let isSameNumberFirstFlag: boolean = false;

    for (
      let sencondIndex = 0;
      sencondIndex < secondArray.length;
      sencondIndex++
    ) {
      // if numbers are same
      if (firstArray[firstIndex] === secondArray[sencondIndex]) {
        sameElements.push(firstArray[firstIndex]);
        isSameNumberFirstFlag = true;
        break;
      }
    }

    // if numbers are not same
    if (!isSameNumberFirstFlag) {
      inJustFirstArray.push(firstArray[firstIndex]);
    }
  }

  for (let i = 0; i < secondArray.length; i++) {
    let isSameNumberSecondFlag: boolean = false;

    for (let j = 0; j < firstArray.length; j++) {
      // if numbers are same
      if (firstArray[j] === secondArray[i]) {
        isSameNumberSecondFlag = true;
        break;
      }
    }

    // if numbers are not same
    if (!isSameNumberSecondFlag) {
      inJustSecondArray.push(secondArray[i]);
    }
  }

  return [inJustFirstArray, sameElements, inJustSecondArray];
};
