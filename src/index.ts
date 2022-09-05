export class Solution {
  // Sum of two numbers
  static sumOfTwoNumbers(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  // Sum of numbers in array
  static sumOfNumbersInArray(numbers: number[]): number {
    return numbers.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
  }

  // "symmetric of firstCoordinates to secondCoordinates
  static symmetricPoint(firstCoordinates: [number, number], secondCoordinates: [number, number]): [number, number] {
    return [
      secondCoordinates[0] - firstCoordinates[0] + secondCoordinates[0],
      secondCoordinates[1] - firstCoordinates[1] + secondCoordinates[1],
    ];
  }

  // Find the first non-consecutive number
  static firstNonConsecutive(numbers: number[]): number {
    let result: number = numbers[0] | 0;

    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] + 1 != numbers[i + 1]) {
        result = numbers[i + 1];
        break;
      }
    }

    return result;
  }
}
